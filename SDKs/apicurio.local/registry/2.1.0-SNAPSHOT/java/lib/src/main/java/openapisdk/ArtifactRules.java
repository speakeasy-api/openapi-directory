package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class ArtifactRules {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ArtifactRules(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createArtifactRule - Create artifact rule
     *
     * Adds a rule to the list of rules that get applied to the artifact when adding new
     * versions.  All configured rules must pass to successfully add a new artifact version.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * Rule (named in the request body) is unknown (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
    **/
    public openapisdk.models.operations.CreateArtifactRuleResponse createArtifactRule(openapisdk.models.operations.CreateArtifactRuleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/groups/{groupId}/artifacts/{artifactId}/rules", request.pathParams);
        
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

        openapisdk.models.operations.CreateArtifactRuleResponse res = new openapisdk.models.operations.CreateArtifactRuleResponse() {{
            error = null;
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
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteArtifactRule - Delete artifact rule
     *
     * Deletes a rule from the artifact.  This results in the rule no longer applying for
     * this artifact.  If this is the only rule configured for the artifact, this is the 
     * same as deleting **all** rules, and the globally configured rules now apply to
     * this artifact.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No rule with this name/type is configured for this artifact (HTTP error `404`)
     * * Invalid rule type (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
    **/
    public openapisdk.models.operations.DeleteArtifactRuleResponse deleteArtifactRule(openapisdk.models.operations.DeleteArtifactRuleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/groups/{groupId}/artifacts/{artifactId}/rules/{rule}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteArtifactRuleResponse res = new openapisdk.models.operations.DeleteArtifactRuleResponse() {{
            error = null;
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
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteArtifactRules - Delete artifact rules
     *
     * Deletes all of the rules configured for the artifact.  After this is done, the global
     * rules apply to the artifact again.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    public openapisdk.models.operations.DeleteArtifactRulesResponse deleteArtifactRules(openapisdk.models.operations.DeleteArtifactRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/groups/{groupId}/artifacts/{artifactId}/rules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteArtifactRulesResponse res = new openapisdk.models.operations.DeleteArtifactRulesResponse() {{
            error = null;
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
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getArtifactRuleConfig - Get artifact rule configuration
     *
     * Returns information about a single rule configured for an artifact.  This is useful
     * when you want to know what the current configuration settings are for a specific rule.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No rule with this name/type is configured for this artifact (HTTP error `404`)
     * * Invalid rule type (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
    **/
    public openapisdk.models.operations.GetArtifactRuleConfigResponse getArtifactRuleConfig(openapisdk.models.operations.GetArtifactRuleConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/groups/{groupId}/artifacts/{artifactId}/rules/{rule}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetArtifactRuleConfigResponse res = new openapisdk.models.operations.GetArtifactRuleConfigResponse() {{
            rule = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Rule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Rule.class);
                res.rule = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * listArtifactRules - List artifact rules
     *
     * Returns a list of all rules configured for the artifact.  The set of rules determines
     * how the content of an artifact can evolve over time.  If no rules are configured for
     * an artifact, the set of globally configured rules are used.  If no global rules 
     * are defined, there are no restrictions on content evolution.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
    **/
    public openapisdk.models.operations.ListArtifactRulesResponse listArtifactRules(openapisdk.models.operations.ListArtifactRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/groups/{groupId}/artifacts/{artifactId}/rules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListArtifactRulesResponse res = new openapisdk.models.operations.ListArtifactRulesResponse() {{
            ruleTypes = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RuleTypeEnum[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RuleTypeEnum[].class);
                res.ruleTypes = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * testUpdateArtifact - Test update artifact
     *
     * Tests whether an update to the artifact's content *would* succeed for the provided content.
     * Ultimately, this applies any rules configured for the artifact against the given content
     * to determine whether the rules would pass or fail, but without actually updating the artifact
     * content.
     * 
     * The body of the request should be the raw content of the artifact.  This is typically in 
     * JSON format for *most* of the supported types, but may be in another format for a few 
     * (for example, `PROTOBUF`).
     * 
     * The update could fail for a number of reasons including:
     * 
     * * Provided content (request body) was empty (HTTP error `400`)
     * * No artifact with the `artifactId` exists (HTTP error `404`)
     * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
     * * The provided artifact type is not recognized (HTTP error `404`)
     * * A server error occurred (HTTP error `500`)
     * 
     * When successful, this operation simply returns a *No Content* response.  This response
     * indicates that the content is valid against the configured content rules for the 
     * artifact (or the global rules if no artifact rules are enabled).
    **/
    public openapisdk.models.operations.TestUpdateArtifactResponse testUpdateArtifact(openapisdk.models.operations.TestUpdateArtifactRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/groups/{groupId}/artifacts/{artifactId}/test", request.pathParams);
        
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

        openapisdk.models.operations.TestUpdateArtifactResponse res = new openapisdk.models.operations.TestUpdateArtifactResponse() {{
            error = null;
            ruleViolationError = null;
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
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RuleViolationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RuleViolationError.class);
                res.ruleViolationError = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateArtifactRuleConfig - Update artifact rule configuration
     *
     * Updates the configuration of a single rule for the artifact.  The configuration data
     * is specific to each rule type, so the configuration of the `COMPATIBILITY` rule 
     * is in a different format from the configuration of the `VALIDITY` rule.
     * 
     * This operation can fail for the following reasons:
     * 
     * * No artifact with this `artifactId` exists (HTTP error `404`)
     * * No rule with this name/type is configured for this artifact (HTTP error `404`)
     * * Invalid rule type (HTTP error `400`)
     * * A server error occurred (HTTP error `500`)
     * 
    **/
    public openapisdk.models.operations.UpdateArtifactRuleConfigResponse updateArtifactRuleConfig(openapisdk.models.operations.UpdateArtifactRuleConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/groups/{groupId}/artifacts/{artifactId}/rules/{rule}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateArtifactRuleConfigResponse res = new openapisdk.models.operations.UpdateArtifactRuleConfigResponse() {{
            rule = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Rule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Rule.class);
                res.rule = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
}