# paymentDispute

### Available Operations

* [acceptPaymentDispute](#acceptpaymentdispute) - Accept Payment Dispute
* [addEvidence](#addevidence) - Add an Evidence File
* [contestPaymentDispute](#contestpaymentdispute) - Contest Payment Dispute
* [fetchEvidenceContent](#fetchevidencecontent) - Get Payment Dispute Evidence File
* [getActivities](#getactivities) - Get Payment Dispute Activity
* [getPaymentDispute](#getpaymentdispute) - Get Payment Dispute Details
* [getPaymentDisputeSummaries](#getpaymentdisputesummaries) - Search Payment Dispute by Filters
* [updateEvidence](#updateevidence) - Update evidence
* [uploadEvidenceFile](#uploadevidencefile) - Upload an Evidence File

## acceptPaymentDispute

This method is used if the seller wishes to accept a payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on theste fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPaymentDisputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptPaymentDisputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReturnAddress;
use \OpenAPI\OpenAPI\Models\Shared\Phone;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPaymentDisputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptPaymentDisputeRequest();
    $request->acceptPaymentDisputeRequest = new AcceptPaymentDisputeRequest();
    $request->acceptPaymentDisputeRequest->returnAddress = new ReturnAddress();
    $request->acceptPaymentDisputeRequest->returnAddress->addressLine1 = 'ipsa';
    $request->acceptPaymentDisputeRequest->returnAddress->addressLine2 = 'delectus';
    $request->acceptPaymentDisputeRequest->returnAddress->city = 'South Jasper';
    $request->acceptPaymentDisputeRequest->returnAddress->country = 'Serbia';
    $request->acceptPaymentDisputeRequest->returnAddress->county = 'placeat';
    $request->acceptPaymentDisputeRequest->returnAddress->fullName = 'voluptatum';
    $request->acceptPaymentDisputeRequest->returnAddress->postalCode = '53980';
    $request->acceptPaymentDisputeRequest->returnAddress->primaryPhone = new Phone();
    $request->acceptPaymentDisputeRequest->returnAddress->primaryPhone->countryCode = 'GM';
    $request->acceptPaymentDisputeRequest->returnAddress->primaryPhone->number = 'veritatis';
    $request->acceptPaymentDisputeRequest->returnAddress->stateOrProvince = 'deserunt';
    $request->acceptPaymentDisputeRequest->revision = 20218;
    $request->paymentDisputeId = 'ipsam';

    $requestSecurity = new AcceptPaymentDisputeSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->acceptPaymentDispute($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addEvidence

This method is used by the seller to add one or more evidence files to address a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The file(s) to add are identified through the <strong>files</strong> array in the request payload.  Adding one or more new evidence files for a payment dispute triggers the creation of an evidence file, and the unique identifier for the new evidence file is automatically generated and returned in the <strong>evidenceId</strong> field of the <strong>addEvidence</strong> response payload upon a successful call.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field. All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an <strong>evidenceId</strong> value is returned in the response. This indicates that a new evidence set has been created for the payment dispute, and this evidence set includes the evidence file(s) that were passed in to the <strong>fileId</strong> array. The <strong>evidenceId</strong> value will be needed if the seller wishes to add to the evidence set by using the <strong>updateEvidence</strong> method, or if they want to retrieve a specific evidence file within the evidence set by using the <strong>fetchEvidenceContent</strong> method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddEvidencePaymentDisputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileEvidence;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItems;
use \OpenAPI\OpenAPI\Models\Operations\AddEvidenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddEvidenceRequest();
    $request->addEvidencePaymentDisputeRequest = new AddEvidencePaymentDisputeRequest();
    $request->addEvidencePaymentDisputeRequest->evidenceType = 'repellendus';
    $request->addEvidencePaymentDisputeRequest->files = [
        new FileEvidence(),
        new FileEvidence(),
        new FileEvidence(),
        new FileEvidence(),
    ];
    $request->addEvidencePaymentDisputeRequest->lineItems = [
        new OrderLineItems(),
        new OrderLineItems(),
        new OrderLineItems(),
        new OrderLineItems(),
    ];
    $request->paymentDisputeId = 'odit';

    $requestSecurity = new AddEvidenceSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->addEvidence($request, $requestSecurity);

    if ($response->addEvidencePaymentDisputeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contestPaymentDispute

This method is used if the seller wishes to contest a payment dispute initiated by the buyer. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> Before contesting a payment dispute, the seller must upload all supporting files using the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong>), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of supporting file(s) that will be needed to contest the payment dispute.</span><br><br>If a seller decides to contest a payment dispute, that seller should be prepared to provide supporting documents such as proof of delivery, proof of authentication, or other documents. The type of supporting documents that the seller will provide will depend on why the buyer filed the payment dispute.<br><br>The <strong>revision</strong> field in the request payload is required, and the <strong>returnAddress</strong> field should be supplied if the seller is expecting the buyer to return the item. See the Request Payload section for more information on these fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContestPaymentDisputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContestPaymentDisputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReturnAddress;
use \OpenAPI\OpenAPI\Models\Shared\Phone;
use \OpenAPI\OpenAPI\Models\Operations\ContestPaymentDisputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContestPaymentDisputeRequest();
    $request->contestPaymentDisputeRequest = new ContestPaymentDisputeRequest();
    $request->contestPaymentDisputeRequest->note = 'at';
    $request->contestPaymentDisputeRequest->returnAddress = new ReturnAddress();
    $request->contestPaymentDisputeRequest->returnAddress->addressLine1 = 'at';
    $request->contestPaymentDisputeRequest->returnAddress->addressLine2 = 'maiores';
    $request->contestPaymentDisputeRequest->returnAddress->city = 'Pinkiefield';
    $request->contestPaymentDisputeRequest->returnAddress->country = 'Kiribati';
    $request->contestPaymentDisputeRequest->returnAddress->county = 'totam';
    $request->contestPaymentDisputeRequest->returnAddress->fullName = 'porro';
    $request->contestPaymentDisputeRequest->returnAddress->postalCode = '17651-5975';
    $request->contestPaymentDisputeRequest->returnAddress->primaryPhone = new Phone();
    $request->contestPaymentDisputeRequest->returnAddress->primaryPhone->countryCode = 'BM';
    $request->contestPaymentDisputeRequest->returnAddress->primaryPhone->number = 'commodi';
    $request->contestPaymentDisputeRequest->returnAddress->stateOrProvince = 'molestiae';
    $request->contestPaymentDisputeRequest->revision = 264555;
    $request->paymentDisputeId = 'qui';

    $requestSecurity = new ContestPaymentDisputeSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->contestPaymentDispute($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchEvidenceContent

This call retrieves a specific evidence file for a payment dispute. The following three identifying parameters are needed in the call URI:<ul><li><strong>payment_dispute_id</strong>: the identifier of the payment dispute. The identifier of each payment dispute is returned in the <strong>getPaymentDisputeSummaries</strong> response.</li><li><strong>evidence_id</strong>: the identifier of the evidential file set. The identifier of an evidential file set for a payment dispute is returned under the <strong>evidence</strong> array in the <strong>getPaymentDispute</strong> response.</li><li><strong>file_id</strong>: the identifier of an evidential file. This file must belong to the evidential file set identified through the <strong>evidence_id</strong> query parameter. The identifier of each evidential file is returned under the <strong>evidence.files</strong> array in the <strong>getPaymentDispute</strong> response.</li></ul><p>An actual binary file is returned if the call is successful. An error will occur if any of three identifiers are invalid.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchEvidenceContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchEvidenceContentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchEvidenceContentRequest();
    $request->evidenceId = 'impedit';
    $request->fileId = 'cum';
    $request->paymentDisputeId = 'esse';

    $requestSecurity = new FetchEvidenceContentSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->fetchEvidenceContent($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActivities

This method retrieve a log of activity for a payment dispute. The identifier of the payment dispute is passed in as a path parameter. The output includes a timestamp for each action of the payment dispute, from creation to resolution, and all steps in between.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActivitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetActivitiesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActivitiesRequest();
    $request->paymentDisputeId = 'ipsum';

    $requestSecurity = new GetActivitiesSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->getActivities($request, $requestSecurity);

    if ($response->paymentDisputeActivityHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentDispute

This method retrieves detailed information on a specific payment dispute. The payment dispute identifier is passed in as path parameter at the end of the call URI.<br><br>Below is a summary of the information that is retrieved:<ul><li>Current status of payment dispute</li><li>Amount of the payment dispute</li><li>Reason the payment dispute was opened</li><li>Order and line items associated with the payment dispute</li><li>Seller response options if an action is currently required on the payment dispute</li><li>Details on the results of the payment dispute if it has been closed</li><li>Details on any evidence that was provided by the seller to fight the payment dispute</li></ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentDisputeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentDisputeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentDisputeRequest();
    $request->paymentDisputeId = 'excepturi';

    $requestSecurity = new GetPaymentDisputeSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->getPaymentDispute($request, $requestSecurity);

    if ($response->paymentDispute !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentDisputeSummaries

This method is used retrieve one or more payment disputes filed against the seller. These payment disputes can be open or recently closed. The following filter types are available in the request payload to control the payment disputes that are returned:<ul><li>Dispute filed against a specific order (<b>order_id</b> parameter is used)</li><li>Dispute(s) filed by a specific buyer (<b>buyer_username</b> parameter is used)</li><li>Dispute(s) filed within a specific date range (<b>open_date_from</b> and/or <b>open_date_to</b> parameters are used)</li><li>Disputes in a specific state (<b>payment_dispute_status</b> parameter is used)</li></ul>More than one of these filter types can be used together. See the request payload request fields for more information about how each filter is used.<br><br>If none of the filters are used, all open and recently closed payment disputes are returned.<br><br>Pagination is also available. See the <b>limit</b> and <b>offset</b> fields for more information on how pagination is used for this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentDisputeSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentDisputeSummariesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentDisputeSummariesRequest();
    $request->buyerUsername = 'aspernatur';
    $request->limit = 'perferendis';
    $request->offset = 'ad';
    $request->openDateFrom = 'natus';
    $request->openDateTo = 'sed';
    $request->orderId = 'iste';
    $request->paymentDisputeStatus = 'dolor';

    $requestSecurity = new GetPaymentDisputeSummariesSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->getPaymentDisputeSummaries($request, $requestSecurity);

    if ($response->disputeSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEvidence

This method is used by the seller to update an existing evidence set for a payment dispute with one or more evidence files. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> All evidence files should be uploaded using <strong>addEvidence</strong> and <strong>updateEvidence</strong>  before the seller decides to contest the payment dispute. Once the seller has officially contested the dispute (using <strong>contestPaymentDispute</strong> or through My eBay), the <strong>addEvidence</strong> and <strong>updateEvidence</strong> methods can no longer be used. In the <strong>evidenceRequests</strong> array of the <strong>getPaymentDispute</strong> response, eBay prompts the seller with the type of evidence file(s) that will be needed to contest the payment dispute.</span><br><br>The unique identifier of the evidence set to update is specified through the <strong>evidenceId</strong> field, and the file(s) to add are identified through the <strong>files</strong> array in the request payload. The unique identifier for an evidence file is automatically generated and returned in the <strong>fileId</strong> field of the <strong>uploadEvidence</strong> response payload upon a successful call. Sellers must make sure to capture the <strong>fileId</strong> value for each evidence file that is uploaded with the <strong>uploadEvidence</strong> method.<br><br>The type of evidence being added should be specified in the <strong>evidenceType</strong> field.  All files being added (if more than one) should correspond to this evidence type.<br><br>Upon a successful call, an http status code of <code>204 Success</code> is returned. There is no response payload unless an error occurs. To verify that a new file is a part of the evidence set, the seller can use the <strong>fetchEvidenceContent</strong> method, passing in the proper <strong>evidenceId</strong> and <strong>fileId</strong> values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEvidencePaymentDisputeRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileEvidence;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItems;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEvidenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEvidenceRequest();
    $request->updateEvidencePaymentDisputeRequest = new UpdateEvidencePaymentDisputeRequest();
    $request->updateEvidencePaymentDisputeRequest->evidenceId = 'natus';
    $request->updateEvidencePaymentDisputeRequest->evidenceType = 'laboriosam';
    $request->updateEvidencePaymentDisputeRequest->files = [
        new FileEvidence(),
        new FileEvidence(),
        new FileEvidence(),
        new FileEvidence(),
    ];
    $request->updateEvidencePaymentDisputeRequest->lineItems = [
        new OrderLineItems(),
        new OrderLineItems(),
        new OrderLineItems(),
        new OrderLineItems(),
    ];
    $request->paymentDisputeId = 'fuga';

    $requestSecurity = new UpdateEvidenceSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->updateEvidence($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadEvidenceFile

This method is used to upload an evidence file for a contested payment dispute. The unique identifier of the payment dispute is passed in as a path parameter, and unique identifiers for payment disputes can be retrieved with the <strong>getPaymentDisputeSummaries</strong> method.<br><br><span class="tablenote"><strong>Note:</strong> The <strong>uploadEvidenceFile</strong> only uploads an encrypted, binary image file (using <strong>multipart/form-data</strong> HTTP request header), and does not have a JSON-based request payload.<br><br>Use 'file' as the name of the key that you use to upload the image file. The upload will not be successful if a different key name is used.<br><br>The three image formats supported at this time are <strong>.JPEG</strong>, <strong>.JPG</strong>, and <strong>.PNG</strong>.</span><br><br>After the file is successfully uploaded, the seller will need to grab the <strong>fileId</strong> value in the response payload to add this file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UploadEvidenceFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UploadEvidenceFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UploadEvidenceFileRequest();
    $request->paymentDisputeId = 'in';

    $requestSecurity = new UploadEvidenceFileSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentDispute->uploadEvidenceFile($request, $requestSecurity);

    if ($response->fileEvidence !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
