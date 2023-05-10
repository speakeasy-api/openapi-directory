# shippingQuote

### Available Operations

* [createShippingQuote](#createshippingquote) - The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.
* [getShippingQuote](#getshippingquote) - This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

## createShippingQuote

The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateShippingQuoteRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingQuoteRequest;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\PackageSpecification;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\Weight;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\ContactAddress;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Operations\CreateShippingQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShippingQuoteRequest();
    $request->shippingQuoteRequest = new ShippingQuoteRequest();
    $request->shippingQuoteRequest->orders = [
        new Order(),
    ];
    $request->shippingQuoteRequest->packageSpecification = new PackageSpecification();
    $request->shippingQuoteRequest->packageSpecification->dimensions = new Dimensions();
    $request->shippingQuoteRequest->packageSpecification->dimensions->height = 'deserunt';
    $request->shippingQuoteRequest->packageSpecification->dimensions->length = 'perferendis';
    $request->shippingQuoteRequest->packageSpecification->dimensions->unit = 'ipsam';
    $request->shippingQuoteRequest->packageSpecification->dimensions->width = 'repellendus';
    $request->shippingQuoteRequest->packageSpecification->weight = new Weight();
    $request->shippingQuoteRequest->packageSpecification->weight->unit = 'sapiente';
    $request->shippingQuoteRequest->packageSpecification->weight->value = 'quo';
    $request->shippingQuoteRequest->shipFrom = new Contact();
    $request->shippingQuoteRequest->shipFrom->companyName = 'odit';
    $request->shippingQuoteRequest->shipFrom->contactAddress = new ContactAddress();
    $request->shippingQuoteRequest->shipFrom->contactAddress->addressLine1 = 'at';
    $request->shippingQuoteRequest->shipFrom->contactAddress->addressLine2 = 'at';
    $request->shippingQuoteRequest->shipFrom->contactAddress->city = 'Lakewood';
    $request->shippingQuoteRequest->shipFrom->contactAddress->countryCode = 'SH';
    $request->shippingQuoteRequest->shipFrom->contactAddress->county = 'quod';
    $request->shippingQuoteRequest->shipFrom->contactAddress->postalCode = '57617';
    $request->shippingQuoteRequest->shipFrom->contactAddress->stateOrProvince = 'officia';
    $request->shippingQuoteRequest->shipFrom->fullName = 'occaecati';
    $request->shippingQuoteRequest->shipFrom->primaryPhone = new PhoneNumber();
    $request->shippingQuoteRequest->shipFrom->primaryPhone->phoneNumber = 'fugit';
    $request->shippingQuoteRequest->shipTo = new Contact();
    $request->shippingQuoteRequest->shipTo->companyName = 'deleniti';
    $request->shippingQuoteRequest->shipTo->contactAddress = new ContactAddress();
    $request->shippingQuoteRequest->shipTo->contactAddress->addressLine1 = 'hic';
    $request->shippingQuoteRequest->shipTo->contactAddress->addressLine2 = 'optio';
    $request->shippingQuoteRequest->shipTo->contactAddress->city = 'Benjaminview';
    $request->shippingQuoteRequest->shipTo->contactAddress->countryCode = 'KI';
    $request->shippingQuoteRequest->shipTo->contactAddress->county = 'modi';
    $request->shippingQuoteRequest->shipTo->contactAddress->postalCode = '77425';
    $request->shippingQuoteRequest->shipTo->contactAddress->stateOrProvince = 'aspernatur';
    $request->shippingQuoteRequest->shipTo->fullName = 'perferendis';
    $request->shippingQuoteRequest->shipTo->primaryPhone = new PhoneNumber();
    $request->shippingQuoteRequest->shipTo->primaryPhone->phoneNumber = 'ad';
    $request->xEbayCMarketplaceId = 'natus';

    $requestSecurity = new CreateShippingQuoteSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingQuote->createShippingQuote($request, $requestSecurity);

    if ($response->shippingQuote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShippingQuote

This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingQuoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShippingQuoteRequest();
    $request->shippingQuoteId = 'sed';

    $requestSecurity = new GetShippingQuoteSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingQuote->getShippingQuote($request, $requestSecurity);

    if ($response->shippingQuote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
