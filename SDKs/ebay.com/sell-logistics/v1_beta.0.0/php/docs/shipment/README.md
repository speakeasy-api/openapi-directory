# shipment

### Available Operations

* [cancelShipment](#cancelshipment) - This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.
* [createFromShippingQuote](#createfromshippingquote) - This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>
* [downloadLabelFile](#downloadlabelfile) - This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->
* [getShipment](#getshipment) - This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

## cancelShipment

This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelShipmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelShipmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelShipmentRequest();
    $request->shipmentId = 'provident';

    $requestSecurity = new CancelShipmentSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shipment->cancelShipment($request, $requestSecurity);

    if ($response->shipment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFromShippingQuote

This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateShipmentFromQuoteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalOption;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\ContactAddress;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Operations\CreateFromShippingQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShipmentFromQuoteRequest();
    $request->additionalOptions = [
        new AdditionalOption(),
        new AdditionalOption(),
        new AdditionalOption(),
    ];
    $request->labelCustomMessage = 'quibusdam';
    $request->labelSize = 'unde';
    $request->rateId = 'nulla';
    $request->returnTo = new Contact();
    $request->returnTo->companyName = 'corrupti';
    $request->returnTo->contactAddress = new ContactAddress();
    $request->returnTo->contactAddress->addressLine1 = 'illum';
    $request->returnTo->contactAddress->addressLine2 = 'vel';
    $request->returnTo->contactAddress->city = 'Oberbrunnerbury';
    $request->returnTo->contactAddress->countryCode = 'IS';
    $request->returnTo->contactAddress->county = 'magnam';
    $request->returnTo->contactAddress->postalCode = '09234-7854';
    $request->returnTo->contactAddress->stateOrProvince = 'excepturi';
    $request->returnTo->fullName = 'nisi';
    $request->returnTo->primaryPhone = new PhoneNumber();
    $request->returnTo->primaryPhone->phoneNumber = 'recusandae';
    $request->shippingQuoteId = 'temporibus';

    $requestSecurity = new CreateFromShippingQuoteSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shipment->createFromShippingQuote($request, $requestSecurity);

    if ($response->shipment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadLabelFile

This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DownloadLabelFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DownloadLabelFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadLabelFileRequest();
    $request->shipmentId = 'ab';

    $requestSecurity = new DownloadLabelFileSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shipment->downloadLabelFile($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShipment

This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShipmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShipmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShipmentRequest();
    $request->shipmentId = 'quis';

    $requestSecurity = new GetShipmentSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shipment->getShipment($request, $requestSecurity);

    if ($response->shipment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
