import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pipelines {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDeploymentVariable - Create a deployment environment level variable.
    **/
    createDeploymentVariable(req: operations.CreateDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentVariableResponse>;
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
    createPipelineForRepository(req: operations.CreatePipelineForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineForRepositoryResponse>;
    /**
     * createPipelineVariableForTeam - Create an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    createPipelineVariableForTeam(req: operations.CreatePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForTeamResponse>;
    /**
     * createPipelineVariableForUser - Create a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    createPipelineVariableForUser(req: operations.CreatePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForUserResponse>;
    /**
     * createPipelineVariableForWorkspace - Create a workspace level variable.
    **/
    createPipelineVariableForWorkspace(req: operations.CreatePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForWorkspaceResponse>;
    /**
     * createRepositoryPipelineKnownHost - Create a repository level known host.
    **/
    createRepositoryPipelineKnownHost(req: operations.CreateRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineKnownHostResponse>;
    /**
     * createRepositoryPipelineSchedule - Create a schedule for the given repository.
    **/
    createRepositoryPipelineSchedule(req: operations.CreateRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineScheduleResponse>;
    /**
     * createRepositoryPipelineVariable - Create a repository level variable.
    **/
    createRepositoryPipelineVariable(req: operations.CreateRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineVariableResponse>;
    /**
     * deleteDeploymentVariable - Delete a deployment environment level variable.
    **/
    deleteDeploymentVariable(req: operations.DeleteDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentVariableResponse>;
    /**
     * deletePipelineVariableForTeam - Delete a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    deletePipelineVariableForTeam(req: operations.DeletePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForTeamResponse>;
    /**
     * deletePipelineVariableForUser - Delete an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    deletePipelineVariableForUser(req: operations.DeletePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForUserResponse>;
    /**
     * deletePipelineVariableForWorkspace - Delete a workspace level variable.
    **/
    deletePipelineVariableForWorkspace(req: operations.DeletePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForWorkspaceResponse>;
    /**
     * deleteRepositoryPipelineCache - Delete a repository cache.
    **/
    deleteRepositoryPipelineCache(req: operations.DeleteRepositoryPipelineCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineCacheResponse>;
    /**
     * deleteRepositoryPipelineKeyPair - Delete the repository SSH key pair.
    **/
    deleteRepositoryPipelineKeyPair(req: operations.DeleteRepositoryPipelineKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineKeyPairResponse>;
    /**
     * deleteRepositoryPipelineKnownHost - Delete a repository level known host.
    **/
    deleteRepositoryPipelineKnownHost(req: operations.DeleteRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineKnownHostResponse>;
    /**
     * deleteRepositoryPipelineSchedule - Delete a schedule.
    **/
    deleteRepositoryPipelineSchedule(req: operations.DeleteRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineScheduleResponse>;
    /**
     * deleteRepositoryPipelineVariable - Delete a repository level variable.
    **/
    deleteRepositoryPipelineVariable(req: operations.DeleteRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineVariableResponse>;
    /**
     * getDeploymentVariables - Find deployment environment level variables.
    **/
    getDeploymentVariables(req: operations.GetDeploymentVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentVariablesResponse>;
    /**
     * getPipelineForRepository - Retrieve a specified pipeline
    **/
    getPipelineForRepository(req: operations.GetPipelineForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineForRepositoryResponse>;
    /**
     * getPipelineStepForRepository - Retrieve a given step of a pipeline.
    **/
    getPipelineStepForRepository(req: operations.GetPipelineStepForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepForRepositoryResponse>;
    /**
     * getPipelineStepLogForRepository - Retrieve the log file for a given step of a pipeline.
     *
     * This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
    **/
    getPipelineStepLogForRepository(req: operations.GetPipelineStepLogForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepLogForRepositoryResponse>;
    /**
     * getPipelineStepsForRepository - Find steps for the given pipeline.
    **/
    getPipelineStepsForRepository(req: operations.GetPipelineStepsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepsForRepositoryResponse>;
    /**
     * getPipelineVariableForTeam - Retrieve a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariableForTeam(req: operations.GetPipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForTeamResponse>;
    /**
     * getPipelineVariableForUser - Retrieve a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariableForUser(req: operations.GetPipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForUserResponse>;
    /**
     * getPipelineVariableForWorkspace - Retrieve a workspace level variable.
    **/
    getPipelineVariableForWorkspace(req: operations.GetPipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForWorkspaceResponse>;
    /**
     * getPipelineVariablesForTeam - Find account level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariablesForTeam(req: operations.GetPipelineVariablesForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForTeamResponse>;
    /**
     * getPipelineVariablesForUser - Find user level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariablesForUser(req: operations.GetPipelineVariablesForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForUserResponse>;
    /**
     * getPipelineVariablesForWorkspace - Find workspace level variables.
    **/
    getPipelineVariablesForWorkspace(req: operations.GetPipelineVariablesForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForWorkspaceResponse>;
    /**
     * getPipelinesForRepository - Find pipelines
    **/
    getPipelinesForRepository(req: operations.GetPipelinesForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelinesForRepositoryResponse>;
    /**
     * getRepositoryPipelineCacheContentUri - Retrieve the URI of the content of the specified cache.
    **/
    getRepositoryPipelineCacheContentUri(req: operations.GetRepositoryPipelineCacheContentUriRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineCacheContentUriResponse>;
    /**
     * getRepositoryPipelineCaches - Retrieve the repository pipelines caches.
    **/
    getRepositoryPipelineCaches(req: operations.GetRepositoryPipelineCachesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineCachesResponse>;
    /**
     * getRepositoryPipelineConfig - Retrieve the repository pipelines configuration.
    **/
    getRepositoryPipelineConfig(req: operations.GetRepositoryPipelineConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineConfigResponse>;
    /**
     * getRepositoryPipelineKnownHost - Retrieve a repository level known host.
    **/
    getRepositoryPipelineKnownHost(req: operations.GetRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineKnownHostResponse>;
    /**
     * getRepositoryPipelineKnownHosts - Find repository level known hosts.
    **/
    getRepositoryPipelineKnownHosts(req: operations.GetRepositoryPipelineKnownHostsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineKnownHostsResponse>;
    /**
     * getRepositoryPipelineSchedule - Retrieve a schedule by its UUID.
    **/
    getRepositoryPipelineSchedule(req: operations.GetRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineScheduleResponse>;
    /**
     * getRepositoryPipelineScheduleExecutions - Retrieve the executions of a given schedule.
    **/
    getRepositoryPipelineScheduleExecutions(req: operations.GetRepositoryPipelineScheduleExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineScheduleExecutionsResponse>;
    /**
     * getRepositoryPipelineSchedules - Retrieve the configured schedules for the given repository.
    **/
    getRepositoryPipelineSchedules(req: operations.GetRepositoryPipelineSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineSchedulesResponse>;
    /**
     * getRepositoryPipelineSshKeyPair - Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
    **/
    getRepositoryPipelineSshKeyPair(req: operations.GetRepositoryPipelineSshKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineSshKeyPairResponse>;
    /**
     * getRepositoryPipelineVariable - Retrieve a repository level variable.
    **/
    getRepositoryPipelineVariable(req: operations.GetRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineVariableResponse>;
    /**
     * getRepositoryPipelineVariables - Find repository level variables.
    **/
    getRepositoryPipelineVariables(req: operations.GetRepositoryPipelineVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineVariablesResponse>;
    /**
     * stopPipeline - Signal the stop of a pipeline and all of its steps that not have completed yet.
    **/
    stopPipeline(req: operations.StopPipelineRequest, config?: AxiosRequestConfig): Promise<operations.StopPipelineResponse>;
    /**
     * updateDeploymentVariable - Update a deployment environment level variable.
    **/
    updateDeploymentVariable(req: operations.UpdateDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentVariableResponse>;
    /**
     * updatePipelineVariableForTeam - Update a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    updatePipelineVariableForTeam(req: operations.UpdatePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForTeamResponse>;
    /**
     * updatePipelineVariableForUser - Update a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    updatePipelineVariableForUser(req: operations.UpdatePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForUserResponse>;
    /**
     * updatePipelineVariableForWorkspace - Update a workspace level variable.
    **/
    updatePipelineVariableForWorkspace(req: operations.UpdatePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForWorkspaceResponse>;
    /**
     * updateRepositoryBuildNumber - Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
    **/
    updateRepositoryBuildNumber(req: operations.UpdateRepositoryBuildNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryBuildNumberResponse>;
    /**
     * updateRepositoryPipelineConfig - Update the pipelines configuration for a repository.
    **/
    updateRepositoryPipelineConfig(req: operations.UpdateRepositoryPipelineConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineConfigResponse>;
    /**
     * updateRepositoryPipelineKeyPair - Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
    **/
    updateRepositoryPipelineKeyPair(req: operations.UpdateRepositoryPipelineKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineKeyPairResponse>;
    /**
     * updateRepositoryPipelineKnownHost - Update a repository level known host.
    **/
    updateRepositoryPipelineKnownHost(req: operations.UpdateRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineKnownHostResponse>;
    /**
     * updateRepositoryPipelineSchedule - Update a schedule.
    **/
    updateRepositoryPipelineSchedule(req: operations.UpdateRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineScheduleResponse>;
    /**
     * updateRepositoryPipelineVariable - Update a repository level variable.
    **/
    updateRepositoryPipelineVariable(req: operations.UpdateRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineVariableResponse>;
}
