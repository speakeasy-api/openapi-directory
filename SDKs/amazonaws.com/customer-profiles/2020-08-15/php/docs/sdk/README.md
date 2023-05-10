# SDK

## Overview

<fullname>Amazon Connect Customer Profiles</fullname> <p>Amazon Connect Customer Profiles is a unified customer profile for your contact center that has pre-built connectors powered by AppFlow that make it easy to combine customer information from third party applications, such as Salesforce (CRM), ServiceNow (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. If you're new to Amazon Connect, you might find it helpful to review the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/">Amazon Connect Administrator Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/profile/>
### Available Operations

* [addProfileKey](#addprofilekey) - <p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>
* [createDomain](#createdomain) - <p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>
* [createIntegrationWorkflow](#createintegrationworkflow) -  Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. 
* [createProfile](#createprofile) - <p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>
* [deleteDomain](#deletedomain) - Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.
* [deleteIntegration](#deleteintegration) - Removes an integration from a specific domain.
* [deleteProfile](#deleteprofile) - Deletes the standard customer profile and all data pertaining to the profile.
* [deleteProfileKey](#deleteprofilekey) - Removes a searchable key from a customer profile.
* [deleteProfileObject](#deleteprofileobject) - Removes an object associated with a profile of a given ProfileObjectType.
* [deleteProfileObjectType](#deleteprofileobjecttype) - Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.
* [deleteWorkflow](#deleteworkflow) - Deletes the specified workflow and all its corresponding resources. This is an async process.
* [getAutoMergingPreview](#getautomergingpreview) - <p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>
* [getDomain](#getdomain) - Returns information about a specific domain.
* [getIdentityResolutionJob](#getidentityresolutionjob) - <p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>
* [getIntegration](#getintegration) - Returns an integration for a domain.
* [getMatches](#getmatches) - <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
* [getProfileObjectType](#getprofileobjecttype) - Returns the object types for a specific domain.
* [getProfileObjectTypeTemplate](#getprofileobjecttypetemplate) - <p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>
* [getWorkflow](#getworkflow) - Get details of specified workflow.
* [getWorkflowSteps](#getworkflowsteps) - Get granular list of steps in workflow.
* [listAccountIntegrations](#listaccountintegrations) - Lists all of the integrations associated to a specific URI in the AWS account.
* [listDomains](#listdomains) - Returns a list of all the domains for an AWS account that have been created.
* [listIdentityResolutionJobs](#listidentityresolutionjobs) - Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.
* [listIntegrations](#listintegrations) - Lists all of the integrations in your domain.
* [listProfileObjectTypeTemplates](#listprofileobjecttypetemplates) - Lists all of the template information for object types.
* [listProfileObjectTypes](#listprofileobjecttypes) - Lists all of the templates available within the service.
* [listProfileObjects](#listprofileobjects) - Returns a list of objects associated with a profile of a given ProfileObjectType.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
* [listWorkflows](#listworkflows) - Query to list all workflows.
* [mergeProfiles](#mergeprofiles) - <p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>
* [putIntegration](#putintegration) - <p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>
* [putProfileObject](#putprofileobject) - <p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>
* [putProfileObjectType](#putprofileobjecttype) - <p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
* [searchProfiles](#searchprofiles) - <p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
* [updateDomain](#updatedomain) - <p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>
* [updateProfile](#updateprofile) - <p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>

## addProfileKey

<p>Associates a new key value with a specific profile, such as a Contact Record ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddProfileKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddProfileKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddProfileKeyRequest();
    $request->domainName = 'ipsa';
    $request->requestBody = new AddProfileKeyRequestBody();
    $request->requestBody->keyName = 'delectus';
    $request->requestBody->profileId = 'tempora';
    $request->requestBody->values = [
        'molestiae',
        'minus',
    ];
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->addProfileKey($request);

    if ($response->addProfileKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomain

<p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainRequestBodyMatching;
use \OpenAPI\OpenAPI\Models\Shared\AutoMerging;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolvingModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Consolidation;
use \OpenAPI\OpenAPI\Models\Shared\ExportingConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3ExportingConfig;
use \OpenAPI\OpenAPI\Models\Shared\JobSchedule;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduleDayOfTheWeekEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainRequest();
    $request->domainName = 'ab';
    $request->requestBody = new CreateDomainRequestBody();
    $request->requestBody->deadLetterQueueUrl = 'quis';
    $request->requestBody->defaultEncryptionKey = 'veritatis';
    $request->requestBody->defaultExpirationDays = 648172;
    $request->requestBody->matching = new CreateDomainRequestBodyMatching();
    $request->requestBody->matching->autoMerging = new AutoMerging();
    $request->requestBody->matching->autoMerging->conflictResolution = new ConflictResolution();
    $request->requestBody->matching->autoMerging->conflictResolution->conflictResolvingModel = ConflictResolvingModelEnum::RECENCY;
    $request->requestBody->matching->autoMerging->conflictResolution->sourceName = 'ipsam';
    $request->requestBody->matching->autoMerging->consolidation = new Consolidation();
    $request->requestBody->matching->autoMerging->consolidation->matchingAttributesList = [
        [
            'quo',
            'odit',
            'at',
            'at',
        ],
        [
            'molestiae',
            'quod',
            'quod',
            'esse',
        ],
        [
            'porro',
            'dolorum',
            'dicta',
        ],
        [
            'officia',
            'occaecati',
            'fugit',
        ],
    ];
    $request->requestBody->matching->autoMerging->enabled = false;
    $request->requestBody->matching->autoMerging->minAllowedConfidenceScoreForMerging = 5373.73;
    $request->requestBody->matching->enabled = false;
    $request->requestBody->matching->exportingConfig = new ExportingConfig();
    $request->requestBody->matching->exportingConfig->s3Exporting = new S3ExportingConfig();
    $request->requestBody->matching->exportingConfig->s3Exporting->s3BucketName = 'hic';
    $request->requestBody->matching->exportingConfig->s3Exporting->s3KeyName = 'optio';
    $request->requestBody->matching->jobSchedule = new JobSchedule();
    $request->requestBody->matching->jobSchedule->dayOfTheWeek = JobScheduleDayOfTheWeekEnum::WEDNESDAY;
    $request->requestBody->matching->jobSchedule->time = 'beatae';
    $request->requestBody->tags = [
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->createDomain($request);

    if ($response->createDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIntegrationWorkflow

 Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationWorkflowRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationWorkflowRequestBodyIntegrationConfig;
use \OpenAPI\OpenAPI\Models\Shared\AppflowIntegration;
use \OpenAPI\OpenAPI\Models\Shared\Batch;
use \OpenAPI\OpenAPI\Models\Shared\FlowDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SourceFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncrementalPullConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectorProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorOperator;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3ConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\TriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledTriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataPullModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIntegrationWorkflowRequestBodyWorkflowTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIntegrationWorkflowRequest();
    $request->domainName = 'natus';
    $request->requestBody = new CreateIntegrationWorkflowRequestBody();
    $request->requestBody->integrationConfig = new CreateIntegrationWorkflowRequestBodyIntegrationConfig();
    $request->requestBody->integrationConfig->appflowIntegration = new AppflowIntegration();
    $request->requestBody->integrationConfig->appflowIntegration->batches = [
        new Batch(),
    ];
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition = new FlowDefinition();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->description = 'iste';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->flowName = 'dolor';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->kmsArn = 'natus';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig = new SourceFlowConfig();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->connectorProfileName = 'laboriosam';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->connectorType = SourceConnectorTypeEnum::S3;
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->incrementalPullConfig = new IncrementalPullConfig();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->incrementalPullConfig->datetimeTypeFieldName = 'saepe';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties = new SourceConnectorProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->marketo = new MarketoSourceProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->marketo->object = 'fuga';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->s3 = new S3SourceProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->s3->bucketName = 'in';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->s3->bucketPrefix = 'corporis';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce = new SalesforceSourceProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce->enableDynamicFieldUpdate = false;
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce->includeDeletedRecords = false;
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce->object = 'iste';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->serviceNow = new ServiceNowSourceProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->serviceNow->object = 'iure';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->zendesk = new ZendeskSourceProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->sourceFlowConfig->sourceConnectorProperties->zendesk->object = 'saepe';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->tasks = [
        new Task(),
        new Task(),
        new Task(),
    ];
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig = new TriggerConfig();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties = new TriggerProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled = new ScheduledTriggerProperties();
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled->dataPullMode = DataPullModeEnum::INCREMENTAL;
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled->firstExecutionFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-12T00:28:21.182Z');
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-11T04:59:11.542Z');
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleExpression = 'laborum';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleOffset = 170909;
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T06:35:12.519Z');
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerProperties->scheduled->timezone = 'explicabo';
    $request->requestBody->integrationConfig->appflowIntegration->flowDefinition->triggerConfig->triggerType = TriggerTypeEnum::ON_DEMAND;
    $request->requestBody->objectTypeName = 'enim';
    $request->requestBody->roleArn = 'omnis';
    $request->requestBody->tags = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->requestBody->workflowType = CreateIntegrationWorkflowRequestBodyWorkflowTypeEnum::APPFLOW_INTEGRATION;
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->createIntegrationWorkflow($request);

    if ($response->createIntegrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProfile

<p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBodyBillingAddress;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBodyGenderEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBodyMailingAddress;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBodyPartyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBodyShippingAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProfileRequest();
    $request->domainName = 'consequuntur';
    $request->requestBody = new CreateProfileRequestBody();
    $request->requestBody->accountNumber = 'repellat';
    $request->requestBody->additionalInformation = 'mollitia';
    $request->requestBody->address = new CreateProfileRequestBodyAddress();
    $request->requestBody->address->address1 = 'occaecati';
    $request->requestBody->address->address2 = 'numquam';
    $request->requestBody->address->address3 = 'commodi';
    $request->requestBody->address->address4 = 'quam';
    $request->requestBody->address->city = 'Deionfurt';
    $request->requestBody->address->country = 'Cape Verde';
    $request->requestBody->address->county = 'quis';
    $request->requestBody->address->postalCode = '66317';
    $request->requestBody->address->province = 'sequi';
    $request->requestBody->address->state = 'tenetur';
    $request->requestBody->attributes = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->requestBody->billingAddress = new CreateProfileRequestBodyBillingAddress();
    $request->requestBody->billingAddress->address1 = 'error';
    $request->requestBody->billingAddress->address2 = 'temporibus';
    $request->requestBody->billingAddress->address3 = 'laborum';
    $request->requestBody->billingAddress->address4 = 'quasi';
    $request->requestBody->billingAddress->city = 'Weymouth Town';
    $request->requestBody->billingAddress->country = 'Tanzania';
    $request->requestBody->billingAddress->county = 'nihil';
    $request->requestBody->billingAddress->postalCode = '90647-0042';
    $request->requestBody->billingAddress->province = 'maiores';
    $request->requestBody->billingAddress->state = 'dicta';
    $request->requestBody->birthDate = 'corporis';
    $request->requestBody->businessEmailAddress = 'dolore';
    $request->requestBody->businessName = 'iusto';
    $request->requestBody->businessPhoneNumber = 'dicta';
    $request->requestBody->emailAddress = 'harum';
    $request->requestBody->firstName = 'Emilie';
    $request->requestBody->gender = CreateProfileRequestBodyGenderEnum::UNSPECIFIED;
    $request->requestBody->genderString = 'commodi';
    $request->requestBody->homePhoneNumber = 'repudiandae';
    $request->requestBody->lastName = 'Bergnaum';
    $request->requestBody->mailingAddress = new CreateProfileRequestBodyMailingAddress();
    $request->requestBody->mailingAddress->address1 = 'ipsum';
    $request->requestBody->mailingAddress->address2 = 'quidem';
    $request->requestBody->mailingAddress->address3 = 'molestias';
    $request->requestBody->mailingAddress->address4 = 'excepturi';
    $request->requestBody->mailingAddress->city = 'East Orange';
    $request->requestBody->mailingAddress->country = 'Lithuania';
    $request->requestBody->mailingAddress->county = 'rem';
    $request->requestBody->mailingAddress->postalCode = '09509-2306';
    $request->requestBody->mailingAddress->province = 'quibusdam';
    $request->requestBody->mailingAddress->state = 'explicabo';
    $request->requestBody->middleName = 'deserunt';
    $request->requestBody->mobilePhoneNumber = 'distinctio';
    $request->requestBody->partyType = CreateProfileRequestBodyPartyTypeEnum::OTHER;
    $request->requestBody->partyTypeString = 'labore';
    $request->requestBody->personalEmailAddress = 'modi';
    $request->requestBody->phoneNumber = 'qui';
    $request->requestBody->shippingAddress = new CreateProfileRequestBodyShippingAddress();
    $request->requestBody->shippingAddress->address1 = 'aliquid';
    $request->requestBody->shippingAddress->address2 = 'cupiditate';
    $request->requestBody->shippingAddress->address3 = 'quos';
    $request->requestBody->shippingAddress->address4 = 'perferendis';
    $request->requestBody->shippingAddress->city = 'Port Friedrichtown';
    $request->requestBody->shippingAddress->country = 'Cambodia';
    $request->requestBody->shippingAddress->county = 'dolorum';
    $request->requestBody->shippingAddress->postalCode = '27729-4275';
    $request->requestBody->shippingAddress->province = 'aliquid';
    $request->requestBody->shippingAddress->state = 'provident';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->createProfile($request);

    if ($response->createProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomain

Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainRequest();
    $request->domainName = 'in';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->deleteDomain($request);

    if ($response->deleteDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIntegration

Removes an integration from a specific domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIntegrationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIntegrationRequest();
    $request->domainName = 'facere';
    $request->requestBody = new DeleteIntegrationRequestBody();
    $request->requestBody->uri = 'http://humming-police.org';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->deleteIntegration($request);

    if ($response->deleteIntegrationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfile

Deletes the standard customer profile and all data pertaining to the profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfileRequest();
    $request->domainName = 'nam';
    $request->requestBody = new DeleteProfileRequestBody();
    $request->requestBody->profileId = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->deleteProfile($request);

    if ($response->deleteProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfileKey

Removes a searchable key from a customer profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfileKeyRequest();
    $request->domainName = 'natus';
    $request->requestBody = new DeleteProfileKeyRequestBody();
    $request->requestBody->keyName = 'omnis';
    $request->requestBody->profileId = 'molestiae';
    $request->requestBody->values = [
        'nihil',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->deleteProfileKey($request);

    if ($response->deleteProfileKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfileObject

Removes an object associated with a profile of a given ProfileObjectType.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileObjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfileObjectRequest();
    $request->domainName = 'nobis';
    $request->requestBody = new DeleteProfileObjectRequestBody();
    $request->requestBody->objectTypeName = 'eum';
    $request->requestBody->profileId = 'vero';
    $request->requestBody->profileObjectUniqueKey = 'aspernatur';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->deleteProfileObject($request);

    if ($response->deleteProfileObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfileObjectType

Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileObjectTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfileObjectTypeRequest();
    $request->domainName = 'sint';
    $request->objectTypeName = 'accusantium';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->deleteProfileObjectType($request);

    if ($response->deleteProfileObjectTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflow

Deletes the specified workflow and all its corresponding resources. This is an async process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowRequest();
    $request->domainName = 'odit';
    $request->workflowId = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->deleteWorkflow($request);

    if ($response->deleteWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutoMergingPreview

<p>Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly selects a sample of matching groups from the existing matching results, and applies the automerging settings that you provided. You can then view the number of profiles in the sample, the number of matches, and the number of profiles identified to be merged. This enables you to evaluate the accuracy of the attributes in your matching list. </p> <p>You can't view which profiles are matched and would be merged.</p> <important> <p>We strongly recommend you use this API to do a dry run of the automerging process before running the Identity Resolution Job. Include <b>at least</b> two matching attributes. If your matching list includes too few attributes (such as only <code>FirstName</code> or only <code>LastName</code>), there may be a large number of matches. This increases the chances of erroneous merges.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoMergingPreviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoMergingPreviewRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoMergingPreviewRequestBodyConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolvingModelEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAutoMergingPreviewRequestBodyConsolidation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutoMergingPreviewRequest();
    $request->domainName = 'facilis';
    $request->requestBody = new GetAutoMergingPreviewRequestBody();
    $request->requestBody->conflictResolution = new GetAutoMergingPreviewRequestBodyConflictResolution();
    $request->requestBody->conflictResolution->conflictResolvingModel = ConflictResolvingModelEnum::RECENCY;
    $request->requestBody->conflictResolution->sourceName = 'architecto';
    $request->requestBody->consolidation = new GetAutoMergingPreviewRequestBodyConsolidation();
    $request->requestBody->consolidation->matchingAttributesList = [
        [
            'ullam',
            'expedita',
            'nihil',
            'repellat',
        ],
    ];
    $request->requestBody->minAllowedConfidenceScoreForMerging = 8411.4;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->getAutoMergingPreview($request);

    if ($response->getAutoMergingPreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomain

Returns information about a specific domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainRequest();
    $request->domainName = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->getDomain($request);

    if ($response->getDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIdentityResolutionJob

<p>Returns information about an Identity Resolution Job in a specific domain. </p> <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use Identity Resolution to consolidate similar profiles</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentityResolutionJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdentityResolutionJobRequest();
    $request->domainName = 'odit';
    $request->jobId = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->getIdentityResolutionJob($request);

    if ($response->getIdentityResolutionJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegration

Returns an integration for a domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationRequest();
    $request->domainName = 'nam';
    $request->requestBody = new GetIntegrationRequestBody();
    $request->requestBody->uri = 'http://tragic-framework.org';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getIntegration($request);

    if ($response->getIntegrationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMatches

<p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains. </p> <p>After the Identity Resolution Job completes, use the <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a> API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from S3.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMatchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMatchesRequest();
    $request->domainName = 'libero';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->maxResults = 199996;
    $request->nextToken = 'eos';

    $response = $sdk->sdk->getMatches($request);

    if ($response->getMatchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfileObjectType

Returns the object types for a specific domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileObjectTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileObjectTypeRequest();
    $request->domainName = 'perferendis';
    $request->objectTypeName = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getProfileObjectType($request);

    if ($response->getProfileObjectTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfileObjectTypeTemplate

<p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileObjectTypeTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileObjectTypeTemplateRequest();
    $request->templateId = 'omnis';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->getProfileObjectTypeTemplate($request);

    if ($response->getProfileObjectTypeTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflow

Get details of specified workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowRequest();
    $request->domainName = 'eaque';
    $request->workflowId = 'occaecati';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getWorkflow($request);

    if ($response->getWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowSteps

Get granular list of steps in workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowStepsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowStepsRequest();
    $request->domainName = 'deleniti';
    $request->workflowId = 'pariatur';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->maxResults = 212390;
    $request->nextToken = 'dolorem';

    $response = $sdk->sdk->getWorkflowSteps($request);

    if ($response->getWorkflowStepsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountIntegrations

Lists all of the integrations associated to a specific URI in the AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountIntegrationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountIntegrationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountIntegrationsRequest();
    $request->requestBody = new ListAccountIntegrationsRequestBody();
    $request->requestBody->uri = 'http://dental-cravat.org';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->includeHidden = false;
    $request->maxResults = 254356;
    $request->nextToken = 'veritatis';

    $response = $sdk->sdk->listAccountIntegrations($request);

    if ($response->listAccountIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomains

Returns a list of all the domains for an AWS account that have been created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainsRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->maxResults = 976405;
    $request->nextToken = 'voluptas';

    $response = $sdk->sdk->listDomains($request);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentityResolutionJobs

Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by <code>JobStartTime</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityResolutionJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentityResolutionJobsRequest();
    $request->domainName = 'natus';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->maxResults = 478596;
    $request->nextToken = 'voluptate';

    $response = $sdk->sdk->listIdentityResolutionJobs($request);

    if ($response->listIdentityResolutionJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIntegrations

Lists all of the integrations in your domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIntegrationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIntegrationsRequest();
    $request->domainName = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->includeHidden = false;
    $request->maxResults = 456015;
    $request->nextToken = 'id';

    $response = $sdk->sdk->listIntegrations($request);

    if ($response->listIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProfileObjectTypeTemplates

Lists all of the template information for object types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileObjectTypeTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProfileObjectTypeTemplatesRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->maxResults = 320017;
    $request->nextToken = 'saepe';

    $response = $sdk->sdk->listProfileObjectTypeTemplates($request);

    if ($response->listProfileObjectTypeTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProfileObjectTypes

Lists all of the templates available within the service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileObjectTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProfileObjectTypesRequest();
    $request->domainName = 'suscipit';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->maxResults = 872651;
    $request->nextToken = 'quaerat';

    $response = $sdk->sdk->listProfileObjectTypes($request);

    if ($response->listProfileObjectTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProfileObjects

Returns a list of objects associated with a profile of a given ProfileObjectType.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileObjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileObjectsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileObjectsRequestBodyObjectFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProfileObjectsRequest();
    $request->domainName = 'tempora';
    $request->requestBody = new ListProfileObjectsRequestBody();
    $request->requestBody->objectFilter = new ListProfileObjectsRequestBodyObjectFilter();
    $request->requestBody->objectFilter->keyName = 'vel';
    $request->requestBody->objectFilter->values = [
        'officiis',
        'qui',
        'dolorum',
        'a',
    ];
    $request->requestBody->objectTypeName = 'esse';
    $request->requestBody->profileId = 'harum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->maxResults = 253941;
    $request->nextToken = 'enim';

    $response = $sdk->sdk->listProfileObjects($request);

    if ($response->listProfileObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';
    $request->resourceArn = 'sed';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflows

Query to list all workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequestBodyWorkflowTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowsRequest();
    $request->domainName = 'vel';
    $request->requestBody = new ListWorkflowsRequestBody();
    $request->requestBody->queryEndDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-02T20:32:30.487Z');
    $request->requestBody->queryStartDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-27T14:09:30.399Z');
    $request->requestBody->status = ListWorkflowsRequestBodyStatusEnum::IN_PROGRESS;
    $request->requestBody->workflowType = ListWorkflowsRequestBodyWorkflowTypeEnum::APPFLOW_INTEGRATION;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dicta';
    $request->maxResults = 674848;
    $request->nextToken = 'totam';

    $response = $sdk->sdk->listWorkflows($request);

    if ($response->listWorkflowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeProfiles

<p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\MergeProfilesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\MergeProfilesRequestBodyFieldSourceProfileIds;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeProfilesRequest();
    $request->domainName = 'incidunt';
    $request->requestBody = new MergeProfilesRequestBody();
    $request->requestBody->fieldSourceProfileIds = new MergeProfilesRequestBodyFieldSourceProfileIds();
    $request->requestBody->fieldSourceProfileIds->accountNumber = 'aspernatur';
    $request->requestBody->fieldSourceProfileIds->additionalInformation = 'dolores';
    $request->requestBody->fieldSourceProfileIds->address = '734 Spencer Dam';
    $request->requestBody->fieldSourceProfileIds->attributes = [
        'fugit' => 'magni',
    ];
    $request->requestBody->fieldSourceProfileIds->billingAddress = 'odio';
    $request->requestBody->fieldSourceProfileIds->birthDate = 'sunt';
    $request->requestBody->fieldSourceProfileIds->businessEmailAddress = 'ullam';
    $request->requestBody->fieldSourceProfileIds->businessName = 'nam';
    $request->requestBody->fieldSourceProfileIds->businessPhoneNumber = 'hic';
    $request->requestBody->fieldSourceProfileIds->emailAddress = 'voluptatem';
    $request->requestBody->fieldSourceProfileIds->firstName = 'Nova';
    $request->requestBody->fieldSourceProfileIds->gender = 'male';
    $request->requestBody->fieldSourceProfileIds->homePhoneNumber = 'nobis';
    $request->requestBody->fieldSourceProfileIds->lastName = 'Bosco';
    $request->requestBody->fieldSourceProfileIds->mailingAddress = 'saepe';
    $request->requestBody->fieldSourceProfileIds->middleName = 'ipsum';
    $request->requestBody->fieldSourceProfileIds->mobilePhoneNumber = 'veritatis';
    $request->requestBody->fieldSourceProfileIds->partyType = 'nobis';
    $request->requestBody->fieldSourceProfileIds->personalEmailAddress = 'quos';
    $request->requestBody->fieldSourceProfileIds->phoneNumber = 'tempore';
    $request->requestBody->fieldSourceProfileIds->shippingAddress = 'cupiditate';
    $request->requestBody->mainProfileId = 'aperiam';
    $request->requestBody->profileIdsToBeMerged = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->mergeProfiles($request);

    if ($response->mergeProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putIntegration

<p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p> <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html"> UntagResource</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutIntegrationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutIntegrationRequestBodyFlowDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SourceFlowConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncrementalPullConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceConnectorProperties;
use \OpenAPI\OpenAPI\Models\Shared\MarketoSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskSourceProperties;
use \OpenAPI\OpenAPI\Models\Shared\Task;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorOperator;
use \OpenAPI\OpenAPI\Models\Shared\MarketoConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3ConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SalesforceConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNowConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZendeskConnectorOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\TriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledTriggerProperties;
use \OpenAPI\OpenAPI\Models\Shared\DataPullModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutIntegrationRequest();
    $request->domainName = 'est';
    $request->requestBody = new PutIntegrationRequestBody();
    $request->requestBody->flowDefinition = new PutIntegrationRequestBodyFlowDefinition();
    $request->requestBody->flowDefinition->description = 'repellendus';
    $request->requestBody->flowDefinition->flowName = 'porro';
    $request->requestBody->flowDefinition->kmsArn = 'doloribus';
    $request->requestBody->flowDefinition->sourceFlowConfig = new SourceFlowConfig();
    $request->requestBody->flowDefinition->sourceFlowConfig->connectorProfileName = 'ut';
    $request->requestBody->flowDefinition->sourceFlowConfig->connectorType = SourceConnectorTypeEnum::SERVICENOW;
    $request->requestBody->flowDefinition->sourceFlowConfig->incrementalPullConfig = new IncrementalPullConfig();
    $request->requestBody->flowDefinition->sourceFlowConfig->incrementalPullConfig->datetimeTypeFieldName = 'cupiditate';
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties = new SourceConnectorProperties();
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->marketo = new MarketoSourceProperties();
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->marketo->object = 'qui';
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->s3 = new S3SourceProperties();
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->s3->bucketName = 'quae';
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->s3->bucketPrefix = 'laudantium';
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce = new SalesforceSourceProperties();
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce->enableDynamicFieldUpdate = false;
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce->includeDeletedRecords = false;
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->salesforce->object = 'odio';
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->serviceNow = new ServiceNowSourceProperties();
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->serviceNow->object = 'occaecati';
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->zendesk = new ZendeskSourceProperties();
    $request->requestBody->flowDefinition->sourceFlowConfig->sourceConnectorProperties->zendesk->object = 'voluptatibus';
    $request->requestBody->flowDefinition->tasks = [
        new Task(),
        new Task(),
        new Task(),
        new Task(),
    ];
    $request->requestBody->flowDefinition->triggerConfig = new TriggerConfig();
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties = new TriggerProperties();
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled = new ScheduledTriggerProperties();
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled->dataPullMode = DataPullModeEnum::COMPLETE;
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled->firstExecutionFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T03:27:17.664Z');
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleEndTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T00:38:43.469Z');
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleExpression = 'voluptate';
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleOffset = 231701;
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled->scheduleStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-26T11:54:04.858Z');
    $request->requestBody->flowDefinition->triggerConfig->triggerProperties->scheduled->timezone = 'dignissimos';
    $request->requestBody->flowDefinition->triggerConfig->triggerType = TriggerTypeEnum::ON_DEMAND;
    $request->requestBody->objectTypeName = 'distinctio';
    $request->requestBody->objectTypeNames = [
        'odio' => 'similique',
        'facilis' => 'vero',
        'ducimus' => 'dolore',
        'quibusdam' => 'illum',
    ];
    $request->requestBody->tags = [
        'natus' => 'impedit',
    ];
    $request->requestBody->uri = 'http://winged-finisher.org';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->putIntegration($request);

    if ($response->putIntegrationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProfileObject

<p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Record, an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional Contact Records with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutProfileObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutProfileObjectRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProfileObjectRequest();
    $request->domainName = 'alias';
    $request->requestBody = new PutProfileObjectRequestBody();
    $request->requestBody->object = 'officia';
    $request->requestBody->objectTypeName = 'tempora';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'ratione';

    $response = $sdk->sdk->putProfileObject($request);

    if ($response->putProfileObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProfileObjectType

<p>Defines a ProfileObjectType.</p> <p>To add or remove tags on an existing ObjectType, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutProfileObjectTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutProfileObjectTypeRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTypeField;
use \OpenAPI\OpenAPI\Models\Shared\FieldContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObjectTypeKey;
use \OpenAPI\OpenAPI\Models\Shared\StandardIdentifierEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProfileObjectTypeRequest();
    $request->domainName = 'ex';
    $request->objectTypeName = 'laudantium';
    $request->requestBody = new PutProfileObjectTypeRequestBody();
    $request->requestBody->allowProfileCreation = false;
    $request->requestBody->description = 'dicta';
    $request->requestBody->encryptionKey = 'dolor';
    $request->requestBody->expirationDays = 980700;
    $request->requestBody->fields = [
        'ex' => new ObjectTypeField(),
    ];
    $request->requestBody->keys = [
        'excepturi' => [
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
        ],
        'nostrum' => [
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
        ],
        'quisquam' => [
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
        ],
        'ea' => [
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
            new ObjectTypeKey(),
        ],
    ];
    $request->requestBody->sourceLastUpdatedTimestampFormat = 'corporis';
    $request->requestBody->tags = [
        'aliquid' => 'inventore',
        'magnam' => 'ea',
    ];
    $request->requestBody->templateId = 'quo';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->putProfileObjectType($request);

    if ($response->putProfileObjectTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchProfiles

<p>Searches for profiles within a specific domain using one or more predefined search keys (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A search key is a data type pair that consists of a <code>KeyName</code> and <code>Values</code> list.</p> <p>This operation supports searching for profiles with a minimum of 1 key-value(s) pair and up to 5 key-value(s) pairs using either <code>AND</code> or <code>OR</code> logic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchProfilesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalSearchKey;
use \OpenAPI\OpenAPI\Models\Operations\SearchProfilesRequestBodyLogicalOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProfilesRequest();
    $request->domainName = 'aut';
    $request->requestBody = new SearchProfilesRequestBody();
    $request->requestBody->additionalSearchKeys = [
        new AdditionalSearchKey(),
    ];
    $request->requestBody->keyName = 'deleniti';
    $request->requestBody->logicalOperator = SearchProfilesRequestBodyLogicalOperatorEnum::OR;
    $request->requestBody->values = [
        'fugit',
        'accusamus',
    ];
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'velit';
    $request->maxResults = 432148;
    $request->nextToken = 'autem';

    $response = $sdk->sdk->searchProfiles($request);

    if ($response->searchProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'quas' => 'assumenda',
        'nulla' => 'voluptas',
        'libero' => 'quasi',
        'tempora' => 'numquam',
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';
    $request->resourceArn = 'esse';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';
    $request->resourceArn = 'eum';
    $request->tagKeys = [
        'assumenda',
        'eos',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomain

<p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p> <p>To prevent cross-service impersonation when you call this API, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html">Cross-service confused deputy prevention</a> for sample policies that you should apply. </p> <p>To add or remove tags on an existing Domain, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html">TagResource</a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainRequestBodyMatching;
use \OpenAPI\OpenAPI\Models\Shared\AutoMerging;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolution;
use \OpenAPI\OpenAPI\Models\Shared\ConflictResolvingModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\Consolidation;
use \OpenAPI\OpenAPI\Models\Shared\ExportingConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3ExportingConfig;
use \OpenAPI\OpenAPI\Models\Shared\JobSchedule;
use \OpenAPI\OpenAPI\Models\Shared\JobScheduleDayOfTheWeekEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainRequest();
    $request->domainName = 'praesentium';
    $request->requestBody = new UpdateDomainRequestBody();
    $request->requestBody->deadLetterQueueUrl = 'quisquam';
    $request->requestBody->defaultEncryptionKey = 'veritatis';
    $request->requestBody->defaultExpirationDays = 56848;
    $request->requestBody->matching = new UpdateDomainRequestBodyMatching();
    $request->requestBody->matching->autoMerging = new AutoMerging();
    $request->requestBody->matching->autoMerging->conflictResolution = new ConflictResolution();
    $request->requestBody->matching->autoMerging->conflictResolution->conflictResolvingModel = ConflictResolvingModelEnum::SOURCE;
    $request->requestBody->matching->autoMerging->conflictResolution->sourceName = 'quidem';
    $request->requestBody->matching->autoMerging->consolidation = new Consolidation();
    $request->requestBody->matching->autoMerging->consolidation->matchingAttributesList = [
        [
            'illum',
            'quo',
            'fuga',
            'eius',
        ],
    ];
    $request->requestBody->matching->autoMerging->enabled = false;
    $request->requestBody->matching->autoMerging->minAllowedConfidenceScoreForMerging = 1783.67;
    $request->requestBody->matching->enabled = false;
    $request->requestBody->matching->exportingConfig = new ExportingConfig();
    $request->requestBody->matching->exportingConfig->s3Exporting = new S3ExportingConfig();
    $request->requestBody->matching->exportingConfig->s3Exporting->s3BucketName = 'voluptas';
    $request->requestBody->matching->exportingConfig->s3Exporting->s3KeyName = 'ab';
    $request->requestBody->matching->jobSchedule = new JobSchedule();
    $request->requestBody->matching->jobSchedule->dayOfTheWeek = JobScheduleDayOfTheWeekEnum::THURSDAY;
    $request->requestBody->matching->jobSchedule->time = 'consequatur';
    $request->requestBody->tags = [
        'debitis' => 'ipsam',
        'aspernatur' => 'sequi',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->updateDomain($request);

    if ($response->updateDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProfile

<p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBodyBillingAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBodyGenderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBodyMailingAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBodyPartyTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBodyShippingAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProfileRequest();
    $request->domainName = 'inventore';
    $request->requestBody = new UpdateProfileRequestBody();
    $request->requestBody->accountNumber = 'nihil';
    $request->requestBody->additionalInformation = 'totam';
    $request->requestBody->address = new UpdateProfileRequestBodyAddress();
    $request->requestBody->address->address1 = 'accusamus';
    $request->requestBody->address->address2 = 'aliquam';
    $request->requestBody->address->address3 = 'odio';
    $request->requestBody->address->address4 = 'occaecati';
    $request->requestBody->address->city = 'Vicentaberg';
    $request->requestBody->address->country = 'Niger';
    $request->requestBody->address->county = 'molestiae';
    $request->requestBody->address->postalCode = '74551';
    $request->requestBody->address->province = 'deleniti';
    $request->requestBody->address->state = 'fugit';
    $request->requestBody->attributes = [
        'mollitia' => 'incidunt',
        'atque' => 'explicabo',
        'minima' => 'nisi',
    ];
    $request->requestBody->billingAddress = new UpdateProfileRequestBodyBillingAddress();
    $request->requestBody->billingAddress->address1 = 'fugit';
    $request->requestBody->billingAddress->address2 = 'sapiente';
    $request->requestBody->billingAddress->address3 = 'consequuntur';
    $request->requestBody->billingAddress->address4 = 'ratione';
    $request->requestBody->billingAddress->city = 'Fort Kolestad';
    $request->requestBody->billingAddress->country = 'Benin';
    $request->requestBody->billingAddress->county = 'esse';
    $request->requestBody->billingAddress->postalCode = '80487-8309';
    $request->requestBody->billingAddress->province = 'vel';
    $request->requestBody->billingAddress->state = 'harum';
    $request->requestBody->birthDate = 'molestiae';
    $request->requestBody->businessEmailAddress = 'rerum';
    $request->requestBody->businessName = 'occaecati';
    $request->requestBody->businessPhoneNumber = 'minima';
    $request->requestBody->emailAddress = 'distinctio';
    $request->requestBody->firstName = 'Nikki';
    $request->requestBody->gender = UpdateProfileRequestBodyGenderEnum::MALE;
    $request->requestBody->genderString = 'culpa';
    $request->requestBody->homePhoneNumber = 'tempore';
    $request->requestBody->lastName = 'Fisher';
    $request->requestBody->mailingAddress = new UpdateProfileRequestBodyMailingAddress();
    $request->requestBody->mailingAddress->address1 = 'cumque';
    $request->requestBody->mailingAddress->address2 = 'consequuntur';
    $request->requestBody->mailingAddress->address3 = 'consequatur';
    $request->requestBody->mailingAddress->address4 = 'minus';
    $request->requestBody->mailingAddress->city = 'Fort Darlene';
    $request->requestBody->mailingAddress->country = 'Kenya';
    $request->requestBody->mailingAddress->county = 'blanditiis';
    $request->requestBody->mailingAddress->postalCode = '98540-9658';
    $request->requestBody->mailingAddress->province = 'possimus';
    $request->requestBody->mailingAddress->state = 'quia';
    $request->requestBody->middleName = 'eveniet';
    $request->requestBody->mobilePhoneNumber = 'asperiores';
    $request->requestBody->partyType = UpdateProfileRequestBodyPartyTypeEnum::OTHER;
    $request->requestBody->partyTypeString = 'veritatis';
    $request->requestBody->personalEmailAddress = 'consequuntur';
    $request->requestBody->phoneNumber = 'quasi';
    $request->requestBody->profileId = 'similique';
    $request->requestBody->shippingAddress = new UpdateProfileRequestBodyShippingAddress();
    $request->requestBody->shippingAddress->address1 = 'culpa';
    $request->requestBody->shippingAddress->address2 = 'aliquid';
    $request->requestBody->shippingAddress->address3 = 'tenetur';
    $request->requestBody->shippingAddress->address4 = 'quae';
    $request->requestBody->shippingAddress->city = 'Jackson';
    $request->requestBody->shippingAddress->country = 'Jordan';
    $request->requestBody->shippingAddress->county = 'eius';
    $request->requestBody->shippingAddress->postalCode = '87039-1343';
    $request->requestBody->shippingAddress->province = 'nisi';
    $request->requestBody->shippingAddress->state = 'aut';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->updateProfile($request);

    if ($response->updateProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
