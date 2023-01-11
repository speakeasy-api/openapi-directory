package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Pipelines {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Pipelines(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createDeploymentVariable - Create a deployment environment level variable.
    **/
    public openapisdk.models.operations.CreateDeploymentVariableResponse createDeploymentVariable(openapisdk.models.operations.CreateDeploymentVariableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDeploymentVariableResponse res = new openapisdk.models.operations.CreateDeploymentVariableResponse() {{
            deploymentVariable = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.deploymentVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createPipelineForRepository - Endpoint to create and initiate a pipeline.
     * There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
     * # Trigger a Pipeline for a branch
     * One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline.
     * The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.
     * 
     * ### Example
     * 
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *   -d '
     *   {
     *     "target": {
     *       "ref_type": "branch",
     *       "type": "pipeline_ref_target",
     *       "ref_name": "master"
     *     }
     *   }'
     * ```
     * # Trigger a Pipeline for a commit on a branch or tag
     * You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
     * The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.
     * 
     * The following reference types are supported:
     * 
     * * `branch`
     * * `named_branch`
     * * `bookmark`
     *  * `tag`
     * 
     * ### Example
     * 
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *   https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *   -d '
     *   {
     *     "target": {
     *       "commit": {
     *         "type": "commit",
     *         "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956"
     *       },
     *       "ref_type": "branch",
     *       "type": "pipeline_ref_target",
     *       "ref_name": "master"
     *     }
     *   }'
     * ```
     * # Trigger a specific pipeline definition for a commit
     * You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.
     * In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.
     * 
     * ### Example
     * 
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *  -d '
     *   {
     *      "target": {
     *       "commit": {
     *          "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
     *          "type":"commit"
     *        },
     *         "selector": {
     *            "type":"custom",
     *               "pattern":"Deploy to production"
     *           },
     *         "type":"pipeline_commit_target"
     *    }
     *   }'
     * ```
     * # Trigger a specific pipeline definition for a commit on a branch or tag
     * You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.
     * In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.
     * 
     * ### Example
     * 
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *  -d '
     *   {
     *      "target": {
     *       "commit": {
     *          "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
     *          "type":"commit"
     *        },
     *        "selector": {
     *           "type": "custom",
     *           "pattern": "Deploy to production"
     *        },
     *        "type": "pipeline_ref_target",
     *        "ref_name": "master",
     *        "ref_type": "branch"
     *      }
     *   }'
     * ```
     * 
     * 
     * # Trigger a custom pipeline with variables
     * In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).
     * 
     * ### Example
     * 
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
     *  -d '
     *   {
     *     "target": {
     *       "type": "pipeline_ref_target",
     *       "ref_type": "branch",
     *       "ref_name": "master",
     *       "selector": {
     *         "type": "custom",
     *         "pattern": "Deploy to production"
     *       }
     *     },
     *     "variables": [
     *       {
     *         "key": "var1key",
     *         "value": "var1value",
     *         "secured": true
     *       },
     *       {
     *         "key": "var2key",
     *         "value": "var2value"
     *       }
     *     ]
     *   }'
     * ```
     * 
     * # Trigger a pull request pipeline
     * 
     * You can also initiate a pipeline for a specific pull request.
     * 
     * ### Example
     * 
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
     *  -d '
     *   {
     * 	"target": {
     *       "type": "pipeline_pullrequest_target",
     * 	  "source": "pull-request-branch",
     *       "destination": "master",
     *       "destination_commit": {
     *       	 "hash" : "9f848b7"
     *       },
     *       "commit": {
     *       	"hash" : "1a372fc"
     *       },
     *       "pullrequest" : {
     *       	"id" : "3"
     *       },
     * 	  "selector": {
     *         "type": "pull-requests",
     *         "pattern": "**"
     *       }
     *     }
     *   }'
     * ```
     * 
    **/
    public openapisdk.models.operations.CreatePipelineForRepositoryResponse createPipelineForRepository(openapisdk.models.operations.CreatePipelineForRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreatePipelineForRepositoryResponse res = new openapisdk.models.operations.CreatePipelineForRepositoryResponse() {{
            pipeline = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipeline = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createPipelineVariableForTeam - Create an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.CreatePipelineVariableForTeamResponse createPipelineVariableForTeam(openapisdk.models.operations.CreatePipelineVariableForTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/pipelines_config/variables/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreatePipelineVariableForTeamResponse res = new openapisdk.models.operations.CreatePipelineVariableForTeamResponse() {{
            pipelineVariable = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createPipelineVariableForUser - Create a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.CreatePipelineVariableForUserResponse createPipelineVariableForUser(openapisdk.models.operations.CreatePipelineVariableForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/pipelines_config/variables/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreatePipelineVariableForUserResponse res = new openapisdk.models.operations.CreatePipelineVariableForUserResponse() {{
            pipelineVariable = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createPipelineVariableForWorkspace - Create a workspace level variable.
    **/
    public openapisdk.models.operations.CreatePipelineVariableForWorkspaceResponse createPipelineVariableForWorkspace(openapisdk.models.operations.CreatePipelineVariableForWorkspaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/pipelines-config/variables", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreatePipelineVariableForWorkspaceResponse res = new openapisdk.models.operations.CreatePipelineVariableForWorkspaceResponse() {{
            pipelineVariable = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createRepositoryPipelineKnownHost - Create a repository level known host.
    **/
    public openapisdk.models.operations.CreateRepositoryPipelineKnownHostResponse createRepositoryPipelineKnownHost(openapisdk.models.operations.CreateRepositoryPipelineKnownHostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRepositoryPipelineKnownHostResponse res = new openapisdk.models.operations.CreateRepositoryPipelineKnownHostResponse() {{
            pipelineKnownHost = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineKnownHost = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createRepositoryPipelineSchedule - Create a schedule for the given repository.
    **/
    public openapisdk.models.operations.CreateRepositoryPipelineScheduleResponse createRepositoryPipelineSchedule(openapisdk.models.operations.CreateRepositoryPipelineScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRepositoryPipelineScheduleResponse res = new openapisdk.models.operations.CreateRepositoryPipelineScheduleResponse() {{
            pipelineSchedule = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineSchedule = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * createRepositoryPipelineVariable - Create a repository level variable.
    **/
    public openapisdk.models.operations.CreateRepositoryPipelineVariableResponse createRepositoryPipelineVariable(openapisdk.models.operations.CreateRepositoryPipelineVariableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRepositoryPipelineVariableResponse res = new openapisdk.models.operations.CreateRepositoryPipelineVariableResponse() {{
            pipelineVariable = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteDeploymentVariable - Delete a deployment environment level variable.
    **/
    public openapisdk.models.operations.DeleteDeploymentVariableResponse deleteDeploymentVariable(openapisdk.models.operations.DeleteDeploymentVariableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeploymentVariableResponse res = new openapisdk.models.operations.DeleteDeploymentVariableResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deletePipelineVariableForTeam - Delete a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.DeletePipelineVariableForTeamResponse deletePipelineVariableForTeam(openapisdk.models.operations.DeletePipelineVariableForTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeletePipelineVariableForTeamResponse res = new openapisdk.models.operations.DeletePipelineVariableForTeamResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deletePipelineVariableForUser - Delete an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.DeletePipelineVariableForUserResponse deletePipelineVariableForUser(openapisdk.models.operations.DeletePipelineVariableForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeletePipelineVariableForUserResponse res = new openapisdk.models.operations.DeletePipelineVariableForUserResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deletePipelineVariableForWorkspace - Delete a workspace level variable.
    **/
    public openapisdk.models.operations.DeletePipelineVariableForWorkspaceResponse deletePipelineVariableForWorkspace(openapisdk.models.operations.DeletePipelineVariableForWorkspaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeletePipelineVariableForWorkspaceResponse res = new openapisdk.models.operations.DeletePipelineVariableForWorkspaceResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteRepositoryPipelineCache - Delete a repository cache.
    **/
    public openapisdk.models.operations.DeleteRepositoryPipelineCacheResponse deleteRepositoryPipelineCache(openapisdk.models.operations.DeleteRepositoryPipelineCacheRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoryPipelineCacheResponse res = new openapisdk.models.operations.DeleteRepositoryPipelineCacheResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteRepositoryPipelineKeyPair - Delete the repository SSH key pair.
    **/
    public openapisdk.models.operations.DeleteRepositoryPipelineKeyPairResponse deleteRepositoryPipelineKeyPair(openapisdk.models.operations.DeleteRepositoryPipelineKeyPairRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoryPipelineKeyPairResponse res = new openapisdk.models.operations.DeleteRepositoryPipelineKeyPairResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteRepositoryPipelineKnownHost - Delete a repository level known host.
    **/
    public openapisdk.models.operations.DeleteRepositoryPipelineKnownHostResponse deleteRepositoryPipelineKnownHost(openapisdk.models.operations.DeleteRepositoryPipelineKnownHostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoryPipelineKnownHostResponse res = new openapisdk.models.operations.DeleteRepositoryPipelineKnownHostResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteRepositoryPipelineSchedule - Delete a schedule.
    **/
    public openapisdk.models.operations.DeleteRepositoryPipelineScheduleResponse deleteRepositoryPipelineSchedule(openapisdk.models.operations.DeleteRepositoryPipelineScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoryPipelineScheduleResponse res = new openapisdk.models.operations.DeleteRepositoryPipelineScheduleResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteRepositoryPipelineVariable - Delete a repository level variable.
    **/
    public openapisdk.models.operations.DeleteRepositoryPipelineVariableResponse deleteRepositoryPipelineVariable(openapisdk.models.operations.DeleteRepositoryPipelineVariableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoryPipelineVariableResponse res = new openapisdk.models.operations.DeleteRepositoryPipelineVariableResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeploymentVariables - Find deployment environment level variables.
    **/
    public openapisdk.models.operations.GetDeploymentVariablesResponse getDeploymentVariables(openapisdk.models.operations.GetDeploymentVariablesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeploymentVariablesResponse res = new openapisdk.models.operations.GetDeploymentVariablesResponse() {{
            paginatedDeploymentVariable = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedDeploymentVariable out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedDeploymentVariable.class);
                res.paginatedDeploymentVariable = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineForRepository - Retrieve a specified pipeline
    **/
    public openapisdk.models.operations.GetPipelineForRepositoryResponse getPipelineForRepository(openapisdk.models.operations.GetPipelineForRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineForRepositoryResponse res = new openapisdk.models.operations.GetPipelineForRepositoryResponse() {{
            pipeline = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipeline = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineStepForRepository - Retrieve a given step of a pipeline.
    **/
    public openapisdk.models.operations.GetPipelineStepForRepositoryResponse getPipelineStepForRepository(openapisdk.models.operations.GetPipelineStepForRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineStepForRepositoryResponse res = new openapisdk.models.operations.GetPipelineStepForRepositoryResponse() {{
            pipelineStep = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineStep = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineStepLogForRepository - Retrieve the log file for a given step of a pipeline.
     * 
     * This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
    **/
    public openapisdk.models.operations.GetPipelineStepLogForRepositoryResponse getPipelineStepLogForRepository(openapisdk.models.operations.GetPipelineStepLogForRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineStepLogForRepositoryResponse res = new openapisdk.models.operations.GetPipelineStepLogForRepositoryResponse() {{
            body = null;
            body = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 304) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 416) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineStepsForRepository - Find steps for the given pipeline.
    **/
    public openapisdk.models.operations.GetPipelineStepsForRepositoryResponse getPipelineStepsForRepository(openapisdk.models.operations.GetPipelineStepsForRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineStepsForRepositoryResponse res = new openapisdk.models.operations.GetPipelineStepsForRepositoryResponse() {{
            paginatedPipelineSteps = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineSteps out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineSteps.class);
                res.paginatedPipelineSteps = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineVariableForTeam - Retrieve a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.GetPipelineVariableForTeamResponse getPipelineVariableForTeam(openapisdk.models.operations.GetPipelineVariableForTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineVariableForTeamResponse res = new openapisdk.models.operations.GetPipelineVariableForTeamResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineVariableForUser - Retrieve a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.GetPipelineVariableForUserResponse getPipelineVariableForUser(openapisdk.models.operations.GetPipelineVariableForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineVariableForUserResponse res = new openapisdk.models.operations.GetPipelineVariableForUserResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineVariableForWorkspace - Retrieve a workspace level variable.
    **/
    public openapisdk.models.operations.GetPipelineVariableForWorkspaceResponse getPipelineVariableForWorkspace(openapisdk.models.operations.GetPipelineVariableForWorkspaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineVariableForWorkspaceResponse res = new openapisdk.models.operations.GetPipelineVariableForWorkspaceResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineVariablesForTeam - Find account level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.GetPipelineVariablesForTeamResponse getPipelineVariablesForTeam(openapisdk.models.operations.GetPipelineVariablesForTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/pipelines_config/variables/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineVariablesForTeamResponse res = new openapisdk.models.operations.GetPipelineVariablesForTeamResponse() {{
            paginatedPipelineVariables = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineVariables out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineVariables.class);
                res.paginatedPipelineVariables = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineVariablesForUser - Find user level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.GetPipelineVariablesForUserResponse getPipelineVariablesForUser(openapisdk.models.operations.GetPipelineVariablesForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/pipelines_config/variables/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineVariablesForUserResponse res = new openapisdk.models.operations.GetPipelineVariablesForUserResponse() {{
            paginatedPipelineVariables = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineVariables out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineVariables.class);
                res.paginatedPipelineVariables = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelineVariablesForWorkspace - Find workspace level variables.
    **/
    public openapisdk.models.operations.GetPipelineVariablesForWorkspaceResponse getPipelineVariablesForWorkspace(openapisdk.models.operations.GetPipelineVariablesForWorkspaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/pipelines-config/variables", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelineVariablesForWorkspaceResponse res = new openapisdk.models.operations.GetPipelineVariablesForWorkspaceResponse() {{
            paginatedPipelineVariables = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineVariables out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineVariables.class);
                res.paginatedPipelineVariables = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPipelinesForRepository - Find pipelines
    **/
    public openapisdk.models.operations.GetPipelinesForRepositoryResponse getPipelinesForRepository(openapisdk.models.operations.GetPipelinesForRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPipelinesForRepositoryResponse res = new openapisdk.models.operations.GetPipelinesForRepositoryResponse() {{
            paginatedPipelines = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelines out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelines.class);
                res.paginatedPipelines = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineCacheContentUri - Retrieve the URI of the content of the specified cache.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineCacheContentUriResponse getRepositoryPipelineCacheContentUri(openapisdk.models.operations.GetRepositoryPipelineCacheContentUriRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineCacheContentUriResponse res = new openapisdk.models.operations.GetRepositoryPipelineCacheContentUriResponse() {{
            pipelineCacheContentUri = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PipelineCacheContentUri out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PipelineCacheContentUri.class);
                res.pipelineCacheContentUri = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineCaches - Retrieve the repository pipelines caches.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineCachesResponse getRepositoryPipelineCaches(openapisdk.models.operations.GetRepositoryPipelineCachesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineCachesResponse res = new openapisdk.models.operations.GetRepositoryPipelineCachesResponse() {{
            paginatedPipelineCaches = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineCaches out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineCaches.class);
                res.paginatedPipelineCaches = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineConfig - Retrieve the repository pipelines configuration.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineConfigResponse getRepositoryPipelineConfig(openapisdk.models.operations.GetRepositoryPipelineConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineConfigResponse res = new openapisdk.models.operations.GetRepositoryPipelineConfigResponse() {{
            pipelinesConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelinesConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineKnownHost - Retrieve a repository level known host.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineKnownHostResponse getRepositoryPipelineKnownHost(openapisdk.models.operations.GetRepositoryPipelineKnownHostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineKnownHostResponse res = new openapisdk.models.operations.GetRepositoryPipelineKnownHostResponse() {{
            pipelineKnownHost = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineKnownHost = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineKnownHosts - Find repository level known hosts.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineKnownHostsResponse getRepositoryPipelineKnownHosts(openapisdk.models.operations.GetRepositoryPipelineKnownHostsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineKnownHostsResponse res = new openapisdk.models.operations.GetRepositoryPipelineKnownHostsResponse() {{
            paginatedPipelineKnownHosts = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineKnownHosts out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineKnownHosts.class);
                res.paginatedPipelineKnownHosts = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineSchedule - Retrieve a schedule by its UUID.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineScheduleResponse getRepositoryPipelineSchedule(openapisdk.models.operations.GetRepositoryPipelineScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineScheduleResponse res = new openapisdk.models.operations.GetRepositoryPipelineScheduleResponse() {{
            pipelineSchedule = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineSchedule = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineScheduleExecutions - Retrieve the executions of a given schedule.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineScheduleExecutionsResponse getRepositoryPipelineScheduleExecutions(openapisdk.models.operations.GetRepositoryPipelineScheduleExecutionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineScheduleExecutionsResponse res = new openapisdk.models.operations.GetRepositoryPipelineScheduleExecutionsResponse() {{
            paginatedPipelineScheduleExecutions = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineScheduleExecutions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineScheduleExecutions.class);
                res.paginatedPipelineScheduleExecutions = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineSchedules - Retrieve the configured schedules for the given repository.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineSchedulesResponse getRepositoryPipelineSchedules(openapisdk.models.operations.GetRepositoryPipelineSchedulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineSchedulesResponse res = new openapisdk.models.operations.GetRepositoryPipelineSchedulesResponse() {{
            paginatedPipelineSchedules = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineSchedules out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineSchedules.class);
                res.paginatedPipelineSchedules = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineSshKeyPair - Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineSshKeyPairResponse getRepositoryPipelineSshKeyPair(openapisdk.models.operations.GetRepositoryPipelineSshKeyPairRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineSshKeyPairResponse res = new openapisdk.models.operations.GetRepositoryPipelineSshKeyPairResponse() {{
            pipelineSshKeyPair = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineSshKeyPair = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineVariable - Retrieve a repository level variable.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineVariableResponse getRepositoryPipelineVariable(openapisdk.models.operations.GetRepositoryPipelineVariableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineVariableResponse res = new openapisdk.models.operations.GetRepositoryPipelineVariableResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoryPipelineVariables - Find repository level variables.
    **/
    public openapisdk.models.operations.GetRepositoryPipelineVariablesResponse getRepositoryPipelineVariables(openapisdk.models.operations.GetRepositoryPipelineVariablesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoryPipelineVariablesResponse res = new openapisdk.models.operations.GetRepositoryPipelineVariablesResponse() {{
            paginatedPipelineVariables = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPipelineVariables out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPipelineVariables.class);
                res.paginatedPipelineVariables = out;
            }
        }

        return res;
    }
	
	
    /**
     * stopPipeline - Signal the stop of a pipeline and all of its steps that not have completed yet.
    **/
    public openapisdk.models.operations.StopPipelineResponse stopPipeline(openapisdk.models.operations.StopPipelineRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.StopPipelineResponse res = new openapisdk.models.operations.StopPipelineResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeploymentVariable - Update a deployment environment level variable.
    **/
    public openapisdk.models.operations.UpdateDeploymentVariableResponse updateDeploymentVariable(openapisdk.models.operations.UpdateDeploymentVariableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeploymentVariableResponse res = new openapisdk.models.operations.UpdateDeploymentVariableResponse() {{
            deploymentVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.deploymentVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updatePipelineVariableForTeam - Update a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.UpdatePipelineVariableForTeamResponse updatePipelineVariableForTeam(openapisdk.models.operations.UpdatePipelineVariableForTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdatePipelineVariableForTeamResponse res = new openapisdk.models.operations.UpdatePipelineVariableForTeamResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updatePipelineVariableForUser - Update a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    public openapisdk.models.operations.UpdatePipelineVariableForUserResponse updatePipelineVariableForUser(openapisdk.models.operations.UpdatePipelineVariableForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdatePipelineVariableForUserResponse res = new openapisdk.models.operations.UpdatePipelineVariableForUserResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updatePipelineVariableForWorkspace - Update a workspace level variable.
    **/
    public openapisdk.models.operations.UpdatePipelineVariableForWorkspaceResponse updatePipelineVariableForWorkspace(openapisdk.models.operations.UpdatePipelineVariableForWorkspaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdatePipelineVariableForWorkspaceResponse res = new openapisdk.models.operations.UpdatePipelineVariableForWorkspaceResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRepositoryBuildNumber - Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
    **/
    public openapisdk.models.operations.UpdateRepositoryBuildNumberResponse updateRepositoryBuildNumber(openapisdk.models.operations.UpdateRepositoryBuildNumberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/build_number", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRepositoryBuildNumberResponse res = new openapisdk.models.operations.UpdateRepositoryBuildNumberResponse() {{
            pipelineBuildNumber = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineBuildNumber = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRepositoryPipelineConfig - Update the pipelines configuration for a repository.
    **/
    public openapisdk.models.operations.UpdateRepositoryPipelineConfigResponse updateRepositoryPipelineConfig(openapisdk.models.operations.UpdateRepositoryPipelineConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRepositoryPipelineConfigResponse res = new openapisdk.models.operations.UpdateRepositoryPipelineConfigResponse() {{
            pipelinesConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelinesConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRepositoryPipelineKeyPair - Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
    **/
    public openapisdk.models.operations.UpdateRepositoryPipelineKeyPairResponse updateRepositoryPipelineKeyPair(openapisdk.models.operations.UpdateRepositoryPipelineKeyPairRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRepositoryPipelineKeyPairResponse res = new openapisdk.models.operations.UpdateRepositoryPipelineKeyPairResponse() {{
            pipelineSshKeyPair = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineSshKeyPair = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRepositoryPipelineKnownHost - Update a repository level known host.
    **/
    public openapisdk.models.operations.UpdateRepositoryPipelineKnownHostResponse updateRepositoryPipelineKnownHost(openapisdk.models.operations.UpdateRepositoryPipelineKnownHostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRepositoryPipelineKnownHostResponse res = new openapisdk.models.operations.UpdateRepositoryPipelineKnownHostResponse() {{
            pipelineKnownHost = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineKnownHost = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRepositoryPipelineSchedule - Update a schedule.
    **/
    public openapisdk.models.operations.UpdateRepositoryPipelineScheduleResponse updateRepositoryPipelineSchedule(openapisdk.models.operations.UpdateRepositoryPipelineScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRepositoryPipelineScheduleResponse res = new openapisdk.models.operations.UpdateRepositoryPipelineScheduleResponse() {{
            pipelineSchedule = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineSchedule = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRepositoryPipelineVariable - Update a repository level variable.
    **/
    public openapisdk.models.operations.UpdateRepositoryPipelineVariableResponse updateRepositoryPipelineVariable(openapisdk.models.operations.UpdateRepositoryPipelineVariableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRepositoryPipelineVariableResponse res = new openapisdk.models.operations.UpdateRepositoryPipelineVariableResponse() {{
            pipelineVariable = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pipelineVariable = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
}