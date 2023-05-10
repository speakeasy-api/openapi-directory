# apiVersion

## Overview

This folder contains the requests around API versions.

### Available Operations

* [createApiVersion](#createapiversion) - Create API Version
* [deleteAnApiVersion](#deleteanapiversion) - Delete an API Version
* [getAllApiVersions](#getallapiversions) - Get All API Versions
* [getAnApiVersion](#getanapiversion) - Get an API Version
* [updateAnApiVersion](#updateanapiversion) - Update an API Version

## createApiVersion

This call creates a new API version in the specified API.  

Request body should contain a `version` object which should have fields:

<table>
<tr>
	<td>name</td>
	<td>Required. Name of the API Version</td>
</tr>
<tr>
	<td>source</td>
	<td>
		If specified, it will copy the contents of the specified api version to create a new api verison.
		<table>
			<tr>
				<td>id</td>
				<td>Required. Id of the apiversion from where the details are to be copied</td>
			</tr>
			<tr>
				<td>schema</td>
				<td>Boolean. If true then copies the schema from the specified api version</td>
			</tr>
			<tr>
				<td>relations</td>
				<td>Object. {"&lt;relationType&gt;": true/false}.  
					Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
				Relation types which should be copied over to the new api verison</td>
			</tr>
		</table>
	</td>
</tr>
</table>

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBodyVersion;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBodyVersionSource;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiVersionRequestBodyVersionSourceRelations;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiVersionRequest();
    $request->requestBody = new CreateApiVersionRequestBody();
    $request->requestBody->version = new CreateApiVersionRequestBodyVersion();
    $request->requestBody->version->name = '1.0';
    $request->requestBody->version->source = new CreateApiVersionRequestBodyVersionSource();
    $request->requestBody->version->source->id = '{{apiVersionId}}';
    $request->requestBody->version->source->relations = new CreateApiVersionRequestBodyVersionSourceRelations();
    $request->requestBody->version->source->relations->documentation = true;
    $request->requestBody->version->source->relations->mock = true;
    $request->requestBody->version->source->relations->monitor = true;
    $request->requestBody->version->source->schema = true;
    $request->apiId = 'quod';

    $response = $sdk->apiVersion->createApiVersion($request);

    if ($response->createApiVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnApiVersion

This call deletes an existing API Version having the specified id.  

Response contains an `version` object with `id` of the API Version which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnApiVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnApiVersionRequest();
    $request->apiId = 'esse';
    $request->apiVersionId = 'totam';

    $response = $sdk->apiVersion->deleteAnApiVersion($request);

    if ($response->deleteAnApiVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllApiVersions

This call fetches details about the all the API Versions in the specified API.

The response will contain an array `versions` object which would be a list of all the API Version along with their details.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllApiVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllApiVersionsRequest();
    $request->apiId = 'porro';

    $response = $sdk->apiVersion->getAllApiVersions($request);

    if ($response->getAllApiVersions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnApiVersion

This call fetches details about the specified API Version.

The response will contain a `version` object which would contain all the details of the API Version.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnApiVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnApiVersionRequest();
    $request->apiId = 'dolorum';
    $request->apiVersionId = 'dicta';

    $response = $sdk->apiVersion->getAnApiVersion($request);

    if ($response->getAnApiVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnApiVersion

This call updates an existing API Version.  

Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiVersionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnApiVersionRequestBodyVersion;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnApiVersionRequest();
    $request->requestBody = new UpdateAnApiVersionRequestBody();
    $request->requestBody->version = new UpdateAnApiVersionRequestBodyVersion();
    $request->requestBody->version->name = '2.0';
    $request->apiId = 'nam';
    $request->apiVersionId = 'officia';

    $response = $sdk->apiVersion->updateAnApiVersion($request);

    if ($response->updateAnApiVersion200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
