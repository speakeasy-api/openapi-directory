# SDK

## Overview

Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from disruptions. It offers continual resiliency assessment and validation that integrates into your software development lifecycle. This enables you to uncover resiliency weaknesses, ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your applications are met, and resolve issues before they are released into production. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/resiliencehub/>
### Available Operations

* [addDraftAppVersionResourceMappings](#adddraftappversionresourcemappings) - Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.
* [createApp](#createapp) - <p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to 20–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>
* [createAppVersionAppComponent](#createappversionappcomponent) - <p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [createAppVersionResource](#createappversionresource) - <p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [createRecommendationTemplate](#createrecommendationtemplate) - Creates a new recommendation template for the Resilience Hub application.
* [createResiliencyPolicy](#createresiliencypolicy) - Creates a resiliency policy for an application.
* [deleteApp](#deleteapp) - Deletes an Resilience Hub application. This is a destructive action that can't be undone.
* [deleteAppAssessment](#deleteappassessment) - Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.
* [deleteAppInputSource](#deleteappinputsource) - Deletes the input source and all of its imported resources from the Resilience Hub application.
* [deleteAppVersionAppComponent](#deleteappversionappcomponent) - <p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>
* [deleteAppVersionResource](#deleteappversionresource) - <p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>
* [deleteRecommendationTemplate](#deleterecommendationtemplate) - Deletes a recommendation template. This is a destructive action that can't be undone.
* [deleteResiliencyPolicy](#deleteresiliencypolicy) - Deletes a resiliency policy. This is a destructive action that can't be undone.
* [describeApp](#describeapp) - Describes an Resilience Hub application.
* [describeAppAssessment](#describeappassessment) - Describes an assessment for an Resilience Hub application.
* [describeAppVersion](#describeappversion) - Describes the Resilience Hub application version.
* [describeAppVersionAppComponent](#describeappversionappcomponent) - Describes an Application Component in the Resilience Hub application.
* [describeAppVersionResource](#describeappversionresource) - <p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>
* [describeAppVersionResourcesResolutionStatus](#describeappversionresourcesresolutionstatus) - Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.
* [describeAppVersionTemplate](#describeappversiontemplate) - Describes details about an Resilience Hub application.
* [describeDraftAppVersionResourcesImportStatus](#describedraftappversionresourcesimportstatus) - <p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>
* [describeResiliencyPolicy](#describeresiliencypolicy) - Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.
* [importResourcesToDraftAppVersion](#importresourcestodraftappversion) - Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [listAlarmRecommendations](#listalarmrecommendations) - Lists the alarm recommendations for an Resilience Hub application.
* [listAppAssessments](#listappassessments) - Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.
* [listAppComponentCompliances](#listappcomponentcompliances) - Lists the compliances for an Resilience Hub Application Component.
* [listAppComponentRecommendations](#listappcomponentrecommendations) - Lists the recommendations for an Resilience Hub Application Component.
* [listAppInputSources](#listappinputsources) - Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.
* [listAppVersionAppComponents](#listappversionappcomponents) - Lists all the Application Components in the Resilience Hub application.
* [listAppVersionResourceMappings](#listappversionresourcemappings) - Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.
* [listAppVersionResources](#listappversionresources) - Lists all the resources in an Resilience Hub application.
* [listAppVersions](#listappversions) - Lists the different versions for the Resilience Hub applications.
* [listApps](#listapps) - <p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>
* [listRecommendationTemplates](#listrecommendationtemplates) - Lists the recommendation templates for the Resilience Hub applications.
* [listResiliencyPolicies](#listresiliencypolicies) - Lists the resiliency policies for the Resilience Hub applications.
* [listSopRecommendations](#listsoprecommendations) - Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
* [listSuggestedResiliencyPolicies](#listsuggestedresiliencypolicies) - Lists the suggested resiliency policies for the Resilience Hub applications.
* [listTagsForResource](#listtagsforresource) - Lists the tags for your resources in your Resilience Hub applications.
* [listTestRecommendations](#listtestrecommendations) - Lists the test recommendations for the Resilience Hub application.
* [listUnsupportedAppVersionResources](#listunsupportedappversionresources) - Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.
* [publishAppVersion](#publishappversion) - Publishes a new version of a specific Resilience Hub application.
* [putDraftAppVersionTemplate](#putdraftappversiontemplate) - Adds or updates the app template for an Resilience Hub application draft version.
* [removeDraftAppVersionResourceMappings](#removedraftappversionresourcemappings) - Removes resource mappings from a draft application version.
* [resolveAppVersionResources](#resolveappversionresources) - Resolves the resources for an application version.
* [startAppAssessment](#startappassessment) - Creates a new application assessment for an application.
* [tagResource](#tagresource) - Applies one or more tags to a resource.
* [untagResource](#untagresource) - Removes one or more tags from a resource.
* [updateApp](#updateapp) - Updates an application.
* [updateAppVersion](#updateappversion) - <p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [updateAppVersionAppComponent](#updateappversionappcomponent) - <p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>
* [updateAppVersionResource](#updateappversionresource) - <p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>
* [updateResiliencyPolicy](#updateresiliencypolicy) - Updates a resiliency policy.

## addDraftAppVersionResourceMappings

Adds the resource mapping for the draft application version. You can also update an existing resource mapping to a new physical resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddDraftAppVersionResourceMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddDraftAppVersionResourceMappingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ResourceMapping;
use \OpenAPI\OpenAPI\Models\Shared\ResourceMappingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalResourceId;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalIdentifierTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddDraftAppVersionResourceMappingsRequest();
    $request->requestBody = new AddDraftAppVersionResourceMappingsRequestBody();
    $request->requestBody->appArn = 'error';
    $request->requestBody->resourceMappings = [
        new ResourceMapping(),
        new ResourceMapping(),
        new ResourceMapping(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->addDraftAppVersionResourceMappings($request);

    if ($response->addDraftAppVersionResourceMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApp

<p>Creates an Resilience Hub application. An Resilience Hub application is a collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an application name, resources from one or more–up to 20–CloudFormation stacks, and an appropriate resiliency policy.</p> <p>After you create an Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBodyAssessmentScheduleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->requestBody = new CreateAppRequestBody();
    $request->requestBody->assessmentSchedule = CreateAppRequestBodyAssessmentScheduleEnum::DISABLED;
    $request->requestBody->clientToken = 'molestiae';
    $request->requestBody->description = 'minus';
    $request->requestBody->name = 'Ken Kshlerin';
    $request->requestBody->policyArn = 'recusandae';
    $request->requestBody->tags = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->createApp($request);

    if ($response->createAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAppVersionAppComponent

<p>Creates a new Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppVersionAppComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppVersionAppComponentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppVersionAppComponentRequest();
    $request->requestBody = new CreateAppVersionAppComponentRequestBody();
    $request->requestBody->additionalInfo = [
        'esse' => [
            'porro',
            'dolorum',
            'dicta',
        ],
        'nam' => [
            'occaecati',
            'fugit',
            'deleniti',
        ],
        'hic' => [
            'totam',
            'beatae',
            'commodi',
            'molestiae',
        ],
        'modi' => [
            'impedit',
        ],
    ];
    $request->requestBody->appArn = 'cum';
    $request->requestBody->clientToken = 'esse';
    $request->requestBody->id = '39205929-396f-4ea7-996e-b10faaa2352c';
    $request->requestBody->name = 'Guadalupe Hickle';
    $request->requestBody->type = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->createAppVersionAppComponent($request);

    if ($response->createAppVersionAppComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAppVersionResource

<p>Adds a resource to the Resilience Hub application and assigns it to the specified Application Components. If you specify a new Application Component, Resilience Hub will automatically create the Application Component.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppVersionResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppVersionResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppVersionResourceRequestBodyLogicalResourceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppVersionResourceRequest();
    $request->requestBody = new CreateAppVersionResourceRequestBody();
    $request->requestBody->additionalInfo = [
        'consequuntur' => [
            'mollitia',
            'occaecati',
            'numquam',
            'commodi',
        ],
        'quam' => [
            'velit',
            'error',
        ],
        'quia' => [
            'vitae',
            'laborum',
        ],
    ];
    $request->requestBody->appArn = 'animi';
    $request->requestBody->appComponents = [
        'odit',
        'quo',
    ];
    $request->requestBody->awsAccountId = 'sequi';
    $request->requestBody->awsRegion = 'tenetur';
    $request->requestBody->clientToken = 'ipsam';
    $request->requestBody->logicalResourceId = new CreateAppVersionResourceRequestBodyLogicalResourceId();
    $request->requestBody->logicalResourceId->eksSourceName = 'id';
    $request->requestBody->logicalResourceId->identifier = 'possimus';
    $request->requestBody->logicalResourceId->logicalStackName = 'aut';
    $request->requestBody->logicalResourceId->resourceGroupName = 'quasi';
    $request->requestBody->logicalResourceId->terraformSourceName = 'error';
    $request->requestBody->physicalResourceId = 'temporibus';
    $request->requestBody->resourceName = 'laborum';
    $request->requestBody->resourceType = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->createAppVersionResource($request);

    if ($response->createAppVersionResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRecommendationTemplate

Creates a new recommendation template for the Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommendationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommendationTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecommendationTemplateRequestBodyFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RenderRecommendationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRecommendationTemplateRequest();
    $request->requestBody = new CreateRecommendationTemplateRequestBody();
    $request->requestBody->assessmentArn = 'omnis';
    $request->requestBody->bucketName = 'voluptate';
    $request->requestBody->clientToken = 'cum';
    $request->requestBody->format = CreateRecommendationTemplateRequestBodyFormatEnum::CFN_YAML;
    $request->requestBody->name = 'Bessie Grady II';
    $request->requestBody->recommendationIds = [
        'iusto',
        'dicta',
    ];
    $request->requestBody->recommendationTypes = [
        RenderRecommendationTypeEnum::ALARM,
        RenderRecommendationTypeEnum::TEST,
        RenderRecommendationTypeEnum::SOP,
    ];
    $request->requestBody->tags = [
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
    ];
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';

    $response = $sdk->sdk->createRecommendationTemplate($request);

    if ($response->createRecommendationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResiliencyPolicy

Creates a resiliency policy for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResiliencyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateResiliencyPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateResiliencyPolicyRequestBodyDataLocationConstraintEnum;
use \OpenAPI\OpenAPI\Models\Shared\FailurePolicy;
use \OpenAPI\OpenAPI\Models\Operations\CreateResiliencyPolicyRequestBodyTierEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResiliencyPolicyRequest();
    $request->requestBody = new CreateResiliencyPolicyRequestBody();
    $request->requestBody->clientToken = 'incidunt';
    $request->requestBody->dataLocationConstraint = CreateResiliencyPolicyRequestBodyDataLocationConstraintEnum::ANY_LOCATION;
    $request->requestBody->policy = [
        'est' => new FailurePolicy(),
    ];
    $request->requestBody->policyDescription = 'quibusdam';
    $request->requestBody->policyName = 'explicabo';
    $request->requestBody->tags = [
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->requestBody->tier = CreateResiliencyPolicyRequestBodyTierEnum::IMPORTANT;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->createResiliencyPolicy($request);

    if ($response->createResiliencyPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApp

Deletes an Resilience Hub application. This is a destructive action that can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppRequest();
    $request->requestBody = new DeleteAppRequestBody();
    $request->requestBody->appArn = 'dolorum';
    $request->requestBody->clientToken = 'excepturi';
    $request->requestBody->forceDelete = false;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->deleteApp($request);

    if ($response->deleteAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppAssessment

Deletes an Resilience Hub application assessment. This is a destructive action that can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppAssessmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppAssessmentRequest();
    $request->requestBody = new DeleteAppAssessmentRequestBody();
    $request->requestBody->assessmentArn = 'eligendi';
    $request->requestBody->clientToken = 'sint';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->deleteAppAssessment($request);

    if ($response->deleteAppAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppInputSource

Deletes the input source and all of its imported resources from the Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppInputSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppInputSourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppInputSourceRequestBodyEksSourceClusterNamespace;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppInputSourceRequestBodyTerraformSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppInputSourceRequest();
    $request->requestBody = new DeleteAppInputSourceRequestBody();
    $request->requestBody->appArn = 'a';
    $request->requestBody->clientToken = 'dolorum';
    $request->requestBody->eksSourceClusterNamespace = new DeleteAppInputSourceRequestBodyEksSourceClusterNamespace();
    $request->requestBody->eksSourceClusterNamespace->eksClusterArn = 'in';
    $request->requestBody->eksSourceClusterNamespace->namespace = 'in';
    $request->requestBody->sourceArn = 'illum';
    $request->requestBody->terraformSource = new DeleteAppInputSourceRequestBodyTerraformSource();
    $request->requestBody->terraformSource->s3StateFileUrl = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->deleteAppInputSource($request);

    if ($response->deleteAppInputSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppVersionAppComponent

<p>Deletes an Application Component from the Resilience Hub application.</p> <note> <ul> <li> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>You will not be able to delete an Application Component if it has resources associated with it.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppVersionAppComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppVersionAppComponentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppVersionAppComponentRequest();
    $request->requestBody = new DeleteAppVersionAppComponentRequestBody();
    $request->requestBody->appArn = 'laborum';
    $request->requestBody->clientToken = 'accusamus';
    $request->requestBody->id = '395efb9b-a88f-43a6-a997-074ba4469b6e';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->deleteAppVersionAppComponent($request);

    if ($response->deleteAppVersionAppComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAppVersionResource

<p>Deletes a resource from the Resilience Hub application.</p> <note> <ul> <li> <p>You can only delete a manually added resource. To exclude non-manually added resources, use the <code>UpdateAppVersionResource</code> API.</p> </li> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppVersionResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppVersionResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppVersionResourceRequestBodyLogicalResourceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppVersionResourceRequest();
    $request->requestBody = new DeleteAppVersionResourceRequestBody();
    $request->requestBody->appArn = 'quos';
    $request->requestBody->awsAccountId = 'sint';
    $request->requestBody->awsRegion = 'accusantium';
    $request->requestBody->clientToken = 'mollitia';
    $request->requestBody->logicalResourceId = new DeleteAppVersionResourceRequestBodyLogicalResourceId();
    $request->requestBody->logicalResourceId->eksSourceName = 'reiciendis';
    $request->requestBody->logicalResourceId->identifier = 'mollitia';
    $request->requestBody->logicalResourceId->logicalStackName = 'ad';
    $request->requestBody->logicalResourceId->resourceGroupName = 'eum';
    $request->requestBody->logicalResourceId->terraformSourceName = 'dolor';
    $request->requestBody->physicalResourceId = 'necessitatibus';
    $request->requestBody->resourceName = 'odit';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->deleteAppVersionResource($request);

    if ($response->deleteAppVersionResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecommendationTemplate

Deletes a recommendation template. This is a destructive action that can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommendationTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommendationTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecommendationTemplateRequest();
    $request->requestBody = new DeleteRecommendationTemplateRequestBody();
    $request->requestBody->clientToken = 'deleniti';
    $request->requestBody->recommendationTemplateArn = 'facilis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->deleteRecommendationTemplate($request);

    if ($response->deleteRecommendationTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResiliencyPolicy

Deletes a resiliency policy. This is a destructive action that can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResiliencyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResiliencyPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResiliencyPolicyRequest();
    $request->requestBody = new DeleteResiliencyPolicyRequestBody();
    $request->requestBody->clientToken = 'repellat';
    $request->requestBody->policyArn = 'quibusdam';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->deleteResiliencyPolicy($request);

    if ($response->deleteResiliencyPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApp

Describes an Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppRequest();
    $request->requestBody = new DescribeAppRequestBody();
    $request->requestBody->appArn = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->describeApp($request);

    if ($response->describeAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppAssessment

Describes an assessment for an Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppAssessmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppAssessmentRequest();
    $request->requestBody = new DescribeAppAssessmentRequestBody();
    $request->requestBody->assessmentArn = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->describeAppAssessment($request);

    if ($response->describeAppAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppVersion

Describes the Resilience Hub application version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppVersionRequest();
    $request->requestBody = new DescribeAppVersionRequestBody();
    $request->requestBody->appArn = 'autem';
    $request->requestBody->appVersion = 'nam';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->describeAppVersion($request);

    if ($response->describeAppVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppVersionAppComponent

Describes an Application Component in the Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionAppComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionAppComponentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppVersionAppComponentRequest();
    $request->requestBody = new DescribeAppVersionAppComponentRequestBody();
    $request->requestBody->appArn = 'aut';
    $request->requestBody->appVersion = 'cumque';
    $request->requestBody->id = '5fbb2587-0532-402c-b3d5-fe9b90c28909';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->describeAppVersionAppComponent($request);

    if ($response->describeAppVersionAppComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppVersionResource

<p>Describes a resource of the Resilience Hub application.</p> <note> <p>This API accepts only one of the following parameters to descibe the resource:</p> <ul> <li> <p> <code>resourceName</code> </p> </li> <li> <p> <code>logicalResourceId</code> </p> </li> <li> <p> <code>physicalResourceId</code> (Along with <code>physicalResourceId</code>, you can also provide <code>awsAccountId</code>, and <code>awsRegion</code>)</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionResourceRequestBodyLogicalResourceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppVersionResourceRequest();
    $request->requestBody = new DescribeAppVersionResourceRequestBody();
    $request->requestBody->appArn = 'deleniti';
    $request->requestBody->appVersion = 'pariatur';
    $request->requestBody->awsAccountId = 'provident';
    $request->requestBody->awsRegion = 'nobis';
    $request->requestBody->logicalResourceId = new DescribeAppVersionResourceRequestBodyLogicalResourceId();
    $request->requestBody->logicalResourceId->eksSourceName = 'libero';
    $request->requestBody->logicalResourceId->identifier = 'delectus';
    $request->requestBody->logicalResourceId->logicalStackName = 'quaerat';
    $request->requestBody->logicalResourceId->resourceGroupName = 'quos';
    $request->requestBody->logicalResourceId->terraformSourceName = 'aliquid';
    $request->requestBody->physicalResourceId = 'dolorem';
    $request->requestBody->resourceName = 'dolorem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->describeAppVersionResource($request);

    if ($response->describeAppVersionResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppVersionResourcesResolutionStatus

Returns the resolution status for the specified resolution identifier for an application version. If <code>resolutionId</code> is not specified, the current resolution status is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionResourcesResolutionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionResourcesResolutionStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppVersionResourcesResolutionStatusRequest();
    $request->requestBody = new DescribeAppVersionResourcesResolutionStatusRequestBody();
    $request->requestBody->appArn = 'dignissimos';
    $request->requestBody->appVersion = 'reiciendis';
    $request->requestBody->resolutionId = 'amet';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';

    $response = $sdk->sdk->describeAppVersionResourcesResolutionStatus($request);

    if ($response->describeAppVersionResourcesResolutionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAppVersionTemplate

Describes details about an Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAppVersionTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAppVersionTemplateRequest();
    $request->requestBody = new DescribeAppVersionTemplateRequestBody();
    $request->requestBody->appArn = 'quaerat';
    $request->requestBody->appVersion = 'accusamus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->describeAppVersionTemplate($request);

    if ($response->describeAppVersionTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDraftAppVersionResourcesImportStatus

<p>Describes the status of importing resources to an application version.</p> <note> <p>If you get a 404 error with <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call <code>importResourcesToDraftAppVersion</code> after creating the application and before calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the status.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDraftAppVersionResourcesImportStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDraftAppVersionResourcesImportStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDraftAppVersionResourcesImportStatusRequest();
    $request->requestBody = new DescribeDraftAppVersionResourcesImportStatusRequestBody();
    $request->requestBody->appArn = 'fugiat';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->describeDraftAppVersionResourcesImportStatus($request);

    if ($response->describeDraftAppVersionResourcesImportStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResiliencyPolicy

Describes a specified resiliency policy for an Resilience Hub application. The returned policy object includes creation time, data location constraints, the Amazon Resource Name (ARN) for the policy, tags, tier, and more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResiliencyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResiliencyPolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResiliencyPolicyRequest();
    $request->requestBody = new DescribeResiliencyPolicyRequestBody();
    $request->requestBody->policyArn = 'omnis';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->describeResiliencyPolicy($request);

    if ($response->describeResiliencyPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importResourcesToDraftAppVersion

Imports resources to Resilience Hub application draft version from different input sources. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportResourcesToDraftAppVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportResourcesToDraftAppVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EksSource;
use \OpenAPI\OpenAPI\Models\Operations\ImportResourcesToDraftAppVersionRequestBodyImportStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TerraformSource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportResourcesToDraftAppVersionRequest();
    $request->requestBody = new ImportResourcesToDraftAppVersionRequestBody();
    $request->requestBody->appArn = 'saepe';
    $request->requestBody->eksSources = [
        new EksSource(),
        new EksSource(),
    ];
    $request->requestBody->importStrategy = ImportResourcesToDraftAppVersionRequestBodyImportStrategyEnum::ADD_ONLY;
    $request->requestBody->sourceArns = [
        'amet',
    ];
    $request->requestBody->terraformSources = [
        new TerraformSource(),
        new TerraformSource(),
        new TerraformSource(),
        new TerraformSource(),
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->importResourcesToDraftAppVersion($request);

    if ($response->importResourcesToDraftAppVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlarmRecommendations

Lists the alarm recommendations for an Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAlarmRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAlarmRecommendationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlarmRecommendationsRequest();
    $request->requestBody = new ListAlarmRecommendationsRequestBody();
    $request->requestBody->assessmentArn = 'repellendus';
    $request->requestBody->maxResults = 519711;
    $request->requestBody->nextToken = 'similique';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->maxResults = 'qui';
    $request->nextToken = 'dolorum';

    $response = $sdk->sdk->listAlarmRecommendations($request);

    if ($response->listAlarmRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppAssessments

Lists the assessments for an Resilience Hub application. You can use request parameters to refine the results for the response object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssessmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAppAssessmentsComplianceStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAppAssessmentsInvokerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppAssessmentsRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->appArn = 'amet';
    $request->assessmentName = 'tempore';
    $request->assessmentStatus = [
        AssessmentStatusEnum::IN_PROGRESS,
        AssessmentStatusEnum::IN_PROGRESS,
        AssessmentStatusEnum::PENDING,
        AssessmentStatusEnum::SUCCESS,
    ];
    $request->complianceStatus = ListAppAssessmentsComplianceStatusEnum::POLICY_MET;
    $request->invoker = ListAppAssessmentsInvokerEnum::USER;
    $request->maxResults = 25662;
    $request->nextToken = 'expedita';
    $request->reverseOrder = false;

    $response = $sdk->sdk->listAppAssessments($request);

    if ($response->listAppAssessmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppComponentCompliances

Lists the compliances for an Resilience Hub Application Component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppComponentCompliancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppComponentCompliancesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppComponentCompliancesRequest();
    $request->requestBody = new ListAppComponentCompliancesRequestBody();
    $request->requestBody->assessmentArn = 'neque';
    $request->requestBody->maxResults = 153694;
    $request->requestBody->nextToken = 'vel';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->maxResults = 'cupiditate';
    $request->nextToken = 'maxime';

    $response = $sdk->sdk->listAppComponentCompliances($request);

    if ($response->listAppComponentCompliancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppComponentRecommendations

Lists the recommendations for an Resilience Hub Application Component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppComponentRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppComponentRecommendationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppComponentRecommendationsRequest();
    $request->requestBody = new ListAppComponentRecommendationsRequestBody();
    $request->requestBody->assessmentArn = 'pariatur';
    $request->requestBody->maxResults = 747080;
    $request->requestBody->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->maxResults = 'aliquid';
    $request->nextToken = 'quam';

    $response = $sdk->sdk->listAppComponentRecommendations($request);

    if ($response->listAppComponentRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppInputSources

Lists all the input sources of the Resilience Hub application. For more information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover the structure and describe your Resilience Hub application</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppInputSourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppInputSourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppInputSourcesRequest();
    $request->requestBody = new ListAppInputSourcesRequestBody();
    $request->requestBody->appArn = 'molestias';
    $request->requestBody->appVersion = 'temporibus';
    $request->requestBody->maxResults = 183280;
    $request->requestBody->nextToken = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';
    $request->maxResults = 'voluptatem';
    $request->nextToken = 'cumque';

    $response = $sdk->sdk->listAppInputSources($request);

    if ($response->listAppInputSourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppVersionAppComponents

Lists all the Application Components in the Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionAppComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionAppComponentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppVersionAppComponentsRequest();
    $request->requestBody = new ListAppVersionAppComponentsRequestBody();
    $request->requestBody->appArn = 'soluta';
    $request->requestBody->appVersion = 'nobis';
    $request->requestBody->maxResults = 92596;
    $request->requestBody->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->maxResults = 'delectus';
    $request->nextToken = 'dolorem';

    $response = $sdk->sdk->listAppVersionAppComponents($request);

    if ($response->listAppVersionAppComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppVersionResourceMappings

Lists how the resources in an application version are mapped/sourced from. Mappings can be physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionResourceMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionResourceMappingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppVersionResourceMappingsRequest();
    $request->requestBody = new ListAppVersionResourceMappingsRequestBody();
    $request->requestBody->appArn = 'dolore';
    $request->requestBody->appVersion = 'labore';
    $request->requestBody->maxResults = 240829;
    $request->requestBody->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->maxResults = 'repellendus';
    $request->nextToken = 'porro';

    $response = $sdk->sdk->listAppVersionResourceMappings($request);

    if ($response->listAppVersionResourceMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppVersionResources

Lists all the resources in an Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionResourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppVersionResourcesRequest();
    $request->requestBody = new ListAppVersionResourcesRequestBody();
    $request->requestBody->appArn = 'doloribus';
    $request->requestBody->appVersion = 'ut';
    $request->requestBody->maxResults = 703495;
    $request->requestBody->nextToken = 'cupiditate';
    $request->requestBody->resolutionId = 'qui';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'vero';
    $request->maxResults = 'omnis';
    $request->nextToken = 'quis';

    $response = $sdk->sdk->listAppVersionResources($request);

    if ($response->listAppVersionResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppVersions

Lists the different versions for the Resilience Hub applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppVersionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppVersionsRequest();
    $request->requestBody = new ListAppVersionsRequestBody();
    $request->requestBody->appArn = 'ipsum';
    $request->requestBody->maxResults = 961571;
    $request->requestBody->nextToken = 'voluptate';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->maxResults = 'odio';
    $request->nextToken = 'similique';

    $response = $sdk->sdk->listAppVersions($request);

    if ($response->listAppVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApps

<p>Lists your Resilience Hub applications.</p> <note> <p>You can filter applications using only one filter at a time or without using any filter. If you try to filter applications using multiple filters, you will get the following error:</p> <p> <code>An error occurred (ValidationException) when calling the ListApps operation: Only one filter is supported for this operation.</code> </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppsRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'sequi';
    $request->appArn = 'natus';
    $request->maxResults = 773326;
    $request->name = 'Camille Heidenreich';
    $request->nextToken = 'porro';

    $response = $sdk->sdk->listApps($request);

    if ($response->listAppsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommendationTemplates

Lists the recommendation templates for the Resilience Hub applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationTemplateStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecommendationTemplatesRequest();
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';
    $request->assessmentArn = 'tempora';
    $request->maxResults = 368584;
    $request->name = 'Judy Keebler';
    $request->nextToken = 'ratione';
    $request->recommendationTemplateArn = 'ex';
    $request->reverseOrder = false;
    $request->status = [
        RecommendationTemplateStatusEnum::PENDING,
        RecommendationTemplateStatusEnum::PENDING,
        RecommendationTemplateStatusEnum::SUCCESS,
    ];

    $response = $sdk->sdk->listRecommendationTemplates($request);

    if ($response->listRecommendationTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResiliencyPolicies

Lists the resiliency policies for the Resilience Hub applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResiliencyPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResiliencyPoliciesRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->maxResults = 788873;
    $request->nextToken = 'saepe';
    $request->policyName = 'ea';

    $response = $sdk->sdk->listResiliencyPolicies($request);

    if ($response->listResiliencyPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSopRecommendations

Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSopRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSopRecommendationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSopRecommendationsRequest();
    $request->requestBody = new ListSopRecommendationsRequestBody();
    $request->requestBody->assessmentArn = 'impedit';
    $request->requestBody->maxResults = 359271;
    $request->requestBody->nextToken = 'veniam';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'minima';

    $response = $sdk->sdk->listSopRecommendations($request);

    if ($response->listSopRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSuggestedResiliencyPolicies

Lists the suggested resiliency policies for the Resilience Hub applications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSuggestedResiliencyPoliciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSuggestedResiliencyPoliciesRequest();
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'impedit';
    $request->maxResults = 304582;
    $request->nextToken = 'fugit';

    $response = $sdk->sdk->listSuggestedResiliencyPolicies($request);

    if ($response->listSuggestedResiliencyPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for your resources in your Resilience Hub applications.

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
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'placeat';
    $request->resourceArn = 'velit';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTestRecommendations

Lists the test recommendations for the Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTestRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTestRecommendationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTestRecommendationsRequest();
    $request->requestBody = new ListTestRecommendationsRequestBody();
    $request->requestBody->assessmentArn = 'eum';
    $request->requestBody->maxResults = 420539;
    $request->requestBody->nextToken = 'nobis';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->maxResults = 'numquam';
    $request->nextToken = 'explicabo';

    $response = $sdk->sdk->listTestRecommendations($request);

    if ($response->listTestRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnsupportedAppVersionResources

Lists the resources that are not currently supported in Resilience Hub. An unsupported resource is a resource that exists in the object that was used to create an app, but is not supported by Resilience Hub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUnsupportedAppVersionResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnsupportedAppVersionResourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnsupportedAppVersionResourcesRequest();
    $request->requestBody = new ListUnsupportedAppVersionResourcesRequestBody();
    $request->requestBody->appArn = 'provident';
    $request->requestBody->appVersion = 'ipsa';
    $request->requestBody->maxResults = 476477;
    $request->requestBody->nextToken = 'magnam';
    $request->requestBody->resolutionId = 'odio';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'quidem';
    $request->maxResults = 'fugiat';
    $request->nextToken = 'ut';

    $response = $sdk->sdk->listUnsupportedAppVersionResources($request);

    if ($response->listUnsupportedAppVersionResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishAppVersion

Publishes a new version of a specific Resilience Hub application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PublishAppVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishAppVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishAppVersionRequest();
    $request->requestBody = new PublishAppVersionRequestBody();
    $request->requestBody->appArn = 'eum';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->publishAppVersion($request);

    if ($response->publishAppVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDraftAppVersionTemplate

Adds or updates the app template for an Resilience Hub application draft version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDraftAppVersionTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDraftAppVersionTemplateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDraftAppVersionTemplateRequest();
    $request->requestBody = new PutDraftAppVersionTemplateRequestBody();
    $request->requestBody->appArn = 'id';
    $request->requestBody->appTemplateBody = 'quidem';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->putDraftAppVersionTemplate($request);

    if ($response->putDraftAppVersionTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeDraftAppVersionResourceMappings

Removes resource mappings from a draft application version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveDraftAppVersionResourceMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveDraftAppVersionResourceMappingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveDraftAppVersionResourceMappingsRequest();
    $request->requestBody = new RemoveDraftAppVersionResourceMappingsRequestBody();
    $request->requestBody->appArn = 'voluptas';
    $request->requestBody->appRegistryAppNames = [
        'cupiditate',
    ];
    $request->requestBody->eksSourceNames = [
        'tempora',
    ];
    $request->requestBody->logicalStackNames = [
        'ipsam',
        'aspernatur',
        'sequi',
        'quo',
    ];
    $request->requestBody->resourceGroupNames = [
        'recusandae',
        'aperiam',
    ];
    $request->requestBody->resourceNames = [
        'quod',
        'dignissimos',
        'inventore',
    ];
    $request->requestBody->terraformSourceNames = [
        'totam',
        'accusamus',
    ];
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->removeDraftAppVersionResourceMappings($request);

    if ($response->removeDraftAppVersionResourceMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resolveAppVersionResources

Resolves the resources for an application version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResolveAppVersionResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResolveAppVersionResourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResolveAppVersionResourcesRequest();
    $request->requestBody = new ResolveAppVersionResourcesRequestBody();
    $request->requestBody->appArn = 'molestiae';
    $request->requestBody->appVersion = 'accusantium';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->resolveAppVersionResources($request);

    if ($response->resolveAppVersionResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAppAssessment

Creates a new application assessment for an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAppAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAppAssessmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAppAssessmentRequest();
    $request->requestBody = new StartAppAssessmentRequestBody();
    $request->requestBody->appArn = 'fuga';
    $request->requestBody->appVersion = 'mollitia';
    $request->requestBody->assessmentName = 'incidunt';
    $request->requestBody->clientToken = 'atque';
    $request->requestBody->tags = [
        'minima' => 'nisi',
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'ratione';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->startAppAssessment($request);

    if ($response->startAppAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Applies one or more tags to a resource.

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
        'et' => 'esse',
        'eveniet' => 'accusamus',
        'veritatis' => 'esse',
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'vel';
    $request->resourceArn = 'harum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a resource.

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
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sit';
    $request->resourceArn = 'culpa';
    $request->tagKeys = [
        'adipisci',
        'cumque',
        'consequuntur',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApp

Updates an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequestBodyAssessmentScheduleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppRequest();
    $request->requestBody = new UpdateAppRequestBody();
    $request->requestBody->appArn = 'consequatur';
    $request->requestBody->assessmentSchedule = UpdateAppRequestBodyAssessmentScheduleEnum::DAILY;
    $request->requestBody->clearResiliencyPolicyArn = false;
    $request->requestBody->description = 'quaerat';
    $request->requestBody->policyArn = 'sapiente';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'quas';

    $response = $sdk->sdk->updateApp($request);

    if ($response->updateAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAppVersion

<p>Updates the Resilience Hub application version.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppVersionRequest();
    $request->requestBody = new UpdateAppVersionRequestBody();
    $request->requestBody->additionalInfo = [
        'quasi' => [
            'error',
            'sint',
            'pariatur',
            'possimus',
        ],
        'quia' => [
            'asperiores',
            'facere',
            'veritatis',
            'consequuntur',
        ],
    ];
    $request->requestBody->appArn = 'quasi';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->updateAppVersion($request);

    if ($response->updateAppVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAppVersionAppComponent

<p>Updates an existing Application Component in the Resilience Hub application.</p> <note> <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppVersionAppComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppVersionAppComponentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppVersionAppComponentRequest();
    $request->requestBody = new UpdateAppVersionAppComponentRequestBody();
    $request->requestBody->additionalInfo = [
        'eius' => [
            'illum',
            'soluta',
            'accusantium',
        ],
        'aliquam' => [
            'dicta',
            'ullam',
            'reprehenderit',
            'ullam',
        ],
    ];
    $request->requestBody->appArn = 'nisi';
    $request->requestBody->id = '082d68ea-19f1-4d17-8513-39d08086a184';
    $request->requestBody->name = 'Carmen McClure';
    $request->requestBody->type = 'explicabo';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->updateAppVersionAppComponent($request);

    if ($response->updateAppVersionAppComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAppVersionResource

<p>Updates the resource details in the Resilience Hub application.</p> <note> <ul> <li> <p>This action has no effect outside Resilience Hub.</p> </li> <li> <p>This API updates the Resilience Hub application draft version. To use this resource for running resiliency assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p> </li> <li> <p>To update application version with new <code>physicalResourceID</code>, you must call <code>ResolveAppVersionResources</code> API.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppVersionResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppVersionResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppVersionResourceRequestBodyLogicalResourceId;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppVersionResourceRequest();
    $request->requestBody = new UpdateAppVersionResourceRequestBody();
    $request->requestBody->additionalInfo = [
        'voluptas' => [
            'aperiam',
            'ea',
            'quaerat',
            'consequuntur',
        ],
        'repellendus' => [
            'maxime',
            'dignissimos',
            'officia',
        ],
        'asperiores' => [
            'quae',
            'quaerat',
        ],
        'porro' => [
            'labore',
            'ab',
            'adipisci',
            'fuga',
        ],
    ];
    $request->requestBody->appArn = 'id';
    $request->requestBody->appComponents = [
        'velit',
        'culpa',
    ];
    $request->requestBody->awsAccountId = 'est';
    $request->requestBody->awsRegion = 'recusandae';
    $request->requestBody->excluded = false;
    $request->requestBody->logicalResourceId = new UpdateAppVersionResourceRequestBodyLogicalResourceId();
    $request->requestBody->logicalResourceId->eksSourceName = 'totam';
    $request->requestBody->logicalResourceId->identifier = 'fugiat';
    $request->requestBody->logicalResourceId->logicalStackName = 'vel';
    $request->requestBody->logicalResourceId->resourceGroupName = 'ducimus';
    $request->requestBody->logicalResourceId->terraformSourceName = 'quos';
    $request->requestBody->physicalResourceId = 'vel';
    $request->requestBody->resourceName = 'labore';
    $request->requestBody->resourceType = 'possimus';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'assumenda';

    $response = $sdk->sdk->updateAppVersionResource($request);

    if ($response->updateAppVersionResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResiliencyPolicy

Updates a resiliency policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResiliencyPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResiliencyPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResiliencyPolicyRequestBodyDataLocationConstraintEnum;
use \OpenAPI\OpenAPI\Models\Shared\FailurePolicy;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResiliencyPolicyRequestBodyTierEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResiliencyPolicyRequest();
    $request->requestBody = new UpdateResiliencyPolicyRequestBody();
    $request->requestBody->dataLocationConstraint = UpdateResiliencyPolicyRequestBodyDataLocationConstraintEnum::SAME_CONTINENT;
    $request->requestBody->policy = [
        'aliquid' => new FailurePolicy(),
        'aperiam' => new FailurePolicy(),
        'cum' => new FailurePolicy(),
        'consectetur' => new FailurePolicy(),
    ];
    $request->requestBody->policyArn = 'in';
    $request->requestBody->policyDescription = 'exercitationem';
    $request->requestBody->policyName = 'earum';
    $request->requestBody->tier = UpdateResiliencyPolicyRequestBodyTierEnum::NON_CRITICAL;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->updateResiliencyPolicy($request);

    if ($response->updateResiliencyPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
