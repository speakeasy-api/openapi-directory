# queues

### Available Operations

* [playMediaOnQueue](#playmediaonqueue) - playMedia
* [updateActivityOnQueue](#updateactivityonqueue) - updateActivity

## playMediaOnQueue

playMedia

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlayMediaOnQueueRequest;
use \OpenAPI\OpenAPI\Models\Shared\PlayMediaRequest;
use \OpenAPI\OpenAPI\Models\Shared\Constraints;
use \OpenAPI\OpenAPI\Models\Shared\UserActivity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayMediaOnQueueRequest();
    $request->acceptLanguage = 'perferendis';
    $request->playMediaRequest = new PlayMediaRequest();
    $request->playMediaRequest->constraints = new Constraints();
    $request->playMediaRequest->constraints->allowExplicitContent = false;
    $request->playMediaRequest->constraints->maximumQueueSegmentItemCount = 368241;
    $request->playMediaRequest->constraints->updateUserTasteProfile = false;
    $request->playMediaRequest->userActivity = new UserActivity();
    $request->playMediaRequest->userActivity->activityType = 'com.mediastreamingservice.playmedia';
    $request->playMediaRequest->userActivity->persistentIdentifier = 'repellendus';
    $request->playMediaRequest->userActivity->title = 'Dr.';
    $request->playMediaRequest->userActivity->userInfo = [
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
    ];
    $request->playMediaRequest->userActivity->version = 'totam';
    $request->playMediaRequest->version = 'porro';
    $request->userAgent = 'dolorum';
    $request->xApplecloudextensionRetryCount = 1182.74;
    $request->xApplecloudextensionSessionId = 'nam';

    $response = $sdk->queues->playMediaOnQueue($request);

    if ($response->queue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateActivityOnQueue

updateActivity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActivityOnQueueRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\Constraints;
use \OpenAPI\OpenAPI\Models\Shared\PlayerContext;
use \OpenAPI\OpenAPI\Models\Shared\QueueActivityReportEventEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserActivity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateActivityOnQueueRequest();
    $request->acceptLanguage = 'officia';
    $request->updateActivityRequest = new UpdateActivityRequest();
    $request->updateActivityRequest->constraints = new Constraints();
    $request->updateActivityRequest->constraints->allowExplicitContent = false;
    $request->updateActivityRequest->constraints->maximumQueueSegmentItemCount = 582020;
    $request->updateActivityRequest->constraints->updateUserTasteProfile = false;
    $request->updateActivityRequest->nowPlaying = new PlayerContext();
    $request->updateActivityRequest->nowPlaying->activityIdentifier = 'fugit';
    $request->updateActivityRequest->nowPlaying->contentIdentifier = 'j15f8A3cuU0GG';
    $request->updateActivityRequest->nowPlaying->offsetInMillis = 10942;
    $request->updateActivityRequest->nowPlaying->playbackSpeed = 5373.73;
    $request->updateActivityRequest->nowPlaying->queueIdentifier = 'u104823q8201';
    $request->updateActivityRequest->previouslyPlaying = new PlayerContext();
    $request->updateActivityRequest->previouslyPlaying->activityIdentifier = 'hic';
    $request->updateActivityRequest->previouslyPlaying->contentIdentifier = 'j15f8A3cuU0GG';
    $request->updateActivityRequest->previouslyPlaying->offsetInMillis = 10942;
    $request->updateActivityRequest->previouslyPlaying->playbackSpeed = 7586.16;
    $request->updateActivityRequest->previouslyPlaying->queueIdentifier = 'u104823q8201';
    $request->updateActivityRequest->report = QueueActivityReportEventEnum::LOCAL_PLAYING_TRANSITIONED_SKIP_NEXT;
    $request->updateActivityRequest->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T15:33:40.440Z');
    $request->updateActivityRequest->userActivity = new UserActivity();
    $request->updateActivityRequest->userActivity->activityType = 'com.mediastreamingservice.playmedia';
    $request->updateActivityRequest->userActivity->persistentIdentifier = 'molestiae';
    $request->updateActivityRequest->userActivity->title = 'Mrs.';
    $request->updateActivityRequest->userActivity->userInfo = [
        'impedit' => 'cum',
    ];
    $request->updateActivityRequest->userActivity->version = 'esse';
    $request->updateActivityRequest->version = 'ipsum';
    $request->userAgent = 'excepturi';
    $request->xApplecloudextensionRetryCount = 1352.18;
    $request->xApplecloudextensionSessionId = 'perferendis';

    $response = $sdk->queues->updateActivityOnQueue($request);

    if ($response->updateActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
