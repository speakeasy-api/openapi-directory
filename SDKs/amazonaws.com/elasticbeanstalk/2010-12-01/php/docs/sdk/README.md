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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAbortEnvironmentUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAbortEnvironmentUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAbortEnvironmentUpdateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAbortEnvironmentUpdateRequest();
    $request->action = GETAbortEnvironmentUpdateActionEnum::ABORT_ENVIRONMENT_UPDATE;
    $request->environmentId = 'error';
    $request->environmentName = 'deserunt';
    $request->version = GETAbortEnvironmentUpdateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->getAbortEnvironmentUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplyEnvironmentManagedAction

Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETApplyEnvironmentManagedActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETApplyEnvironmentManagedActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETApplyEnvironmentManagedActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETApplyEnvironmentManagedActionRequest();
    $request->action = GETApplyEnvironmentManagedActionActionEnum::APPLY_ENVIRONMENT_MANAGED_ACTION;
    $request->actionId = 'suscipit';
    $request->environmentId = 'molestiae';
    $request->environmentName = 'minus';
    $request->version = GETApplyEnvironmentManagedActionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->getApplyEnvironmentManagedAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociateEnvironmentOperationsRole

Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAssociateEnvironmentOperationsRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAssociateEnvironmentOperationsRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAssociateEnvironmentOperationsRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAssociateEnvironmentOperationsRoleRequest();
    $request->action = GETAssociateEnvironmentOperationsRoleActionEnum::ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE;
    $request->environmentName = 'ab';
    $request->operationsRole = 'quis';
    $request->version = GETAssociateEnvironmentOperationsRoleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->getAssociateEnvironmentOperationsRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCheckDNSAvailability

