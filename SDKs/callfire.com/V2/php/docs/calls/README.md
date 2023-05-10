# calls

### Available Operations

* [addCallBroadcastBatch](#addcallbroadcastbatch) - Add batches to a call broadcast
* [addCallBroadcastRecipients](#addcallbroadcastrecipients) - Add recipients to a call broadcast
* [archiveVoiceBroadcast](#archivevoicebroadcast) - Archive voice broadcast
* [createCallBroadcast](#createcallbroadcast) - Create a call broadcast
* [findCallBroadcasts](#findcallbroadcasts) - Find call broadcasts
* [findCalls](#findcalls) - Find calls
* [getCall](#getcall) - Find a specific call
* [getCallBroadcast](#getcallbroadcast) - Find a specific call broadcast
* [getCallBroadcastBatches](#getcallbroadcastbatches) - Find batches in a call broadcast
* [getCallBroadcastCalls](#getcallbroadcastcalls) - Find calls in a call broadcast
* [getCallBroadcastStats](#getcallbroadcaststats) - Get statistics on call broadcast
* [getCallRecording](#getcallrecording) - Get call recording by id
* [getCallRecordingByName](#getcallrecordingbyname) - Get call recording by name
* [getCallRecordingMp3](#getcallrecordingmp3) - Get call recording in mp3 format
* [getCallRecordingMp3ByName](#getcallrecordingmp3byname) - Get call mp3 recording by name
* [getCallRecordings](#getcallrecordings) - Get call recordings for a call
* [sendCalls](#sendcalls) - Send calls
* [startVoiceBroadcast](#startvoicebroadcast) - Start voice broadcast
* [stopVoiceBroadcast](#stopvoicebroadcast) - Stop voice broadcast
* [toggleCallBroadcastRecipientsStatus](#togglecallbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [updateCallBroadcast](#updatecallbroadcast) - Update a call broadcast

## addCallBroadcastBatch

The 'add batch' API allows user to add additional batches to an already created voice broadcast campaign. The added batch will go through the CallFire validation process, unlike in the recipients version of this API. That is why you can use the scrubDuplicates flag to remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCallBroadcastBatchRequest();
    $request->batchRequest = new BatchRequest();
    $request->batchRequest->contactListId = 423655;
    $request->batchRequest->name = 'Doug Hoppe';
    $request->batchRequest->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->batchRequest->scrubDuplicates = false;
    $request->id = 56713;
    $request->strictValidation = false;

    $requestSecurity = new AddCallBroadcastBatchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->addCallBroadcastBatch($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addCallBroadcastRecipients

Use this API to add the recipients to an existing voice broadcast. Post a list of Recipient objects to be added to the voice broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastRecipientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Operations\AddCallBroadcastRecipientsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCallBroadcastRecipientsRequest();
    $request->requestBody = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->fields = 'tempora';
    $request->id = 383441;
    $request->strictValidation = false;

    $requestSecurity = new AddCallBroadcastRecipientsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->addCallBroadcastRecipients($request, $requestSecurity);

    if ($response->callList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## archiveVoiceBroadcast

Archives a voice broadcast (voice broadcast will be hidden in search results)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveVoiceBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveVoiceBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchiveVoiceBroadcastRequest();
    $request->id = 477665;

    $requestSecurity = new ArchiveVoiceBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->archiveVoiceBroadcast($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCallBroadcast

Creates a call broadcast campaign using the Call Broadcast API. Send a CallBroadcast in the message body to add details in a voice broadcast campaign. The campaign can be created without contacts and bare minimum configuration, but contacts will have to be added further on to use the campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastInput;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastAnsweringMachineConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalTimeRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\LocalDate;
use \OpenAPI\OpenAPI\Models\Shared\LocalTime;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSounds;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsDncSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsLiveSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsMachineSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsTransferSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCallBroadcastRequest();
    $request->callBroadcastInput = new CallBroadcastInput();
    $request->callBroadcastInput->answeringMachineConfig = CallBroadcastAnsweringMachineConfigEnum::LIVE_IMMEDIATE;
    $request->callBroadcastInput->dialplanXml = 'placeat';
    $request->callBroadcastInput->fromNumber = 'voluptatum';
    $request->callBroadcastInput->id = 479977;
    $request->callBroadcastInput->labels = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->callBroadcastInput->localTimeRestriction = new LocalTimeRestriction();
    $request->callBroadcastInput->localTimeRestriction->beginHour = 71036;
    $request->callBroadcastInput->localTimeRestriction->beginMinute = 337396;
    $request->callBroadcastInput->localTimeRestriction->enabled = false;
    $request->callBroadcastInput->localTimeRestriction->endHour = 87129;
    $request->callBroadcastInput->localTimeRestriction->endMinute = 648172;
    $request->callBroadcastInput->maxActive = 20218;
    $request->callBroadcastInput->maxActiveTransfers = 368241;
    $request->callBroadcastInput->name = 'Timmy Satterfield';
    $request->callBroadcastInput->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->callBroadcastInput->resumeNextDay = false;
    $request->callBroadcastInput->retryConfig = new RetryConfig();
    $request->callBroadcastInput->retryConfig->maxAttempts = 978619;
    $request->callBroadcastInput->retryConfig->minutesBetweenAttempts = 473608;
    $request->callBroadcastInput->retryConfig->retryPhoneTypes = [
        'quod',
        'esse',
        'totam',
        'porro',
    ];
    $request->callBroadcastInput->retryConfig->retryResults = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->callBroadcastInput->schedules = [
        new Schedule(),
        new Schedule(),
        new Schedule(),
    ];
    $request->callBroadcastInput->sounds = new CallBroadcastSounds();
    $request->callBroadcastInput->sounds->dncDigit = 'fugit';
    $request->callBroadcastInput->sounds->dncSoundId = 537373;
    $request->callBroadcastInput->sounds->dncSoundText = 'hic';
    $request->callBroadcastInput->sounds->dncSoundTextVoice = CallBroadcastSoundsDncSoundTextVoiceEnum::SPANISH1;
    $request->callBroadcastInput->sounds->liveSoundId = 521848;
    $request->callBroadcastInput->sounds->liveSoundText = 'beatae';
    $request->callBroadcastInput->sounds->liveSoundTextVoice = CallBroadcastSoundsLiveSoundTextVoiceEnum::FEMALE2;
    $request->callBroadcastInput->sounds->machineSoundId = 473600;
    $request->callBroadcastInput->sounds->machineSoundText = 'modi';
    $request->callBroadcastInput->sounds->machineSoundTextVoice = CallBroadcastSoundsMachineSoundTextVoiceEnum::MALE1;
    $request->callBroadcastInput->sounds->transferDigit = 'impedit';
    $request->callBroadcastInput->sounds->transferNumber = 'cum';
    $request->callBroadcastInput->sounds->transferSoundId = 456150;
    $request->callBroadcastInput->sounds->transferSoundText = 'ipsum';
    $request->callBroadcastInput->sounds->transferSoundTextVoice = CallBroadcastSoundsTransferSoundTextVoiceEnum::FEMALE2;
    $request->start = false;
    $request->strictValidation = false;

    $requestSecurity = new CreateCallBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->createCallBroadcast($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findCallBroadcasts

Searches for all voice broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of voice broadcasts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindCallBroadcastsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindCallBroadcastsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCallBroadcastsRequest();
    $request->fields = 'aspernatur';
    $request->intervalBegin = 18789;
    $request->intervalEnd = 324141;
    $request->label = 'natus';
    $request->limit = 149675;
    $request->name = 'Curtis Morissette';
    $request->offset = 902599;
    $request->running = false;
    $request->scheduled = false;

    $requestSecurity = new FindCallBroadcastsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->findCallBroadcasts($request, $requestSecurity);

    if ($response->callBroadcastPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findCalls

To search for all calls sent or received by the user. Use "id=0" for the campaignId parameter to query for all calls sent through the POST /calls API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindCallsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindCallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindCallsRequest();
    $request->batchId = 681820;
    $request->campaignId = 449950;
    $request->fields = 'corporis';
    $request->fromNumber = 'iste';
    $request->id = [
        902349,
        697631,
    ];
    $request->inbound = false;
    $request->intervalBegin = 99280;
    $request->intervalEnd = 60225;
    $request->label = 'reiciendis';
    $request->limit = 666767;
    $request->offset = 653140;
    $request->results = 'laborum';
    $request->states = 'dolores';
    $request->toNumber = 'dolorem';

    $requestSecurity = new FindCallsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->findCalls($request, $requestSecurity);

    if ($response->callPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCall

Returns a single Call instance for a given call id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallRequest();
    $request->fields = 'corporis';
    $request->id = 128926;

    $requestSecurity = new GetCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCall($request, $requestSecurity);

    if ($response->call !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallBroadcast

Returns a single CallBroadcast instance for a given call broadcast campaign id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallBroadcastRequest();
    $request->fields = 'nobis';
    $request->id = 315428;

    $requestSecurity = new GetCallBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallBroadcast($request, $requestSecurity);

    if ($response->callBroadcast !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallBroadcastBatches

This endpoint will enable the user to page through all of the batches for a particular voice broadcast campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastBatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastBatchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallBroadcastBatchesRequest();
    $request->fields = 'omnis';
    $request->id = 363711;
    $request->limit = 325047;
    $request->offset = 570197;

    $requestSecurity = new GetCallBroadcastBatchesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallBroadcastBatches($request, $requestSecurity);

    if ($response->batchPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallBroadcastCalls

This endpoint will enable the user to page through all calls for a particular call broadcast campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastCallsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastCallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallBroadcastCallsRequest();
    $request->batchId = 38425;
    $request->fields = 'iure';
    $request->id = 634274;
    $request->limit = 988374;
    $request->offset = 958950;

    $requestSecurity = new GetCallBroadcastCallsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallBroadcastCalls($request, $requestSecurity);

    if ($response->callPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallBroadcastStats

Returns broadcast statistics like total number of sent/received actions, total cost, number of remaining outbound actions, error count, etc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallBroadcastStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallBroadcastStatsRequest();
    $request->begin = 102044;
    $request->end = 652790;
    $request->fields = 'dolorem';
    $request->id = 635059;

    $requestSecurity = new GetCallBroadcastStatsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallBroadcastStats($request, $requestSecurity);

    if ($response->callBroadcastStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallRecording

Returns metadata of recording of a particular call. Metadata contains a link to a MP3 recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallRecordingRequest();
    $request->fields = 'consequuntur';
    $request->id = 995300;

    $requestSecurity = new GetCallRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallRecording($request, $requestSecurity);

    if ($response->callRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallRecordingByName

Returns recording metadata of particular call. Metadata contains link to a MP3 recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingByNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingByNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallRecordingByNameRequest();
    $request->fields = 'mollitia';
    $request->id = 581850;
    $request->name = 'Lucy Konopelski';

    $requestSecurity = new GetCallRecordingByNameSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallRecordingByName($request, $requestSecurity);

    if ($response->callRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallRecordingMp3

Returns an MP3 recording of particular call, response contains binary data, content type is 'audio/mpeg'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingMp3Request;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingMp3Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallRecordingMp3Request();
    $request->id = 623510;

    $requestSecurity = new GetCallRecordingMp3Security();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallRecordingMp3($request, $requestSecurity);

    if ($response->inputStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallRecordingMp3ByName

Returns a MP3 recording of a particular call, response contains binary data, content type is 'audio/mpeg'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingMp3ByNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingMp3ByNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallRecordingMp3ByNameRequest();
    $request->id = 158969;
    $request->name = 'Gloria Padberg';

    $requestSecurity = new GetCallRecordingMp3ByNameSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallRecordingMp3ByName($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCallRecordings

Returns a list of recordings metadata of particular call. Metadata contains link to a MP3 recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCallRecordingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCallRecordingsRequest();
    $request->fields = 'odit';
    $request->id = 778346;

    $requestSecurity = new GetCallRecordingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->getCallRecordings($request, $requestSecurity);

    if ($response->callRecordingList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendCalls

Use the /calls API to send individual calls quickly. A verified Caller ID and sufficient credits are required to make a call. CallRecipient represents a single recipient identified by phone number or contact id in CallFire system. You can attach user-defined attributes to a Call action via CallRecipient.attributes property, attributes are available in Call action response

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendCallsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallRecipient;
use \OpenAPI\OpenAPI\Models\Shared\CallRecipientVoiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendCallsDefaultVoiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendCallsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendCallsRequest();
    $request->requestBody = [
        new CallRecipient(),
    ];
    $request->campaignId = 949572;
    $request->defaultLiveMessage = 'ipsam';
    $request->defaultLiveMessageSoundId = 662527;
    $request->defaultMachineMessage = 'possimus';
    $request->defaultMachineMessageSoundId = 13571;
    $request->defaultVoice = SendCallsDefaultVoiceEnum::MALE1;
    $request->fields = 'error';
    $request->strictValidation = false;

    $requestSecurity = new SendCallsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->sendCalls($request, $requestSecurity);

    if ($response->callList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startVoiceBroadcast

Start a voice broadcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartVoiceBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartVoiceBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartVoiceBroadcastRequest();
    $request->id = 837945;

    $requestSecurity = new StartVoiceBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->startVoiceBroadcast($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopVoiceBroadcast

Stop a voice broadcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopVoiceBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopVoiceBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopVoiceBroadcastRequest();
    $request->id = 673660;

    $requestSecurity = new StopVoiceBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->stopVoiceBroadcast($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toggleCallBroadcastRecipientsStatus

This operation lets the user to disable/enable undialed recipients in created broadcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToggleCallBroadcastRecipientsStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Operations\ToggleCallBroadcastRecipientsStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToggleCallBroadcastRecipientsStatusRequest();
    $request->requestBody = [
        new Recipient(),
    ];
    $request->enable = false;
    $request->id = 971945;

    $requestSecurity = new ToggleCallBroadcastRecipientsStatusSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->toggleCallBroadcastRecipientsStatus($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCallBroadcast

This operation lets the user modify the configuration of a voice broadcast campaign after call broadcast campaign is created. See CallBroadcast for more information on what can/can't be updated on this API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastInput;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastAnsweringMachineConfigEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalTimeRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Shared\RetryConfig;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\LocalDate;
use \OpenAPI\OpenAPI\Models\Shared\LocalTime;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSounds;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsDncSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsLiveSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsMachineSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallBroadcastSoundsTransferSoundTextVoiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCallBroadcastRequest();
    $request->callBroadcastInput = new CallBroadcastInput();
    $request->callBroadcastInput->answeringMachineConfig = CallBroadcastAnsweringMachineConfigEnum::LIVE_IMMEDIATE;
    $request->callBroadcastInput->dialplanXml = 'vero';
    $request->callBroadcastInput->fromNumber = 'nihil';
    $request->callBroadcastInput->id = 509624;
    $request->callBroadcastInput->labels = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->callBroadcastInput->localTimeRestriction = new LocalTimeRestriction();
    $request->callBroadcastInput->localTimeRestriction->beginHour = 19987;
    $request->callBroadcastInput->localTimeRestriction->beginMinute = 39187;
    $request->callBroadcastInput->localTimeRestriction->enabled = false;
    $request->callBroadcastInput->localTimeRestriction->endHour = 441711;
    $request->callBroadcastInput->localTimeRestriction->endMinute = 282807;
    $request->callBroadcastInput->maxActive = 979587;
    $request->callBroadcastInput->maxActiveTransfers = 120196;
    $request->callBroadcastInput->name = 'Miss Valerie Kshlerin';
    $request->callBroadcastInput->recipients = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->callBroadcastInput->resumeNextDay = false;
    $request->callBroadcastInput->retryConfig = new RetryConfig();
    $request->callBroadcastInput->retryConfig->maxAttempts = 414263;
    $request->callBroadcastInput->retryConfig->minutesBetweenAttempts = 918236;
    $request->callBroadcastInput->retryConfig->retryPhoneTypes = [
        'ipsum',
    ];
    $request->callBroadcastInput->retryConfig->retryResults = [
        'molestias',
        'excepturi',
        'pariatur',
    ];
    $request->callBroadcastInput->schedules = [
        new Schedule(),
        new Schedule(),
    ];
    $request->callBroadcastInput->sounds = new CallBroadcastSounds();
    $request->callBroadcastInput->sounds->dncDigit = 'praesentium';
    $request->callBroadcastInput->sounds->dncSoundId = 523248;
    $request->callBroadcastInput->sounds->dncSoundText = 'voluptates';
    $request->callBroadcastInput->sounds->dncSoundTextVoice = CallBroadcastSoundsDncSoundTextVoiceEnum::MALE1;
    $request->callBroadcastInput->sounds->liveSoundId = 921158;
    $request->callBroadcastInput->sounds->liveSoundText = 'sint';
    $request->callBroadcastInput->sounds->liveSoundTextVoice = CallBroadcastSoundsLiveSoundTextVoiceEnum::MALE1;
    $request->callBroadcastInput->sounds->machineSoundId = 929297;
    $request->callBroadcastInput->sounds->machineSoundText = 'incidunt';
    $request->callBroadcastInput->sounds->machineSoundTextVoice = CallBroadcastSoundsMachineSoundTextVoiceEnum::FEMALE1;
    $request->callBroadcastInput->sounds->transferDigit = 'consequatur';
    $request->callBroadcastInput->sounds->transferNumber = 'est';
    $request->callBroadcastInput->sounds->transferSoundId = 842342;
    $request->callBroadcastInput->sounds->transferSoundText = 'explicabo';
    $request->callBroadcastInput->sounds->transferSoundTextVoice = CallBroadcastSoundsTransferSoundTextVoiceEnum::SPANISH1;
    $request->id = 716327;
    $request->strictValidation = false;

    $requestSecurity = new UpdateCallBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->calls->updateCallBroadcast($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
