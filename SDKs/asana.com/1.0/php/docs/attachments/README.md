# attachments

## Overview

An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.

### Available Operations

* [createAttachmentForObject](#createattachmentforobject) - Upload an attachment
* [deleteAttachment](#deleteattachment) - Delete an attachment
* [getAttachment](#getattachment) - Get an attachment
* [getAttachmentsForObject](#getattachmentsforobject) - Get attachments from an object

## createAttachmentForObject

Upload an attachment.

This method uploads an attachment on an object and returns the compact
record for the created attachment object. This is possible by either:

- Providing the URL of the external resource being attached, or
- Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API

The 100MB size limit on attachments in Asana is enforced on this endpoint.

This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.

Requests made should follow the HTTP/1.1 specification that line
terminators are of the form `CRLF` or `\r\n` outlined
[here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAttachmentForObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentRequestFile;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentRequestResourceSubtypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAttachmentForObjectRequest();
    $request->attachmentRequest = new AttachmentRequest();
    $request->attachmentRequest->connectToApp = false;
    $request->attachmentRequest->file = new AttachmentRequestFile();
    $request->attachmentRequest->file->content = 'magnam';
    $request->attachmentRequest->file->file = 'debitis';
    $request->attachmentRequest->name = 'Lucia Goldner';
    $request->attachmentRequest->parent = 'minus';
    $request->attachmentRequest->resourceSubtype = AttachmentRequestResourceSubtypeEnum::EXTERNAL;
    $request->attachmentRequest->url = 'placeat';
    $request->optFields = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->optPretty = false;

    $response = $sdk->attachments->createAttachmentForObject($request);

    if ($response->createAttachmentForObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAttachment

Deletes a specific, existing attachment.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAttachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAttachmentRequest();
    $request->attachmentGid = 'recusandae';
    $request->optFields = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->optPretty = false;

    $response = $sdk->attachments->deleteAttachment($request);

    if ($response->deleteAttachment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachment

Get the full record for a single attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAttachmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAttachmentRequest();
    $request->attachmentGid = 'perferendis';
    $request->optFields = [
        'repellendus',
        'sapiente',
    ];
    $request->optPretty = false;

    $response = $sdk->attachments->getAttachment($request);

    if ($response->getAttachment200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachmentsForObject

Returns the compact records for all attachments on the object.

There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAttachmentsForObjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAttachmentsForObjectRequest();
    $request->limit = 778157;
    $request->offset = 'odit';
    $request->optFields = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->optPretty = false;
    $request->parent = 'quod';

    $response = $sdk->attachments->getAttachmentsForObject($request);

    if ($response->getAttachmentsForObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
