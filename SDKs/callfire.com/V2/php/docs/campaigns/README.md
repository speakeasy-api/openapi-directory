# campaigns

### Available Operations

* [deleteCampaignSound](#deletecampaignsound) - Delete a specific sound
* [findCampaignSounds](#findcampaignsounds) - Find sounds
* [getCampaignBatch](#getcampaignbatch) - Find a specific batch
* [getCampaignSound](#getcampaignsound) - Find a specific sound
* [getCampaignSoundDataMp3](#getcampaignsounddatamp3) - Download a MP3 sound
* [getCampaignSoundDataWav](#getcampaignsounddatawav) - Download a WAV sound
* [postCallCampaignSound](#postcallcampaignsound) - Add sound via call
* [postFileCampaignSound](#postfilecampaignsound) - Add sound via file
* [postTTSCampaignSound](#postttscampaignsound) - Add sound via text-to-speech
* [updateCampaignBatch](#updatecampaignbatch) - Update a batch

## deleteCampaignSound

Deletes a single campaign sound instance for a specific campaign sound id, this operation does not delete sound completely, it sets sound status to ARCHIVED which means that sound will no longer appear in 'find' operation results, but still accessible via 'get' operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCampaignSoundRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCampaignSoundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCampaignSoundRequest();
    $request->id = 841386;

    $requestSecurity = new DeleteCampaignSoundSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->deleteCampaignSound($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findCampaignSounds

To find all campaign sounds which were created by user. Returns all sounds available to be used in campaigns

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindCampaignSoundsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindCampaignSoundsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCampaignSoundsRequest();
    $request->fields = 'labore';
    $request->filter = 'modi';
    $request->includeArchived = false;
    $request->includePending = false;
    $request->includeScrubbed = false;
    $request->limit = 183191;
    $request->offset = 397821;

    $requestSecurity = new FindCampaignSoundsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->findCampaignSounds($request, $requestSecurity);

    if ($response->campaignSoundPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignBatch

Returns a single Batch instance for a given batch id. This API is useful for determining the state of a validating batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignBatchRequest();
    $request->fields = 'cupiditate';
    $request->id = 552822;

    $requestSecurity = new GetCampaignBatchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->getCampaignBatch($request, $requestSecurity);

    if ($response->batch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignSound

Returns a single CampaignSound instance for a given sound id in campaign. This is a meta data to the sounds. No audio data is returned from this API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignSoundRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignSoundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignSoundRequest();
    $request->fields = 'perferendis';
    $request->id = 164940;

    $requestSecurity = new GetCampaignSoundSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->getCampaignSound($request, $requestSecurity);

    if ($response->campaignSound !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignSoundDataMp3

Download the MP3 version of a hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignSoundDataMp3Request;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignSoundDataMp3Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignSoundDataMp3Request();
    $request->id = 828940;

    $requestSecurity = new GetCampaignSoundDataMp3Security();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->getCampaignSoundDataMp3($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignSoundDataWav

Download the WAV version of the hosted file. This is an audio data endpoint. Returns binary response of the 'audio/mpeg' content type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignSoundDataWavRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignSoundDataWavSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignSoundDataWavRequest();
    $request->id = 369808;

    $requestSecurity = new GetCampaignSoundDataWavSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->getCampaignSoundDataWav($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCallCampaignSound

Use this API to create a sound via a phone call. Provide the required phone number in the CallCreateSound object inside the request, and user will receive a call shortly after with instructions on how to record a sound over the phone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCallCampaignSoundRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallCreateSound;
use \OpenAPI\OpenAPI\Models\Operations\PostCallCampaignSoundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCallCampaignSoundRequest();
    $request->callCreateSound = new CallCreateSound();
    $request->callCreateSound->name = 'Denise Pagac';
    $request->callCreateSound->toNumber = 'facilis';
    $request->fields = 'tempore';

    $requestSecurity = new PostCallCampaignSoundSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->postCallCampaignSound($request, $requestSecurity);

    if ($response->campaignSound !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFileCampaignSound

Create a campaign sound file via a supplied .mp3 or .wav file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostFileCampaignSoundRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostFileCampaignSoundRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostFileCampaignSoundRequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\PostFileCampaignSoundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFileCampaignSoundRequest();
    $request->requestBody = new PostFileCampaignSoundRequestBody();
    $request->requestBody->file = new PostFileCampaignSoundRequestBodyFile();
    $request->requestBody->file->content = 'labore';
    $request->requestBody->file->file = 'delectus';
    $request->requestBody->name = 'Ethel Roob';
    $request->fields = 'provident';

    $requestSecurity = new PostFileCampaignSoundSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->postFileCampaignSound($request, $requestSecurity);

    if ($response->campaignSound !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTTSCampaignSound

Use this API to create a sound file via a supplied string of text. Add a text in the TextToSpeech.message field, and pick a voice in the TextToSpeech.voice field. Available voices are: MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTTSCampaignSoundRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextToSpeech;
use \OpenAPI\OpenAPI\Models\Shared\TextToSpeechVoiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTTSCampaignSoundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTTSCampaignSoundRequest();
    $request->textToSpeech = new TextToSpeech();
    $request->textToSpeech->message = 'necessitatibus';
    $request->textToSpeech->voice = TextToSpeechVoiceEnum::FEMALE2;
    $request->fields = 'officia';

    $requestSecurity = new PostTTSCampaignSoundSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->postTTSCampaignSound($request, $requestSecurity);

    if ($response->campaignSound !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCampaignBatch

Updates a single Batch instance, currently batch can only be turned "on/off"

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInput;
use \OpenAPI\OpenAPI\Models\Shared\BatchStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCampaignBatchRequest();
    $request->batchInput = new BatchInput();
    $request->batchInput->broadcastId = 223081;
    $request->batchInput->enabled = false;
    $request->batchInput->id = 891555;
    $request->batchInput->name = 'Wilbur King';
    $request->batchInput->status = BatchStatusEnum::ACTIVE;
    $request->id = 699479;

    $requestSecurity = new UpdateCampaignBatchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->campaigns->updateCampaignBatch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
