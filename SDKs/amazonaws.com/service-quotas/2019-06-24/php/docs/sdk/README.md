# SDK

## Overview

With Service Quotas, you can view and manage your quotas easily as your AWS workloads grow. Quotas, also referred to as limits, are the maximum number of resources that you can create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/servicequotas/>
### Available Operations

* [associateServiceQuotaTemplate](#associateservicequotatemplate) - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
* [deleteServiceQuotaIncreaseRequestFromTemplate](#deleteservicequotaincreaserequestfromtemplate) - Deletes the quota increase request for the specified quota from your quota request template.
* [disassociateServiceQuotaTemplate](#disassociateservicequotatemplate) - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
* [getAWSDefaultServiceQuota](#getawsdefaultservicequota) - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
* [getAssociationForServiceQuotaTemplate](#getassociationforservicequotatemplate) - Retrieves the status of the association for the quota request template.
* [getRequestedServiceQuotaChange](#getrequestedservicequotachange) - Retrieves information about the specified quota increase request.
* [getServiceQuota](#getservicequota) - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [getServiceQuotaIncreaseRequestFromTemplate](#getservicequotaincreaserequestfromtemplate) - Retrieves information about the specified quota increase request in your quota request template.
* [listAWSDefaultServiceQuotas](#listawsdefaultservicequotas) - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
* [listRequestedServiceQuotaChangeHistory](#listrequestedservicequotachangehistory) - Retrieves the quota increase requests for the specified service.
* [listRequestedServiceQuotaChangeHistoryByQuota](#listrequestedservicequotachangehistorybyquota) - Retrieves the quota increase requests for the specified quota.
* [listServiceQuotaIncreaseRequestsInTemplate](#listservicequotaincreaserequestsintemplate) - Lists the quota increase requests in the specified quota request template.
* [listServiceQuotas](#listservicequotas) - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [listServices](#listservices) - Lists the names and codes for the services integrated with Service Quotas.
* [listTagsForResource](#listtagsforresource) - Returns a list of the tags assigned to the specified applied quota.
* [putServiceQuotaIncreaseRequestIntoTemplate](#putservicequotaincreaserequestintotemplate) - Adds a quota increase request to your quota request template.
* [requestServiceQuotaIncrease](#requestservicequotaincrease) - Submits a quota increase request for the specified quota.
* [tagResource](#tagresource) - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
* [untagResource](#untagresource) - Removes tags from the specified applied quota. You can specify one or more tags to remove.

## associateServiceQuotaTemplate

Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceQuotaTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceQuotaTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateServiceQuotaTemplateRequest();
    $request->requestBody = [
        'ipsa' => 'delectus',
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
    ];
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = AssociateServiceQuotaTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_ASSOCIATE_SERVICE_QUOTA_TEMPLATE;

    $response = $sdk->sdk->associateServiceQuotaTemplate($request);

    if ($response->associateServiceQuotaTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServiceQuotaIncreaseRequestFromTemplate

Deletes the quota increase request for the specified quota from your quota request template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServiceQuotaIncreaseRequestFromTemplateRequest();
    $request->deleteServiceQuotaIncreaseRequestFromTemplateRequest = new DeleteServiceQuotaIncreaseRequestFromTemplateRequest();
    $request->deleteServiceQuotaIncreaseRequestFromTemplateRequest->awsRegion = 'veritatis';
    $request->deleteServiceQuotaIncreaseRequestFromTemplateRequest->quotaCode = 'deserunt';
    $request->deleteServiceQuotaIncreaseRequestFromTemplateRequest->serviceCode = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_DELETE_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE;

    $response = $sdk->sdk->deleteServiceQuotaIncreaseRequestFromTemplate($request);

    if ($response->deleteServiceQuotaIncreaseRequestFromTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateServiceQuotaTemplate

Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateServiceQuotaTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateServiceQuotaTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateServiceQuotaTemplateRequest();
    $request->requestBody = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = DisassociateServiceQuotaTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_DISASSOCIATE_SERVICE_QUOTA_TEMPLATE;

    $response = $sdk->sdk->disassociateServiceQuotaTemplate($request);

    if ($response->disassociateServiceQuotaTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAWSDefaultServiceQuota

Retrieves the default value for the specified quota. The default value does not reflect any quota increases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAWSDefaultServiceQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAWSDefaultServiceQuotaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAWSDefaultServiceQuotaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAWSDefaultServiceQuotaRequest();
    $request->getAWSDefaultServiceQuotaRequest = new GetAWSDefaultServiceQuotaRequest();
    $request->getAWSDefaultServiceQuotaRequest->quotaCode = 'totam';
    $request->getAWSDefaultServiceQuotaRequest->serviceCode = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = GetAWSDefaultServiceQuotaXAmzTargetEnum::SERVICE_QUOTAS_V20190624_GET_AWS_DEFAULT_SERVICE_QUOTA;

    $response = $sdk->sdk->getAWSDefaultServiceQuota($request);

    if ($response->getAWSDefaultServiceQuotaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssociationForServiceQuotaTemplate

Retrieves the status of the association for the quota request template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationForServiceQuotaTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssociationForServiceQuotaTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssociationForServiceQuotaTemplateRequest();
    $request->requestBody = [
        'excepturi' => 'aspernatur',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = GetAssociationForServiceQuotaTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_GET_ASSOCIATION_FOR_SERVICE_QUOTA_TEMPLATE;

    $response = $sdk->sdk->getAssociationForServiceQuotaTemplate($request);

    if ($response->getAssociationForServiceQuotaTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRequestedServiceQuotaChange

Retrieves information about the specified quota increase request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRequestedServiceQuotaChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRequestedServiceQuotaChangeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRequestedServiceQuotaChangeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequestedServiceQuotaChangeRequest();
    $request->getRequestedServiceQuotaChangeRequest = new GetRequestedServiceQuotaChangeRequest();
    $request->getRequestedServiceQuotaChangeRequest->requestId = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = GetRequestedServiceQuotaChangeXAmzTargetEnum::SERVICE_QUOTAS_V20190624_GET_REQUESTED_SERVICE_QUOTA_CHANGE;

    $response = $sdk->sdk->getRequestedServiceQuotaChange($request);

    if ($response->getRequestedServiceQuotaChangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceQuota

Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceQuotaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceQuotaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceQuotaRequest();
    $request->getServiceQuotaRequest = new GetServiceQuotaRequest();
    $request->getServiceQuotaRequest->quotaCode = 'saepe';
    $request->getServiceQuotaRequest->serviceCode = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = GetServiceQuotaXAmzTargetEnum::SERVICE_QUOTAS_V20190624_GET_SERVICE_QUOTA;

    $response = $sdk->sdk->getServiceQuota($request);

    if ($response->getServiceQuotaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceQuotaIncreaseRequestFromTemplate

Retrieves information about the specified quota increase request in your quota request template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceQuotaIncreaseRequestFromTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetServiceQuotaIncreaseRequestFromTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceQuotaIncreaseRequestFromTemplateRequest();
    $request->getServiceQuotaIncreaseRequestFromTemplateRequest = new GetServiceQuotaIncreaseRequestFromTemplateRequest();
    $request->getServiceQuotaIncreaseRequestFromTemplateRequest->awsRegion = 'dolorem';
    $request->getServiceQuotaIncreaseRequestFromTemplateRequest->quotaCode = 'corporis';
    $request->getServiceQuotaIncreaseRequestFromTemplateRequest->serviceCode = 'explicabo';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_GET_SERVICE_QUOTA_INCREASE_REQUEST_FROM_TEMPLATE;

    $response = $sdk->sdk->getServiceQuotaIncreaseRequestFromTemplate($request);

    if ($response->getServiceQuotaIncreaseRequestFromTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAWSDefaultServiceQuotas

Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAWSDefaultServiceQuotasRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAWSDefaultServiceQuotasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAWSDefaultServiceQuotasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAWSDefaultServiceQuotasRequest();
    $request->listAWSDefaultServiceQuotasRequest = new ListAWSDefaultServiceQuotasRequest();
    $request->listAWSDefaultServiceQuotasRequest->maxResults = 438601;
    $request->listAWSDefaultServiceQuotasRequest->nextToken = 'culpa';
    $request->listAWSDefaultServiceQuotasRequest->serviceCode = 'doloribus';
    $request->maxResults = 'sapiente';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = ListAWSDefaultServiceQuotasXAmzTargetEnum::SERVICE_QUOTAS_V20190624_LIST_AWS_DEFAULT_SERVICE_QUOTAS;

    $response = $sdk->sdk->listAWSDefaultServiceQuotas($request);

    if ($response->listAWSDefaultServiceQuotasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRequestedServiceQuotaChangeHistory

Retrieves the quota increase requests for the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRequestedServiceQuotaChangeHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRequestedServiceQuotaChangeHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\RequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRequestedServiceQuotaChangeHistoryRequest();
    $request->listRequestedServiceQuotaChangeHistoryRequest = new ListRequestedServiceQuotaChangeHistoryRequest();
    $request->listRequestedServiceQuotaChangeHistoryRequest->maxResults = 253291;
    $request->listRequestedServiceQuotaChangeHistoryRequest->nextToken = 'commodi';
    $request->listRequestedServiceQuotaChangeHistoryRequest->serviceCode = 'quam';
    $request->listRequestedServiceQuotaChangeHistoryRequest->status = RequestStatusEnum::APPROVED;
    $request->maxResults = 'velit';
    $request->nextToken = 'error';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum::SERVICE_QUOTAS_V20190624_LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY;

    $response = $sdk->sdk->listRequestedServiceQuotaChangeHistory($request);

    if ($response->listRequestedServiceQuotaChangeHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRequestedServiceQuotaChangeHistoryByQuota

Retrieves the quota increase requests for the specified quota.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
use \OpenAPI\OpenAPI\Models\Shared\RequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRequestedServiceQuotaChangeHistoryByQuotaRequest();
    $request->listRequestedServiceQuotaChangeHistoryByQuotaRequest = new ListRequestedServiceQuotaChangeHistoryByQuotaRequest();
    $request->listRequestedServiceQuotaChangeHistoryByQuotaRequest->maxResults = 778346;
    $request->listRequestedServiceQuotaChangeHistoryByQuotaRequest->nextToken = 'sequi';
    $request->listRequestedServiceQuotaChangeHistoryByQuotaRequest->quotaCode = 'tenetur';
    $request->listRequestedServiceQuotaChangeHistoryByQuotaRequest->serviceCode = 'ipsam';
    $request->listRequestedServiceQuotaChangeHistoryByQuotaRequest->status = RequestStatusEnum::DENIED;
    $request->maxResults = 'possimus';
    $request->nextToken = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum::SERVICE_QUOTAS_V20190624_LIST_REQUESTED_SERVICE_QUOTA_CHANGE_HISTORY_BY_QUOTA;

    $response = $sdk->sdk->listRequestedServiceQuotaChangeHistoryByQuota($request);

    if ($response->listRequestedServiceQuotaChangeHistoryByQuotaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceQuotaIncreaseRequestsInTemplate

Lists the quota increase requests in the specified quota request template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceQuotaIncreaseRequestsInTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceQuotaIncreaseRequestsInTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceQuotaIncreaseRequestsInTemplateRequest();
    $request->listServiceQuotaIncreaseRequestsInTemplateRequest = new ListServiceQuotaIncreaseRequestsInTemplateRequest();
    $request->listServiceQuotaIncreaseRequestsInTemplateRequest->awsRegion = 'vero';
    $request->listServiceQuotaIncreaseRequestsInTemplateRequest->maxResults = 468651;
    $request->listServiceQuotaIncreaseRequestsInTemplateRequest->nextToken = 'praesentium';
    $request->listServiceQuotaIncreaseRequestsInTemplateRequest->serviceCode = 'voluptatibus';
    $request->maxResults = 'ipsa';
    $request->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_LIST_SERVICE_QUOTA_INCREASE_REQUESTS_IN_TEMPLATE;

    $response = $sdk->sdk->listServiceQuotaIncreaseRequestsInTemplate($request);

    if ($response->listServiceQuotaIncreaseRequestsInTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServiceQuotas

Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceQuotasRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServiceQuotasRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServiceQuotasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServiceQuotasRequest();
    $request->listServiceQuotasRequest = new ListServiceQuotasRequest();
    $request->listServiceQuotasRequest->maxResults = 120196;
    $request->listServiceQuotasRequest->nextToken = 'corporis';
    $request->listServiceQuotasRequest->serviceCode = 'dolore';
    $request->maxResults = 'iusto';
    $request->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = ListServiceQuotasXAmzTargetEnum::SERVICE_QUOTAS_V20190624_LIST_SERVICE_QUOTAS;

    $response = $sdk->sdk->listServiceQuotas($request);

    if ($response->listServiceQuotasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServices

Lists the names and codes for the services integrated with Service Quotas.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServicesRequest();
    $request->listServicesRequest = new ListServicesRequest();
    $request->listServicesRequest->maxResults = 692472;
    $request->listServicesRequest->nextToken = 'molestias';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'voluptates';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = ListServicesXAmzTargetEnum::SERVICE_QUOTAS_V20190624_LIST_SERVICES;

    $response = $sdk->sdk->listServices($request);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of the tags assigned to the specified applied quota.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::SERVICE_QUOTAS_V20190624_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putServiceQuotaIncreaseRequestIntoTemplate

Adds a quota increase request to your quota request template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutServiceQuotaIncreaseRequestIntoTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutServiceQuotaIncreaseRequestIntoTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutServiceQuotaIncreaseRequestIntoTemplateRequest();
    $request->putServiceQuotaIncreaseRequestIntoTemplateRequest = new PutServiceQuotaIncreaseRequestIntoTemplateRequest();
    $request->putServiceQuotaIncreaseRequestIntoTemplateRequest->awsRegion = 'deserunt';
    $request->putServiceQuotaIncreaseRequestIntoTemplateRequest->desiredValue = 7163.27;
    $request->putServiceQuotaIncreaseRequestIntoTemplateRequest->quotaCode = 'quibusdam';
    $request->putServiceQuotaIncreaseRequestIntoTemplateRequest->serviceCode = 'labore';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_PUT_SERVICE_QUOTA_INCREASE_REQUEST_INTO_TEMPLATE;

    $response = $sdk->sdk->putServiceQuotaIncreaseRequestIntoTemplate($request);

    if ($response->putServiceQuotaIncreaseRequestIntoTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestServiceQuotaIncrease

Submits a quota increase request for the specified quota.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RequestServiceQuotaIncreaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\RequestServiceQuotaIncreaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\RequestServiceQuotaIncreaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestServiceQuotaIncreaseRequest();
    $request->requestServiceQuotaIncreaseRequest = new RequestServiceQuotaIncreaseRequest();
    $request->requestServiceQuotaIncreaseRequest->desiredValue = 8289.4;
    $request->requestServiceQuotaIncreaseRequest->quotaCode = 'ipsam';
    $request->requestServiceQuotaIncreaseRequest->serviceCode = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = RequestServiceQuotaIncreaseXAmzTargetEnum::SERVICE_QUOTAS_V20190624_REQUEST_SERVICE_QUOTA_INCREASE;

    $response = $sdk->sdk->requestServiceQuotaIncrease($request);

    if ($response->requestServiceQuotaIncreaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to the specified applied quota. You can include one or more tags to add to the quota.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'delectus';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::SERVICE_QUOTAS_V20190624_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the specified applied quota. You can specify one or more tags to remove.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'officia';
    $request->untagResourceRequest->tagKeys = [
        'debitis',
    ];
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::SERVICE_QUOTAS_V20190624_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
