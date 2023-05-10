# SDK

## Overview

<p><fullname>Migration Hub Strategy Recommendations</fullname> <p>This API reference provides descriptions, syntax, and other details about each of the actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-strategy/>
### Available Operations

* [getApplicationComponentDetails](#getapplicationcomponentdetails) -  Retrieves details about an application component. 
* [getApplicationComponentStrategies](#getapplicationcomponentstrategies) -  Retrieves a list of all the recommended strategies and tools for an application component running on a server. 
* [getAssessment](#getassessment) -  Retrieves the status of an on-going assessment. 
* [getImportFileTask](#getimportfiletask) -  Retrieves the details about a specific import task. 
* [getLatestAssessmentId](#getlatestassessmentid) - Retrieve the latest ID of a specific assessment task.
* [getPortfolioPreferences](#getportfoliopreferences) -  Retrieves your migration and modernization preferences. 
* [getPortfolioSummary](#getportfoliosummary) -  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 
* [getRecommendationReportDetails](#getrecommendationreportdetails) -  Retrieves detailed information about the specified recommendation report. 
* [getServerDetails](#getserverdetails) -  Retrieves detailed information about a specified server. 
* [getServerStrategies](#getserverstrategies) -  Retrieves recommended strategies and tools for the specified server. 
* [listApplicationComponents](#listapplicationcomponents) -  Retrieves a list of all the application components (processes). 
* [listCollectors](#listcollectors) -  Retrieves a list of all the installed collectors. 
* [listImportFileTask](#listimportfiletask) -  Retrieves a list of all the imports performed. 
* [listServers](#listservers) -  Returns a list of all the servers. 
* [putPortfolioPreferences](#putportfoliopreferences) -  Saves the specified migration and modernization preferences. 
* [startAssessment](#startassessment) -  Starts the assessment of an on-premises environment. 
* [startImportFileTask](#startimportfiletask) -  Starts a file import. 
* [startRecommendationReportGeneration](#startrecommendationreportgeneration) -  Starts generating a recommendation report. 
* [stopAssessment](#stopassessment) -  Stops the assessment of an on-premises environment. 
* [updateApplicationComponentConfig](#updateapplicationcomponentconfig) -  Updates the configuration of an application component. 
* [updateServerConfig](#updateserverconfig) -  Updates the configuration of the specified server. 

## getApplicationComponentDetails

 Retrieves details about an application component. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationComponentDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationComponentDetailsRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->applicationComponentId = 'ipsa';

    $response = $sdk->sdk->getApplicationComponentDetails($request);

    if ($response->getApplicationComponentDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApplicationComponentStrategies

 Retrieves a list of all the recommended strategies and tools for an application component running on a server. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApplicationComponentStrategiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApplicationComponentStrategiesRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->applicationComponentId = 'iusto';

    $response = $sdk->sdk->getApplicationComponentStrategies($request);

    if ($response->getApplicationComponentStrategiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssessment

 Retrieves the status of an on-going assessment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssessmentRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->sdk->getAssessment($request);

    if ($response->getAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImportFileTask

 Retrieves the details about a specific import task. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetImportFileTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImportFileTaskRequest();
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->id = '5929396f-ea75-496e-b10f-aaa2352c5955';

    $response = $sdk->sdk->getImportFileTask($request);

    if ($response->getImportFileTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestAssessmentId

Retrieve the latest ID of a specific assessment task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestAssessmentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestAssessmentIdRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->getLatestAssessmentId($request);

    if ($response->getLatestAssessmentIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortfolioPreferences

 Retrieves your migration and modernization preferences. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioPreferencesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfolioPreferencesRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->getPortfolioPreferences($request);

    if ($response->getPortfolioPreferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortfolioSummary

 Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfolioSummaryRequest();
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';

    $response = $sdk->sdk->getPortfolioSummary($request);

    if ($response->getPortfolioSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommendationReportDetails

 Retrieves detailed information about the specified recommendation report. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationReportDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendationReportDetailsRequest();
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';
    $request->id = '3f5ad019-da1f-4fe7-8f09-7b0074f15471';

    $response = $sdk->sdk->getRecommendationReportDetails($request);

    if ($response->getRecommendationReportDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServerDetails

 Retrieves detailed information about a specified server. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServerDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServerDetailsRequest();
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->maxResults = 692472;
    $request->nextToken = 'molestias';
    $request->serverId = 'excepturi';

    $response = $sdk->sdk->getServerDetails($request);

    if ($response->getServerDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServerStrategies

 Retrieves recommended strategies and tools for the specified server. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServerStrategiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServerStrategiesRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->serverId = 'sint';

    $response = $sdk->sdk->getServerStrategies($request);

    if ($response->getServerStrategiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationComponents

 Retrieves a list of all the application components (processes). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationComponentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationComponentsRequestBodyApplicationComponentCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\GroupNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationComponentsRequestBodySortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationComponentsRequest();
    $request->requestBody = new ListApplicationComponentsRequestBody();
    $request->requestBody->applicationComponentCriteria = ListApplicationComponentsRequestBodyApplicationComponentCriteriaEnum::NOT_DEFINED;
    $request->requestBody->filterValue = 'itaque';
    $request->requestBody->groupIdFilter = [
        new Group(),
        new Group(),
    ];
    $request->requestBody->maxResults = 318569;
    $request->requestBody->nextToken = 'consequatur';
    $request->requestBody->sort = ListApplicationComponentsRequestBodySortEnum::DESC;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->maxResults = 'qui';
    $request->nextToken = 'aliquid';

    $response = $sdk->sdk->listApplicationComponents($request);

    if ($response->listApplicationComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCollectors

 Retrieves a list of all the installed collectors. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCollectorsRequest();
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->maxResults = 146441;
    $request->nextToken = 'dolorum';

    $response = $sdk->sdk->listCollectors($request);

    if ($response->listCollectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listImportFileTask

 Retrieves a list of all the imports performed. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListImportFileTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListImportFileTaskRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->maxResults = 248753;
    $request->nextToken = 'eligendi';

    $response = $sdk->sdk->listImportFileTask($request);

    if ($response->listImportFileTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServers

 Returns a list of all the servers. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\GroupNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListServersRequestBodyServerCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListServersRequestBodySortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServersRequest();
    $request->requestBody = new ListServersRequestBody();
    $request->requestBody->filterValue = 'sint';
    $request->requestBody->groupIdFilter = [
        new Group(),
        new Group(),
    ];
    $request->requestBody->maxResults = 592042;
    $request->requestBody->nextToken = 'necessitatibus';
    $request->requestBody->serverCriteria = ListServersRequestBodyServerCriteriaEnum::SERVER_ID;
    $request->requestBody->sort = ListServersRequestBodySortEnum::DESC;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->maxResults = 'maiores';
    $request->nextToken = 'rerum';

    $response = $sdk->sdk->listServers($request);

    if ($response->listServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPortfolioPreferences

 Saves the specified migration and modernization preferences. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPortfolioPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutPortfolioPreferencesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutPortfolioPreferencesRequestBodyApplicationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutPortfolioPreferencesRequestBodyApplicationPreferences;
use \OpenAPI\OpenAPI\Models\Shared\ManagementPreference;
use \OpenAPI\OpenAPI\Models\Shared\AwsManagedResources;
use \OpenAPI\OpenAPI\Models\Shared\AwsManagedTargetDestinationEnum;
use \OpenAPI\OpenAPI\Models\Shared\NoManagementPreference;
use \OpenAPI\OpenAPI\Models\Shared\NoPreferenceTargetDestinationEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelfManageResources;
use \OpenAPI\OpenAPI\Models\Shared\SelfManageTargetDestinationEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutPortfolioPreferencesRequestBodyDatabasePreferences;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseManagementPreferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseMigrationPreference;
use \OpenAPI\OpenAPI\Models\Shared\Heterogeneous;
use \OpenAPI\OpenAPI\Models\Shared\HeterogeneousTargetDatabaseEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\Homogeneous;
use \OpenAPI\OpenAPI\Models\Shared\HomogeneousTargetDatabaseEngineEnum;
use \OpenAPI\OpenAPI\Models\Shared\NoDatabaseMigrationPreference;
use \OpenAPI\OpenAPI\Models\Shared\TargetDatabaseEngineEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutPortfolioPreferencesRequestBodyPrioritizeBusinessGoals;
use \OpenAPI\OpenAPI\Models\Shared\BusinessGoals;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPortfolioPreferencesRequest();
    $request->requestBody = new PutPortfolioPreferencesRequestBody();
    $request->requestBody->applicationMode = PutPortfolioPreferencesRequestBodyApplicationModeEnum::ALL;
    $request->requestBody->applicationPreferences = new PutPortfolioPreferencesRequestBodyApplicationPreferences();
    $request->requestBody->applicationPreferences->managementPreference = new ManagementPreference();
    $request->requestBody->applicationPreferences->managementPreference->awsManagedResources = new AwsManagedResources();
    $request->requestBody->applicationPreferences->managementPreference->awsManagedResources->targetDestination = [
        AwsManagedTargetDestinationEnum::AWS_FARGATE,
        AwsManagedTargetDestinationEnum::AWS_FARGATE,
    ];
    $request->requestBody->applicationPreferences->managementPreference->noPreference = new NoManagementPreference();
    $request->requestBody->applicationPreferences->managementPreference->noPreference->targetDestination = [
        NoPreferenceTargetDestinationEnum::AWS_FARGATE,
        NoPreferenceTargetDestinationEnum::AMAZON_ELASTIC_CONTAINER_SERVICE_ECS,
    ];
    $request->requestBody->applicationPreferences->managementPreference->selfManageResources = new SelfManageResources();
    $request->requestBody->applicationPreferences->managementPreference->selfManageResources->targetDestination = [
        SelfManageTargetDestinationEnum::NONE_SPECIFIED,
        SelfManageTargetDestinationEnum::AMAZON_ELASTIC_CONTAINER_SERVICE_ECS,
        SelfManageTargetDestinationEnum::AMAZON_ELASTIC_CLOUD_COMPUTE_EC2,
        SelfManageTargetDestinationEnum::AMAZON_ELASTIC_KUBERNETES_SERVICE_EKS,
    ];
    $request->requestBody->databasePreferences = new PutPortfolioPreferencesRequestBodyDatabasePreferences();
    $request->requestBody->databasePreferences->databaseManagementPreference = DatabaseManagementPreferenceEnum::NO_PREFERENCE;
    $request->requestBody->databasePreferences->databaseMigrationPreference = new DatabaseMigrationPreference();
    $request->requestBody->databasePreferences->databaseMigrationPreference->heterogeneous = new Heterogeneous();
    $request->requestBody->databasePreferences->databaseMigrationPreference->heterogeneous->targetDatabaseEngine = [
        HeterogeneousTargetDatabaseEngineEnum::ORACLE_DATABASE,
        HeterogeneousTargetDatabaseEngineEnum::SAP,
        HeterogeneousTargetDatabaseEngineEnum::MARIA_DB,
    ];
    $request->requestBody->databasePreferences->databaseMigrationPreference->homogeneous = new Homogeneous();
    $request->requestBody->databasePreferences->databaseMigrationPreference->homogeneous->targetDatabaseEngine = [
        HomogeneousTargetDatabaseEngineEnum::NONE_SPECIFIED,
        HomogeneousTargetDatabaseEngineEnum::NONE_SPECIFIED,
        HomogeneousTargetDatabaseEngineEnum::NONE_SPECIFIED,
    ];
    $request->requestBody->databasePreferences->databaseMigrationPreference->noPreference = new NoDatabaseMigrationPreference();
    $request->requestBody->databasePreferences->databaseMigrationPreference->noPreference->targetDatabaseEngine = [
        TargetDatabaseEngineEnum::MONGO_DB,
        TargetDatabaseEngineEnum::AWS_POSTGRE_SQL,
        TargetDatabaseEngineEnum::MARIA_DB,
    ];
    $request->requestBody->prioritizeBusinessGoals = new PutPortfolioPreferencesRequestBodyPrioritizeBusinessGoals();
    $request->requestBody->prioritizeBusinessGoals->businessGoals = new BusinessGoals();
    $request->requestBody->prioritizeBusinessGoals->businessGoals->licenseCostReduction = 394869;
    $request->requestBody->prioritizeBusinessGoals->businessGoals->modernizeInfrastructureWithCloudNativeTechnologies = 423855;
    $request->requestBody->prioritizeBusinessGoals->businessGoals->reduceOperationalOverheadWithManagedServices = 618809;
    $request->requestBody->prioritizeBusinessGoals->businessGoals->speedOfMigration = 606393;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->putPortfolioPreferences($request);

    if ($response->putPortfolioPreferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAssessment

 Starts the assessment of an on-premises environment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAssessmentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AssessmentTarget;
use \OpenAPI\OpenAPI\Models\Shared\ConditionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAssessmentRequest();
    $request->requestBody = new StartAssessmentRequestBody();
    $request->requestBody->assessmentTargets = [
        new AssessmentTarget(),
        new AssessmentTarget(),
    ];
    $request->requestBody->s3bucketForAnalysisData = 'suscipit';
    $request->requestBody->s3bucketForReportData = 'natus';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->startAssessment($request);

    if ($response->startAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImportFileTask

 Starts a file import. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImportFileTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImportFileTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartImportFileTaskRequestBodyDataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\GroupNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImportFileTaskRequest();
    $request->requestBody = new StartImportFileTaskRequestBody();
    $request->requestBody->s3Bucket = 'excepturi';
    $request->requestBody->dataSourceType = StartImportFileTaskRequestBodyDataSourceTypeEnum::MPA;
    $request->requestBody->groupId = [
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->requestBody->name = 'Kirk Bartoletti';
    $request->requestBody->s3bucketForReportData = 'mollitia';
    $request->requestBody->s3key = 'ad';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->startImportFileTask($request);

    if ($response->startImportFileTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startRecommendationReportGeneration

 Starts generating a recommendation report. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRecommendationReportGenerationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartRecommendationReportGenerationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\GroupNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartRecommendationReportGenerationRequestBodyOutputFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRecommendationReportGenerationRequest();
    $request->requestBody = new StartRecommendationReportGenerationRequestBody();
    $request->requestBody->groupIdFilter = [
        new Group(),
        new Group(),
        new Group(),
        new Group(),
    ];
    $request->requestBody->outputFormat = StartRecommendationReportGenerationRequestBodyOutputFormatEnum::JSON;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->startRecommendationReportGeneration($request);

    if ($response->startRecommendationReportGenerationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopAssessment

 Stops the assessment of an on-premises environment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopAssessmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopAssessmentRequest();
    $request->requestBody = new StopAssessmentRequestBody();
    $request->requestBody->assessmentId = 'repudiandae';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->stopAssessment($request);

    if ($response->stopAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplicationComponentConfig

 Updates the configuration of an application component. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationComponentConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationComponentConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationComponentConfigRequestBodyAppTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationComponentConfigRequestBodyInclusionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceCode;
use \OpenAPI\OpenAPI\Models\Shared\VersionControlEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationComponentConfigRequestBodyStrategyOption;
use \OpenAPI\OpenAPI\Models\Shared\StrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetDestinationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformationToolNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationComponentConfigRequest();
    $request->requestBody = new UpdateApplicationComponentConfigRequestBody();
    $request->requestBody->appType = UpdateApplicationComponentConfigRequestBodyAppTypeEnum::UNKNOWN;
    $request->requestBody->applicationComponentId = 'accusantium';
    $request->requestBody->configureOnly = false;
    $request->requestBody->inclusionStatus = UpdateApplicationComponentConfigRequestBodyInclusionStatusEnum::EXCLUDE_FROM_ASSESSMENT;
    $request->requestBody->secretsManagerKey = 'praesentium';
    $request->requestBody->sourceCodeList = [
        new SourceCode(),
        new SourceCode(),
        new SourceCode(),
    ];
    $request->requestBody->strategyOption = new UpdateApplicationComponentConfigRequestBodyStrategyOption();
    $request->requestBody->strategyOption->isPreferred = false;
    $request->requestBody->strategyOption->strategy = StrategyEnum::RETIREMENT;
    $request->requestBody->strategyOption->targetDestination = TargetDestinationEnum::AWS_ELASTIC_BEAN_STALK;
    $request->requestBody->strategyOption->toolName = TransformationToolNameEnum::SCHEMA_CONVERSION_TOOL;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->updateApplicationComponentConfig($request);

    if ($response->updateApplicationComponentConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServerConfig

 Updates the configuration of the specified server. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServerConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServerConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServerConfigRequestBodyStrategyOption;
use \OpenAPI\OpenAPI\Models\Shared\StrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetDestinationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformationToolNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServerConfigRequest();
    $request->requestBody = new UpdateServerConfigRequestBody();
    $request->requestBody->serverId = 'accusantium';
    $request->requestBody->strategyOption = new UpdateServerConfigRequestBodyStrategyOption();
    $request->requestBody->strategyOption->isPreferred = false;
    $request->requestBody->strategyOption->strategy = StrategyEnum::REHOST;
    $request->requestBody->strategyOption->targetDestination = TargetDestinationEnum::BABELFISH_FOR_AURORA_POSTGRE_SQL;
    $request->requestBody->strategyOption->toolName = TransformationToolNameEnum::IN_PLACE_OPERATING_SYSTEM_UPGRADE;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->updateServerConfig($request);

    if ($response->updateServerConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
