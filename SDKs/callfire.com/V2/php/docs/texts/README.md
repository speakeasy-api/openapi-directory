# texts

### Available Operations

* [addTextBroadcastBatch](#addtextbroadcastbatch) - Add batches to a text broadcast
* [addTextBroadcastRecipients](#addtextbroadcastrecipients) - Add recipients to a text broadcast
* [archiveTextBroadcast](#archivetextbroadcast) - Archive text broadcast
* [createTextAutoReply](#createtextautoreply) - Create an auto reply
* [createTextBroadcast](#createtextbroadcast) - Create a text broadcast
* [deleteTextAutoReply](#deletetextautoreply) - Delete an auto reply
* [findTextAutoReplys](#findtextautoreplys) - Find auto replies
* [findTextBroadcasts](#findtextbroadcasts) - Find text broadcasts
* [findTexts](#findtexts) - Find texts
* [getText](#gettext) - Find a specific text
* [getTextAutoReply](#gettextautoreply) - Find a specific auto reply
* [getTextBroadcast](#gettextbroadcast) - Find a specific text broadcast
* [getTextBroadcastBatches](#gettextbroadcastbatches) - Find batches in a text broadcast
* [getTextBroadcastStats](#gettextbroadcaststats) - Get statistics on text broadcast
* [getTextBroadcastTexts](#gettextbroadcasttexts) - Find texts in a text broadcast
* [sendTexts](#sendtexts) - Send texts
* [startTextBroadcast](#starttextbroadcast) - Start text broadcast
* [stopTextBroadcast](#stoptextbroadcast) - Stop text broadcast
* [toggleTextBroadcastRecipientsStatus](#toggletextbroadcastrecipientsstatus) - Disable/enable undialed recipients in broadcast
* [updateTextBroadcast](#updatetextbroadcast) - Update a text broadcast

## addTextBroadcastBatch

Allows adding an extra batches to an already created text broadcast campaign. The batches which being  added pass the CallFire validation process (unlike in the recipients version of this API). That is why using of a scrubDuplicates flag remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddTextBroadcastBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Operations\AddTextBroadcastBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTextBroadcastBatchRequest();
    $request->batchRequest = new BatchRequest();
    $request->batchRequest->contactListId = 232234;
    $request->batchRequest->name = 'Dr. Bruce Hane';
    $request->batchRequest->recipients = [
        new Recipient(),
    ];
    $request->batchRequest->scrubDuplicates = false;
    $request->id = 11427;
    $request->strictValidation = false;

    $requestSecurity = new AddTextBroadcastBatchSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->addTextBroadcastBatch($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTextBroadcastRecipients

Use this API to add recipients to a text broadcast which is already created. Post a list of Recipient objects to be immediately added to the text broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddTextBroadcastRecipientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Operations\AddTextBroadcastRecipientsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTextBroadcastRecipientsRequest();
    $request->requestBody = [
        new TextRecipient(),
        new TextRecipient(),
        new TextRecipient(),
    ];
    $request->fields = 'impedit';
    $request->id = 304582;
    $request->strictValidation = false;

    $requestSecurity = new AddTextBroadcastRecipientsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->addTextBroadcastRecipients($request, $requestSecurity);

    if ($response->textList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## archiveTextBroadcast

Archives a text broadcast (and hides it in the search results)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveTextBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\ArchiveTextBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ArchiveTextBroadcastRequest();
    $request->id = 146946;

    $requestSecurity = new ArchiveTextBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->archiveTextBroadcast($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTextAutoReply

CallFire gives you possibility to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number, keyword, and/or include a text to match, so that the auto reply would be sent only to those who text the matched text

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TextAutoReply;
use \OpenAPI\OpenAPI\Models\Operations\CreateTextAutoReplySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TextAutoReply();
    $request->id = 882860;
    $request->keyword = 'inventore';
    $request->match = 'non';
    $request->message = 'et';
    $request->number = 'dolorum';

    $requestSecurity = new CreateTextAutoReplySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->createTextAutoReply($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTextBroadcast

Creates a text broadcast campaign using the Text Broadcast API. Send a TextBroadcast object in the message body to detail a text broadcast campaign. A campaign can be created without contacts and with bare minimum configuration, but contacts have to be added further on to use the campaign. It supports scheduling, retry logic, pattern-based messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTextBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextBroadcastInput;
use \OpenAPI\OpenAPI\Models\Shared\TextBroadcastBigMessageStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalTimeRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Shared\TextRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\LocalDate;
use \OpenAPI\OpenAPI\Models\Shared\LocalTime;
use \OpenAPI\OpenAPI\Models\Operations\CreateTextBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTextBroadcastRequest();
    $request->textBroadcastInput = new TextBroadcastInput();
    $request->textBroadcastInput->bigMessageStrategy = TextBroadcastBigMessageStrategyEnum::TRIM;
    $request->textBroadcastInput->fromNumber = 'placeat';
    $request->textBroadcastInput->id = 245367;
    $request->textBroadcastInput->labels = [
        'autem',
        'nobis',
    ];
    $request->textBroadcastInput->localTimeRestriction = new LocalTimeRestriction();
    $request->textBroadcastInput->localTimeRestriction->beginHour = 557369;
    $request->textBroadcastInput->localTimeRestriction->beginMinute = 829603;
    $request->textBroadcastInput->localTimeRestriction->enabled = false;
    $request->textBroadcastInput->localTimeRestriction->endHour = 860552;
    $request->textBroadcastInput->localTimeRestriction->endMinute = 379034;
    $request->textBroadcastInput->maxActive = 727044;
    $request->textBroadcastInput->media = [
        new Media(),
    ];
    $request->textBroadcastInput->message = 'tempora';
    $request->textBroadcastInput->name = 'Ms. Janice McLaughlin';
    $request->textBroadcastInput->recipients = [
        new TextRecipient(),
        new TextRecipient(),
    ];
    $request->textBroadcastInput->resumeNextDay = false;
    $request->textBroadcastInput->schedules = [
        new Schedule(),
        new Schedule(),
    ];
    $request->start = false;
    $request->strictValidation = false;

    $requestSecurity = new CreateTextBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->createTextBroadcast($request, $requestSecurity);

    if ($response->resourceId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTextAutoReply

Deletes a text auto reply and removes the configuration. Can not delete a TextAutoReply which is currently active for a campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTextAutoReplyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTextAutoReplySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTextAutoReplyRequest();
    $request->id = 458515;

    $requestSecurity = new DeleteTextAutoReplySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->deleteTextAutoReply($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findTextAutoReplys

Find all text autoreplies created by user. Returns a paged list of TextAutoReply

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindTextAutoReplysRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindTextAutoReplysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindTextAutoReplysRequest();
    $request->fields = 'esse';
    $request->limit = 524593;
    $request->number = 'fuga';
    $request->offset = 442015;

    $requestSecurity = new FindTextAutoReplysSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->findTextAutoReplys($request, $requestSecurity);

    if ($response->textAutoReplyPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findTextBroadcasts

Searches for all text broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of text broadcasts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindTextBroadcastsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindTextBroadcastsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindTextBroadcastsRequest();
    $request->fields = 'quidem';
    $request->intervalBegin = 852635;
    $request->intervalEnd = 283519;
    $request->label = 'eum';
    $request->limit = 379927;
    $request->name = 'Alan Lang Jr.';
    $request->offset = 660040;
    $request->running = false;
    $request->scheduled = false;

    $requestSecurity = new FindTextBroadcastsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->findTextBroadcasts($request, $requestSecurity);

    if ($response->textBroadcastPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findTexts

Searches for texts sent or received by user. Use "campaignId=0" parameter to query for all texts sent through the POST /texts API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindTextsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindTextsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindTextsRequest();
    $request->batchId = 696997;
    $request->campaignId = 206594;
    $request->fields = 'quo';
    $request->fromNumber = 'illum';
    $request->id = [
        681359,
        259422,
        178367,
        373813,
    ];
    $request->inbound = false;
    $request->intervalBegin = 69859;
    $request->intervalEnd = 587600;
    $request->label = 'consequatur';
    $request->limit = 272822;
    $request->offset = 892050;
    $request->results = 'ipsam';
    $request->states = 'aspernatur';
    $request->toNumber = 'sequi';

    $requestSecurity = new FindTextsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->findTexts($request, $requestSecurity);

    if ($response->textPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getText

Returns a single Text instance for a given text id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTextSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextRequest();
    $request->fields = 'quo';
    $request->id = 459856;

    $requestSecurity = new GetTextSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->getText($request, $requestSecurity);

    if ($response->text !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextAutoReply

Returns a single TextAutoReply instance for a given text auto reply id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTextAutoReplyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTextAutoReplySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextAutoReplyRequest();
    $request->fields = 'recusandae';
    $request->id = 44612;

    $requestSecurity = new GetTextAutoReplySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->getTextAutoReply($request, $requestSecurity);

    if ($response->textAutoReply !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextBroadcast

Returns a single TextBroadcast instance for a given text broadcast id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextBroadcastRequest();
    $request->fields = 'distinctio';
    $request->id = 799796;

    $requestSecurity = new GetTextBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->getTextBroadcast($request, $requestSecurity);

    if ($response->textBroadcast !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextBroadcastBatches

This endpoint will enable the user to page through all of the batches for a particular text broadcast campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastBatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastBatchesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextBroadcastBatchesRequest();
    $request->fields = 'dignissimos';
    $request->id = 76956;
    $request->limit = 469498;
    $request->offset = 518835;

    $requestSecurity = new GetTextBroadcastBatchesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->getTextBroadcastBatches($request, $requestSecurity);

    if ($response->batchPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextBroadcastStats

Returns the broadcast statistics. Example: total number of the sent/received actions, total cost, number of remaining outbound actions, error count, etc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextBroadcastStatsRequest();
    $request->begin = 882710;
    $request->end = 306810;
    $request->fields = 'odio';
    $request->id = 577543;

    $requestSecurity = new GetTextBroadcastStatsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->getTextBroadcastStats($request, $requestSecurity);

    if ($response->textBroadcastStatsDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextBroadcastTexts

This endpoint will enable the user to page through all of the texts for a particular text broadcast campaign

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastTextsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTextBroadcastTextsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextBroadcastTextsRequest();
    $request->batchId = 414567;
    $request->fields = 'sapiente';
    $request->id = 174112;
    $request->limit = 645570;
    $request->offset = 475289;

    $requestSecurity = new GetTextBroadcastTextsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->getTextBroadcastTexts($request, $requestSecurity);

    if ($response->textPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendTexts

Use the /texts API to send individual texts quickly. By default all texts are going out from CallFire's dedicated short code. Example: 67076, 818818 etc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SendTextsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Operations\SendTextsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTextsRequest();
    $request->requestBody = [
        new TextRecipient(),
    ];
    $request->campaignId = 783648;
    $request->defaultMessage = 'eum';
    $request->fields = 'quas';
    $request->strictValidation = false;

    $requestSecurity = new SendTextsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->sendTexts($request, $requestSecurity);

    if ($response->textList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTextBroadcast

Starts a text broadcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartTextBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartTextBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTextBroadcastRequest();
    $request->id = 510017;

    $requestSecurity = new StartTextBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->startTextBroadcast($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTextBroadcast

Stops a text broadcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StopTextBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTextBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTextBroadcastRequest();
    $request->id = 159867;

    $requestSecurity = new StopTextBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->stopTextBroadcast($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## toggleTextBroadcastRecipientsStatus

This operation lets the user to disable/enable undialed contacts in created broadcast

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ToggleTextBroadcastRecipientsStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\Recipient;
use \OpenAPI\OpenAPI\Models\Operations\ToggleTextBroadcastRecipientsStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ToggleTextBroadcastRecipientsStatusRequest();
    $request->requestBody = [
        new Recipient(),
        new Recipient(),
        new Recipient(),
    ];
    $request->enable = false;
    $request->id = 143829;

    $requestSecurity = new ToggleTextBroadcastRecipientsStatusSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->toggleTextBroadcastRecipientsStatus($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTextBroadcast

Allows modifying the configuration of existing text broadcast campaign. See TextBroadcast for more information on what can/can't be updated on this API

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTextBroadcastRequest;
use \OpenAPI\OpenAPI\Models\Shared\TextBroadcastInput;
use \OpenAPI\OpenAPI\Models\Shared\TextBroadcastBigMessageStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocalTimeRestriction;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Shared\TextRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Schedule;
use \OpenAPI\OpenAPI\Models\Shared\LocalDate;
use \OpenAPI\OpenAPI\Models\Shared\LocalTime;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTextBroadcastSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTextBroadcastRequest();
    $request->textBroadcastInput = new TextBroadcastInput();
    $request->textBroadcastInput->bigMessageStrategy = TextBroadcastBigMessageStrategyEnum::TRIM;
    $request->textBroadcastInput->fromNumber = 'mollitia';
    $request->textBroadcastInput->id = 277596;
    $request->textBroadcastInput->labels = [
        'explicabo',
        'minima',
        'nisi',
    ];
    $request->textBroadcastInput->localTimeRestriction = new LocalTimeRestriction();
    $request->textBroadcastInput->localTimeRestriction->beginHour = 147014;
    $request->textBroadcastInput->localTimeRestriction->beginMinute = 956406;
    $request->textBroadcastInput->localTimeRestriction->enabled = false;
    $request->textBroadcastInput->localTimeRestriction->endHour = 159870;
    $request->textBroadcastInput->localTimeRestriction->endMinute = 187131;
    $request->textBroadcastInput->maxActive = 129412;
    $request->textBroadcastInput->media = [
        new Media(),
        new Media(),
        new Media(),
        new Media(),
    ];
    $request->textBroadcastInput->message = 'occaecati';
    $request->textBroadcastInput->name = 'Carl Koch';
    $request->textBroadcastInput->recipients = [
        new TextRecipient(),
    ];
    $request->textBroadcastInput->resumeNextDay = false;
    $request->textBroadcastInput->schedules = [
        new Schedule(),
        new Schedule(),
    ];
    $request->id = 800379;
    $request->strictValidation = false;

    $requestSecurity = new UpdateTextBroadcastSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->texts->updateTextBroadcast($request, $requestSecurity);

    if ($response->textBroadcastCreateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
