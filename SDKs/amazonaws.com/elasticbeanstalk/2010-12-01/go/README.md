# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/elasticbeanstalk/2010-12-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GETAbortEnvironmentUpdate(ctx, operations.GETAbortEnvironmentUpdateRequest{
        Action: operations.GETAbortEnvironmentUpdateActionEnumAbortEnvironmentUpdate,
        EnvironmentID: sdk.String("corrupti"),
        EnvironmentName: sdk.String("provident"),
        Version: operations.GETAbortEnvironmentUpdateVersionEnumTwoThousandAndTen1201,
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GETAbortEnvironmentUpdate](docs/sdk/README.md#getabortenvironmentupdate) - Cancels in-progress environment configuration update or application version deployment.
* [GETApplyEnvironmentManagedAction](docs/sdk/README.md#getapplyenvironmentmanagedaction) - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
* [GETAssociateEnvironmentOperationsRole](docs/sdk/README.md#getassociateenvironmentoperationsrole) - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [GETCheckDNSAvailability](docs/sdk/README.md#getcheckdnsavailability) - Checks if the specified CNAME is available.
* [GETComposeEnvironments](docs/sdk/README.md#getcomposeenvironments) - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
* [GETCreateStorageLocation](docs/sdk/README.md#getcreatestoragelocation) - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
* [GETDeleteApplication](docs/sdk/README.md#getdeleteapplication) - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
* [GETDeleteApplicationVersion](docs/sdk/README.md#getdeleteapplicationversion) - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
* [GETDeleteConfigurationTemplate](docs/sdk/README.md#getdeleteconfigurationtemplate) - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
* [GETDeleteEnvironmentConfiguration](docs/sdk/README.md#getdeleteenvironmentconfiguration) - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
* [GETDeletePlatformVersion](docs/sdk/README.md#getdeleteplatformversion) - Deletes the specified version of a custom platform.
* [GETDescribeAccountAttributes](docs/sdk/README.md#getdescribeaccountattributes) - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
* [GETDescribeApplicationVersions](docs/sdk/README.md#getdescribeapplicationversions) - Retrieve a list of application versions.
* [GETDescribeApplications](docs/sdk/README.md#getdescribeapplications) - Returns the descriptions of existing applications.
* [GETDescribeConfigurationSettings](docs/sdk/README.md#getdescribeconfigurationsettings) - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
* [GETDescribeEnvironmentHealth](docs/sdk/README.md#getdescribeenvironmenthealth) - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
* [GETDescribeEnvironmentManagedActionHistory](docs/sdk/README.md#getdescribeenvironmentmanagedactionhistory) - Lists an environment's completed and failed managed actions.
* [GETDescribeEnvironmentManagedActions](docs/sdk/README.md#getdescribeenvironmentmanagedactions) - Lists an environment's upcoming and in-progress managed actions.
* [GETDescribeEnvironmentResources](docs/sdk/README.md#getdescribeenvironmentresources) - Returns AWS resources for this environment.
* [GETDescribeEnvironments](docs/sdk/README.md#getdescribeenvironments) - Returns descriptions for existing environments.
* [GETDescribeEvents](docs/sdk/README.md#getdescribeevents) - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
* [GETDescribeInstancesHealth](docs/sdk/README.md#getdescribeinstanceshealth) - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
* [GETDescribePlatformVersion](docs/sdk/README.md#getdescribeplatformversion) - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [GETDisassociateEnvironmentOperationsRole](docs/sdk/README.md#getdisassociateenvironmentoperationsrole) - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [GETListAvailableSolutionStacks](docs/sdk/README.md#getlistavailablesolutionstacks) - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
* [GETListTagsForResource](docs/sdk/README.md#getlisttagsforresource) - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
* [GETRebuildEnvironment](docs/sdk/README.md#getrebuildenvironment) - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
* [GETRequestEnvironmentInfo](docs/sdk/README.md#getrequestenvironmentinfo) - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
* [GETRestartAppServer](docs/sdk/README.md#getrestartappserver) - Causes the environment to restart the application container server running on each Amazon EC2 instance.
* [GETRetrieveEnvironmentInfo](docs/sdk/README.md#getretrieveenvironmentinfo) - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
* [GETSwapEnvironmentCNAMEs](docs/sdk/README.md#getswapenvironmentcnames) - Swaps the CNAMEs of two environments.
* [GETTerminateEnvironment](docs/sdk/README.md#getterminateenvironment) - Terminates the specified environment.
* [GETUpdateApplication](docs/sdk/README.md#getupdateapplication) - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
* [GETUpdateApplicationVersion](docs/sdk/README.md#getupdateapplicationversion) - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
* [POSTAbortEnvironmentUpdate](docs/sdk/README.md#postabortenvironmentupdate) - Cancels in-progress environment configuration update or application version deployment.
* [POSTApplyEnvironmentManagedAction](docs/sdk/README.md#postapplyenvironmentmanagedaction) - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
* [POSTAssociateEnvironmentOperationsRole](docs/sdk/README.md#postassociateenvironmentoperationsrole) - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [POSTCheckDNSAvailability](docs/sdk/README.md#postcheckdnsavailability) - Checks if the specified CNAME is available.
* [POSTComposeEnvironments](docs/sdk/README.md#postcomposeenvironments) - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
* [POSTCreateApplication](docs/sdk/README.md#postcreateapplication) - Creates an application that has one configuration template named <code>default</code> and no application versions.
* [POSTCreateApplicationVersion](docs/sdk/README.md#postcreateapplicationversion) - <p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>
* [POSTCreateConfigurationTemplate](docs/sdk/README.md#postcreateconfigurationtemplate) - <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>
* [POSTCreateEnvironment](docs/sdk/README.md#postcreateenvironment) - Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.
* [POSTCreatePlatformVersion](docs/sdk/README.md#postcreateplatformversion) - Create a new version of your custom platform.
* [POSTCreateStorageLocation](docs/sdk/README.md#postcreatestoragelocation) - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
* [POSTDeleteApplication](docs/sdk/README.md#postdeleteapplication) - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
* [POSTDeleteApplicationVersion](docs/sdk/README.md#postdeleteapplicationversion) - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
* [POSTDeleteConfigurationTemplate](docs/sdk/README.md#postdeleteconfigurationtemplate) - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
* [POSTDeleteEnvironmentConfiguration](docs/sdk/README.md#postdeleteenvironmentconfiguration) - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
* [POSTDeletePlatformVersion](docs/sdk/README.md#postdeleteplatformversion) - Deletes the specified version of a custom platform.
* [POSTDescribeAccountAttributes](docs/sdk/README.md#postdescribeaccountattributes) - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
* [POSTDescribeApplicationVersions](docs/sdk/README.md#postdescribeapplicationversions) - Retrieve a list of application versions.
* [POSTDescribeApplications](docs/sdk/README.md#postdescribeapplications) - Returns the descriptions of existing applications.
* [POSTDescribeConfigurationOptions](docs/sdk/README.md#postdescribeconfigurationoptions) - Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
* [POSTDescribeConfigurationSettings](docs/sdk/README.md#postdescribeconfigurationsettings) - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
* [POSTDescribeEnvironmentHealth](docs/sdk/README.md#postdescribeenvironmenthealth) - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
* [POSTDescribeEnvironmentManagedActionHistory](docs/sdk/README.md#postdescribeenvironmentmanagedactionhistory) - Lists an environment's completed and failed managed actions.
* [POSTDescribeEnvironmentManagedActions](docs/sdk/README.md#postdescribeenvironmentmanagedactions) - Lists an environment's upcoming and in-progress managed actions.
* [POSTDescribeEnvironmentResources](docs/sdk/README.md#postdescribeenvironmentresources) - Returns AWS resources for this environment.
* [POSTDescribeEnvironments](docs/sdk/README.md#postdescribeenvironments) - Returns descriptions for existing environments.
* [POSTDescribeEvents](docs/sdk/README.md#postdescribeevents) - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
* [POSTDescribeInstancesHealth](docs/sdk/README.md#postdescribeinstanceshealth) - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
* [POSTDescribePlatformVersion](docs/sdk/README.md#postdescribeplatformversion) - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [POSTDisassociateEnvironmentOperationsRole](docs/sdk/README.md#postdisassociateenvironmentoperationsrole) - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [POSTListAvailableSolutionStacks](docs/sdk/README.md#postlistavailablesolutionstacks) - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
* [POSTListPlatformBranches](docs/sdk/README.md#postlistplatformbranches) - <p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [POSTListPlatformVersions](docs/sdk/README.md#postlistplatformversions) - <p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [POSTListTagsForResource](docs/sdk/README.md#postlisttagsforresource) - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
* [POSTRebuildEnvironment](docs/sdk/README.md#postrebuildenvironment) - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
* [POSTRequestEnvironmentInfo](docs/sdk/README.md#postrequestenvironmentinfo) - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
* [POSTRestartAppServer](docs/sdk/README.md#postrestartappserver) - Causes the environment to restart the application container server running on each Amazon EC2 instance.
* [POSTRetrieveEnvironmentInfo](docs/sdk/README.md#postretrieveenvironmentinfo) - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
* [POSTSwapEnvironmentCNAMEs](docs/sdk/README.md#postswapenvironmentcnames) - Swaps the CNAMEs of two environments.
* [POSTTerminateEnvironment](docs/sdk/README.md#postterminateenvironment) - Terminates the specified environment.
* [POSTUpdateApplication](docs/sdk/README.md#postupdateapplication) - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
* [POSTUpdateApplicationResourceLifecycle](docs/sdk/README.md#postupdateapplicationresourcelifecycle) - Modifies lifecycle settings for an application.
* [POSTUpdateApplicationVersion](docs/sdk/README.md#postupdateapplicationversion) - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
* [POSTUpdateConfigurationTemplate](docs/sdk/README.md#postupdateconfigurationtemplate) - <p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>
* [POSTUpdateEnvironment](docs/sdk/README.md#postupdateenvironment) - <p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>
* [POSTUpdateTagsForResource](docs/sdk/README.md#postupdatetagsforresource) - <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
* [POSTValidateConfigurationSettings](docs/sdk/README.md#postvalidateconfigurationsettings) - <p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
