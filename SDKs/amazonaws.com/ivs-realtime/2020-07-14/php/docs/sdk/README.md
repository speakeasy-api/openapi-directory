# SDK

## Overview

<p> <b>Introduction</b> </p> <p>The Amazon Interactive Video Service (IVS) stage API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors. </p> <p>Terminology: The IVS stage API sometimes is referred to as the IVS RealTime API.</p> <p> <b>Resources</b> </p> <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html">Getting Started with Amazon IVS</a>):</p> <ul> <li> <p> <b>Stage</b> — A stage is a virtual space where multiple participants can exchange audio and video in real time.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p> <p>The Amazon IVS stage API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p> <p>At most 50 tags can be applied to a resource.</p> <p> <b>Stages Endpoints</b> </p> <ul> <li> <p> <a>CreateParticipantToken</a> — Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.</p> </li> <li> <p> <a>CreateStage</a> — Creates a new stage (and optionally participant tokens).</p> </li> <li> <p> <a>DeleteStage</a> — Shuts down and deletes the specified stage (disconnecting all participants).</p> </li> <li> <p> <a>DisconnectParticipant</a> — Disconnects a specified participant and revokes the participant permanently from a specified stage.</p> </li> <li> <p> <a>GetStage</a> — Gets information for the specified stage.</p> </li> <li> <p> <a>ListStages</a> — Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p> </li> <li> <p> <a>UpdateStage</a> — Updates a stage’s configuration.</p> </li> </ul> <p> <b>Tags Endpoints</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p> </li> <li> <p> <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ivsrealtime/>
### Available Operations

* [createParticipantToken](#createparticipanttoken) - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* [createStage](#createstage) - Creates a new stage (and optionally participant tokens).
* [deleteStage](#deletestage) - Shuts down and deletes the specified stage (disconnecting all participants).
* [disconnectParticipant](#disconnectparticipant) - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* [getStage](#getstage) - Gets information for the specified stage.
* [listStages](#liststages) - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* [listTagsForResource](#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [tagResource](#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [untagResource](#untagresource) - Removes tags from the resource with the specified ARN.
* [updateStage](#updatestage) - Updates a stage’s configuration.

## createParticipantToken

<p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantTokenCapabilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParticipantTokenRequest();
    $request->requestBody = new CreateParticipantTokenRequestBody();
    $request->requestBody->attributes = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->requestBody->capabilities = [
        ParticipantTokenCapabilityEnum::PUBLISH,
        ParticipantTokenCapabilityEnum::SUBSCRIBE,
    ];
    $request->requestBody->duration = 20218;
    $request->requestBody->stageArn = 'ipsam';
    $request->requestBody->userId = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->createParticipantToken($request);

    if ($response->createParticipantTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStage

Creates a new stage (and optionally participant tokens).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStageRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantTokenConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantTokenCapabilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStageRequest();
    $request->requestBody = new CreateStageRequestBody();
    $request->requestBody->name = 'Forrest Koepp';
    $request->requestBody->participantTokenConfigurations = [
        new ParticipantTokenConfiguration(),
        new ParticipantTokenConfiguration(),
        new ParticipantTokenConfiguration(),
    ];
    $request->requestBody->tags = [
        'nam' => 'officia',
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->createStage($request);

    if ($response->createStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStage

Shuts down and deletes the specified stage (disconnecting all participants).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStageRequest();
    $request->requestBody = new DeleteStageRequestBody();
    $request->requestBody->arn = 'commodi';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->deleteStage($request);

    if ($response->deleteStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectParticipant

Disconnects a specified participant and revokes the participant permanently from a specified stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectParticipantRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectParticipantRequest();
    $request->requestBody = new DisconnectParticipantRequestBody();
    $request->requestBody->participantId = 'excepturi';
    $request->requestBody->reason = 'aspernatur';
    $request->requestBody->stageArn = 'perferendis';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->disconnectParticipant($request);

    if ($response->disconnectParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStage

Gets information for the specified stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStageRequest();
    $request->requestBody = new GetStageRequestBody();
    $request->requestBody->arn = 'hic';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->getStage($request);

    if ($response->getStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStages

Gets summary information about all stages in your account, in the AWS region where the API request is processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStagesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStagesRequest();
    $request->requestBody = new ListStagesRequestBody();
    $request->requestBody->maxResults = 697631;
    $request->requestBody->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->maxResults = 'corporis';
    $request->nextToken = 'explicabo';

    $response = $sdk->sdk->listStages($request);

    if ($response->listStagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets information about AWS tags for the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->resourceArn = 'iure';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or updates tags for the AWS resource with the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'doloribus' => 'sapiente',
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
    ];
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->resourceArn = 'molestiae';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the resource with the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->resourceArn = 'enim';
    $request->tagKeys = [
        'quo',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStage

Updates a stage’s configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStageRequest();
    $request->requestBody = new UpdateStageRequestBody();
    $request->requestBody->arn = 'sequi';
    $request->requestBody->name = 'Vernon Ondricka Sr.';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->updateStage($request);

    if ($response->updateStageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
