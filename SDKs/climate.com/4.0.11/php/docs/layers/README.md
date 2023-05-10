# layers

## Overview

General data retrieval endpoints.

### Available Operations

* [getV4LayersAsApplied](#getv4layersasapplied) - Retrieve a list of application activities
* [getV4LayersAsAppliedActivityIdContents](#getv4layersasappliedactivityidcontents) - Retrieve the raw application activity
* [getV4LayersAsHarvested](#getv4layersasharvested) - Retrieve a list of harvest activities
* [getV4LayersAsHarvestedActivityIdContents](#getv4layersasharvestedactivityidcontents) - Retrieve the raw harvest activity
* [getV4LayersAsPlanted](#getv4layersasplanted) - Retrieve a list of planting activities
* [getV4LayersAsPlantedActivityIdContents](#getv4layersasplantedactivityidcontents) - Retrieve the raw planting activity
* [getV4LayersScoutingObservations](#getv4layersscoutingobservations) - Retrieve a list of scouting observations
* [getV4LayersScoutingObservationsScoutingObservationId](#getv4layersscoutingobservationsscoutingobservationid) - Retrieve individual scouting observation
* [getV4LayersScoutingObservationsScoutingObservationIdAttachments](#getv4layersscoutingobservationsscoutingobservationidattachments) - Retrieve attachments associated with a given scouting observation.
* [getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents](#getv4layersscoutingobservationsscoutingobservationidattachmentsattachmentidcontents) - Retrieve the binary contents of a scouting observation’s attachment.

## getV4LayersAsApplied

Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsAppliedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsAppliedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersAsAppliedRequest();
    $request->accept = 'quibusdam';
    $request->xLimit = 149448;
    $request->xNextToken = 'saepe';
    $request->occurredAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-20T20:56:20.791Z');
    $request->occurredBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T11:09:23.468Z');
    $request->resourceOwnerId = '921cddc6-9260-41fb-976b-0d5f0d30c5fb';
    $request->updatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T17:02:52.151Z');

    $requestSecurity = new GetV4LayersAsAppliedSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersAsApplied($request, $requestSecurity);

    if ($response->applicationActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersAsAppliedActivityIdContents

Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsAppliedActivityIdContentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsAppliedActivityIdContentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersAsAppliedActivityIdContentsRequest();
    $request->accept = 'quis';
    $request->range = 'totam';
    $request->activityId = '7053202c-73d5-4fe9-b90c-28909b3fe49a';

    $requestSecurity = new GetV4LayersAsAppliedActivityIdContentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersAsAppliedActivityIdContents($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersAsHarvested

Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsHarvestedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsHarvestedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersAsHarvestedRequest();
    $request->accept = 'deleniti';
    $request->xLimit = 864282;
    $request->xNextToken = 'provident';
    $request->occurredAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T12:23:35.067Z');
    $request->occurredBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-24T10:05:07.174Z');
    $request->resourceOwnerId = '8633323f-9b77-4f3a-8100-674ebf69280d';
    $request->updatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-04T12:00:33.616Z');

    $requestSecurity = new GetV4LayersAsHarvestedSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersAsHarvested($request, $requestSecurity);

    if ($response->harvestActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersAsHarvestedActivityIdContents

Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsHarvestedActivityIdContentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsHarvestedActivityIdContentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersAsHarvestedActivityIdContentsRequest();
    $request->accept = 'dolorum';
    $request->range = 'iusto';
    $request->activityId = '7a89ebf7-37ae-4420-bce5-e6a95d8a0d44';

    $requestSecurity = new GetV4LayersAsHarvestedActivityIdContentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersAsHarvestedActivityIdContents($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersAsPlanted

Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsPlantedRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsPlantedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersAsPlantedRequest();
    $request->accept = 'vel';
    $request->xLimit = 798047;
    $request->xNextToken = 'officiis';
    $request->occurredAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T20:15:21.190Z');
    $request->occurredBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-19T12:54:33.953Z');
    $request->resourceOwnerId = 'a73cf3be-453f-4870-b326-b5a73429cdb1';
    $request->updatedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-19T07:31:04.219Z');

    $requestSecurity = new GetV4LayersAsPlantedSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersAsPlanted($request, $requestSecurity);

    if ($response->plantingActivities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersAsPlantedActivityIdContents

Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsPlantedActivityIdContentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersAsPlantedActivityIdContentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersAsPlantedActivityIdContentsRequest();
    $request->accept = 'incidunt';
    $request->range = 'aspernatur';
    $request->activityId = '2bb679d2-3227-415b-b0cb-b1e31b8b90f3';

    $requestSecurity = new GetV4LayersAsPlantedActivityIdContentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersAsPlantedActivityIdContents($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersScoutingObservations

Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersScoutingObservationsRequest();
    $request->xLimit = 292147;
    $request->xNextToken = 'labore';
    $request->occurredAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T19:10:24.037Z');
    $request->occurredBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T23:47:03.469Z');

    $requestSecurity = new GetV4LayersScoutingObservationsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersScoutingObservations($request, $requestSecurity);

    if ($response->scoutingObservations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersScoutingObservationsScoutingObservationId

Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsScoutingObservationIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsScoutingObservationIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersScoutingObservationsScoutingObservationIdRequest();
    $request->scoutingObservationId = '08e0adcf-4b92-4187-9fce-953f73ef7fbc';

    $requestSecurity = new GetV4LayersScoutingObservationsScoutingObservationIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersScoutingObservationsScoutingObservationId($request, $requestSecurity);

    if ($response->scoutingObservation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersScoutingObservationsScoutingObservationIdAttachments

Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest();
    $request->xLimit = 486160;
    $request->xNextToken = 'similique';
    $request->scoutingObservationId = 'bd74dd39-c0f5-4d2c-bf7c-70a45626d436';

    $requestSecurity = new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersScoutingObservationsScoutingObservationIdAttachments($request, $requestSecurity);

    if ($response->scoutingObservationAttachments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents

Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest();
    $request->accept = 'laudantium';
    $request->range = 'dicta';
    $request->attachmentId = '3f16d9f5-fce6-4c55-a146-c3e250fb008c';
    $request->scoutingObservationId = '42e141aa-c366-4c8d-96b1-442907474778';

    $requestSecurity = new GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->layers->getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
