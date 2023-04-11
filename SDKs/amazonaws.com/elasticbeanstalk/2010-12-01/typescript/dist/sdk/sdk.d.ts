import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://elasticbeanstalk.{region}.amazonaws.com", "https://elasticbeanstalk.{region}.amazonaws.com", "http://elasticbeanstalk.{region}.amazonaws.com.cn", "https://elasticbeanstalk.{region}.amazonaws.com.cn"];
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
 * <fullname>AWS Elastic Beanstalk</fullname> <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services cloud.</p> <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>. To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services Glossary</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/elasticbeanstalk/} - Amazon Web Services documentation
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
     * Cancels in-progress environment configuration update or application version deployment.
     */
    getAbortEnvironmentUpdate(req: operations.GETAbortEnvironmentUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GETAbortEnvironmentUpdateResponse>;
    /**
     * Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
     */
    getApplyEnvironmentManagedAction(req: operations.GETApplyEnvironmentManagedActionRequest, config?: AxiosRequestConfig): Promise<operations.GETApplyEnvironmentManagedActionResponse>;
    /**
     * Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
     */
    getAssociateEnvironmentOperationsRole(req: operations.GETAssociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateEnvironmentOperationsRoleResponse>;
    /**
     * Checks if the specified CNAME is available.
     */
    getCheckDNSAvailability(req: operations.GETCheckDNSAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GETCheckDNSAvailabilityResponse>;
    /**
     * Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
     */
    getComposeEnvironments(req: operations.GETComposeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GETComposeEnvironmentsResponse>;
    /**
     * Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
     */
    getCreateStorageLocation(req: operations.GETCreateStorageLocationRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateStorageLocationResponse>;
    /**
     * <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
     */
    getDeleteApplication(req: operations.GETDeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteApplicationResponse>;
    /**
     * <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
     */
    getDeleteApplicationVersion(req: operations.GETDeleteApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteApplicationVersionResponse>;
    /**
     * <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
     */
    getDeleteConfigurationTemplate(req: operations.GETDeleteConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteConfigurationTemplateResponse>;
    /**
     * <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
     */
    getDeleteEnvironmentConfiguration(req: operations.GETDeleteEnvironmentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEnvironmentConfigurationResponse>;
    /**
     * Deletes the specified version of a custom platform.
     */
    getDeletePlatformVersion(req: operations.GETDeletePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeletePlatformVersionResponse>;
    /**
     * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
     */
    getDescribeAccountAttributes(req: operations.GETDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAccountAttributesResponse>;
    /**
     * Retrieve a list of application versions.
     */
    getDescribeApplicationVersions(req: operations.GETDescribeApplicationVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeApplicationVersionsResponse>;
    /**
     * Returns the descriptions of existing applications.
     */
    getDescribeApplications(req: operations.GETDescribeApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeApplicationsResponse>;
    /**
     * <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
     */
    getDescribeConfigurationSettings(req: operations.GETDescribeConfigurationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeConfigurationSettingsResponse>;
    /**
     * Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
     */
    getDescribeEnvironmentHealth(req: operations.GETDescribeEnvironmentHealthRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEnvironmentHealthResponse>;
    /**
     * Lists an environment's completed and failed managed actions.
     */
    getDescribeEnvironmentManagedActionHistory(req: operations.GETDescribeEnvironmentManagedActionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEnvironmentManagedActionHistoryResponse>;
    /**
     * Lists an environment's upcoming and in-progress managed actions.
     */
    getDescribeEnvironmentManagedActions(req: operations.GETDescribeEnvironmentManagedActionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEnvironmentManagedActionsResponse>;
    /**
     * Returns AWS resources for this environment.
     */
    getDescribeEnvironmentResources(req: operations.GETDescribeEnvironmentResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEnvironmentResourcesResponse>;
    /**
     * Returns descriptions for existing environments.
     */
    getDescribeEnvironments(req: operations.GETDescribeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEnvironmentsResponse>;
    /**
     * <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
     */
    getDescribeEvents(req: operations.GETDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeEventsResponse>;
    /**
     * Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
     */
    getDescribeInstancesHealth(req: operations.GETDescribeInstancesHealthRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeInstancesHealthResponse>;
    /**
     * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
     */
    getDescribePlatformVersion(req: operations.GETDescribePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribePlatformVersionResponse>;
    /**
     * Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
     */
    getDisassociateEnvironmentOperationsRole(req: operations.GETDisassociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateEnvironmentOperationsRoleResponse>;
    /**
     * Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
     */
    getListAvailableSolutionStacks(req: operations.GETListAvailableSolutionStacksRequest, config?: AxiosRequestConfig): Promise<operations.GETListAvailableSolutionStacksResponse>;
    /**
     * <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
     */
    getListTagsForResource(req: operations.GETListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.GETListTagsForResourceResponse>;
    /**
     * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
     */
    getRebuildEnvironment(req: operations.GETRebuildEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GETRebuildEnvironmentResponse>;
    /**
     * <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
     */
    getRequestEnvironmentInfo(req: operations.GETRequestEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.GETRequestEnvironmentInfoResponse>;
    /**
     * Causes the environment to restart the application container server running on each Amazon EC2 instance.
     */
    getRestartAppServer(req: operations.GETRestartAppServerRequest, config?: AxiosRequestConfig): Promise<operations.GETRestartAppServerResponse>;
    /**
     * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
     */
    getRetrieveEnvironmentInfo(req: operations.GETRetrieveEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.GETRetrieveEnvironmentInfoResponse>;
    /**
     * Swaps the CNAMEs of two environments.
     */
    getSwapEnvironmentCNAMEs(req: operations.GETSwapEnvironmentCNAMEsRequest, config?: AxiosRequestConfig): Promise<operations.GETSwapEnvironmentCNAMEsResponse>;
    /**
     * Terminates the specified environment.
     */
    getTerminateEnvironment(req: operations.GETTerminateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GETTerminateEnvironmentResponse>;
    /**
     * <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
     */
    getUpdateApplication(req: operations.GETUpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateApplicationResponse>;
    /**
     * <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
     */
    getUpdateApplicationVersion(req: operations.GETUpdateApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETUpdateApplicationVersionResponse>;
    /**
     * Cancels in-progress environment configuration update or application version deployment.
     */
    postAbortEnvironmentUpdate(req: operations.POSTAbortEnvironmentUpdateRequest, config?: AxiosRequestConfig): Promise<operations.POSTAbortEnvironmentUpdateResponse>;
    /**
     * Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
     */
    postApplyEnvironmentManagedAction(req: operations.POSTApplyEnvironmentManagedActionRequest, config?: AxiosRequestConfig): Promise<operations.POSTApplyEnvironmentManagedActionResponse>;
    /**
     * Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
     */
    postAssociateEnvironmentOperationsRole(req: operations.POSTAssociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateEnvironmentOperationsRoleResponse>;
    /**
     * Checks if the specified CNAME is available.
     */
    postCheckDNSAvailability(req: operations.POSTCheckDNSAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.POSTCheckDNSAvailabilityResponse>;
    /**
     * Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
     */
    postComposeEnvironments(req: operations.POSTComposeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTComposeEnvironmentsResponse>;
    /**
     * Creates an application that has one configuration template named <code>default</code> and no application versions.
     */
    postCreateApplication(req: operations.POSTCreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateApplicationResponse>;
    /**
     * <p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>
     */
    postCreateApplicationVersion(req: operations.POSTCreateApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateApplicationVersionResponse>;
    /**
     * <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>
     */
    postCreateConfigurationTemplate(req: operations.POSTCreateConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateConfigurationTemplateResponse>;
    /**
     * Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.
     */
    postCreateEnvironment(req: operations.POSTCreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEnvironmentResponse>;
    /**
     * Create a new version of your custom platform.
     */
    postCreatePlatformVersion(req: operations.POSTCreatePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreatePlatformVersionResponse>;
    /**
     * Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
     */
    postCreateStorageLocation(req: operations.POSTCreateStorageLocationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateStorageLocationResponse>;
    /**
     * <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
     */
    postDeleteApplication(req: operations.POSTDeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteApplicationResponse>;
    /**
     * <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
     */
    postDeleteApplicationVersion(req: operations.POSTDeleteApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteApplicationVersionResponse>;
    /**
     * <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
     */
    postDeleteConfigurationTemplate(req: operations.POSTDeleteConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteConfigurationTemplateResponse>;
    /**
     * <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
     */
    postDeleteEnvironmentConfiguration(req: operations.POSTDeleteEnvironmentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEnvironmentConfigurationResponse>;
    /**
     * Deletes the specified version of a custom platform.
     */
    postDeletePlatformVersion(req: operations.POSTDeletePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeletePlatformVersionResponse>;
    /**
     * <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
     */
    postDescribeAccountAttributes(req: operations.POSTDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAccountAttributesResponse>;
    /**
     * Retrieve a list of application versions.
     */
    postDescribeApplicationVersions(req: operations.POSTDescribeApplicationVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeApplicationVersionsResponse>;
    /**
     * Returns the descriptions of existing applications.
     */
    postDescribeApplications(req: operations.POSTDescribeApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeApplicationsResponse>;
    /**
     * Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
     */
    postDescribeConfigurationOptions(req: operations.POSTDescribeConfigurationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeConfigurationOptionsResponse>;
    /**
     * <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
     */
    postDescribeConfigurationSettings(req: operations.POSTDescribeConfigurationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeConfigurationSettingsResponse>;
    /**
     * Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
     */
    postDescribeEnvironmentHealth(req: operations.POSTDescribeEnvironmentHealthRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEnvironmentHealthResponse>;
    /**
     * Lists an environment's completed and failed managed actions.
     */
    postDescribeEnvironmentManagedActionHistory(req: operations.POSTDescribeEnvironmentManagedActionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEnvironmentManagedActionHistoryResponse>;
    /**
     * Lists an environment's upcoming and in-progress managed actions.
     */
    postDescribeEnvironmentManagedActions(req: operations.POSTDescribeEnvironmentManagedActionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEnvironmentManagedActionsResponse>;
    /**
     * Returns AWS resources for this environment.
     */
    postDescribeEnvironmentResources(req: operations.POSTDescribeEnvironmentResourcesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEnvironmentResourcesResponse>;
    /**
     * Returns descriptions for existing environments.
     */
    postDescribeEnvironments(req: operations.POSTDescribeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEnvironmentsResponse>;
    /**
     * <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
     */
    postDescribeEvents(req: operations.POSTDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEventsResponse>;
    /**
     * Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
     */
    postDescribeInstancesHealth(req: operations.POSTDescribeInstancesHealthRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstancesHealthResponse>;
    /**
     * <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
     */
    postDescribePlatformVersion(req: operations.POSTDescribePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePlatformVersionResponse>;
    /**
     * Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
     */
    postDisassociateEnvironmentOperationsRole(req: operations.POSTDisassociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateEnvironmentOperationsRoleResponse>;
    /**
     * Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
     */
    postListAvailableSolutionStacks(req: operations.POSTListAvailableSolutionStacksRequest, config?: AxiosRequestConfig): Promise<operations.POSTListAvailableSolutionStacksResponse>;
    /**
     * <p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
     */
    postListPlatformBranches(req: operations.POSTListPlatformBranchesRequest, config?: AxiosRequestConfig): Promise<operations.POSTListPlatformBranchesResponse>;
    /**
     * <p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
     */
    postListPlatformVersions(req: operations.POSTListPlatformVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTListPlatformVersionsResponse>;
    /**
     * <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
     */
    postListTagsForResource(req: operations.POSTListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTListTagsForResourceResponse>;
    /**
     * Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
     */
    postRebuildEnvironment(req: operations.POSTRebuildEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebuildEnvironmentResponse>;
    /**
     * <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
     */
    postRequestEnvironmentInfo(req: operations.POSTRequestEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.POSTRequestEnvironmentInfoResponse>;
    /**
     * Causes the environment to restart the application container server running on each Amazon EC2 instance.
     */
    postRestartAppServer(req: operations.POSTRestartAppServerRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestartAppServerResponse>;
    /**
     * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
     */
    postRetrieveEnvironmentInfo(req: operations.POSTRetrieveEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.POSTRetrieveEnvironmentInfoResponse>;
    /**
     * Swaps the CNAMEs of two environments.
     */
    postSwapEnvironmentCNAMEs(req: operations.POSTSwapEnvironmentCNAMEsRequest, config?: AxiosRequestConfig): Promise<operations.POSTSwapEnvironmentCNAMEsResponse>;
    /**
     * Terminates the specified environment.
     */
    postTerminateEnvironment(req: operations.POSTTerminateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTTerminateEnvironmentResponse>;
    /**
     * <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
     */
    postUpdateApplication(req: operations.POSTUpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateApplicationResponse>;
    /**
     * Modifies lifecycle settings for an application.
     */
    postUpdateApplicationResourceLifecycle(req: operations.POSTUpdateApplicationResourceLifecycleRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateApplicationResourceLifecycleResponse>;
    /**
     * <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
     */
    postUpdateApplicationVersion(req: operations.POSTUpdateApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateApplicationVersionResponse>;
    /**
     * <p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>
     */
    postUpdateConfigurationTemplate(req: operations.POSTUpdateConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateConfigurationTemplateResponse>;
    /**
     * <p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>
     */
    postUpdateEnvironment(req: operations.POSTUpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateEnvironmentResponse>;
    /**
     * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
     */
    postUpdateTagsForResource(req: operations.POSTUpdateTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateTagsForResourceResponse>;
    /**
     * <p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>
     */
    postValidateConfigurationSettings(req: operations.POSTValidateConfigurationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTValidateConfigurationSettingsResponse>;
}
