# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateActionEnum;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateRequest;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateResponse;
import org.openapis.openapi.models.operations.GETAbortEnvironmentUpdateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAbortEnvironmentUpdateRequest req = new GETAbortEnvironmentUpdateRequest(GETAbortEnvironmentUpdateActionEnum.ABORT_ENVIRONMENT_UPDATE, GETAbortEnvironmentUpdateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "provident";
                environmentName = "distinctio";
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            GETAbortEnvironmentUpdateResponse res = sdk.getAbortEnvironmentUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getAbortEnvironmentUpdate](docs/sdk/README.md#getabortenvironmentupdate) - Cancels in-progress environment configuration update or application version deployment.
* [getApplyEnvironmentManagedAction](docs/sdk/README.md#getapplyenvironmentmanagedaction) - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
* [getAssociateEnvironmentOperationsRole](docs/sdk/README.md#getassociateenvironmentoperationsrole) - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [getCheckDNSAvailability](docs/sdk/README.md#getcheckdnsavailability) - Checks if the specified CNAME is available.
* [getComposeEnvironments](docs/sdk/README.md#getcomposeenvironments) - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
* [getCreateStorageLocation](docs/sdk/README.md#getcreatestoragelocation) - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
* [getDeleteApplication](docs/sdk/README.md#getdeleteapplication) - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
* [getDeleteApplicationVersion](docs/sdk/README.md#getdeleteapplicationversion) - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
* [getDeleteConfigurationTemplate](docs/sdk/README.md#getdeleteconfigurationtemplate) - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
* [getDeleteEnvironmentConfiguration](docs/sdk/README.md#getdeleteenvironmentconfiguration) - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
* [getDeletePlatformVersion](docs/sdk/README.md#getdeleteplatformversion) - Deletes the specified version of a custom platform.
* [getDescribeAccountAttributes](docs/sdk/README.md#getdescribeaccountattributes) - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
* [getDescribeApplicationVersions](docs/sdk/README.md#getdescribeapplicationversions) - Retrieve a list of application versions.
* [getDescribeApplications](docs/sdk/README.md#getdescribeapplications) - Returns the descriptions of existing applications.
* [getDescribeConfigurationSettings](docs/sdk/README.md#getdescribeconfigurationsettings) - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
* [getDescribeEnvironmentHealth](docs/sdk/README.md#getdescribeenvironmenthealth) - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
* [getDescribeEnvironmentManagedActionHistory](docs/sdk/README.md#getdescribeenvironmentmanagedactionhistory) - Lists an environment's completed and failed managed actions.
* [getDescribeEnvironmentManagedActions](docs/sdk/README.md#getdescribeenvironmentmanagedactions) - Lists an environment's upcoming and in-progress managed actions.
* [getDescribeEnvironmentResources](docs/sdk/README.md#getdescribeenvironmentresources) - Returns AWS resources for this environment.
* [getDescribeEnvironments](docs/sdk/README.md#getdescribeenvironments) - Returns descriptions for existing environments.
* [getDescribeEvents](docs/sdk/README.md#getdescribeevents) - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
* [getDescribeInstancesHealth](docs/sdk/README.md#getdescribeinstanceshealth) - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
* [getDescribePlatformVersion](docs/sdk/README.md#getdescribeplatformversion) - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [getDisassociateEnvironmentOperationsRole](docs/sdk/README.md#getdisassociateenvironmentoperationsrole) - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [getListAvailableSolutionStacks](docs/sdk/README.md#getlistavailablesolutionstacks) - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
* [getListTagsForResource](docs/sdk/README.md#getlisttagsforresource) - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
* [getRebuildEnvironment](docs/sdk/README.md#getrebuildenvironment) - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
* [getRequestEnvironmentInfo](docs/sdk/README.md#getrequestenvironmentinfo) - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
* [getRestartAppServer](docs/sdk/README.md#getrestartappserver) - Causes the environment to restart the application container server running on each Amazon EC2 instance.
* [getRetrieveEnvironmentInfo](docs/sdk/README.md#getretrieveenvironmentinfo) - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
* [getSwapEnvironmentCNAMEs](docs/sdk/README.md#getswapenvironmentcnames) - Swaps the CNAMEs of two environments.
* [getTerminateEnvironment](docs/sdk/README.md#getterminateenvironment) - Terminates the specified environment.
* [getUpdateApplication](docs/sdk/README.md#getupdateapplication) - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
* [getUpdateApplicationVersion](docs/sdk/README.md#getupdateapplicationversion) - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
* [postAbortEnvironmentUpdate](docs/sdk/README.md#postabortenvironmentupdate) - Cancels in-progress environment configuration update or application version deployment.
* [postApplyEnvironmentManagedAction](docs/sdk/README.md#postapplyenvironmentmanagedaction) - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
* [postAssociateEnvironmentOperationsRole](docs/sdk/README.md#postassociateenvironmentoperationsrole) - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [postCheckDNSAvailability](docs/sdk/README.md#postcheckdnsavailability) - Checks if the specified CNAME is available.
* [postComposeEnvironments](docs/sdk/README.md#postcomposeenvironments) - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
* [postCreateApplication](docs/sdk/README.md#postcreateapplication) - Creates an application that has one configuration template named <code>default</code> and no application versions.
* [postCreateApplicationVersion](docs/sdk/README.md#postcreateapplicationversion) - <p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>
* [postCreateConfigurationTemplate](docs/sdk/README.md#postcreateconfigurationtemplate) - <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>
* [postCreateEnvironment](docs/sdk/README.md#postcreateenvironment) - Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.
* [postCreatePlatformVersion](docs/sdk/README.md#postcreateplatformversion) - Create a new version of your custom platform.
* [postCreateStorageLocation](docs/sdk/README.md#postcreatestoragelocation) - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
* [postDeleteApplication](docs/sdk/README.md#postdeleteapplication) - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
* [postDeleteApplicationVersion](docs/sdk/README.md#postdeleteapplicationversion) - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
* [postDeleteConfigurationTemplate](docs/sdk/README.md#postdeleteconfigurationtemplate) - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
* [postDeleteEnvironmentConfiguration](docs/sdk/README.md#postdeleteenvironmentconfiguration) - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
* [postDeletePlatformVersion](docs/sdk/README.md#postdeleteplatformversion) - Deletes the specified version of a custom platform.
* [postDescribeAccountAttributes](docs/sdk/README.md#postdescribeaccountattributes) - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
* [postDescribeApplicationVersions](docs/sdk/README.md#postdescribeapplicationversions) - Retrieve a list of application versions.
* [postDescribeApplications](docs/sdk/README.md#postdescribeapplications) - Returns the descriptions of existing applications.
* [postDescribeConfigurationOptions](docs/sdk/README.md#postdescribeconfigurationoptions) - Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
* [postDescribeConfigurationSettings](docs/sdk/README.md#postdescribeconfigurationsettings) - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
* [postDescribeEnvironmentHealth](docs/sdk/README.md#postdescribeenvironmenthealth) - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
* [postDescribeEnvironmentManagedActionHistory](docs/sdk/README.md#postdescribeenvironmentmanagedactionhistory) - Lists an environment's completed and failed managed actions.
* [postDescribeEnvironmentManagedActions](docs/sdk/README.md#postdescribeenvironmentmanagedactions) - Lists an environment's upcoming and in-progress managed actions.
* [postDescribeEnvironmentResources](docs/sdk/README.md#postdescribeenvironmentresources) - Returns AWS resources for this environment.
* [postDescribeEnvironments](docs/sdk/README.md#postdescribeenvironments) - Returns descriptions for existing environments.
* [postDescribeEvents](docs/sdk/README.md#postdescribeevents) - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
* [postDescribeInstancesHealth](docs/sdk/README.md#postdescribeinstanceshealth) - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
* [postDescribePlatformVersion](docs/sdk/README.md#postdescribeplatformversion) - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [postDisassociateEnvironmentOperationsRole](docs/sdk/README.md#postdisassociateenvironmentoperationsrole) - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [postListAvailableSolutionStacks](docs/sdk/README.md#postlistavailablesolutionstacks) - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
* [postListPlatformBranches](docs/sdk/README.md#postlistplatformbranches) - <p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [postListPlatformVersions](docs/sdk/README.md#postlistplatformversions) - <p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [postListTagsForResource](docs/sdk/README.md#postlisttagsforresource) - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
* [postRebuildEnvironment](docs/sdk/README.md#postrebuildenvironment) - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
* [postRequestEnvironmentInfo](docs/sdk/README.md#postrequestenvironmentinfo) - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
* [postRestartAppServer](docs/sdk/README.md#postrestartappserver) - Causes the environment to restart the application container server running on each Amazon EC2 instance.
* [postRetrieveEnvironmentInfo](docs/sdk/README.md#postretrieveenvironmentinfo) - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
* [postSwapEnvironmentCNAMEs](docs/sdk/README.md#postswapenvironmentcnames) - Swaps the CNAMEs of two environments.
* [postTerminateEnvironment](docs/sdk/README.md#postterminateenvironment) - Terminates the specified environment.
* [postUpdateApplication](docs/sdk/README.md#postupdateapplication) - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
* [postUpdateApplicationResourceLifecycle](docs/sdk/README.md#postupdateapplicationresourcelifecycle) - Modifies lifecycle settings for an application.
* [postUpdateApplicationVersion](docs/sdk/README.md#postupdateapplicationversion) - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
* [postUpdateConfigurationTemplate](docs/sdk/README.md#postupdateconfigurationtemplate) - <p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>
* [postUpdateEnvironment](docs/sdk/README.md#postupdateenvironment) - <p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>
* [postUpdateTagsForResource](docs/sdk/README.md#postupdatetagsforresource) - <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
* [postValidateConfigurationSettings](docs/sdk/README.md#postvalidateconfigurationsettings) - <p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
