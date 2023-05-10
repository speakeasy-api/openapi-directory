# database

## Overview

The Database service allows you to create structured collections of documents, query and filter lists of documents

### Available Operations

* [databaseCreateDocument](#databasecreatedocument) - Create Document
* [databaseDeleteDocument](#databasedeletedocument) - Delete Document
* [databaseGetDocument](#databasegetdocument) - Get Document
* [databaseListDocuments](#databaselistdocuments) - List Documents
* [databaseUpdateDocument](#databaseupdatedocument) - Update Document

## databaseCreateDocument

Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseCreateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseCreateDocumentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseCreateDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseCreateDocumentRequest();
    $request->requestBody = new DatabaseCreateDocumentRequestBody();
    $request->requestBody->data = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->requestBody->parentDocument = 'doloribus';
    $request->requestBody->parentProperty = 'sapiente';
    $request->requestBody->parentPropertyType = 'architecto';
    $request->requestBody->read = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->requestBody->write = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->collectionId = 'quam';

    $requestSecurity = new DatabaseCreateDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseCreateDocument($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseDeleteDocument

Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseDeleteDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseDeleteDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseDeleteDocumentRequest();
    $request->collectionId = 'molestiae';
    $request->documentId = 'velit';

    $requestSecurity = new DatabaseDeleteDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseDeleteDocument($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseGetDocument

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseGetDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseGetDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseGetDocumentRequest();
    $request->collectionId = 'error';
    $request->documentId = 'quia';

    $requestSecurity = new DatabaseGetDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseGetDocument($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseListDocuments

Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseListDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseListDocumentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseListDocumentsRequest();
    $request->collectionId = 'quis';
    $request->filters = [
        'laborum',
    ];
    $request->limit = 656330;
    $request->offset = 317202;
    $request->orderCast = 'odit';
    $request->orderField = 'quo';
    $request->orderType = 'sequi';
    $request->search = 'tenetur';

    $requestSecurity = new DatabaseListDocumentsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseListDocuments($request, $requestSecurity);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseUpdateDocument

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseUpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseUpdateDocumentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseUpdateDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseUpdateDocumentRequest();
    $request->requestBody = new DatabaseUpdateDocumentRequestBody();
    $request->requestBody->data = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ];
    $request->requestBody->read = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->requestBody->write = [
        'voluptatibus',
        'vero',
        'nihil',
        'praesentium',
    ];
    $request->collectionId = 'voluptatibus';
    $request->documentId = 'ipsa';

    $requestSecurity = new DatabaseUpdateDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseUpdateDocument($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
