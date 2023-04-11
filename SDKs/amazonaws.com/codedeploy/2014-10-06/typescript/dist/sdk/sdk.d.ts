import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://codedeploy.{region}.amazonaws.com", "https://codedeploy.{region}.amazonaws.com", "http://codedeploy.{region}.amazonaws.com.cn", "https://codedeploy.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances running in your own facility, serverless Lambda functions, or applications in an Amazon ECS service.</p> <p>You can deploy a nearly unlimited variety of application content, such as an updated Lambda function, updated applications in an Amazon ECS service, code, web and configuration files, executables, packages, scripts, multimedia files, and so on. CodeDeploy can deploy application content stored in Amazon S3 buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes to your existing code before you can use CodeDeploy.</p> <p>CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications, without many of the risks associated with error-prone manual deployments.</p> <p> <b>CodeDeploy Components</b> </p> <p>Use the information in this guide to help you work with the following CodeDeploy components:</p> <ul> <li> <p> <b>Application</b>: A name that uniquely identifies the application you want to deploy. CodeDeploy uses this name, which functions as a container, to ensure the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment.</p> </li> <li> <p> <b>Deployment group</b>: A set of individual instances, CodeDeploy Lambda deployment configuration settings, or an Amazon ECS service and network details. A Lambda deployment group specifies how to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All deployment groups can specify optional trigger, alarm, and rollback settings.</p> </li> <li> <p> <b>Deployment configuration</b>: A set of deployment rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p> </li> <li> <p> <b>Deployment</b>: The process and the components used when updating a Lambda function, a containerized application in an Amazon ECS service, or of installing content on one or more instances. </p> </li> <li> <p> <b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the Lambda function to be updated and one or more functions to validate deployment lifecycle events. For an Amazon ECS deployment, this is an AppSpec file that specifies the Amazon ECS task definition, container, and port where production traffic is rerouted. For an EC2/On-premises deployment, this is an archive file that contains source content—source code, webpages, executable files, and deployment scripts—along with an AppSpec file. Revisions are stored in Amazon S3 buckets or GitHub repositories. For Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID.</p> </li> </ul> <p>This guide also contains information to help you get details about the instances in your deployments, to make on-premises instances available for CodeDeploy deployments, to get details about a Lambda function deployment, and to get details about Amazon ECS service deployments.</p> <p> <b>CodeDeploy Information Resources</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a> </p> </li> <li> <p> <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a> </p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/codedeploy/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Adds tags to on-premises instances.
     */
    addTagsToOnPremisesInstances(req: operations.AddTagsToOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.AddTagsToOnPremisesInstancesResponse>;
    /**
     * Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
     */
    batchGetApplicationRevisions(req: operations.BatchGetApplicationRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetApplicationRevisionsResponse>;
    /**
     * Gets information about one or more applications. The maximum number of applications that can be returned is 100.
     */
    batchGetApplications(req: operations.BatchGetApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetApplicationsResponse>;
    /**
     * Gets information about one or more deployment groups.
     */
    batchGetDeploymentGroups(req: operations.BatchGetDeploymentGroupsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentGroupsResponse>;
    /**
     * <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
     */
    batchGetDeploymentInstances(req: operations.BatchGetDeploymentInstancesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentInstancesResponse>;
    /**
     * <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
     */
    batchGetDeploymentTargets(req: operations.BatchGetDeploymentTargetsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentTargetsResponse>;
    /**
     * Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
     */
    batchGetDeployments(req: operations.BatchGetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentsResponse>;
    /**
     * Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
     */
    batchGetOnPremisesInstances(req: operations.BatchGetOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetOnPremisesInstancesResponse>;
    /**
     * For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.)
     */
    continueDeployment(req: operations.ContinueDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ContinueDeploymentResponse>;
    /**
     * Creates an application.
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Deploys an application revision through the specified deployment group.
     */
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     *  Creates a deployment configuration.
     */
    createDeploymentConfig(req: operations.CreateDeploymentConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentConfigResponse>;
    /**
     * Creates a deployment group to which application revisions are deployed.
     */
    createDeploymentGroup(req: operations.CreateDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentGroupResponse>;
    /**
     * Deletes an application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
     */
    deleteDeploymentConfig(req: operations.DeleteDeploymentConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentConfigResponse>;
    /**
     * Deletes a deployment group.
     */
    deleteDeploymentGroup(req: operations.DeleteDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentGroupResponse>;
    /**
     * Deletes a GitHub account connection.
     */
    deleteGitHubAccountToken(req: operations.DeleteGitHubAccountTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGitHubAccountTokenResponse>;
    /**
     * Deletes resources linked to an external ID.
     */
    deleteResourcesByExternalId(req: operations.DeleteResourcesByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcesByExternalIdResponse>;
    /**
     * Deregisters an on-premises instance.
     */
    deregisterOnPremisesInstance(req: operations.DeregisterOnPremisesInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterOnPremisesInstanceResponse>;
    /**
     * Gets information about an application.
     */
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * Gets information about an application revision.
     */
    getApplicationRevision(req: operations.GetApplicationRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationRevisionResponse>;
    /**
     * <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
     */
    getDeployment(req: operations.GetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentResponse>;
    /**
     * Gets information about a deployment configuration.
     */
    getDeploymentConfig(req: operations.GetDeploymentConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentConfigResponse>;
    /**
     * Gets information about a deployment group.
     */
    getDeploymentGroup(req: operations.GetDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentGroupResponse>;
    /**
     * Gets information about an instance as part of a deployment.
     */
    getDeploymentInstance(req: operations.GetDeploymentInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentInstanceResponse>;
    /**
     *  Returns information about a deployment target.
     */
    getDeploymentTarget(req: operations.GetDeploymentTargetRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentTargetResponse>;
    /**
     *  Gets information about an on-premises instance.
     */
    getOnPremisesInstance(req: operations.GetOnPremisesInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetOnPremisesInstanceResponse>;
    /**
     * Lists information about revisions for an application.
     */
    listApplicationRevisions(req: operations.ListApplicationRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationRevisionsResponse>;
    /**
     * Lists the applications registered with the IAM user or Amazon Web Services account.
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * Lists the deployment configurations with the IAM user or Amazon Web Services account.
     */
    listDeploymentConfigs(req: operations.ListDeploymentConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentConfigsResponse>;
    /**
     * Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.
     */
    listDeploymentGroups(req: operations.ListDeploymentGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentGroupsResponse>;
    /**
     * <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>
     */
    listDeploymentInstances(req: operations.ListDeploymentInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentInstancesResponse>;
    /**
     *  Returns an array of target IDs that are associated a deployment.
     */
    listDeploymentTargets(req: operations.ListDeploymentTargetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentTargetsResponse>;
    /**
     * Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.
     */
    listDeployments(req: operations.ListDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentsResponse>;
    /**
     * Lists the names of stored connections to GitHub accounts.
     */
    listGitHubAccountTokenNames(req: operations.ListGitHubAccountTokenNamesRequest, config?: AxiosRequestConfig): Promise<operations.ListGitHubAccountTokenNamesResponse>;
    /**
     * <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
     */
    listOnPremisesInstances(req: operations.ListOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListOnPremisesInstancesResponse>;
    /**
     *  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
     */
    putLifecycleEventHookExecutionStatus(req: operations.PutLifecycleEventHookExecutionStatusRequest, config?: AxiosRequestConfig): Promise<operations.PutLifecycleEventHookExecutionStatusResponse>;
    /**
     * Registers with CodeDeploy a revision for the specified application.
     */
    registerApplicationRevision(req: operations.RegisterApplicationRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegisterApplicationRevisionResponse>;
    /**
     * <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
     */
    registerOnPremisesInstance(req: operations.RegisterOnPremisesInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterOnPremisesInstanceResponse>;
    /**
     * Removes one or more tags from one or more on-premises instances.
     */
    removeTagsFromOnPremisesInstances(req: operations.RemoveTagsFromOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTagsFromOnPremisesInstancesResponse>;
    /**
     * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
     */
    skipWaitTimeForInstanceTermination(req: operations.SkipWaitTimeForInstanceTerminationRequest, config?: AxiosRequestConfig): Promise<operations.SkipWaitTimeForInstanceTerminationResponse>;
    /**
     * Attempts to stop an ongoing deployment.
     */
    stopDeployment(req: operations.StopDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StopDeploymentResponse>;
    /**
     *  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     *  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Changes the name of an application.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * Changes information about a deployment group.
     */
    updateDeploymentGroup(req: operations.UpdateDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentGroupResponse>;
}
