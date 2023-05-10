# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChildrenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChildrenRequest();
    $request->count = 548814;
    $request->cursor = 'provident';
    $request->sha1 = 'distinctio';

    $response = $sdk->default->getChildren($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [default](docs/default/README.md)

* [getChildren](docs/default/README.md#getchildren) - Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [getInfo](docs/default/README.md#getinfo) - Info about the hashlookup database
* [getLookupMd5](docs/default/README.md#getlookupmd5) - Lookup MD5.
* [getLookupSha1](docs/default/README.md#getlookupsha1) - Lookup SHA-1.
* [getLookupSha256](docs/default/README.md#getlookupsha256) - Lookup SHA-256.
* [getParents](docs/default/README.md#getparents) - Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [getSessionCreate](docs/default/README.md#getsessioncreate) - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
* [getSessionMatches](docs/default/README.md#getsessionmatches) - Return set of matching and non-matching hashes from a session.
* [getStattop](docs/default/README.md#getstattop) - Return the top 100 of most queried values.
* [postBulkmd5](docs/default/README.md#postbulkmd5) - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
* [postBulksha1](docs/default/README.md#postbulksha1) - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
