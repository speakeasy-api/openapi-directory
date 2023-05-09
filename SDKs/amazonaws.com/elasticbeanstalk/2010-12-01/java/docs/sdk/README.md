# SDK

## Overview

<fullname>AWS Elastic Beanstalk</fullname> <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services cloud.</p> <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>. To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> <p> <b>Endpoints</b> </p> <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services Glossary</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticbeanstalk/>
### Available Operations

* [getAbortEnvironmentUpdate](#getabortenvironmentupdate) - Cancels in-progress environment configuration update or application version deployment.
* [getApplyEnvironmentManagedAction](#getapplyenvironmentmanagedaction) - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
* [getAssociateEnvironmentOperationsRole](#getassociateenvironmentoperationsrole) - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [getCheckDNSAvailability](#getcheckdnsavailability) - Checks if the specified CNAME is available.
* [getComposeEnvironments](#getcomposeenvironments) - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
* [getCreateStorageLocation](#getcreatestoragelocation) - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
* [getDeleteApplication](#getdeleteapplication) - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
* [getDeleteApplicationVersion](#getdeleteapplicationversion) - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
* [getDeleteConfigurationTemplate](#getdeleteconfigurationtemplate) - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
* [getDeleteEnvironmentConfiguration](#getdeleteenvironmentconfiguration) - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
* [getDeletePlatformVersion](#getdeleteplatformversion) - Deletes the specified version of a custom platform.
* [getDescribeAccountAttributes](#getdescribeaccountattributes) - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
* [getDescribeApplicationVersions](#getdescribeapplicationversions) - Retrieve a list of application versions.
* [getDescribeApplications](#getdescribeapplications) - Returns the descriptions of existing applications.
* [getDescribeConfigurationSettings](#getdescribeconfigurationsettings) - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
* [getDescribeEnvironmentHealth](#getdescribeenvironmenthealth) - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
* [getDescribeEnvironmentManagedActionHistory](#getdescribeenvironmentmanagedactionhistory) - Lists an environment's completed and failed managed actions.
* [getDescribeEnvironmentManagedActions](#getdescribeenvironmentmanagedactions) - Lists an environment's upcoming and in-progress managed actions.
* [getDescribeEnvironmentResources](#getdescribeenvironmentresources) - Returns AWS resources for this environment.
* [getDescribeEnvironments](#getdescribeenvironments) - Returns descriptions for existing environments.
* [getDescribeEvents](#getdescribeevents) - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
* [getDescribeInstancesHealth](#getdescribeinstanceshealth) - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
* [getDescribePlatformVersion](#getdescribeplatformversion) - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [getDisassociateEnvironmentOperationsRole](#getdisassociateenvironmentoperationsrole) - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [getListAvailableSolutionStacks](#getlistavailablesolutionstacks) - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
* [getListTagsForResource](#getlisttagsforresource) - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
* [getRebuildEnvironment](#getrebuildenvironment) - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
* [getRequestEnvironmentInfo](#getrequestenvironmentinfo) - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
* [getRestartAppServer](#getrestartappserver) - Causes the environment to restart the application container server running on each Amazon EC2 instance.
* [getRetrieveEnvironmentInfo](#getretrieveenvironmentinfo) - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
* [getSwapEnvironmentCNAMEs](#getswapenvironmentcnames) - Swaps the CNAMEs of two environments.
* [getTerminateEnvironment](#getterminateenvironment) - Terminates the specified environment.
* [getUpdateApplication](#getupdateapplication) - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
* [getUpdateApplicationVersion](#getupdateapplicationversion) - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
* [postAbortEnvironmentUpdate](#postabortenvironmentupdate) - Cancels in-progress environment configuration update or application version deployment.
* [postApplyEnvironmentManagedAction](#postapplyenvironmentmanagedaction) - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
* [postAssociateEnvironmentOperationsRole](#postassociateenvironmentoperationsrole) - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [postCheckDNSAvailability](#postcheckdnsavailability) - Checks if the specified CNAME is available.
* [postComposeEnvironments](#postcomposeenvironments) - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
* [postCreateApplication](#postcreateapplication) - Creates an application that has one configuration template named <code>default</code> and no application versions.
* [postCreateApplicationVersion](#postcreateapplicationversion) - <p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>
* [postCreateConfigurationTemplate](#postcreateconfigurationtemplate) - <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>
* [postCreateEnvironment](#postcreateenvironment) - Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.
* [postCreatePlatformVersion](#postcreateplatformversion) - Create a new version of your custom platform.
* [postCreateStorageLocation](#postcreatestoragelocation) - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
* [postDeleteApplication](#postdeleteapplication) - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
* [postDeleteApplicationVersion](#postdeleteapplicationversion) - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
* [postDeleteConfigurationTemplate](#postdeleteconfigurationtemplate) - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
* [postDeleteEnvironmentConfiguration](#postdeleteenvironmentconfiguration) - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
* [postDeletePlatformVersion](#postdeleteplatformversion) - Deletes the specified version of a custom platform.
* [postDescribeAccountAttributes](#postdescribeaccountattributes) - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
* [postDescribeApplicationVersions](#postdescribeapplicationversions) - Retrieve a list of application versions.
* [postDescribeApplications](#postdescribeapplications) - Returns the descriptions of existing applications.
* [postDescribeConfigurationOptions](#postdescribeconfigurationoptions) - Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
* [postDescribeConfigurationSettings](#postdescribeconfigurationsettings) - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
* [postDescribeEnvironmentHealth](#postdescribeenvironmenthealth) - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
* [postDescribeEnvironmentManagedActionHistory](#postdescribeenvironmentmanagedactionhistory) - Lists an environment's completed and failed managed actions.
* [postDescribeEnvironmentManagedActions](#postdescribeenvironmentmanagedactions) - Lists an environment's upcoming and in-progress managed actions.
* [postDescribeEnvironmentResources](#postdescribeenvironmentresources) - Returns AWS resources for this environment.
* [postDescribeEnvironments](#postdescribeenvironments) - Returns descriptions for existing environments.
* [postDescribeEvents](#postdescribeevents) - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
* [postDescribeInstancesHealth](#postdescribeinstanceshealth) - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
* [postDescribePlatformVersion](#postdescribeplatformversion) - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [postDisassociateEnvironmentOperationsRole](#postdisassociateenvironmentoperationsrole) - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
* [postListAvailableSolutionStacks](#postlistavailablesolutionstacks) - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
* [postListPlatformBranches](#postlistplatformbranches) - <p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [postListPlatformVersions](#postlistplatformversions) - <p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
* [postListTagsForResource](#postlisttagsforresource) - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
* [postRebuildEnvironment](#postrebuildenvironment) - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
* [postRequestEnvironmentInfo](#postrequestenvironmentinfo) - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
* [postRestartAppServer](#postrestartappserver) - Causes the environment to restart the application container server running on each Amazon EC2 instance.
* [postRetrieveEnvironmentInfo](#postretrieveenvironmentinfo) - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
* [postSwapEnvironmentCNAMEs](#postswapenvironmentcnames) - Swaps the CNAMEs of two environments.
* [postTerminateEnvironment](#postterminateenvironment) - Terminates the specified environment.
* [postUpdateApplication](#postupdateapplication) - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
* [postUpdateApplicationResourceLifecycle](#postupdateapplicationresourcelifecycle) - Modifies lifecycle settings for an application.
* [postUpdateApplicationVersion](#postupdateapplicationversion) - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
* [postUpdateConfigurationTemplate](#postupdateconfigurationtemplate) - <p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>
* [postUpdateEnvironment](#postupdateenvironment) - <p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>
* [postUpdateTagsForResource](#postupdatetagsforresource) - <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
* [postValidateConfigurationSettings](#postvalidateconfigurationsettings) - <p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>

## getAbortEnvironmentUpdate

Cancels in-progress environment configuration update or application version deployment.

### Example Usage

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
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAbortEnvironmentUpdateRequest req = new GETAbortEnvironmentUpdateRequest(GETAbortEnvironmentUpdateActionEnum.ABORT_ENVIRONMENT_UPDATE, GETAbortEnvironmentUpdateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "suscipit";
                environmentName = "iure";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            GETAbortEnvironmentUpdateResponse res = sdk.sdk.getAbortEnvironmentUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApplyEnvironmentManagedAction

Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETApplyEnvironmentManagedActionActionEnum;
import org.openapis.openapi.models.operations.GETApplyEnvironmentManagedActionRequest;
import org.openapis.openapi.models.operations.GETApplyEnvironmentManagedActionResponse;
import org.openapis.openapi.models.operations.GETApplyEnvironmentManagedActionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETApplyEnvironmentManagedActionRequest req = new GETApplyEnvironmentManagedActionRequest(GETApplyEnvironmentManagedActionActionEnum.APPLY_ENVIRONMENT_MANAGED_ACTION, "placeat", GETApplyEnvironmentManagedActionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "voluptatum";
                environmentName = "iusto";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            GETApplyEnvironmentManagedActionResponse res = sdk.sdk.getApplyEnvironmentManagedAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssociateEnvironmentOperationsRole

Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAssociateEnvironmentOperationsRoleActionEnum;
import org.openapis.openapi.models.operations.GETAssociateEnvironmentOperationsRoleRequest;
import org.openapis.openapi.models.operations.GETAssociateEnvironmentOperationsRoleResponse;
import org.openapis.openapi.models.operations.GETAssociateEnvironmentOperationsRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAssociateEnvironmentOperationsRoleRequest req = new GETAssociateEnvironmentOperationsRoleRequest(GETAssociateEnvironmentOperationsRoleActionEnum.ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE, "perferendis", "ipsam", GETAssociateEnvironmentOperationsRoleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            GETAssociateEnvironmentOperationsRoleResponse res = sdk.sdk.getAssociateEnvironmentOperationsRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCheckDNSAvailability

Checks if the specified CNAME is available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCheckDNSAvailabilityActionEnum;
import org.openapis.openapi.models.operations.GETCheckDNSAvailabilityRequest;
import org.openapis.openapi.models.operations.GETCheckDNSAvailabilityResponse;
import org.openapis.openapi.models.operations.GETCheckDNSAvailabilityVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCheckDNSAvailabilityRequest req = new GETCheckDNSAvailabilityRequest(GETCheckDNSAvailabilityActionEnum.CHECK_DNS_AVAILABILITY, "quod", GETCheckDNSAvailabilityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "esse";
                xAmzCredential = "totam";
                xAmzDate = "porro";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "nam";
            }};            

            GETCheckDNSAvailabilityResponse res = sdk.sdk.getCheckDNSAvailability(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComposeEnvironments

Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETComposeEnvironmentsActionEnum;
import org.openapis.openapi.models.operations.GETComposeEnvironmentsRequest;
import org.openapis.openapi.models.operations.GETComposeEnvironmentsResponse;
import org.openapis.openapi.models.operations.GETComposeEnvironmentsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETComposeEnvironmentsRequest req = new GETComposeEnvironmentsRequest(GETComposeEnvironmentsActionEnum.COMPOSE_ENVIRONMENTS, GETComposeEnvironmentsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                applicationName = "occaecati";
                groupName = "fugit";
                versionLabels = new String[]{{
                    add("hic"),
                    add("optio"),
                    add("totam"),
                }};
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
            }};            

            GETComposeEnvironmentsResponse res = sdk.sdk.getComposeEnvironments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateStorageLocation

Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateStorageLocationActionEnum;
import org.openapis.openapi.models.operations.GETCreateStorageLocationRequest;
import org.openapis.openapi.models.operations.GETCreateStorageLocationResponse;
import org.openapis.openapi.models.operations.GETCreateStorageLocationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateStorageLocationRequest req = new GETCreateStorageLocationRequest(GETCreateStorageLocationActionEnum.CREATE_STORAGE_LOCATION, GETCreateStorageLocationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ad";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "sed";
            }};            

            GETCreateStorageLocationResponse res = sdk.sdk.getCreateStorageLocation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteApplication

<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteApplicationActionEnum;
import org.openapis.openapi.models.operations.GETDeleteApplicationRequest;
import org.openapis.openapi.models.operations.GETDeleteApplicationResponse;
import org.openapis.openapi.models.operations.GETDeleteApplicationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteApplicationRequest req = new GETDeleteApplicationRequest(GETDeleteApplicationActionEnum.DELETE_APPLICATION, "dolor", GETDeleteApplicationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                terminateEnvByForce = false;
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            GETDeleteApplicationResponse res = sdk.sdk.getDeleteApplication(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteApplicationVersion

<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteApplicationVersionActionEnum;
import org.openapis.openapi.models.operations.GETDeleteApplicationVersionRequest;
import org.openapis.openapi.models.operations.GETDeleteApplicationVersionResponse;
import org.openapis.openapi.models.operations.GETDeleteApplicationVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteApplicationVersionRequest req = new GETDeleteApplicationVersionRequest(GETDeleteApplicationVersionActionEnum.DELETE_APPLICATION_VERSION, "iure", GETDeleteApplicationVersionVersionEnum.TWO_THOUSAND_AND_TEN1201, "saepe") {{
                deleteSourceBundle = false;
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "ipsa";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "est";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "laborum";
            }};            

            GETDeleteApplicationVersionResponse res = sdk.sdk.getDeleteApplicationVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteConfigurationTemplate

<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteConfigurationTemplateActionEnum;
import org.openapis.openapi.models.operations.GETDeleteConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.GETDeleteConfigurationTemplateResponse;
import org.openapis.openapi.models.operations.GETDeleteConfigurationTemplateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteConfigurationTemplateRequest req = new GETDeleteConfigurationTemplateRequest(GETDeleteConfigurationTemplateActionEnum.DELETE_CONFIGURATION_TEMPLATE, "dolorem", "corporis", GETDeleteConfigurationTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "enim";
                xAmzDate = "omnis";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDeleteConfigurationTemplateResponse res = sdk.sdk.getDeleteConfigurationTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteEnvironmentConfiguration

<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteEnvironmentConfigurationActionEnum;
import org.openapis.openapi.models.operations.GETDeleteEnvironmentConfigurationRequest;
import org.openapis.openapi.models.operations.GETDeleteEnvironmentConfigurationResponse;
import org.openapis.openapi.models.operations.GETDeleteEnvironmentConfigurationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteEnvironmentConfigurationRequest req = new GETDeleteEnvironmentConfigurationRequest(GETDeleteEnvironmentConfigurationActionEnum.DELETE_ENVIRONMENT_CONFIGURATION, "iure", "culpa", GETDeleteEnvironmentConfigurationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GETDeleteEnvironmentConfigurationResponse res = sdk.sdk.getDeleteEnvironmentConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeletePlatformVersion

Deletes the specified version of a custom platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeletePlatformVersionActionEnum;
import org.openapis.openapi.models.operations.GETDeletePlatformVersionRequest;
import org.openapis.openapi.models.operations.GETDeletePlatformVersionResponse;
import org.openapis.openapi.models.operations.GETDeletePlatformVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeletePlatformVersionRequest req = new GETDeletePlatformVersionRequest(GETDeletePlatformVersionActionEnum.DELETE_PLATFORM_VERSION, GETDeletePlatformVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                platformArn = "mollitia";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            GETDeletePlatformVersionResponse res = sdk.sdk.getDeletePlatformVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAccountAttributes

<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.GETDescribeAccountAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAccountAttributesRequest req = new GETDescribeAccountAttributesRequest(GETDescribeAccountAttributesActionEnum.DESCRIBE_ACCOUNT_ATTRIBUTES, GETDescribeAccountAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            GETDescribeAccountAttributesResponse res = sdk.sdk.getDescribeAccountAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeApplicationVersions

Retrieve a list of application versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeApplicationVersionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeApplicationVersionsRequest;
import org.openapis.openapi.models.operations.GETDescribeApplicationVersionsResponse;
import org.openapis.openapi.models.operations.GETDescribeApplicationVersionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeApplicationVersionsRequest req = new GETDescribeApplicationVersionsRequest(GETDescribeApplicationVersionsActionEnum.DESCRIBE_APPLICATION_VERSIONS, GETDescribeApplicationVersionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                applicationName = "tenetur";
                maxRecords = 368725L;
                nextToken = "id";
                versionLabels = new String[]{{
                    add("aut"),
                    add("quasi"),
                    add("error"),
                    add("temporibus"),
                }};
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            GETDescribeApplicationVersionsResponse res = sdk.sdk.getDescribeApplicationVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeApplications

Returns the descriptions of existing applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeApplicationsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeApplicationsRequest;
import org.openapis.openapi.models.operations.GETDescribeApplicationsResponse;
import org.openapis.openapi.models.operations.GETDescribeApplicationsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeApplicationsRequest req = new GETDescribeApplicationsRequest(GETDescribeApplicationsActionEnum.DESCRIBE_APPLICATIONS, GETDescribeApplicationsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                applicationNames = new String[]{{
                    add("omnis"),
                }};
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            GETDescribeApplicationsResponse res = sdk.sdk.getDescribeApplications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeConfigurationSettings

<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSettingsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSettingsRequest;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSettingsResponse;
import org.openapis.openapi.models.operations.GETDescribeConfigurationSettingsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeConfigurationSettingsRequest req = new GETDescribeConfigurationSettingsRequest(GETDescribeConfigurationSettingsActionEnum.DESCRIBE_CONFIGURATION_SETTINGS, "corporis", GETDescribeConfigurationSettingsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentName = "dolore";
                templateName = "iusto";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            GETDescribeConfigurationSettingsResponse res = sdk.sdk.getDescribeConfigurationSettings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEnvironmentHealth

Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentHealthActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentHealthRequest;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentHealthResponse;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentHealthVersionEnum;
import org.openapis.openapi.models.shared.EnvironmentHealthAttributeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEnvironmentHealthRequest req = new GETDescribeEnvironmentHealthRequest(GETDescribeEnvironmentHealthActionEnum.DESCRIBE_ENVIRONMENT_HEALTH, GETDescribeEnvironmentHealthVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                attributeNames = new org.openapis.openapi.models.shared.EnvironmentHealthAttributeEnum[]{{
                    add(EnvironmentHealthAttributeEnum.INSTANCES_HEALTH),
                    add(EnvironmentHealthAttributeEnum.INSTANCES_HEALTH),
                    add(EnvironmentHealthAttributeEnum.HEALTH_STATUS),
                }};
                environmentId = "modi";
                environmentName = "praesentium";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            GETDescribeEnvironmentHealthResponse res = sdk.sdk.getDescribeEnvironmentHealth(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEnvironmentManagedActionHistory

Lists an environment's completed and failed managed actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionHistoryActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionHistoryRequest;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionHistoryResponse;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionHistoryVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEnvironmentManagedActionHistoryRequest req = new GETDescribeEnvironmentManagedActionHistoryRequest(GETDescribeEnvironmentManagedActionHistoryActionEnum.DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY, GETDescribeEnvironmentManagedActionHistoryVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "enim";
                environmentName = "consequatur";
                maxItems = 667411L;
                nextToken = "quibusdam";
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GETDescribeEnvironmentManagedActionHistoryResponse res = sdk.sdk.getDescribeEnvironmentManagedActionHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEnvironmentManagedActions

Lists an environment's upcoming and in-progress managed actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionsRequest;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionsResponse;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionsStatusEnum;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentManagedActionsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEnvironmentManagedActionsRequest req = new GETDescribeEnvironmentManagedActionsRequest(GETDescribeEnvironmentManagedActionsActionEnum.DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS, GETDescribeEnvironmentManagedActionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "cupiditate";
                environmentName = "quos";
                status = GETDescribeEnvironmentManagedActionsStatusEnum.SCHEDULED;
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            GETDescribeEnvironmentManagedActionsResponse res = sdk.sdk.getDescribeEnvironmentManagedActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEnvironmentResources

Returns AWS resources for this environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentResourcesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentResourcesRequest;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentResourcesResponse;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentResourcesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEnvironmentResourcesRequest req = new GETDescribeEnvironmentResourcesRequest(GETDescribeEnvironmentResourcesActionEnum.DESCRIBE_ENVIRONMENT_RESOURCES, GETDescribeEnvironmentResourcesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "facilis";
                environmentName = "tempore";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETDescribeEnvironmentResourcesResponse res = sdk.sdk.getDescribeEnvironmentResources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEnvironments

Returns descriptions for existing environments.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentsRequest;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentsResponse;
import org.openapis.openapi.models.operations.GETDescribeEnvironmentsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEnvironmentsRequest req = new GETDescribeEnvironmentsRequest(GETDescribeEnvironmentsActionEnum.DESCRIBE_ENVIRONMENTS, GETDescribeEnvironmentsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                applicationName = "necessitatibus";
                environmentIds = new String[]{{
                    add("officia"),
                    add("dolor"),
                    add("debitis"),
                }};
                environmentNames = new String[]{{
                    add("dolorum"),
                    add("in"),
                    add("in"),
                    add("illum"),
                }};
                includeDeleted = false;
                includedDeletedBackTo = OffsetDateTime.parse("2020-11-26T01:41:04.216Z");
                maxRecords = 116202L;
                nextToken = "magnam";
                versionLabel = "cumque";
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETDescribeEnvironmentsResponse res = sdk.sdk.getDescribeEnvironments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeEvents

<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsRequest;
import org.openapis.openapi.models.operations.GETDescribeEventsResponse;
import org.openapis.openapi.models.operations.GETDescribeEventsSeverityEnum;
import org.openapis.openapi.models.operations.GETDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeEventsRequest req = new GETDescribeEventsRequest(GETDescribeEventsActionEnum.DESCRIBE_EVENTS, GETDescribeEventsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                applicationName = "accusamus";
                endTime = OffsetDateTime.parse("2020-12-03T16:16:10.882Z");
                environmentId = "provident";
                environmentName = "nam";
                maxRecords = 659669L;
                nextToken = "blanditiis";
                platformArn = "deleniti";
                requestId = "sapiente";
                severity = GETDescribeEventsSeverityEnum.DEBUG;
                startTime = OffsetDateTime.parse("2022-03-18T17:53:23.400Z");
                templateName = "vel";
                versionLabel = "natus";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            GETDescribeEventsResponse res = sdk.sdk.getDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeInstancesHealth

Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeInstancesHealthActionEnum;
import org.openapis.openapi.models.operations.GETDescribeInstancesHealthRequest;
import org.openapis.openapi.models.operations.GETDescribeInstancesHealthResponse;
import org.openapis.openapi.models.operations.GETDescribeInstancesHealthVersionEnum;
import org.openapis.openapi.models.shared.InstancesHealthAttributeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeInstancesHealthRequest req = new GETDescribeInstancesHealthRequest(GETDescribeInstancesHealthActionEnum.DESCRIBE_INSTANCES_HEALTH, GETDescribeInstancesHealthVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                attributeNames = new org.openapis.openapi.models.shared.InstancesHealthAttributeEnum[]{{
                    add(InstancesHealthAttributeEnum.REFRESHED_AT),
                    add(InstancesHealthAttributeEnum.SYSTEM),
                }};
                environmentId = "nobis";
                environmentName = "eum";
                nextToken = "vero";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            GETDescribeInstancesHealthResponse res = sdk.sdk.getDescribeInstancesHealth(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribePlatformVersion

<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribePlatformVersionActionEnum;
import org.openapis.openapi.models.operations.GETDescribePlatformVersionRequest;
import org.openapis.openapi.models.operations.GETDescribePlatformVersionResponse;
import org.openapis.openapi.models.operations.GETDescribePlatformVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribePlatformVersionRequest req = new GETDescribePlatformVersionRequest(GETDescribePlatformVersionActionEnum.DESCRIBE_PLATFORM_VERSION, GETDescribePlatformVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                platformArn = "sint";
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "reiciendis";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ad";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "dolor";
            }};            

            GETDescribePlatformVersionResponse res = sdk.sdk.getDescribePlatformVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisassociateEnvironmentOperationsRole

Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisassociateEnvironmentOperationsRoleActionEnum;
import org.openapis.openapi.models.operations.GETDisassociateEnvironmentOperationsRoleRequest;
import org.openapis.openapi.models.operations.GETDisassociateEnvironmentOperationsRoleResponse;
import org.openapis.openapi.models.operations.GETDisassociateEnvironmentOperationsRoleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisassociateEnvironmentOperationsRoleRequest req = new GETDisassociateEnvironmentOperationsRoleRequest(GETDisassociateEnvironmentOperationsRoleActionEnum.DISASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE, "odit", GETDisassociateEnvironmentOperationsRoleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "iure";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "maxime";
            }};            

            GETDisassociateEnvironmentOperationsRoleResponse res = sdk.sdk.getDisassociateEnvironmentOperationsRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListAvailableSolutionStacks

Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListAvailableSolutionStacksActionEnum;
import org.openapis.openapi.models.operations.GETListAvailableSolutionStacksRequest;
import org.openapis.openapi.models.operations.GETListAvailableSolutionStacksResponse;
import org.openapis.openapi.models.operations.GETListAvailableSolutionStacksVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListAvailableSolutionStacksRequest req = new GETListAvailableSolutionStacksRequest(GETListAvailableSolutionStacksActionEnum.LIST_AVAILABLE_SOLUTION_STACKS, GETListAvailableSolutionStacksVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "in";
                xAmzCredential = "architecto";
                xAmzDate = "architecto";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "expedita";
            }};            

            GETListAvailableSolutionStacksResponse res = sdk.sdk.getListAvailableSolutionStacks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListTagsForResource

<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.GETListTagsForResourceRequest;
import org.openapis.openapi.models.operations.GETListTagsForResourceResponse;
import org.openapis.openapi.models.operations.GETListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETListTagsForResourceRequest req = new GETListTagsForResourceRequest(GETListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, "repellat", GETListTagsForResourceVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "sed";
                xAmzCredential = "saepe";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "praesentium";
            }};            

            GETListTagsForResourceResponse res = sdk.sdk.getListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRebuildEnvironment

Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRebuildEnvironmentActionEnum;
import org.openapis.openapi.models.operations.GETRebuildEnvironmentRequest;
import org.openapis.openapi.models.operations.GETRebuildEnvironmentResponse;
import org.openapis.openapi.models.operations.GETRebuildEnvironmentVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRebuildEnvironmentRequest req = new GETRebuildEnvironmentRequest(GETRebuildEnvironmentActionEnum.REBUILD_ENVIRONMENT, GETRebuildEnvironmentVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "magni";
                environmentName = "sunt";
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "pariatur";
                xAmzDate = "maxime";
                xAmzSecurityToken = "ea";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "odit";
            }};            

            GETRebuildEnvironmentResponse res = sdk.sdk.getRebuildEnvironment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRequestEnvironmentInfo

<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRequestEnvironmentInfoActionEnum;
import org.openapis.openapi.models.operations.GETRequestEnvironmentInfoInfoTypeEnum;
import org.openapis.openapi.models.operations.GETRequestEnvironmentInfoRequest;
import org.openapis.openapi.models.operations.GETRequestEnvironmentInfoResponse;
import org.openapis.openapi.models.operations.GETRequestEnvironmentInfoVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRequestEnvironmentInfoRequest req = new GETRequestEnvironmentInfoRequest(GETRequestEnvironmentInfoActionEnum.REQUEST_ENVIRONMENT_INFO, GETRequestEnvironmentInfoInfoTypeEnum.TAIL, GETRequestEnvironmentInfoVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "ab";
                environmentName = "maiores";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            GETRequestEnvironmentInfoResponse res = sdk.sdk.getRequestEnvironmentInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRestartAppServer

Causes the environment to restart the application container server running on each Amazon EC2 instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRestartAppServerActionEnum;
import org.openapis.openapi.models.operations.GETRestartAppServerRequest;
import org.openapis.openapi.models.operations.GETRestartAppServerResponse;
import org.openapis.openapi.models.operations.GETRestartAppServerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRestartAppServerRequest req = new GETRestartAppServerRequest(GETRestartAppServerActionEnum.RESTART_APP_SERVER, GETRestartAppServerVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "voluptatibus";
                environmentName = "perferendis";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
            }};            

            GETRestartAppServerResponse res = sdk.sdk.getRestartAppServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetrieveEnvironmentInfo

<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRetrieveEnvironmentInfoActionEnum;
import org.openapis.openapi.models.operations.GETRetrieveEnvironmentInfoInfoTypeEnum;
import org.openapis.openapi.models.operations.GETRetrieveEnvironmentInfoRequest;
import org.openapis.openapi.models.operations.GETRetrieveEnvironmentInfoResponse;
import org.openapis.openapi.models.operations.GETRetrieveEnvironmentInfoVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRetrieveEnvironmentInfoRequest req = new GETRetrieveEnvironmentInfoRequest(GETRetrieveEnvironmentInfoActionEnum.RETRIEVE_ENVIRONMENT_INFO, GETRetrieveEnvironmentInfoInfoTypeEnum.TAIL, GETRetrieveEnvironmentInfoVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "quis";
                environmentName = "totam";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            GETRetrieveEnvironmentInfoResponse res = sdk.sdk.getRetrieveEnvironmentInfo(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSwapEnvironmentCNAMEs

Swaps the CNAMEs of two environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSwapEnvironmentCNAMEsActionEnum;
import org.openapis.openapi.models.operations.GETSwapEnvironmentCNAMEsRequest;
import org.openapis.openapi.models.operations.GETSwapEnvironmentCNAMEsResponse;
import org.openapis.openapi.models.operations.GETSwapEnvironmentCNAMEsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSwapEnvironmentCNAMEsRequest req = new GETSwapEnvironmentCNAMEsRequest(GETSwapEnvironmentCNAMEsActionEnum.SWAP_ENVIRONMENT_CNAM_ES, GETSwapEnvironmentCNAMEsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                destinationEnvironmentId = "quam";
                destinationEnvironmentName = "dolor";
                sourceEnvironmentId = "vero";
                sourceEnvironmentName = "nostrum";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            GETSwapEnvironmentCNAMEsResponse res = sdk.sdk.getSwapEnvironmentCNAMEs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTerminateEnvironment

Terminates the specified environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTerminateEnvironmentActionEnum;
import org.openapis.openapi.models.operations.GETTerminateEnvironmentRequest;
import org.openapis.openapi.models.operations.GETTerminateEnvironmentResponse;
import org.openapis.openapi.models.operations.GETTerminateEnvironmentVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETTerminateEnvironmentRequest req = new GETTerminateEnvironmentRequest(GETTerminateEnvironmentActionEnum.TERMINATE_ENVIRONMENT, GETTerminateEnvironmentVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                environmentId = "blanditiis";
                environmentName = "error";
                forceTerminate = false;
                terminateResources = false;
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "rerum";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "modi";
            }};            

            GETTerminateEnvironmentResponse res = sdk.sdk.getTerminateEnvironment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateApplication

<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateApplicationActionEnum;
import org.openapis.openapi.models.operations.GETUpdateApplicationRequest;
import org.openapis.openapi.models.operations.GETUpdateApplicationResponse;
import org.openapis.openapi.models.operations.GETUpdateApplicationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateApplicationRequest req = new GETUpdateApplicationRequest(GETUpdateApplicationActionEnum.UPDATE_APPLICATION, "dolorum", GETUpdateApplicationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                description = "deleniti";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nobis";
                xAmzDate = "libero";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "quos";
            }};            

            GETUpdateApplicationResponse res = sdk.sdk.getUpdateApplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUpdateApplicationVersion

<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUpdateApplicationVersionActionEnum;
import org.openapis.openapi.models.operations.GETUpdateApplicationVersionRequest;
import org.openapis.openapi.models.operations.GETUpdateApplicationVersionResponse;
import org.openapis.openapi.models.operations.GETUpdateApplicationVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETUpdateApplicationVersionRequest req = new GETUpdateApplicationVersionRequest(GETUpdateApplicationVersionActionEnum.UPDATE_APPLICATION_VERSION, "dolorem", GETUpdateApplicationVersionVersionEnum.TWO_THOUSAND_AND_TEN1201, "dolorem") {{
                description = "dolor";
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "hic";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "cum";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "dignissimos";
            }};            

            GETUpdateApplicationVersionResponse res = sdk.sdk.getUpdateApplicationVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAbortEnvironmentUpdate

Cancels in-progress environment configuration update or application version deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAbortEnvironmentUpdateActionEnum;
import org.openapis.openapi.models.operations.POSTAbortEnvironmentUpdateRequest;
import org.openapis.openapi.models.operations.POSTAbortEnvironmentUpdateResponse;
import org.openapis.openapi.models.operations.POSTAbortEnvironmentUpdateVersionEnum;
import org.openapis.openapi.models.shared.AbortEnvironmentUpdateMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAbortEnvironmentUpdateRequest req = new POSTAbortEnvironmentUpdateRequest(POSTAbortEnvironmentUpdateActionEnum.ABORT_ENVIRONMENT_UPDATE, POSTAbortEnvironmentUpdateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "amet".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
            }};            

            POSTAbortEnvironmentUpdateResponse res = sdk.sdk.postAbortEnvironmentUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApplyEnvironmentManagedAction

Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTApplyEnvironmentManagedActionActionEnum;
import org.openapis.openapi.models.operations.POSTApplyEnvironmentManagedActionRequest;
import org.openapis.openapi.models.operations.POSTApplyEnvironmentManagedActionResponse;
import org.openapis.openapi.models.operations.POSTApplyEnvironmentManagedActionVersionEnum;
import org.openapis.openapi.models.shared.ApplyEnvironmentManagedActionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTApplyEnvironmentManagedActionRequest req = new POSTApplyEnvironmentManagedActionRequest(POSTApplyEnvironmentManagedActionActionEnum.APPLY_ENVIRONMENT_MANAGED_ACTION, POSTApplyEnvironmentManagedActionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            POSTApplyEnvironmentManagedActionResponse res = sdk.sdk.postApplyEnvironmentManagedAction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAssociateEnvironmentOperationsRole

Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAssociateEnvironmentOperationsRoleActionEnum;
import org.openapis.openapi.models.operations.POSTAssociateEnvironmentOperationsRoleRequest;
import org.openapis.openapi.models.operations.POSTAssociateEnvironmentOperationsRoleResponse;
import org.openapis.openapi.models.operations.POSTAssociateEnvironmentOperationsRoleVersionEnum;
import org.openapis.openapi.models.shared.AssociateEnvironmentOperationsRoleMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAssociateEnvironmentOperationsRoleRequest req = new POSTAssociateEnvironmentOperationsRoleRequest(POSTAssociateEnvironmentOperationsRoleActionEnum.ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE, POSTAssociateEnvironmentOperationsRoleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "ab".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
            }};            

            POSTAssociateEnvironmentOperationsRoleResponse res = sdk.sdk.postAssociateEnvironmentOperationsRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCheckDNSAvailability

Checks if the specified CNAME is available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCheckDNSAvailabilityActionEnum;
import org.openapis.openapi.models.operations.POSTCheckDNSAvailabilityRequest;
import org.openapis.openapi.models.operations.POSTCheckDNSAvailabilityResponse;
import org.openapis.openapi.models.operations.POSTCheckDNSAvailabilityVersionEnum;
import org.openapis.openapi.models.shared.CheckDNSAvailabilityMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCheckDNSAvailabilityRequest req = new POSTCheckDNSAvailabilityRequest(POSTCheckDNSAvailabilityActionEnum.CHECK_DNS_AVAILABILITY, POSTCheckDNSAvailabilityVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "distinctio".getBytes();
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            POSTCheckDNSAvailabilityResponse res = sdk.sdk.postCheckDNSAvailability(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postComposeEnvironments

Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTComposeEnvironmentsActionEnum;
import org.openapis.openapi.models.operations.POSTComposeEnvironmentsRequest;
import org.openapis.openapi.models.operations.POSTComposeEnvironmentsResponse;
import org.openapis.openapi.models.operations.POSTComposeEnvironmentsVersionEnum;
import org.openapis.openapi.models.shared.ComposeEnvironmentsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTComposeEnvironmentsRequest req = new POSTComposeEnvironmentsRequest(POSTComposeEnvironmentsActionEnum.COMPOSE_ENVIRONMENTS, POSTComposeEnvironmentsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "perferendis".getBytes();
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            POSTComposeEnvironmentsResponse res = sdk.sdk.postComposeEnvironments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateApplication

Creates an application that has one configuration template named <code>default</code> and no application versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateApplicationActionEnum;
import org.openapis.openapi.models.operations.POSTCreateApplicationRequest;
import org.openapis.openapi.models.operations.POSTCreateApplicationResponse;
import org.openapis.openapi.models.operations.POSTCreateApplicationVersionEnum;
import org.openapis.openapi.models.shared.ApplicationResourceLifecycleConfig;
import org.openapis.openapi.models.shared.ApplicationVersionLifecycleConfig;
import org.openapis.openapi.models.shared.CreateApplicationMessage;
import org.openapis.openapi.models.shared.MaxAgeRule;
import org.openapis.openapi.models.shared.MaxCountRule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateApplicationRequest req = new POSTCreateApplicationRequest(POSTCreateApplicationActionEnum.CREATE_APPLICATION, POSTCreateApplicationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "minima".getBytes();
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
            }};            

            POSTCreateApplicationResponse res = sdk.sdk.postCreateApplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateApplicationVersion

<p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateApplicationVersionActionEnum;
import org.openapis.openapi.models.operations.POSTCreateApplicationVersionRequest;
import org.openapis.openapi.models.operations.POSTCreateApplicationVersionResponse;
import org.openapis.openapi.models.operations.POSTCreateApplicationVersionVersionEnum;
import org.openapis.openapi.models.shared.BuildConfiguration;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.CreateApplicationVersionMessage;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceBuildInformation;
import org.openapis.openapi.models.shared.SourceRepositoryEnum;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateApplicationVersionRequest req = new POSTCreateApplicationVersionRequest(POSTCreateApplicationVersionActionEnum.CREATE_APPLICATION_VERSION, POSTCreateApplicationVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quod".getBytes();
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            POSTCreateApplicationVersionResponse res = sdk.sdk.postCreateApplicationVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateConfigurationTemplate

<p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateConfigurationTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTCreateConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.POSTCreateConfigurationTemplateResponse;
import org.openapis.openapi.models.operations.POSTCreateConfigurationTemplateVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationOptionSetting;
import org.openapis.openapi.models.shared.CreateConfigurationTemplateMessage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceConfiguration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateConfigurationTemplateRequest req = new POSTCreateConfigurationTemplateRequest(POSTCreateConfigurationTemplateActionEnum.CREATE_CONFIGURATION_TEMPLATE, POSTCreateConfigurationTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
            }};            

            POSTCreateConfigurationTemplateResponse res = sdk.sdk.postCreateConfigurationTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateEnvironment

Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateEnvironmentActionEnum;
import org.openapis.openapi.models.operations.POSTCreateEnvironmentRequest;
import org.openapis.openapi.models.operations.POSTCreateEnvironmentResponse;
import org.openapis.openapi.models.operations.POSTCreateEnvironmentVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationOptionSetting;
import org.openapis.openapi.models.shared.CreateEnvironmentMessage;
import org.openapis.openapi.models.shared.EnvironmentTier;
import org.openapis.openapi.models.shared.OptionSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateEnvironmentRequest req = new POSTCreateEnvironmentRequest(POSTCreateEnvironmentActionEnum.CREATE_ENVIRONMENT, POSTCreateEnvironmentVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            POSTCreateEnvironmentResponse res = sdk.sdk.postCreateEnvironment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreatePlatformVersion

Create a new version of your custom platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreatePlatformVersionActionEnum;
import org.openapis.openapi.models.operations.POSTCreatePlatformVersionRequest;
import org.openapis.openapi.models.operations.POSTCreatePlatformVersionResponse;
import org.openapis.openapi.models.operations.POSTCreatePlatformVersionVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationOptionSetting;
import org.openapis.openapi.models.shared.CreatePlatformVersionRequest;
import org.openapis.openapi.models.shared.S3Location;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreatePlatformVersionRequest req = new POSTCreatePlatformVersionRequest(POSTCreatePlatformVersionActionEnum.CREATE_PLATFORM_VERSION, POSTCreatePlatformVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "deserunt".getBytes();
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "incidunt";
                xAmzDate = "qui";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "pariatur";
            }};            

            POSTCreatePlatformVersionResponse res = sdk.sdk.postCreatePlatformVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateStorageLocation

Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateStorageLocationActionEnum;
import org.openapis.openapi.models.operations.POSTCreateStorageLocationRequest;
import org.openapis.openapi.models.operations.POSTCreateStorageLocationResponse;
import org.openapis.openapi.models.operations.POSTCreateStorageLocationVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateStorageLocationRequest req = new POSTCreateStorageLocationRequest(POSTCreateStorageLocationActionEnum.CREATE_STORAGE_LOCATION, POSTCreateStorageLocationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            POSTCreateStorageLocationResponse res = sdk.sdk.postCreateStorageLocation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteApplication

<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteApplicationActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteApplicationRequest;
import org.openapis.openapi.models.operations.POSTDeleteApplicationResponse;
import org.openapis.openapi.models.operations.POSTDeleteApplicationVersionEnum;
import org.openapis.openapi.models.shared.DeleteApplicationMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteApplicationRequest req = new POSTDeleteApplicationRequest(POSTDeleteApplicationActionEnum.DELETE_APPLICATION, POSTDeleteApplicationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "aliquid".getBytes();
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "temporibus";
                xAmzDate = "qui";
                xAmzSecurityToken = "neque";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "magni";
            }};            

            POSTDeleteApplicationResponse res = sdk.sdk.postDeleteApplication(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteApplicationVersion

<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteApplicationVersionActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteApplicationVersionRequest;
import org.openapis.openapi.models.operations.POSTDeleteApplicationVersionResponse;
import org.openapis.openapi.models.operations.POSTDeleteApplicationVersionVersionEnum;
import org.openapis.openapi.models.shared.DeleteApplicationVersionMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteApplicationVersionRequest req = new POSTDeleteApplicationVersionRequest(POSTDeleteApplicationVersionActionEnum.DELETE_APPLICATION_VERSION, POSTDeleteApplicationVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "sunt".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTDeleteApplicationVersionResponse res = sdk.sdk.postDeleteApplicationVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteConfigurationTemplate

<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationTemplateResponse;
import org.openapis.openapi.models.operations.POSTDeleteConfigurationTemplateVersionEnum;
import org.openapis.openapi.models.shared.DeleteConfigurationTemplateMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteConfigurationTemplateRequest req = new POSTDeleteConfigurationTemplateRequest(POSTDeleteConfigurationTemplateActionEnum.DELETE_CONFIGURATION_TEMPLATE, POSTDeleteConfigurationTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "saepe".getBytes();
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            POSTDeleteConfigurationTemplateResponse res = sdk.sdk.postDeleteConfigurationTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteEnvironmentConfiguration

<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteEnvironmentConfigurationActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteEnvironmentConfigurationRequest;
import org.openapis.openapi.models.operations.POSTDeleteEnvironmentConfigurationResponse;
import org.openapis.openapi.models.operations.POSTDeleteEnvironmentConfigurationVersionEnum;
import org.openapis.openapi.models.shared.DeleteEnvironmentConfigurationMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteEnvironmentConfigurationRequest req = new POSTDeleteEnvironmentConfigurationRequest(POSTDeleteEnvironmentConfigurationActionEnum.DELETE_ENVIRONMENT_CONFIGURATION, POSTDeleteEnvironmentConfigurationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "dolorem".getBytes();
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "adipisci";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "aut";
            }};            

            POSTDeleteEnvironmentConfigurationResponse res = sdk.sdk.postDeleteEnvironmentConfiguration(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeletePlatformVersion

Deletes the specified version of a custom platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeletePlatformVersionActionEnum;
import org.openapis.openapi.models.operations.POSTDeletePlatformVersionRequest;
import org.openapis.openapi.models.operations.POSTDeletePlatformVersionResponse;
import org.openapis.openapi.models.operations.POSTDeletePlatformVersionVersionEnum;
import org.openapis.openapi.models.shared.DeletePlatformVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeletePlatformVersionRequest req = new POSTDeletePlatformVersionRequest(POSTDeletePlatformVersionActionEnum.DELETE_PLATFORM_VERSION, POSTDeletePlatformVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "itaque".getBytes();
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "repellendus";
                xAmzDate = "porro";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "facilis";
            }};            

            POSTDeletePlatformVersionResponse res = sdk.sdk.postDeletePlatformVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAccountAttributes

<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.POSTDescribeAccountAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAccountAttributesRequest req = new POSTDescribeAccountAttributesRequest(POSTDescribeAccountAttributesActionEnum.DESCRIBE_ACCOUNT_ATTRIBUTES, POSTDescribeAccountAttributesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quae";
                xAmzCredential = "laudantium";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quisquam";
            }};            

            POSTDescribeAccountAttributesResponse res = sdk.sdk.postDescribeAccountAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeApplicationVersions

Retrieve a list of application versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeApplicationVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeApplicationVersionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeApplicationVersionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeApplicationVersionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeApplicationVersionsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeApplicationVersionsRequest req = new POSTDescribeApplicationVersionsRequest(POSTDescribeApplicationVersionsActionEnum.DESCRIBE_APPLICATION_VERSIONS, POSTDescribeApplicationVersionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "omnis".getBytes();
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
            }};            

            POSTDescribeApplicationVersionsResponse res = sdk.sdk.postDescribeApplicationVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeApplications

Returns the descriptions of existing applications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeApplicationsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeApplicationsRequest;
import org.openapis.openapi.models.operations.POSTDescribeApplicationsResponse;
import org.openapis.openapi.models.operations.POSTDescribeApplicationsVersionEnum;
import org.openapis.openapi.models.shared.DescribeApplicationsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeApplicationsRequest req = new POSTDescribeApplicationsRequest(POSTDescribeApplicationsActionEnum.DESCRIBE_APPLICATIONS, POSTDescribeApplicationsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quod";
                xAmzCredential = "odio";
                xAmzDate = "similique";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "ducimus";
            }};            

            POSTDescribeApplicationsResponse res = sdk.sdk.postDescribeApplications(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeConfigurationOptions

Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationOptionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationOptionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationOptionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationOptionsVersionEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationOptionsMessage;
import org.openapis.openapi.models.shared.OptionSpecification;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeConfigurationOptionsRequest req = new POSTDescribeConfigurationOptionsRequest(POSTDescribeConfigurationOptionsActionEnum.DESCRIBE_CONFIGURATION_OPTIONS, POSTDescribeConfigurationOptionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quibusdam".getBytes();
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "natus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "exercitationem";
            }};            

            POSTDescribeConfigurationOptionsResponse res = sdk.sdk.postDescribeConfigurationOptions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeConfigurationSettings

<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSettingsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSettingsRequest;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSettingsResponse;
import org.openapis.openapi.models.operations.POSTDescribeConfigurationSettingsVersionEnum;
import org.openapis.openapi.models.shared.DescribeConfigurationSettingsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeConfigurationSettingsRequest req = new POSTDescribeConfigurationSettingsRequest(POSTDescribeConfigurationSettingsActionEnum.DESCRIBE_CONFIGURATION_SETTINGS, POSTDescribeConfigurationSettingsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "fugit".getBytes();
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "doloribus";
                xAmzDate = "iusto";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "alias";
            }};            

            POSTDescribeConfigurationSettingsResponse res = sdk.sdk.postDescribeConfigurationSettings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEnvironmentHealth

Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentHealthActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentHealthRequest;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentHealthResponse;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentHealthVersionEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentHealthRequest;
import org.openapis.openapi.models.shared.EnvironmentHealthAttributeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEnvironmentHealthRequest req = new POSTDescribeEnvironmentHealthRequest(POSTDescribeEnvironmentHealthActionEnum.DESCRIBE_ENVIRONMENT_HEALTH, POSTDescribeEnvironmentHealthVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "tempora".getBytes();
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aspernatur";
                xAmzDate = "vel";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ratione";
            }};            

            POSTDescribeEnvironmentHealthResponse res = sdk.sdk.postDescribeEnvironmentHealth(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEnvironmentManagedActionHistory

Lists an environment's completed and failed managed actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionHistoryActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionHistoryRequest;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionHistoryResponse;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionHistoryVersionEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentManagedActionHistoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEnvironmentManagedActionHistoryRequest req = new POSTDescribeEnvironmentManagedActionHistoryRequest(POSTDescribeEnvironmentManagedActionHistoryActionEnum.DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY, POSTDescribeEnvironmentManagedActionHistoryVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxItems = "laudantium";
                nextToken = "dicta";
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "ex";
                xAmzDate = "nulla";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "nostrum";
            }};            

            POSTDescribeEnvironmentManagedActionHistoryResponse res = sdk.sdk.postDescribeEnvironmentManagedActionHistory(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEnvironmentManagedActions

Lists an environment's upcoming and in-progress managed actions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentManagedActionsVersionEnum;
import org.openapis.openapi.models.shared.ActionStatusEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentManagedActionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEnvironmentManagedActionsRequest req = new POSTDescribeEnvironmentManagedActionsRequest(POSTDescribeEnvironmentManagedActionsActionEnum.DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS, POSTDescribeEnvironmentManagedActionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quisquam".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "ea";
                xAmzCredential = "impedit";
                xAmzDate = "corporis";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "inventore";
            }};            

            POSTDescribeEnvironmentManagedActionsResponse res = sdk.sdk.postDescribeEnvironmentManagedActions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEnvironmentResources

Returns AWS resources for this environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentResourcesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentResourcesRequest;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentResourcesResponse;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentResourcesVersionEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentResourcesMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEnvironmentResourcesRequest req = new POSTDescribeEnvironmentResourcesRequest(POSTDescribeEnvironmentResourcesActionEnum.DESCRIBE_ENVIRONMENT_RESOURCES, POSTDescribeEnvironmentResourcesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "ea".getBytes();
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "recusandae";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "minima";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "a";
            }};            

            POSTDescribeEnvironmentResourcesResponse res = sdk.sdk.postDescribeEnvironmentResources(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEnvironments

Returns descriptions for existing environments.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEnvironmentsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEnvironmentsMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEnvironmentsRequest req = new POSTDescribeEnvironmentsRequest(POSTDescribeEnvironmentsActionEnum.DESCRIBE_ENVIRONMENTS, POSTDescribeEnvironmentsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
            }};            

            POSTDescribeEnvironmentsResponse res = sdk.sdk.postDescribeEnvironments(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeEvents

<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeEventsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeEventsRequest;
import org.openapis.openapi.models.operations.POSTDescribeEventsResponse;
import org.openapis.openapi.models.operations.POSTDescribeEventsVersionEnum;
import org.openapis.openapi.models.shared.DescribeEventsMessage;
import org.openapis.openapi.models.shared.EventSeverityEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeEventsRequest req = new POSTDescribeEventsRequest(POSTDescribeEventsActionEnum.DESCRIBE_EVENTS, POSTDescribeEventsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxRecords = "et";
                nextToken = "dolorum";
                requestBody = "laborum".getBytes();
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "velit";
                xAmzCredential = "eum";
                xAmzDate = "autem";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "assumenda";
            }};            

            POSTDescribeEventsResponse res = sdk.sdk.postDescribeEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeInstancesHealth

Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeInstancesHealthActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeInstancesHealthRequest;
import org.openapis.openapi.models.operations.POSTDescribeInstancesHealthResponse;
import org.openapis.openapi.models.operations.POSTDescribeInstancesHealthVersionEnum;
import org.openapis.openapi.models.shared.DescribeInstancesHealthRequest;
import org.openapis.openapi.models.shared.InstancesHealthAttributeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeInstancesHealthRequest req = new POSTDescribeInstancesHealthRequest(POSTDescribeInstancesHealthActionEnum.DESCRIBE_INSTANCES_HEALTH, POSTDescribeInstancesHealthVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "tempora";
                xAmzDate = "numquam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "ipsa";
            }};            

            POSTDescribeInstancesHealthResponse res = sdk.sdk.postDescribeInstancesHealth(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribePlatformVersion

<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribePlatformVersionActionEnum;
import org.openapis.openapi.models.operations.POSTDescribePlatformVersionRequest;
import org.openapis.openapi.models.operations.POSTDescribePlatformVersionResponse;
import org.openapis.openapi.models.operations.POSTDescribePlatformVersionVersionEnum;
import org.openapis.openapi.models.shared.DescribePlatformVersionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribePlatformVersionRequest req = new POSTDescribePlatformVersionRequest(POSTDescribePlatformVersionActionEnum.DESCRIBE_PLATFORM_VERSION, POSTDescribePlatformVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "magnam".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "eius";
                xAmzCredential = "esse";
                xAmzDate = "esse";
                xAmzSecurityToken = "rem";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            POSTDescribePlatformVersionResponse res = sdk.sdk.postDescribePlatformVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisassociateEnvironmentOperationsRole

Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisassociateEnvironmentOperationsRoleActionEnum;
import org.openapis.openapi.models.operations.POSTDisassociateEnvironmentOperationsRoleRequest;
import org.openapis.openapi.models.operations.POSTDisassociateEnvironmentOperationsRoleResponse;
import org.openapis.openapi.models.operations.POSTDisassociateEnvironmentOperationsRoleVersionEnum;
import org.openapis.openapi.models.shared.DisassociateEnvironmentOperationsRoleMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisassociateEnvironmentOperationsRoleRequest req = new POSTDisassociateEnvironmentOperationsRoleRequest(POSTDisassociateEnvironmentOperationsRoleActionEnum.DISASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE, POSTDisassociateEnvironmentOperationsRoleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "fugiat".getBytes();
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "eum";
                xAmzCredential = "suscipit";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "eos";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "quisquam";
            }};            

            POSTDisassociateEnvironmentOperationsRoleResponse res = sdk.sdk.postDisassociateEnvironmentOperationsRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListAvailableSolutionStacks

Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListAvailableSolutionStacksActionEnum;
import org.openapis.openapi.models.operations.POSTListAvailableSolutionStacksRequest;
import org.openapis.openapi.models.operations.POSTListAvailableSolutionStacksResponse;
import org.openapis.openapi.models.operations.POSTListAvailableSolutionStacksVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListAvailableSolutionStacksRequest req = new POSTListAvailableSolutionStacksRequest(POSTListAvailableSolutionStacksActionEnum.LIST_AVAILABLE_SOLUTION_STACKS, POSTListAvailableSolutionStacksVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "id";
                xAmzCredential = "quidem";
                xAmzDate = "neque";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "quo";
            }};            

            POSTListAvailableSolutionStacksResponse res = sdk.sdk.postListAvailableSolutionStacks(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListPlatformBranches

<p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListPlatformBranchesActionEnum;
import org.openapis.openapi.models.operations.POSTListPlatformBranchesRequest;
import org.openapis.openapi.models.operations.POSTListPlatformBranchesResponse;
import org.openapis.openapi.models.operations.POSTListPlatformBranchesVersionEnum;
import org.openapis.openapi.models.shared.ListPlatformBranchesRequest;
import org.openapis.openapi.models.shared.SearchFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListPlatformBranchesRequest req = new POSTListPlatformBranchesRequest(POSTListPlatformBranchesActionEnum.LIST_PLATFORM_BRANCHES, POSTListPlatformBranchesVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxRecords = "eius";
                nextToken = "eos";
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
            }};            

            POSTListPlatformBranchesResponse res = sdk.sdk.postListPlatformBranches(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListPlatformVersions

<p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListPlatformVersionsActionEnum;
import org.openapis.openapi.models.operations.POSTListPlatformVersionsRequest;
import org.openapis.openapi.models.operations.POSTListPlatformVersionsResponse;
import org.openapis.openapi.models.operations.POSTListPlatformVersionsVersionEnum;
import org.openapis.openapi.models.shared.ListPlatformVersionsRequest;
import org.openapis.openapi.models.shared.PlatformFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListPlatformVersionsRequest req = new POSTListPlatformVersionsRequest(POSTListPlatformVersionsActionEnum.LIST_PLATFORM_VERSIONS, POSTListPlatformVersionsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                maxRecords = "quo";
                nextToken = "esse";
                requestBody = "recusandae".getBytes();
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quod";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "totam";
            }};            

            POSTListPlatformVersionsResponse res = sdk.sdk.postListPlatformVersions(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postListTagsForResource

<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTListTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.POSTListTagsForResourceRequest;
import org.openapis.openapi.models.operations.POSTListTagsForResourceResponse;
import org.openapis.openapi.models.operations.POSTListTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTListTagsForResourceRequest req = new POSTListTagsForResourceRequest(POSTListTagsForResourceActionEnum.LIST_TAGS_FOR_RESOURCE, POSTListTagsForResourceVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "aliquam".getBytes();
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            POSTListTagsForResourceResponse res = sdk.sdk.postListTagsForResource(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRebuildEnvironment

Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRebuildEnvironmentActionEnum;
import org.openapis.openapi.models.operations.POSTRebuildEnvironmentRequest;
import org.openapis.openapi.models.operations.POSTRebuildEnvironmentResponse;
import org.openapis.openapi.models.operations.POSTRebuildEnvironmentVersionEnum;
import org.openapis.openapi.models.shared.RebuildEnvironmentMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRebuildEnvironmentRequest req = new POSTRebuildEnvironmentRequest(POSTRebuildEnvironmentActionEnum.REBUILD_ENVIRONMENT, POSTRebuildEnvironmentVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "praesentium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "fuga";
            }};            

            POSTRebuildEnvironmentResponse res = sdk.sdk.postRebuildEnvironment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRequestEnvironmentInfo

<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRequestEnvironmentInfoActionEnum;
import org.openapis.openapi.models.operations.POSTRequestEnvironmentInfoRequest;
import org.openapis.openapi.models.operations.POSTRequestEnvironmentInfoResponse;
import org.openapis.openapi.models.operations.POSTRequestEnvironmentInfoVersionEnum;
import org.openapis.openapi.models.shared.EnvironmentInfoTypeEnum;
import org.openapis.openapi.models.shared.RequestEnvironmentInfoMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRequestEnvironmentInfoRequest req = new POSTRequestEnvironmentInfoRequest(POSTRequestEnvironmentInfoActionEnum.REQUEST_ENVIRONMENT_INFO, POSTRequestEnvironmentInfoVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "incidunt".getBytes();
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            POSTRequestEnvironmentInfoResponse res = sdk.sdk.postRequestEnvironmentInfo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRestartAppServer

Causes the environment to restart the application container server running on each Amazon EC2 instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRestartAppServerActionEnum;
import org.openapis.openapi.models.operations.POSTRestartAppServerRequest;
import org.openapis.openapi.models.operations.POSTRestartAppServerResponse;
import org.openapis.openapi.models.operations.POSTRestartAppServerVersionEnum;
import org.openapis.openapi.models.shared.RestartAppServerMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRestartAppServerRequest req = new POSTRestartAppServerRequest(POSTRestartAppServerActionEnum.RESTART_APP_SERVER, POSTRestartAppServerVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "explicabo".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "atque";
                xAmzDate = "et";
                xAmzSecurityToken = "esse";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "accusamus";
            }};            

            POSTRestartAppServerResponse res = sdk.sdk.postRestartAppServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRetrieveEnvironmentInfo

<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRetrieveEnvironmentInfoActionEnum;
import org.openapis.openapi.models.operations.POSTRetrieveEnvironmentInfoRequest;
import org.openapis.openapi.models.operations.POSTRetrieveEnvironmentInfoResponse;
import org.openapis.openapi.models.operations.POSTRetrieveEnvironmentInfoVersionEnum;
import org.openapis.openapi.models.shared.EnvironmentInfoTypeEnum;
import org.openapis.openapi.models.shared.RetrieveEnvironmentInfoMessage;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRetrieveEnvironmentInfoRequest req = new POSTRetrieveEnvironmentInfoRequest(POSTRetrieveEnvironmentInfoActionEnum.RETRIEVE_ENVIRONMENT_INFO, POSTRetrieveEnvironmentInfoVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "esse".getBytes();
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "nam";
                xAmzCredential = "vero";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "vel";
            }};            

            POSTRetrieveEnvironmentInfoResponse res = sdk.sdk.postRetrieveEnvironmentInfo(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSwapEnvironmentCNAMEs

Swaps the CNAMEs of two environments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSwapEnvironmentCNAMEsActionEnum;
import org.openapis.openapi.models.operations.POSTSwapEnvironmentCNAMEsRequest;
import org.openapis.openapi.models.operations.POSTSwapEnvironmentCNAMEsResponse;
import org.openapis.openapi.models.operations.POSTSwapEnvironmentCNAMEsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SwapEnvironmentCNAMEsMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSwapEnvironmentCNAMEsRequest req = new POSTSwapEnvironmentCNAMEsRequest(POSTSwapEnvironmentCNAMEsActionEnum.SWAP_ENVIRONMENT_CNAM_ES, POSTSwapEnvironmentCNAMEsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "minima";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "culpa";
            }};            

            POSTSwapEnvironmentCNAMEsResponse res = sdk.sdk.postSwapEnvironmentCNAMEs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTerminateEnvironment

Terminates the specified environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTTerminateEnvironmentActionEnum;
import org.openapis.openapi.models.operations.POSTTerminateEnvironmentRequest;
import org.openapis.openapi.models.operations.POSTTerminateEnvironmentResponse;
import org.openapis.openapi.models.operations.POSTTerminateEnvironmentVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateEnvironmentMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTTerminateEnvironmentRequest req = new POSTTerminateEnvironmentRequest(POSTTerminateEnvironmentActionEnum.TERMINATE_ENVIRONMENT, POSTTerminateEnvironmentVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "adipisci".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "consequatur";
                xAmzDate = "minus";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consectetur";
            }};            

            POSTTerminateEnvironmentResponse res = sdk.sdk.postTerminateEnvironment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateApplication

<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateApplicationActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateApplicationRequest;
import org.openapis.openapi.models.operations.POSTUpdateApplicationResponse;
import org.openapis.openapi.models.operations.POSTUpdateApplicationVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateApplicationRequest req = new POSTUpdateApplicationRequest(POSTUpdateApplicationActionEnum.UPDATE_APPLICATION, POSTUpdateApplicationVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "blanditiis".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "a";
                xAmzCredential = "nulla";
                xAmzDate = "quas";
                xAmzSecurityToken = "esse";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "a";
            }};            

            POSTUpdateApplicationResponse res = sdk.sdk.postUpdateApplication(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateApplicationResourceLifecycle

Modifies lifecycle settings for an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateApplicationResourceLifecycleActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateApplicationResourceLifecycleRequest;
import org.openapis.openapi.models.operations.POSTUpdateApplicationResourceLifecycleResponse;
import org.openapis.openapi.models.operations.POSTUpdateApplicationResourceLifecycleVersionEnum;
import org.openapis.openapi.models.shared.ApplicationResourceLifecycleConfig;
import org.openapis.openapi.models.shared.ApplicationVersionLifecycleConfig;
import org.openapis.openapi.models.shared.MaxAgeRule;
import org.openapis.openapi.models.shared.MaxCountRule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationResourceLifecycleMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateApplicationResourceLifecycleRequest req = new POSTUpdateApplicationResourceLifecycleRequest(POSTUpdateApplicationResourceLifecycleActionEnum.UPDATE_APPLICATION_RESOURCE_LIFECYCLE, POSTUpdateApplicationResourceLifecycleVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "sint".getBytes();
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "quia";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "veritatis";
            }};            

            POSTUpdateApplicationResourceLifecycleResponse res = sdk.sdk.postUpdateApplicationResourceLifecycle(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateApplicationVersion

<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateApplicationVersionActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateApplicationVersionRequest;
import org.openapis.openapi.models.operations.POSTUpdateApplicationVersionResponse;
import org.openapis.openapi.models.operations.POSTUpdateApplicationVersionVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationVersionMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateApplicationVersionRequest req = new POSTUpdateApplicationVersionRequest(POSTUpdateApplicationVersionActionEnum.UPDATE_APPLICATION_VERSION, POSTUpdateApplicationVersionVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "quasi".getBytes();
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "aliquid";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quae";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "vel";
            }};            

            POSTUpdateApplicationVersionResponse res = sdk.sdk.postUpdateApplicationVersion(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateConfigurationTemplate

<p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationTemplateActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationTemplateRequest;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationTemplateResponse;
import org.openapis.openapi.models.operations.POSTUpdateConfigurationTemplateVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationOptionSetting;
import org.openapis.openapi.models.shared.OptionSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConfigurationTemplateMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateConfigurationTemplateRequest req = new POSTUpdateConfigurationTemplateRequest(POSTUpdateConfigurationTemplateActionEnum.UPDATE_CONFIGURATION_TEMPLATE, POSTUpdateConfigurationTemplateVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "eius".getBytes();
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            POSTUpdateConfigurationTemplateResponse res = sdk.sdk.postUpdateConfigurationTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateEnvironment

<p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateEnvironmentActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateEnvironmentRequest;
import org.openapis.openapi.models.operations.POSTUpdateEnvironmentResponse;
import org.openapis.openapi.models.operations.POSTUpdateEnvironmentVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationOptionSetting;
import org.openapis.openapi.models.shared.EnvironmentTier;
import org.openapis.openapi.models.shared.OptionSpecification;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEnvironmentMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateEnvironmentRequest req = new POSTUpdateEnvironmentRequest(POSTUpdateEnvironmentActionEnum.UPDATE_ENVIRONMENT, POSTUpdateEnvironmentVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "reprehenderit".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "aut";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "ex";
            }};            

            POSTUpdateEnvironmentResponse res = sdk.sdk.postUpdateEnvironment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateTagsForResource

<p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTUpdateTagsForResourceActionEnum;
import org.openapis.openapi.models.operations.POSTUpdateTagsForResourceRequest;
import org.openapis.openapi.models.operations.POSTUpdateTagsForResourceResponse;
import org.openapis.openapi.models.operations.POSTUpdateTagsForResourceVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateTagsForResourceMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTUpdateTagsForResourceRequest req = new POSTUpdateTagsForResourceRequest(POSTUpdateTagsForResourceActionEnum.UPDATE_TAGS_FOR_RESOURCE, POSTUpdateTagsForResourceVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "itaque".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "omnis";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "at";
                xAmzSignedHeaders = "et";
            }};            

            POSTUpdateTagsForResourceResponse res = sdk.sdk.postUpdateTagsForResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postValidateConfigurationSettings

<p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTValidateConfigurationSettingsActionEnum;
import org.openapis.openapi.models.operations.POSTValidateConfigurationSettingsRequest;
import org.openapis.openapi.models.operations.POSTValidateConfigurationSettingsResponse;
import org.openapis.openapi.models.operations.POSTValidateConfigurationSettingsVersionEnum;
import org.openapis.openapi.models.shared.ConfigurationOptionSetting;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ValidateConfigurationSettingsMessage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTValidateConfigurationSettingsRequest req = new POSTValidateConfigurationSettingsRequest(POSTValidateConfigurationSettingsActionEnum.VALIDATE_CONFIGURATION_SETTINGS, POSTValidateConfigurationSettingsVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                requestBody = "ipsa".getBytes();
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "consectetur";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "iste";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "accusantium";
            }};            

            POSTValidateConfigurationSettingsResponse res = sdk.sdk.postValidateConfigurationSettings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
