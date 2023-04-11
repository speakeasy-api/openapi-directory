import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Bitbucket Pipelines brings continuous delivery to Bitbucket
 *
 * @remarks
 * Cloud, empowering teams with full branching to deployment
 * visibility and faster feedback loops.
 *
 */
export declare class Pipelines {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a variable for an environment
     *
     * @remarks
     * Create a deployment environment level variable.
     */
    createDeploymentVariable(req: operations.CreateDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentVariableResponse>;
    /**
     * Run a pipeline
     *
     * @remarks
     * Endpoint to create and initiate a pipeline.
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
     */
    createPipelineForRepository(req: operations.CreatePipelineForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineForRepositoryResponse>;
    /**
     * Create a variable for a user
     *
     * @remarks
     * Create an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    createPipelineVariableForTeam(req: operations.CreatePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForTeamResponse>;
    /**
     * Create a variable for a user
     *
     * @remarks
     * Create a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    createPipelineVariableForUser(req: operations.CreatePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForUserResponse>;
    /**
     * Create a variable for a workspace
     *
     * @remarks
     * Create a workspace level variable.
     */
    createPipelineVariableForWorkspace(req: operations.CreatePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForWorkspaceResponse>;
    /**
     * Create a known host
     *
     * @remarks
     * Create a repository level known host.
     */
    createRepositoryPipelineKnownHost(req: operations.CreateRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineKnownHostResponse>;
    /**
     * Create a schedule
     *
     * @remarks
     * Create a schedule for the given repository.
     */
    createRepositoryPipelineSchedule(req: operations.CreateRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineScheduleResponse>;
    /**
     * Create a variable for a repository
     *
     * @remarks
     * Create a repository level variable.
     */
    createRepositoryPipelineVariable(req: operations.CreateRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineVariableResponse>;
    /**
     * Delete a variable for an environment
     *
     * @remarks
     * Delete a deployment environment level variable.
     */
    deleteDeploymentVariable(req: operations.DeleteDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentVariableResponse>;
    /**
     * Delete a variable for a team
     *
     * @remarks
     * Delete a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    deletePipelineVariableForTeam(req: operations.DeletePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForTeamResponse>;
    /**
     * Delete a variable for a user
     *
     * @remarks
     * Delete an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    deletePipelineVariableForUser(req: operations.DeletePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForUserResponse>;
    /**
     * Delete a variable for a workspace
     *
     * @remarks
     * Delete a workspace level variable.
     */
    deletePipelineVariableForWorkspace(req: operations.DeletePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForWorkspaceResponse>;
    /**
     * Delete a cache
     *
     * @remarks
     * Delete a repository cache.
     */
    deleteRepositoryPipelineCache(req: operations.DeleteRepositoryPipelineCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineCacheResponse>;
    /**
     * Delete caches
     *
     * @remarks
     * Delete repository cache versions by name.
     */
    deleteRepositoryPipelineCaches(req: operations.DeleteRepositoryPipelineCachesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineCachesResponse>;
    /**
     * Delete SSH key pair
     *
     * @remarks
     * Delete the repository SSH key pair.
     */
    deleteRepositoryPipelineKeyPair(req: operations.DeleteRepositoryPipelineKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineKeyPairResponse>;
    /**
     * Delete a known host
     *
     * @remarks
     * Delete a repository level known host.
     */
    deleteRepositoryPipelineKnownHost(req: operations.DeleteRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineKnownHostResponse>;
    /**
     * Delete a schedule
     *
     * @remarks
     * Delete a schedule.
     */
    deleteRepositoryPipelineSchedule(req: operations.DeleteRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineScheduleResponse>;
    /**
     * Delete a variable for a repository
     *
     * @remarks
     * Delete a repository level variable.
     */
    deleteRepositoryPipelineVariable(req: operations.DeleteRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineVariableResponse>;
    /**
     * List variables for an environment
     *
     * @remarks
     * Find deployment environment level variables.
     */
    getDeploymentVariables(req: operations.GetDeploymentVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentVariablesResponse>;
    /**
     * Get OpenID configuration for OIDC in Pipelines
     *
     * @remarks
     * This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
     */
    getOIDCConfiguration(req: operations.GetOIDCConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetOIDCConfigurationResponse>;
    /**
     * Get keys for OIDC in Pipelines
     *
     * @remarks
     * This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
     */
    getOIDCKeys(req: operations.GetOIDCKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetOIDCKeysResponse>;
    /**
     * Get the logs for the build container or a service container for a given step of a pipeline.
     *
     * @remarks
     * Retrieve the log file for a build container or service container.
     *
     * This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
     */
    getPipelineContainerLog(req: operations.GetPipelineContainerLogRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineContainerLogResponse>;
    /**
     * Get a pipeline
     *
     * @remarks
     * Retrieve a specified pipeline
     */
    getPipelineForRepository(req: operations.GetPipelineForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineForRepositoryResponse>;
    /**
     * Get a step of a pipeline
     *
     * @remarks
     * Retrieve a given step of a pipeline.
     */
    getPipelineStepForRepository(req: operations.GetPipelineStepForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepForRepositoryResponse>;
    /**
     * Get log file for a step
     *
     * @remarks
     * Retrieve the log file for a given step of a pipeline.
     *
     * This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
     */
    getPipelineStepLogForRepository(req: operations.GetPipelineStepLogForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepLogForRepositoryResponse>;
    /**
     * List steps for a pipeline
     *
     * @remarks
     * Find steps for the given pipeline.
     */
    getPipelineStepsForRepository(req: operations.GetPipelineStepsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepsForRepositoryResponse>;
    /**
     * Get test case reasons (output) for a given test case in a step of a pipeline.
     */
    getPipelineTestReportTestCaseReasons(req: operations.GetPipelineTestReportTestCaseReasonsRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineTestReportTestCaseReasonsResponse>;
    /**
     * Get test cases for a given step of a pipeline.
     */
    getPipelineTestReportTestCases(req: operations.GetPipelineTestReportTestCasesRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineTestReportTestCasesResponse>;
    /**
     * Get a summary of test reports for a given step of a pipeline.
     */
    getPipelineTestReports(req: operations.GetPipelineTestReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineTestReportsResponse>;
    /**
     * Get a variable for a team
     *
     * @remarks
     * Retrieve a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    getPipelineVariableForTeam(req: operations.GetPipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForTeamResponse>;
    /**
     * Get a variable for a user
     *
     * @remarks
     * Retrieve a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    getPipelineVariableForUser(req: operations.GetPipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForUserResponse>;
    /**
     * Get variable for a workspace
     *
     * @remarks
     * Retrieve a workspace level variable.
     */
    getPipelineVariableForWorkspace(req: operations.GetPipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForWorkspaceResponse>;
    /**
     * List variables for an account
     *
     * @remarks
     * Find account level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    getPipelineVariablesForTeam(req: operations.GetPipelineVariablesForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForTeamResponse>;
    /**
     * List variables for a user
     *
     * @remarks
     * Find user level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    getPipelineVariablesForUser(req: operations.GetPipelineVariablesForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForUserResponse>;
    /**
     * List variables for a workspace
     *
     * @remarks
     * Find workspace level variables.
     */
    getPipelineVariablesForWorkspace(req: operations.GetPipelineVariablesForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForWorkspaceResponse>;
    /**
     * List pipelines
     *
     * @remarks
     * Find pipelines
     */
    getPipelinesForRepository(req: operations.GetPipelinesForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelinesForRepositoryResponse>;
    /**
     * Get cache content URI
     *
     * @remarks
     * Retrieve the URI of the content of the specified cache.
     */
    getRepositoryPipelineCacheContentURI(req: operations.GetRepositoryPipelineCacheContentURIRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineCacheContentURIResponse>;
    /**
     * List caches
     *
     * @remarks
     * Retrieve the repository pipelines caches.
     */
    getRepositoryPipelineCaches(req: operations.GetRepositoryPipelineCachesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineCachesResponse>;
    /**
     * Get configuration
     *
     * @remarks
     * Retrieve the repository pipelines configuration.
     */
    getRepositoryPipelineConfig(req: operations.GetRepositoryPipelineConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineConfigResponse>;
    /**
     * Get a known host
     *
     * @remarks
     * Retrieve a repository level known host.
     */
    getRepositoryPipelineKnownHost(req: operations.GetRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineKnownHostResponse>;
    /**
     * List known hosts
     *
     * @remarks
     * Find repository level known hosts.
     */
    getRepositoryPipelineKnownHosts(req: operations.GetRepositoryPipelineKnownHostsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineKnownHostsResponse>;
    /**
     * Get a schedule
     *
     * @remarks
     * Retrieve a schedule by its UUID.
     */
    getRepositoryPipelineSchedule(req: operations.GetRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineScheduleResponse>;
    /**
     * List executions of a schedule
     *
     * @remarks
     * Retrieve the executions of a given schedule.
     */
    getRepositoryPipelineScheduleExecutions(req: operations.GetRepositoryPipelineScheduleExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineScheduleExecutionsResponse>;
    /**
     * List schedules
     *
     * @remarks
     * Retrieve the configured schedules for the given repository.
     */
    getRepositoryPipelineSchedules(req: operations.GetRepositoryPipelineSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineSchedulesResponse>;
    /**
     * Get SSH key pair
     *
     * @remarks
     * Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
     */
    getRepositoryPipelineSshKeyPair(req: operations.GetRepositoryPipelineSshKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineSshKeyPairResponse>;
    /**
     * Get a variable for a repository
     *
     * @remarks
     * Retrieve a repository level variable.
     */
    getRepositoryPipelineVariable(req: operations.GetRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineVariableResponse>;
    /**
     * List variables for a repository
     *
     * @remarks
     * Find repository level variables.
     */
    getRepositoryPipelineVariables(req: operations.GetRepositoryPipelineVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineVariablesResponse>;
    /**
     * Stop a pipeline
     *
     * @remarks
     * Signal the stop of a pipeline and all of its steps that not have completed yet.
     */
    stopPipeline(req: operations.StopPipelineRequest, config?: AxiosRequestConfig): Promise<operations.StopPipelineResponse>;
    /**
     * Update a variable for an environment
     *
     * @remarks
     * Update a deployment environment level variable.
     */
    updateDeploymentVariable(req: operations.UpdateDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentVariableResponse>;
    /**
     * Update a variable for a team
     *
     * @remarks
     * Update a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    updatePipelineVariableForTeam(req: operations.UpdatePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForTeamResponse>;
    /**
     * Update a variable for a user
     *
     * @remarks
     * Update a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     */
    updatePipelineVariableForUser(req: operations.UpdatePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForUserResponse>;
    /**
     * Update variable for a workspace
     *
     * @remarks
     * Update a workspace level variable.
     */
    updatePipelineVariableForWorkspace(req: operations.UpdatePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForWorkspaceResponse>;
    /**
     * Update the next build number
     *
     * @remarks
     * Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
     */
    updateRepositoryBuildNumber(req: operations.UpdateRepositoryBuildNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryBuildNumberResponse>;
    /**
     * Update configuration
     *
     * @remarks
     * Update the pipelines configuration for a repository.
     */
    updateRepositoryPipelineConfig(req: operations.UpdateRepositoryPipelineConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineConfigResponse>;
    /**
     * Update SSH key pair
     *
     * @remarks
     * Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
     */
    updateRepositoryPipelineKeyPair(req: operations.UpdateRepositoryPipelineKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineKeyPairResponse>;
    /**
     * Update a known host
     *
     * @remarks
     * Update a repository level known host.
     */
    updateRepositoryPipelineKnownHost(req: operations.UpdateRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineKnownHostResponse>;
    /**
     * Update a schedule
     *
     * @remarks
     * Update a schedule.
     */
    updateRepositoryPipelineSchedule(req: operations.UpdateRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineScheduleResponse>;
    /**
     * Update a variable for a repository
     *
     * @remarks
     * Update a repository level variable.
     */
    updateRepositoryPipelineVariable(req: operations.UpdateRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineVariableResponse>;
}
