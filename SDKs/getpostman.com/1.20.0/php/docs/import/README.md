# import

### Available Operations

* [importExportedData](#importexporteddata) - Import exported data
* [importExternalApiSpecification](#importexternalapispecification) - Import external API specification

## importExportedData

This endpoint allows you to import your exported Postman data.
For more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>

On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.

**Note**: Refer to examples for different scenarios.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'impedit'

    $response = $sdk->import->importExportedData($request);

    if ($response->importExportedData200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importExternalApiSpecification

This endpoint allows you to import external API specifications into Postman.

Currently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.

On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.

Supported `type`s:

- string
- json
- file

The `input` parameter should be defined based on the `type`.

> To import a file, request body must be form-data with `type` param set to `file`.

**Note**: Refer to examples for different scenarios.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputInfo;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputInfoLicense;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPaths;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPets;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGet;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage;
use \OpenAPI\OpenAPI\Models\Operations\ImportExternalApiSpecificationRequestBodyInputServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportExternalApiSpecificationRequestBody();
    $request->input = new ImportExternalApiSpecificationRequestBodyInput();
    $request->input->info = new ImportExternalApiSpecificationRequestBodyInputInfo();
    $request->input->info->license = new ImportExternalApiSpecificationRequestBodyInputInfoLicense();
    $request->input->info->license->name = 'MIT';
    $request->input->info->title = 'Swagger Petstore';
    $request->input->info->version = '1.0.0';
    $request->input->openapi = '3.0.0';
    $request->input->paths = new ImportExternalApiSpecificationRequestBodyInputPaths();
    $request->input->paths->rootPets = new ImportExternalApiSpecificationRequestBodyInputPathsPets();
    $request->input->paths->rootPets->get = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGet();
    $request->input->paths->rootPets->get->operationId = 'listPets';
    $request->input->paths->rootPets->get->parameters = [
        new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters(),
        new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters(),
        new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters(),
    ];
    $request->input->paths->rootPets->get->responses = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses();
    $request->input->paths->rootPets->get->responses->default = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault();
    $request->input->paths->rootPets->get->responses->default->content = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent();
    $request->input->paths->rootPets->get->responses->default->content->applicationJson = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson();
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema();
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema->properties = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties();
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema->properties->code = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode();
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema->properties->code->format = 'int32';
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema->properties->code->type = 'integer';
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema->properties->message = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage();
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema->properties->message->type = 'string';
    $request->input->paths->rootPets->get->responses->default->content->applicationJson->schema->required = [
        'code',
        'code',
    ];
    $request->input->paths->rootPets->get->responses->default->description = 'unexpected error';
    $request->input->paths->rootPets->get->summary = 'List all pets';
    $request->input->servers = [
        new ImportExternalApiSpecificationRequestBodyInputServers(),
    ];
    $request->type = 'json';

    $response = $sdk->import->importExternalApiSpecification($request);

    if ($response->importExternalApiSpecification200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