Checks if the specified CNAME is available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCheckDNSAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCheckDNSAvailabilityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCheckDNSAvailabilityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCheckDNSAvailabilityRequest();
    $request->action = GETCheckDNSAvailabilityActionEnum::CHECK_DNS_AVAILABILITY;
    $request->cnamePrefix = 'odit';
    $request->version = GETCheckDNSAvailabilityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getCheckDNSAvailability($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComposeEnvironments

Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETComposeEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETComposeEnvironmentsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETComposeEnvironmentsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETComposeEnvironmentsRequest();
    $request->action = GETComposeEnvironmentsActionEnum::COMPOSE_ENVIRONMENTS;
    $request->applicationName = 'totam';
    $request->groupName = 'porro';
    $request->version = GETComposeEnvironmentsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->versionLabels = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->getComposeEnvironments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateStorageLocation

Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateStorageLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateStorageLocationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateStorageLocationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateStorageLocationRequest();
    $request->action = GETCreateStorageLocationActionEnum::CREATE_STORAGE_LOCATION;
    $request->version = GETCreateStorageLocationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getCreateStorageLocation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteApplication

<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteApplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteApplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteApplicationRequest();
    $request->action = GETDeleteApplicationActionEnum::DELETE_APPLICATION;
    $request->applicationName = 'ipsum';
    $request->terminateEnvByForce = false;
    $request->version = GETDeleteApplicationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->getDeleteApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteApplicationVersion

<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteApplicationVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteApplicationVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteApplicationVersionRequest();
    $request->action = GETDeleteApplicationVersionActionEnum::DELETE_APPLICATION_VERSION;
    $request->applicationName = 'dolor';
    $request->deleteSourceBundle = false;
    $request->version = GETDeleteApplicationVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->versionLabel = 'natus';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->getDeleteApplicationVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteConfigurationTemplate

<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteConfigurationTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteConfigurationTemplateRequest();
    $request->action = GETDeleteConfigurationTemplateActionEnum::DELETE_CONFIGURATION_TEMPLATE;
    $request->applicationName = 'iure';
    $request->templateName = 'saepe';
    $request->version = GETDeleteConfigurationTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getDeleteConfigurationTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteEnvironmentConfiguration

<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEnvironmentConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEnvironmentConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteEnvironmentConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteEnvironmentConfigurationRequest();
    $request->action = GETDeleteEnvironmentConfigurationActionEnum::DELETE_ENVIRONMENT_CONFIGURATION;
    $request->applicationName = 'dolores';
    $request->environmentName = 'dolorem';
    $request->version = GETDeleteEnvironmentConfigurationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->getDeleteEnvironmentConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeletePlatformVersion

Deletes the specified version of a custom platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePlatformVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePlatformVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeletePlatformVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeletePlatformVersionRequest();
    $request->action = GETDeletePlatformVersionActionEnum::DELETE_PLATFORM_VERSION;
    $request->platformArn = 'excepturi';
    $request->version = GETDeletePlatformVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->getDeletePlatformVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAccountAttributes

<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAccountAttributesRequest();
    $request->action = GETDescribeAccountAttributesActionEnum::DESCRIBE_ACCOUNT_ATTRIBUTES;
    $request->version = GETDescribeAccountAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getDescribeAccountAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeApplicationVersions

Retrieve a list of application versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeApplicationVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeApplicationVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeApplicationVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeApplicationVersionsRequest();
    $request->action = GETDescribeApplicationVersionsActionEnum::DESCRIBE_APPLICATION_VERSIONS;
    $request->applicationName = 'commodi';
    $request->maxRecords = 466311;
    $request->nextToken = 'molestiae';
    $request->version = GETDescribeApplicationVersionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->versionLabels = [
        'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getDescribeApplicationVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeApplications

Returns the descriptions of existing applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeApplicationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeApplicationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeApplicationsRequest();
    $request->action = GETDescribeApplicationsActionEnum::DESCRIBE_APPLICATIONS;
    $request->applicationNames = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->version = GETDescribeApplicationsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getDescribeApplications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeConfigurationSettings

<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeConfigurationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeConfigurationSettingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeConfigurationSettingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeConfigurationSettingsRequest();
    $request->action = GETDescribeConfigurationSettingsActionEnum::DESCRIBE_CONFIGURATION_SETTINGS;
    $request->applicationName = 'reiciendis';
    $request->environmentName = 'voluptatibus';
    $request->templateName = 'vero';
    $request->version = GETDescribeConfigurationSettingsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->getDescribeConfigurationSettings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEnvironmentHealth

Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentHealthAttributeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEnvironmentHealthRequest();
    $request->action = GETDescribeEnvironmentHealthActionEnum::DESCRIBE_ENVIRONMENT_HEALTH;
    $request->attributeNames = [
        EnvironmentHealthAttributeEnum::STATUS,
    ];
    $request->environmentId = 'reprehenderit';
    $request->environmentName = 'ut';
    $request->version = GETDescribeEnvironmentHealthVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->getDescribeEnvironmentHealth($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEnvironmentManagedActionHistory

Lists an environment's completed and failed managed actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentManagedActionHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentManagedActionHistoryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentManagedActionHistoryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEnvironmentManagedActionHistoryRequest();
    $request->action = GETDescribeEnvironmentManagedActionHistoryActionEnum::DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY;
    $request->environmentId = 'enim';
    $request->environmentName = 'accusamus';
    $request->maxItems = 414263;
    $request->nextToken = 'repudiandae';
    $request->version = GETDescribeEnvironmentManagedActionHistoryVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getDescribeEnvironmentManagedActionHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEnvironmentManagedActions

Lists an environment's upcoming and in-progress managed actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentManagedActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentManagedActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentManagedActionsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentManagedActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEnvironmentManagedActionsRequest();
    $request->action = GETDescribeEnvironmentManagedActionsActionEnum::DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS;
    $request->environmentId = 'praesentium';
    $request->environmentName = 'rem';
    $request->status = GETDescribeEnvironmentManagedActionsStatusEnum::UNKNOWN;
    $request->version = GETDescribeEnvironmentManagedActionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDescribeEnvironmentManagedActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEnvironmentResources

Returns AWS resources for this environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentResourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentResourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEnvironmentResourcesRequest();
    $request->action = GETDescribeEnvironmentResourcesActionEnum::DESCRIBE_ENVIRONMENT_RESOURCES;
    $request->environmentId = 'consequatur';
    $request->environmentName = 'est';
    $request->version = GETDescribeEnvironmentResourcesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getDescribeEnvironmentResources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEnvironments

Returns descriptions for existing environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEnvironmentsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEnvironmentsRequest();
    $request->action = GETDescribeEnvironmentsActionEnum::DESCRIBE_ENVIRONMENTS;
    $request->applicationName = 'qui';
    $request->environmentIds = [
        'cupiditate',
        'quos',
    ];
    $request->environmentNames = [
        'magni',
    ];
    $request->includeDeleted = false;
    $request->includedDeletedBackTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-22T01:26:35.048Z');
    $request->maxRecords = 4695;
    $request->nextToken = 'fugit';
    $request->version = GETDescribeEnvironmentsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->versionLabel = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->getDescribeEnvironments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeEvents

<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsSeverityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeEventsRequest();
    $request->action = GETDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->applicationName = 'non';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-10T02:35:06.342Z');
    $request->environmentId = 'aliquid';
    $request->environmentName = 'provident';
    $request->maxRecords = 896039;
    $request->nextToken = 'sint';
    $request->platformArn = 'officia';
    $request->requestId = 'dolor';
    $request->severity = GETDescribeEventsSeverityEnum::FATAL;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-17T08:08:22.040Z');
    $request->templateName = 'in';
    $request->version = GETDescribeEventsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->versionLabel = 'in';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';

    $response = $sdk->sdk->getDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeInstancesHealth

Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInstancesHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInstancesHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstancesHealthAttributeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeInstancesHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeInstancesHealthRequest();
    $request->action = GETDescribeInstancesHealthActionEnum::DESCRIBE_INSTANCES_HEALTH;
    $request->attributeNames = [
        InstancesHealthAttributeEnum::REFRESHED_AT,
        InstancesHealthAttributeEnum::DEPLOYMENT,
    ];
    $request->environmentId = 'accusamus';
    $request->environmentName = 'non';
    $request->nextToken = 'occaecati';
    $request->version = GETDescribeInstancesHealthVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->getDescribeInstancesHealth($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribePlatformVersion

<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePlatformVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePlatformVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribePlatformVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribePlatformVersionRequest();
    $request->action = GETDescribePlatformVersionActionEnum::DESCRIBE_PLATFORM_VERSION;
    $request->platformArn = 'blanditiis';
    $request->version = GETDescribePlatformVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getDescribePlatformVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisassociateEnvironmentOperationsRole

Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateEnvironmentOperationsRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateEnvironmentOperationsRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisassociateEnvironmentOperationsRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisassociateEnvironmentOperationsRoleRequest();
    $request->action = GETDisassociateEnvironmentOperationsRoleActionEnum::DISASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE;
    $request->environmentName = 'omnis';
    $request->version = GETDisassociateEnvironmentOperationsRoleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->getDisassociateEnvironmentOperationsRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListAvailableSolutionStacks

Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListAvailableSolutionStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListAvailableSolutionStacksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListAvailableSolutionStacksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListAvailableSolutionStacksRequest();
    $request->action = GETListAvailableSolutionStacksActionEnum::LIST_AVAILABLE_SOLUTION_STACKS;
    $request->version = GETListAvailableSolutionStacksVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->getListAvailableSolutionStacks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListTagsForResource

<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListTagsForResourceRequest();
    $request->action = GETListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->resourceArn = 'architecto';
    $request->version = GETListTagsForResourceVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->getListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRebuildEnvironment

Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRebuildEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRebuildEnvironmentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRebuildEnvironmentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRebuildEnvironmentRequest();
    $request->action = GETRebuildEnvironmentActionEnum::REBUILD_ENVIRONMENT;
    $request->environmentId = 'accusantium';
    $request->environmentName = 'mollitia';
    $request->version = GETRebuildEnvironmentVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->getRebuildEnvironment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRequestEnvironmentInfo

<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRequestEnvironmentInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRequestEnvironmentInfoActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRequestEnvironmentInfoInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRequestEnvironmentInfoVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRequestEnvironmentInfoRequest();
    $request->action = GETRequestEnvironmentInfoActionEnum::REQUEST_ENVIRONMENT_INFO;
    $request->environmentId = 'nemo';
    $request->environmentName = 'quasi';
    $request->infoType = GETRequestEnvironmentInfoInfoTypeEnum::TAIL;
    $request->version = GETRequestEnvironmentInfoVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->getRequestEnvironmentInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRestartAppServer

Causes the environment to restart the application container server running on each Amazon EC2 instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRestartAppServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRestartAppServerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRestartAppServerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRestartAppServerRequest();
    $request->action = GETRestartAppServerActionEnum::RESTART_APP_SERVER;
    $request->environmentId = 'architecto';
    $request->environmentName = 'architecto';
    $request->version = GETRestartAppServerVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->getRestartAppServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetrieveEnvironmentInfo

<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRetrieveEnvironmentInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRetrieveEnvironmentInfoActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRetrieveEnvironmentInfoInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRetrieveEnvironmentInfoVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRetrieveEnvironmentInfoRequest();
    $request->action = GETRetrieveEnvironmentInfoActionEnum::RETRIEVE_ENVIRONMENT_INFO;
    $request->environmentId = 'saepe';
    $request->environmentName = 'pariatur';
    $request->infoType = GETRetrieveEnvironmentInfoInfoTypeEnum::TAIL;
    $request->version = GETRetrieveEnvironmentInfoVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->getRetrieveEnvironmentInfo($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSwapEnvironmentCNAMEs

Swaps the CNAMEs of two environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSwapEnvironmentCNAMEsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSwapEnvironmentCNAMEsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSwapEnvironmentCNAMEsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSwapEnvironmentCNAMEsRequest();
    $request->action = GETSwapEnvironmentCNAMEsActionEnum::SWAP_ENVIRONMENT_CNAM_ES;
    $request->destinationEnvironmentId = 'pariatur';
    $request->destinationEnvironmentName = 'maxime';
    $request->sourceEnvironmentId = 'ea';
    $request->sourceEnvironmentName = 'excepturi';
    $request->version = GETSwapEnvironmentCNAMEsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getSwapEnvironmentCNAMEs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTerminateEnvironment

Terminates the specified environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETTerminateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETTerminateEnvironmentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETTerminateEnvironmentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTerminateEnvironmentRequest();
    $request->action = GETTerminateEnvironmentActionEnum::TERMINATE_ENVIRONMENT;
    $request->environmentId = 'voluptate';
    $request->environmentName = 'autem';
    $request->forceTerminate = false;
    $request->terminateResources = false;
    $request->version = GETTerminateEnvironmentVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->getTerminateEnvironment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateApplication

<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateApplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateApplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateApplicationRequest();
    $request->action = GETUpdateApplicationActionEnum::UPDATE_APPLICATION;
    $request->applicationName = 'amet';
    $request->description = 'aut';
    $request->version = GETUpdateApplicationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->getUpdateApplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpdateApplicationVersion

<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateApplicationVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETUpdateApplicationVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETUpdateApplicationVersionRequest();
    $request->action = GETUpdateApplicationVersionActionEnum::UPDATE_APPLICATION_VERSION;
    $request->applicationName = 'totam';
    $request->description = 'dignissimos';
    $request->version = GETUpdateApplicationVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->versionLabel = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->getUpdateApplicationVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAbortEnvironmentUpdate

Cancels in-progress environment configuration update or application version deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAbortEnvironmentUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAbortEnvironmentUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAbortEnvironmentUpdateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAbortEnvironmentUpdateRequest();
    $request->action = POSTAbortEnvironmentUpdateActionEnum::ABORT_ENVIRONMENT_UPDATE;
    $request->requestBody = 'dolor';
    $request->version = POSTAbortEnvironmentUpdateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';

    $response = $sdk->sdk->postAbortEnvironmentUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApplyEnvironmentManagedAction

Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplyEnvironmentManagedActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplyEnvironmentManagedActionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplyEnvironmentManagedActionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTApplyEnvironmentManagedActionRequest();
    $request->action = POSTApplyEnvironmentManagedActionActionEnum::APPLY_ENVIRONMENT_MANAGED_ACTION;
    $request->requestBody = 'voluptatem';
    $request->version = POSTApplyEnvironmentManagedActionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->postApplyEnvironmentManagedAction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssociateEnvironmentOperationsRole

Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAssociateEnvironmentOperationsRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAssociateEnvironmentOperationsRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAssociateEnvironmentOperationsRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAssociateEnvironmentOperationsRoleRequest();
    $request->action = POSTAssociateEnvironmentOperationsRoleActionEnum::ASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE;
    $request->requestBody = 'adipisci';
    $request->version = POSTAssociateEnvironmentOperationsRoleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->postAssociateEnvironmentOperationsRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCheckDNSAvailability

Checks if the specified CNAME is available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCheckDNSAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCheckDNSAvailabilityActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCheckDNSAvailabilityVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCheckDNSAvailabilityRequest();
    $request->action = POSTCheckDNSAvailabilityActionEnum::CHECK_DNS_AVAILABILITY;
    $request->requestBody = 'provident';
    $request->version = POSTCheckDNSAvailabilityVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->postCheckDNSAvailability($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postComposeEnvironments

Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTComposeEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTComposeEnvironmentsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTComposeEnvironmentsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTComposeEnvironmentsRequest();
    $request->action = POSTComposeEnvironmentsActionEnum::COMPOSE_ENVIRONMENTS;
    $request->requestBody = 'dolorem';
    $request->version = POSTComposeEnvironmentsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->postComposeEnvironments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateApplication

Creates an application that has one configuration template named <code>default</code> and no application versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateApplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateApplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateApplicationRequest();
    $request->action = POSTCreateApplicationActionEnum::CREATE_APPLICATION;
    $request->requestBody = 'dignissimos';
    $request->version = POSTCreateApplicationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postCreateApplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateApplicationVersion

<p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateApplicationVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateApplicationVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateApplicationVersionRequest();
    $request->action = POSTCreateApplicationVersionActionEnum::CREATE_APPLICATION_VERSION;
    $request->requestBody = 'iure';
    $request->version = POSTCreateApplicationVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postCreateApplicationVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateConfigurationTemplate

<p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateConfigurationTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateConfigurationTemplateRequest();
    $request->action = POSTCreateConfigurationTemplateActionEnum::CREATE_CONFIGURATION_TEMPLATE;
    $request->requestBody = 'eos';
    $request->version = POSTCreateConfigurationTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->postCreateConfigurationTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateEnvironment

Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEnvironmentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateEnvironmentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateEnvironmentRequest();
    $request->action = POSTCreateEnvironmentActionEnum::CREATE_ENVIRONMENT;
    $request->requestBody = 'voluptate';
    $request->version = POSTCreateEnvironmentVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->postCreateEnvironment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreatePlatformVersion

Create a new version of your custom platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePlatformVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePlatformVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreatePlatformVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreatePlatformVersionRequest();
    $request->action = POSTCreatePlatformVersionActionEnum::CREATE_PLATFORM_VERSION;
    $request->requestBody = 'ipsum';
    $request->version = POSTCreatePlatformVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postCreatePlatformVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateStorageLocation

Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStorageLocationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStorageLocationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateStorageLocationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateStorageLocationRequest();
    $request->action = POSTCreateStorageLocationActionEnum::CREATE_STORAGE_LOCATION;
    $request->version = POSTCreateStorageLocationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->postCreateStorageLocation($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteApplication

<p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteApplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteApplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteApplicationRequest();
    $request->action = POSTDeleteApplicationActionEnum::DELETE_APPLICATION;
    $request->requestBody = 'minima';
    $request->version = POSTDeleteApplicationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->postDeleteApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteApplicationVersion

<p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteApplicationVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteApplicationVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteApplicationVersionRequest();
    $request->action = POSTDeleteApplicationVersionActionEnum::DELETE_APPLICATION_VERSION;
    $request->requestBody = 'vel';
    $request->version = POSTDeleteApplicationVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->postDeleteApplicationVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteConfigurationTemplate

<p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteConfigurationTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteConfigurationTemplateRequest();
    $request->action = POSTDeleteConfigurationTemplateActionEnum::DELETE_CONFIGURATION_TEMPLATE;
    $request->requestBody = 'iusto';
    $request->version = POSTDeleteConfigurationTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->postDeleteConfigurationTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteEnvironmentConfiguration

<p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEnvironmentConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEnvironmentConfigurationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteEnvironmentConfigurationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteEnvironmentConfigurationRequest();
    $request->action = POSTDeleteEnvironmentConfigurationActionEnum::DELETE_ENVIRONMENT_CONFIGURATION;
    $request->requestBody = 'enim';
    $request->version = POSTDeleteEnvironmentConfigurationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';

    $response = $sdk->sdk->postDeleteEnvironmentConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeletePlatformVersion

Deletes the specified version of a custom platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePlatformVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePlatformVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeletePlatformVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeletePlatformVersionRequest();
    $request->action = POSTDeletePlatformVersionActionEnum::DELETE_PLATFORM_VERSION;
    $request->requestBody = 'sed';
    $request->version = POSTDeletePlatformVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->postDeletePlatformVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAccountAttributes

<p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAccountAttributesRequest();
    $request->action = POSTDescribeAccountAttributesActionEnum::DESCRIBE_ACCOUNT_ATTRIBUTES;
    $request->version = POSTDescribeAccountAttributesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->postDescribeAccountAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeApplicationVersions

Retrieve a list of application versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeApplicationVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeApplicationVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeApplicationVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeApplicationVersionsRequest();
    $request->action = POSTDescribeApplicationVersionsActionEnum::DESCRIBE_APPLICATION_VERSIONS;
    $request->requestBody = 'totam';
    $request->version = POSTDescribeApplicationVersionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->postDescribeApplicationVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeApplications

Returns the descriptions of existing applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeApplicationsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeApplicationsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeApplicationsRequest();
    $request->action = POSTDescribeApplicationsActionEnum::DESCRIBE_APPLICATIONS;
    $request->requestBody = 'molestias';
    $request->version = POSTDescribeApplicationsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->postDescribeApplications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeConfigurationOptions

Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationOptionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationOptionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeConfigurationOptionsRequest();
    $request->action = POSTDescribeConfigurationOptionsActionEnum::DESCRIBE_CONFIGURATION_OPTIONS;
    $request->requestBody = 'ullam';
    $request->version = POSTDescribeConfigurationOptionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->postDescribeConfigurationOptions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeConfigurationSettings

<p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationSettingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeConfigurationSettingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeConfigurationSettingsRequest();
    $request->action = POSTDescribeConfigurationSettingsActionEnum::DESCRIBE_CONFIGURATION_SETTINGS;
    $request->requestBody = 'saepe';
    $request->version = POSTDescribeConfigurationSettingsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';

    $response = $sdk->sdk->postDescribeConfigurationSettings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEnvironmentHealth

Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEnvironmentHealthRequest();
    $request->action = POSTDescribeEnvironmentHealthActionEnum::DESCRIBE_ENVIRONMENT_HEALTH;
    $request->requestBody = 'delectus';
    $request->version = POSTDescribeEnvironmentHealthVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->postDescribeEnvironmentHealth($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEnvironmentManagedActionHistory

Lists an environment's completed and failed managed actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentManagedActionHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentManagedActionHistoryActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentManagedActionHistoryVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEnvironmentManagedActionHistoryRequest();
    $request->action = POSTDescribeEnvironmentManagedActionHistoryActionEnum::DESCRIBE_ENVIRONMENT_MANAGED_ACTION_HISTORY;
    $request->maxItems = 'aut';
    $request->nextToken = 'quas';
    $request->requestBody = 'itaque';
    $request->version = POSTDescribeEnvironmentManagedActionHistoryVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postDescribeEnvironmentManagedActionHistory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEnvironmentManagedActions

Lists an environment's upcoming and in-progress managed actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentManagedActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentManagedActionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentManagedActionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEnvironmentManagedActionsRequest();
    $request->action = POSTDescribeEnvironmentManagedActionsActionEnum::DESCRIBE_ENVIRONMENT_MANAGED_ACTIONS;
    $request->requestBody = 'cupiditate';
    $request->version = POSTDescribeEnvironmentManagedActionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';

    $response = $sdk->sdk->postDescribeEnvironmentManagedActions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEnvironmentResources

Returns AWS resources for this environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentResourcesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentResourcesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEnvironmentResourcesRequest();
    $request->action = POSTDescribeEnvironmentResourcesActionEnum::DESCRIBE_ENVIRONMENT_RESOURCES;
    $request->requestBody = 'vero';
    $request->version = POSTDescribeEnvironmentResourcesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->postDescribeEnvironmentResources($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEnvironments

Returns descriptions for existing environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEnvironmentsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEnvironmentsRequest();
    $request->action = POSTDescribeEnvironmentsActionEnum::DESCRIBE_ENVIRONMENTS;
    $request->requestBody = 'tenetur';
    $request->version = POSTDescribeEnvironmentsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postDescribeEnvironments($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeEvents

<p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeEventsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeEventsRequest();
    $request->action = POSTDescribeEventsActionEnum::DESCRIBE_EVENTS;
    $request->maxRecords = 'vero';
    $request->nextToken = 'ducimus';
    $request->requestBody = 'dolore';
    $request->version = POSTDescribeEventsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postDescribeEvents($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeInstancesHealth

Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstancesHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstancesHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstancesHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeInstancesHealthRequest();
    $request->action = POSTDescribeInstancesHealthActionEnum::DESCRIBE_INSTANCES_HEALTH;
    $request->requestBody = 'exercitationem';
    $request->version = POSTDescribeInstancesHealthVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'eligendi';

    $response = $sdk->sdk->postDescribeInstancesHealth($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribePlatformVersion

<p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePlatformVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePlatformVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribePlatformVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribePlatformVersionRequest();
    $request->action = POSTDescribePlatformVersionActionEnum::DESCRIBE_PLATFORM_VERSION;
    $request->requestBody = 'ducimus';
    $request->version = POSTDescribePlatformVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postDescribePlatformVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisassociateEnvironmentOperationsRole

Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateEnvironmentOperationsRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateEnvironmentOperationsRoleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisassociateEnvironmentOperationsRoleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisassociateEnvironmentOperationsRoleRequest();
    $request->action = POSTDisassociateEnvironmentOperationsRoleActionEnum::DISASSOCIATE_ENVIRONMENT_OPERATIONS_ROLE;
    $request->requestBody = 'possimus';
    $request->version = POSTDisassociateEnvironmentOperationsRoleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->postDisassociateEnvironmentOperationsRole($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListAvailableSolutionStacks

Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAvailableSolutionStacksRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAvailableSolutionStacksActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListAvailableSolutionStacksVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListAvailableSolutionStacksRequest();
    $request->action = POSTListAvailableSolutionStacksActionEnum::LIST_AVAILABLE_SOLUTION_STACKS;
    $request->version = POSTListAvailableSolutionStacksVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postListAvailableSolutionStacks($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListPlatformBranches

<p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPlatformBranchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPlatformBranchesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPlatformBranchesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListPlatformBranchesRequest();
    $request->action = POSTListPlatformBranchesActionEnum::LIST_PLATFORM_BRANCHES;
    $request->maxRecords = 'quisquam';
    $request->nextToken = 'saepe';
    $request->requestBody = 'ea';
    $request->version = POSTListPlatformBranchesVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->postListPlatformBranches($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListPlatformVersions

<p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPlatformVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPlatformVersionsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListPlatformVersionsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListPlatformVersionsRequest();
    $request->action = POSTListPlatformVersionsActionEnum::LIST_PLATFORM_VERSIONS;
    $request->maxRecords = 'quo';
    $request->nextToken = 'consectetur';
    $request->requestBody = 'recusandae';
    $request->version = POSTListPlatformVersionsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->postListPlatformVersions($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postListTagsForResource

<p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTListTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTListTagsForResourceRequest();
    $request->action = POSTListTagsForResourceActionEnum::LIST_TAGS_FOR_RESOURCE;
    $request->requestBody = 'deleniti';
    $request->version = POSTListTagsForResourceVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->postListTagsForResource($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRebuildEnvironment

Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebuildEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebuildEnvironmentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRebuildEnvironmentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRebuildEnvironmentRequest();
    $request->action = POSTRebuildEnvironmentActionEnum::REBUILD_ENVIRONMENT;
    $request->requestBody = 'dolorum';
    $request->version = POSTRebuildEnvironmentVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->postRebuildEnvironment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRequestEnvironmentInfo

<p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRequestEnvironmentInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRequestEnvironmentInfoActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRequestEnvironmentInfoVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRequestEnvironmentInfoRequest();
    $request->action = POSTRequestEnvironmentInfoActionEnum::REQUEST_ENVIRONMENT_INFO;
    $request->requestBody = 'assumenda';
    $request->version = POSTRequestEnvironmentInfoVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->postRequestEnvironmentInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRestartAppServer

Causes the environment to restart the application container server running on each Amazon EC2 instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestartAppServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestartAppServerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRestartAppServerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRestartAppServerRequest();
    $request->action = POSTRestartAppServerActionEnum::RESTART_APP_SERVER;
    $request->requestBody = 'provident';
    $request->version = POSTRestartAppServerVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postRestartAppServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRetrieveEnvironmentInfo

<p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRetrieveEnvironmentInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRetrieveEnvironmentInfoActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRetrieveEnvironmentInfoVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRetrieveEnvironmentInfoRequest();
    $request->action = POSTRetrieveEnvironmentInfoActionEnum::RETRIEVE_ENVIRONMENT_INFO;
    $request->requestBody = 'rem';
    $request->version = POSTRetrieveEnvironmentInfoVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->postRetrieveEnvironmentInfo($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSwapEnvironmentCNAMEs

Swaps the CNAMEs of two environments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwapEnvironmentCNAMEsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwapEnvironmentCNAMEsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSwapEnvironmentCNAMEsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSwapEnvironmentCNAMEsRequest();
    $request->action = POSTSwapEnvironmentCNAMEsActionEnum::SWAP_ENVIRONMENT_CNAM_ES;
    $request->requestBody = 'assumenda';
    $request->version = POSTSwapEnvironmentCNAMEsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postSwapEnvironmentCNAMEs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTerminateEnvironment

Terminates the specified environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTTerminateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTTerminateEnvironmentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTTerminateEnvironmentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTTerminateEnvironmentRequest();
    $request->action = POSTTerminateEnvironmentActionEnum::TERMINATE_ENVIRONMENT;
    $request->requestBody = 'neque';
    $request->version = POSTTerminateEnvironmentVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->postTerminateEnvironment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateApplication

<p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateApplicationRequest();
    $request->action = POSTUpdateApplicationActionEnum::UPDATE_APPLICATION;
    $request->requestBody = 'ab';
    $request->version = POSTUpdateApplicationVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'sequi';

    $response = $sdk->sdk->postUpdateApplication($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateApplicationResourceLifecycle

Modifies lifecycle settings for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationResourceLifecycleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationResourceLifecycleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationResourceLifecycleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateApplicationResourceLifecycleRequest();
    $request->action = POSTUpdateApplicationResourceLifecycleActionEnum::UPDATE_APPLICATION_RESOURCE_LIFECYCLE;
    $request->requestBody = 'quo';
    $request->version = POSTUpdateApplicationResourceLifecycleVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'inventore';

    $response = $sdk->sdk->postUpdateApplicationResourceLifecycle($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateApplicationVersion

<p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationVersionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateApplicationVersionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateApplicationVersionRequest();
    $request->action = POSTUpdateApplicationVersionActionEnum::UPDATE_APPLICATION_VERSION;
    $request->requestBody = 'nihil';
    $request->version = POSTUpdateApplicationVersionVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->postUpdateApplicationVersion($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateConfigurationTemplate

<p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationTemplateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateConfigurationTemplateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateConfigurationTemplateRequest();
    $request->action = POSTUpdateConfigurationTemplateActionEnum::UPDATE_CONFIGURATION_TEMPLATE;
    $request->requestBody = 'dolores';
    $request->version = POSTUpdateConfigurationTemplateVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->postUpdateConfigurationTemplate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateEnvironment

<p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateEnvironmentActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateEnvironmentVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateEnvironmentRequest();
    $request->action = POSTUpdateEnvironmentActionEnum::UPDATE_ENVIRONMENT;
    $request->requestBody = 'consequuntur';
    $request->version = POSTUpdateEnvironmentVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->postUpdateEnvironment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateTagsForResource

<p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTagsForResourceActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTUpdateTagsForResourceVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTUpdateTagsForResourceRequest();
    $request->action = POSTUpdateTagsForResourceActionEnum::UPDATE_TAGS_FOR_RESOURCE;
    $request->requestBody = 'minima';
    $request->version = POSTUpdateTagsForResourceVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postUpdateTagsForResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postValidateConfigurationSettings

<p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTValidateConfigurationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTValidateConfigurationSettingsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTValidateConfigurationSettingsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTValidateConfigurationSettingsRequest();
    $request->action = POSTValidateConfigurationSettingsActionEnum::VALIDATE_CONFIGURATION_SETTINGS;
    $request->requestBody = 'occaecati';
    $request->version = POSTValidateConfigurationSettingsVersionEnum::TWO_THOUSAND_AND_TEN1201;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->postValidateConfigurationSettings($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
