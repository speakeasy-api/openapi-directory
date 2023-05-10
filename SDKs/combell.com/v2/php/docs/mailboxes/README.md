# mailboxes

## Overview

Manage your mailboxes.

### Available Operations

* [changeMailboxPassword](#changemailboxpassword) - Change password for mailbox
* [configureMailboxAutoForward](#configuremailboxautoforward) - Configure auto-forward for mailbox
* [configureMailboxAutoReply](#configuremailboxautoreply) - Configure auto-reply for mailbox
* [createMailbox](#createmailbox) - Create a new mailbox.
* [deleteMailbox](#deletemailbox) - Delete a mailbox
* [getMailbox](#getmailbox) - Get a specific mailbox
* [getMailboxes](#getmailboxes) - Gets your mailboxes.

## changeMailboxPassword

Change password for mailbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeMailboxPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMailboxPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeMailboxPasswordRequest();
    $request->updateMailboxPasswordRequest = new UpdateMailboxPasswordRequest();
    $request->updateMailboxPasswordRequest->password = 'voluptas';
    $request->mailboxNamePathParameter = 'natus';
    $request->mailboxNameQueryParameter = 'eos';

    $response = $sdk->mailboxes->changeMailboxPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureMailboxAutoForward

Configure auto-forward for mailbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureMailboxAutoForwardRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoForward;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureMailboxAutoForwardRequest();
    $request->autoForward = new AutoForward();
    $request->autoForward->copyToMyself = false;
    $request->autoForward->emailAddresses = [
        'sit',
        'fugiat',
        'ab',
    ];
    $request->autoForward->enabled = false;
    $request->mailboxNamePathParameter = 'soluta';
    $request->mailboxNameQueryParameter = 'dolorum';

    $response = $sdk->mailboxes->configureMailboxAutoForward($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureMailboxAutoReply

Configure auto-reply for mailbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureMailboxAutoReplyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoReply;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureMailboxAutoReplyRequest();
    $request->autoReply = new AutoReply();
    $request->autoReply->enabled = false;
    $request->autoReply->message = 'iusto';
    $request->autoReply->subject = 'voluptate';
    $request->mailboxNamePathParameter = 'dolorum';
    $request->mailboxNameQueryParameter = 'deleniti';

    $response = $sdk->mailboxes->configureMailboxAutoReply($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMailbox

Create a new mailbox.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateMailboxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMailboxRequest();
    $request->accountId = 607045;
    $request->emailAddress = 'necessitatibus';
    $request->password = 'distinctio';

    $response = $sdk->mailboxes->createMailbox($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMailbox

Delete a mailbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMailboxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMailboxRequest();
    $request->mailboxNamePathParameter = 'asperiores';
    $request->mailboxNameQueryParameter = 'nihil';

    $response = $sdk->mailboxes->deleteMailbox($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMailbox

Get a specific mailbox

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMailboxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMailboxRequest();
    $request->mailboxNamePathParameter = 'ipsum';
    $request->mailboxNameQueryParameter = 'voluptate';

    $response = $sdk->mailboxes->getMailbox($request);

    if ($response->mailboxDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMailboxes

Currently only supports getting the mailboxes filtered by domain name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMailboxesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMailboxesRequest();
    $request->domainName = 'id';

    $response = $sdk->mailboxes->getMailboxes($request);

    if ($response->mailboxes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
