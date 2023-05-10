# document

### Available Operations

* [getDocumentIdAspectIdCivixIndexIdCivixDocumentId](#getdocumentidaspectidcivixindexidcivixdocumentid) - Retrieves a specific document from the BCLaws legislative repository (HTML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString](#getdocumentidaspectidcivixindexidcivixdocumentidsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml](#getdocumentidaspectidcivixindexidcivixdocumentidxml) - Retrieves a specific document from the BCLaws legislative repository (XML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString](#getdocumentidaspectidcivixindexidcivixdocumentidxmlsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)

## getDocumentIdAspectIdCivixIndexIdCivixDocumentId

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest();
    $request->aspectId = GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum::PSL;
    $request->civixDocumentId = 'nulla';
    $request->civixIndexId = 'corrupti';

    $response = $sdk->document->getDocumentIdAspectIdCivixIndexIdCivixDocumentId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest();
    $request->aspectId = GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum::HSCR;
    $request->civixDocumentId = 'vel';
    $request->civixIndexId = 'error';
    $request->searchString = 'deserunt';

    $response = $sdk->document->getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest();
    $request->aspectId = GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlAspectIDEnum::BCGAZ2;
    $request->civixDocumentId = 'iure';
    $request->civixIndexId = 'magnam';

    $response = $sdk->document->getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlSearchSearchStringAspectIDEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest();
    $request->aspectId = GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlSearchSearchStringAspectIDEnum::ARCH_OIC;
    $request->civixDocumentId = 'ipsa';
    $request->civixIndexId = 'delectus';
    $request->searchString = 'tempora';

    $response = $sdk->document->getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
