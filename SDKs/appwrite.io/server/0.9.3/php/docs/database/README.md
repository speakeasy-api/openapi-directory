# database

## Overview

The Database service allows you to create structured collections of documents, query and filter lists of documents

### Available Operations

* [databaseCreateCollection](#databasecreatecollection) - Create Collection
* [databaseCreateDocument](#databasecreatedocument) - Create Document
* [databaseDeleteCollection](#databasedeletecollection) - Delete Collection
* [databaseDeleteDocument](#databasedeletedocument) - Delete Document
* [databaseGetCollection](#databasegetcollection) - Get Collection
* [databaseGetDocument](#databasegetdocument) - Get Document
* [databaseListCollections](#databaselistcollections) - List Collections
* [databaseListDocuments](#databaselistdocuments) - List Documents
* [databaseUpdateCollection](#databaseupdatecollection) - Update Collection
* [databaseUpdateDocument](#databaseupdatedocument) - Update Document

## databaseCreateCollection

Create a new Collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseCreateCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseCreateCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseCreateCollectionRequestBody();
    $request->name = 'Cathy Mosciski';
    $request->read = [
        'natus',
    ];
    $request->rules = [
        'hic',
        'saepe',
    ];
    $request->write = [
        'in',
        'corporis',
        'iste',
    ];

    $requestSecurity = new DatabaseCreateCollectionSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseCreateCollection($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
        'saepe' => 'quidem',
        'architecto' => 'ipsa',
    ];
    $request->requestBody->parentDocument = 'reiciendis';
    $request->requestBody->parentProperty = 'est';
    $request->requestBody->parentPropertyType = 'mollitia';
    $request->requestBody->read = [
        'dolores',
        'dolorem',
        'corporis',
    ];
    $request->requestBody->write = [
        'nobis',
    ];
    $request->collectionId = 'enim';

    $requestSecurity = new DatabaseCreateDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseCreateDocument($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseDeleteCollection

Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseDeleteCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseDeleteCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseDeleteCollectionRequest();
    $request->collectionId = 'omnis';

    $requestSecurity = new DatabaseDeleteCollectionSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseDeleteCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
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
    $request->collectionId = 'nemo';
    $request->documentId = 'minima';

    $requestSecurity = new DatabaseDeleteDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseDeleteDocument($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseGetCollection

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseGetCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseGetCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseGetCollectionRequest();
    $request->collectionId = 'excepturi';

    $requestSecurity = new DatabaseGetCollectionSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseGetCollection($request, $requestSecurity);

    if ($response->collection !== null) {
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
    $request->collectionId = 'accusantium';
    $request->documentId = 'iure';

    $requestSecurity = new DatabaseGetDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseGetDocument($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseListCollections

Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseListCollectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseListCollectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseListCollectionsRequest();
    $request->limit = 634274;
    $request->offset = 988374;
    $request->orderType = 'sapiente';
    $request->search = 'architecto';

    $requestSecurity = new DatabaseListCollectionsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseListCollections($request, $requestSecurity);

    if ($response->collectionList !== null) {
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
    $request->collectionId = 'mollitia';
    $request->filters = [
        'culpa',
    ];
    $request->limit = 161309;
    $request->offset = 995300;
    $request->orderCast = 'mollitia';
    $request->orderField = 'occaecati';
    $request->orderType = 'numquam';
    $request->search = 'commodi';

    $requestSecurity = new DatabaseListDocumentsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseListDocuments($request, $requestSecurity);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## databaseUpdateCollection

Update a collection by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseUpdateCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseUpdateCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DatabaseUpdateCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatabaseUpdateCollectionRequest();
    $request->requestBody = new DatabaseUpdateCollectionRequestBody();
    $request->requestBody->name = 'Nellie Frami';
    $request->requestBody->read = [
        'vitae',
        'laborum',
    ];
    $request->requestBody->rules = [
        'enim',
        'odit',
        'quo',
    ];
    $request->requestBody->write = [
        'tenetur',
    ];
    $request->collectionId = 'ipsam';

    $requestSecurity = new DatabaseUpdateCollectionSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseUpdateCollection($request, $requestSecurity);

    if ($response->collection !== null) {
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
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->requestBody->read = [
        'reiciendis',
    ];
    $request->requestBody->write = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->collectionId = 'ipsa';
    $request->documentId = 'omnis';

    $requestSecurity = new DatabaseUpdateDocumentSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->database->databaseUpdateDocument($request, $requestSecurity);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
