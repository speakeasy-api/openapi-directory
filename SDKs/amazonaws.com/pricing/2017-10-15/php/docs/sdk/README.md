# SDK

## Overview

<p>Amazon Web Services Price List API is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as <code>Location</code>, <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at the SKU level. You can use the Amazon Web Services Price List to build cost control and scenario planning tools, reconcile billing data, forecast future spend for budgeting purposes, and provide cost benefit analysis that compare your internal workloads with Amazon Web Services.</p> <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then <code>GetServices</code> with a service code to retrieve the attribute names for that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code> to see what values are available for an attribute. With the service code and an attribute name and value, you can use <code>GetProducts</code> to find specific products that you're interested in, such as an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code> <code>volumeType</code>.</p> <p>Service Endpoint</p> <p>Amazon Web Services Price List service API provides the following two endpoints:</p> <ul> <li> <p>https://api.pricing.us-east-1.amazonaws.com</p> </li> <li> <p>https://api.pricing.ap-south-1.amazonaws.com</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/pricing/>
### Available Operations

* [describeServices](#describeservices) - Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.
* [getAttributeValues](#getattributevalues) - Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.
* [getPriceListFileUrl](#getpricelistfileurl) - <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns the URL that you can retrieve your Price List file from. This URL is based on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. </p>
* [getProducts](#getproducts) - Returns a list of all products that match the filter criteria.
* [listPriceLists](#listpricelists) - <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns a list of Price List references that the requester if authorized to view, given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price List references from all available Amazon Web Services Regions. Use with a <code>RegionCode</code> filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html"> <code>GetPriceListFileUrl</code> </a> API.</p>

## describeServices

Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServicesRequest();
    $request->describeServicesRequest = new DescribeServicesRequest();
    $request->describeServicesRequest->formatVersion = 'magnam';
    $request->describeServicesRequest->maxResults = 891773;
    $request->describeServicesRequest->nextToken = 'ipsa';
    $request->describeServicesRequest->serviceCode = 'delectus';
    $request->maxResults = 'tempora';
    $request->nextToken = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = DescribeServicesXAmzTargetEnum::AWS_PRICE_LIST_SERVICE_DESCRIBE_SERVICES;

    $response = $sdk->sdk->describeServices($request);

    if ($response->describeServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttributeValues

Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAttributeValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAttributeValuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAttributeValuesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAttributeValuesRequest();
    $request->getAttributeValuesRequest = new GetAttributeValuesRequest();
    $request->getAttributeValuesRequest->attributeName = 'recusandae';
    $request->getAttributeValuesRequest->maxResults = 836079;
    $request->getAttributeValuesRequest->nextToken = 'ab';
    $request->getAttributeValuesRequest->serviceCode = 'quis';
    $request->maxResults = 'veritatis';
    $request->nextToken = 'deserunt';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = GetAttributeValuesXAmzTargetEnum::AWS_PRICE_LIST_SERVICE_GET_ATTRIBUTE_VALUES;

    $response = $sdk->sdk->getAttributeValues($request);

    if ($response->getAttributeValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPriceListFileUrl

<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns the URL that you can retrieve your Price List file from. This URL is based on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPriceListFileUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPriceListFileUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPriceListFileUrlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPriceListFileUrlRequest();
    $request->getPriceListFileUrlRequest = new GetPriceListFileUrlRequest();
    $request->getPriceListFileUrlRequest->fileFormat = 'at';
    $request->getPriceListFileUrlRequest->priceListArn = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = GetPriceListFileUrlXAmzTargetEnum::AWS_PRICE_LIST_SERVICE_GET_PRICE_LIST_FILE_URL;

    $response = $sdk->sdk->getPriceListFileUrl($request);

    if ($response->getPriceListFileUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProducts

Returns a list of all products that match the filter criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetProductsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetProductsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductsRequest();
    $request->getProductsRequest = new GetProductsRequest();
    $request->getProductsRequest->filters = [
        new Filter(),
    ];
    $request->getProductsRequest->formatVersion = 'nam';
    $request->getProductsRequest->maxResults = 639921;
    $request->getProductsRequest->nextToken = 'occaecati';
    $request->getProductsRequest->serviceCode = 'fugit';
    $request->maxResults = 'deleniti';
    $request->nextToken = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = GetProductsXAmzTargetEnum::AWS_PRICE_LIST_SERVICE_GET_PRODUCTS;

    $response = $sdk->sdk->getProducts($request);

    if ($response->getProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPriceLists

<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns a list of Price List references that the requester if authorized to view, given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price List references from all available Amazon Web Services Regions. Use with a <code>RegionCode</code> filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html"> <code>GetPriceListFileUrl</code> </a> API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPriceListsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPriceListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPriceListsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPriceListsRequest();
    $request->listPriceListsRequest = new ListPriceListsRequest();
    $request->listPriceListsRequest->currencyCode = 'impedit';
    $request->listPriceListsRequest->effectiveDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T00:14:45.467Z');
    $request->listPriceListsRequest->maxResults = 216550;
    $request->listPriceListsRequest->nextToken = 'excepturi';
    $request->listPriceListsRequest->regionCode = 'aspernatur';
    $request->listPriceListsRequest->serviceCode = 'perferendis';
    $request->maxResults = 'ad';
    $request->nextToken = 'natus';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = ListPriceListsXAmzTargetEnum::AWS_PRICE_LIST_SERVICE_LIST_PRICE_LISTS;

    $response = $sdk->sdk->listPriceLists($request);

    if ($response->listPriceListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
