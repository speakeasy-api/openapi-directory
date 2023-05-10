# pad

### Available Operations

* [appendChatMessageUsingGET](#appendchatmessageusingget) - appends a chat message
* [appendChatMessageUsingPOST](#appendchatmessageusingpost) - appends a chat message
* [checkTokenUsingGET](#checktokenusingget) - returns ok when the current api token is valid
* [checkTokenUsingPOST](#checktokenusingpost) - returns ok when the current api token is valid
* [createDiffHTMLUsingGET](#creatediffhtmlusingget)
* [createDiffHTMLUsingPOST](#creatediffhtmlusingpost)
* [createPadUsingGET](#createpadusingget) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [createPadUsingPOST](#createpadusingpost) - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
* [deletePadUsingGET](#deletepadusingget) - deletes a pad
* [deletePadUsingPOST](#deletepadusingpost) - deletes a pad
* [getChatHeadUsingGET](#getchatheadusingget) - returns the chatHead (chat-message) of the pad
* [getChatHeadUsingPOST](#getchatheadusingpost) - returns the chatHead (chat-message) of the pad
* [getChatHistoryUsingGET](#getchathistoryusingget) - returns the chat history
* [getChatHistoryUsingPOST](#getchathistoryusingpost) - returns the chat history
* [getHTMLUsingGET](#gethtmlusingget) - returns the text of a pad formatted as HTML
* [getHTMLUsingPOST](#gethtmlusingpost) - returns the text of a pad formatted as HTML
* [getLastEditedUsingGET](#getlasteditedusingget) - returns the timestamp of the last revision of the pad
* [getLastEditedUsingPOST](#getlasteditedusingpost) - returns the timestamp of the last revision of the pad
* [getPublicStatusUsingGET](#getpublicstatususingget) - return true of false
* [getPublicStatusUsingPOST](#getpublicstatususingpost) - return true of false
* [getReadOnlyIDUsingGET](#getreadonlyidusingget) - returns the read only link of a pad
* [getReadOnlyIDUsingPOST](#getreadonlyidusingpost) - returns the read only link of a pad
* [getRevisionsCountUsingGET](#getrevisionscountusingget) - returns the number of revisions of this pad
* [getRevisionsCountUsingPOST](#getrevisionscountusingpost) - returns the number of revisions of this pad
* [getTextUsingGET](#gettextusingget) - returns the text of a pad
* [getTextUsingPOST](#gettextusingpost) - returns the text of a pad
* [listAllPadsUsingGET](#listallpadsusingget) - list all the pads
* [listAllPadsUsingPOST](#listallpadsusingpost) - list all the pads
* [listAuthorsOfPadUsingGET](#listauthorsofpadusingget) - returns an array of authors who contributed to this pad
* [listAuthorsOfPadUsingPOST](#listauthorsofpadusingpost) - returns an array of authors who contributed to this pad
* [padUsersCountUsingGET](#paduserscountusingget) - returns the number of user that are currently editing this pad
* [padUsersCountUsingPOST](#paduserscountusingpost) - returns the number of user that are currently editing this pad
* [padUsersUsingGET](#padusersusingget) - returns the list of users that are currently editing this pad
* [padUsersUsingPOST](#padusersusingpost) - returns the list of users that are currently editing this pad
* [sendClientsMessageUsingGET](#sendclientsmessageusingget) - sends a custom message of type msg to the pad
* [sendClientsMessageUsingPOST](#sendclientsmessageusingpost) - sends a custom message of type msg to the pad
* [setHTMLUsingGET](#sethtmlusingget) - sets the text of a pad with HTML
* [setHTMLUsingPOST](#sethtmlusingpost) - sets the text of a pad with HTML
* [setPublicStatusUsingGET](#setpublicstatususingget) - sets a boolean for the public status of a pad
* [setPublicStatusUsingPOST](#setpublicstatususingpost) - sets a boolean for the public status of a pad
* [setTextUsingGET](#settextusingget) - sets the text of a pad
* [setTextUsingPOST](#settextusingpost) - sets the text of a pad

## appendChatMessageUsingGET

appends a chat message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppendChatMessageUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppendChatMessageUsingGETRequest();
    $request->authorID = 'reiciendis';
    $request->padID = 'est';
    $request->text = 'mollitia';
    $request->time = 'laborum';

    $response = $sdk->pad->appendChatMessageUsingGET($request);

    if ($response->appendChatMessageUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appendChatMessageUsingPOST

appends a chat message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppendChatMessageUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppendChatMessageUsingPOSTRequest();
    $request->authorID = 'dolores';
    $request->padID = 'dolorem';
    $request->text = 'corporis';
    $request->time = 'explicabo';

    $response = $sdk->pad->appendChatMessageUsingPOST($request);

    if ($response->appendChatMessageUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkTokenUsingGET

returns ok when the current api token is valid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->pad->checkTokenUsingGET();

    if ($response->checkTokenUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkTokenUsingPOST

returns ok when the current api token is valid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->pad->checkTokenUsingPOST();

    if ($response->checkTokenUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDiffHTMLUsingGET

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiffHTMLUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDiffHTMLUsingGETRequest();
    $request->endRev = 'nobis';
    $request->padID = 'enim';
    $request->startRev = 'omnis';

    $response = $sdk->pad->createDiffHTMLUsingGET($request);

    if ($response->createDiffHTMLUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDiffHTMLUsingPOST

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDiffHTMLUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDiffHTMLUsingPOSTRequest();
    $request->endRev = 'nemo';
    $request->padID = 'minima';
    $request->startRev = 'excepturi';

    $response = $sdk->pad->createDiffHTMLUsingPOST($request);

    if ($response->createDiffHTMLUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPadUsingGET

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePadUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePadUsingGETRequest();
    $request->padID = 'accusantium';
    $request->text = 'iure';

    $response = $sdk->pad->createPadUsingGET($request);

    if ($response->createPadUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPadUsingPOST

creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePadUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePadUsingPOSTRequest();
    $request->padID = 'culpa';
    $request->text = 'doloribus';

    $response = $sdk->pad->createPadUsingPOST($request);

    if ($response->createPadUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePadUsingGET

deletes a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePadUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePadUsingGETRequest();
    $request->padID = 'sapiente';

    $response = $sdk->pad->deletePadUsingGET($request);

    if ($response->deletePadUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePadUsingPOST

deletes a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePadUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePadUsingPOSTRequest();
    $request->padID = 'architecto';

    $response = $sdk->pad->deletePadUsingPOST($request);

    if ($response->deletePadUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChatHeadUsingGET

returns the chatHead (chat-message) of the pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETChatHeadUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETChatHeadUsingGETRequest();
    $request->padID = 'mollitia';

    $response = $sdk->pad->getChatHeadUsingGET($request);

    if ($response->getChatHeadUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChatHeadUsingPOST

returns the chatHead (chat-message) of the pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChatHeadUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChatHeadUsingPOSTRequest();
    $request->padID = 'dolorem';

    $response = $sdk->pad->getChatHeadUsingPOST($request);

    if ($response->getChatHeadUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChatHistoryUsingGET

returns the chat history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETChatHistoryUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETChatHistoryUsingGETRequest();
    $request->end = 'culpa';
    $request->padID = 'consequuntur';
    $request->start = 'repellat';

    $response = $sdk->pad->getChatHistoryUsingGET($request);

    if ($response->getChatHistoryUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChatHistoryUsingPOST

returns the chat history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChatHistoryUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChatHistoryUsingPOSTRequest();
    $request->end = 'mollitia';
    $request->padID = 'occaecati';
    $request->start = 'numquam';

    $response = $sdk->pad->getChatHistoryUsingPOST($request);

    if ($response->getChatHistoryUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHTMLUsingGET

returns the text of a pad formatted as HTML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETHTMLUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETHTMLUsingGETRequest();
    $request->padID = 'commodi';
    $request->rev = 'quam';

    $response = $sdk->pad->getHTMLUsingGET($request);

    if ($response->getHTMLUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHTMLUsingPOST

returns the text of a pad formatted as HTML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHTMLUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHTMLUsingPOSTRequest();
    $request->padID = 'molestiae';
    $request->rev = 'velit';

    $response = $sdk->pad->getHTMLUsingPOST($request);

    if ($response->getHTMLUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLastEditedUsingGET

returns the timestamp of the last revision of the pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETLastEditedUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETLastEditedUsingGETRequest();
    $request->padID = 'error';

    $response = $sdk->pad->getLastEditedUsingGET($request);

    if ($response->getLastEditedUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLastEditedUsingPOST

returns the timestamp of the last revision of the pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLastEditedUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLastEditedUsingPOSTRequest();
    $request->padID = 'quia';

    $response = $sdk->pad->getLastEditedUsingPOST($request);

    if ($response->getLastEditedUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicStatusUsingGET

return true of false

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETPublicStatusUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETPublicStatusUsingGETRequest();
    $request->padID = 'quis';

    $response = $sdk->pad->getPublicStatusUsingGET($request);

    if ($response->getPublicStatusUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicStatusUsingPOST

return true of false

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicStatusUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicStatusUsingPOSTRequest();
    $request->padID = 'vitae';

    $response = $sdk->pad->getPublicStatusUsingPOST($request);

    if ($response->getPublicStatusUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadOnlyIDUsingGET

returns the read only link of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETReadOnlyIDUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETReadOnlyIDUsingGETRequest();
    $request->padID = 'laborum';

    $response = $sdk->pad->getReadOnlyIDUsingGET($request);

    if ($response->getReadOnlyIDUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadOnlyIDUsingPOST

returns the read only link of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadOnlyIDUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadOnlyIDUsingPOSTRequest();
    $request->padID = 'animi';

    $response = $sdk->pad->getReadOnlyIDUsingPOST($request);

    if ($response->getReadOnlyIDUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevisionsCountUsingGET

returns the number of revisions of this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRevisionsCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRevisionsCountUsingGETRequest();
    $request->padID = 'enim';

    $response = $sdk->pad->getRevisionsCountUsingGET($request);

    if ($response->getRevisionsCountUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRevisionsCountUsingPOST

returns the number of revisions of this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRevisionsCountUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRevisionsCountUsingPOSTRequest();
    $request->padID = 'odit';

    $response = $sdk->pad->getRevisionsCountUsingPOST($request);

    if ($response->getRevisionsCountUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextUsingGET

returns the text of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETTextUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETTextUsingGETRequest();
    $request->padID = 'quo';
    $request->rev = 'sequi';

    $response = $sdk->pad->getTextUsingGET($request);

    if ($response->getTextUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTextUsingPOST

returns the text of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTextUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTextUsingPOSTRequest();
    $request->padID = 'tenetur';
    $request->rev = 'ipsam';

    $response = $sdk->pad->getTextUsingPOST($request);

    if ($response->getTextUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllPadsUsingGET

list all the pads

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->pad->listAllPadsUsingGET();

    if ($response->listAllPadsUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllPadsUsingPOST

list all the pads

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->pad->listAllPadsUsingPOST();

    if ($response->listAllPadsUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuthorsOfPadUsingGET

returns an array of authors who contributed to this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuthorsOfPadUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuthorsOfPadUsingGETRequest();
    $request->padID = 'id';

    $response = $sdk->pad->listAuthorsOfPadUsingGET($request);

    if ($response->listAuthorsOfPadUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuthorsOfPadUsingPOST

returns an array of authors who contributed to this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAuthorsOfPadUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuthorsOfPadUsingPOSTRequest();
    $request->padID = 'possimus';

    $response = $sdk->pad->listAuthorsOfPadUsingPOST($request);

    if ($response->listAuthorsOfPadUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## padUsersCountUsingGET

returns the number of user that are currently editing this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PadUsersCountUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PadUsersCountUsingGETRequest();
    $request->padID = 'aut';

    $response = $sdk->pad->padUsersCountUsingGET($request);

    if ($response->padUsersCountUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## padUsersCountUsingPOST

returns the number of user that are currently editing this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PadUsersCountUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PadUsersCountUsingPOSTRequest();
    $request->padID = 'quasi';

    $response = $sdk->pad->padUsersCountUsingPOST($request);

    if ($response->padUsersCountUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## padUsersUsingGET

returns the list of users that are currently editing this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PadUsersUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PadUsersUsingGETRequest();
    $request->padID = 'error';

    $response = $sdk->pad->padUsersUsingGET($request);

    if ($response->padUsersUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## padUsersUsingPOST

returns the list of users that are currently editing this pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PadUsersUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PadUsersUsingPOSTRequest();
    $request->padID = 'temporibus';

    $response = $sdk->pad->padUsersUsingPOST($request);

    if ($response->padUsersUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendClientsMessageUsingGET

sends a custom message of type msg to the pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendClientsMessageUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendClientsMessageUsingGETRequest();
    $request->msg = 'laborum';
    $request->padID = 'quasi';

    $response = $sdk->pad->sendClientsMessageUsingGET($request);

    if ($response->sendClientsMessageUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendClientsMessageUsingPOST

sends a custom message of type msg to the pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendClientsMessageUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendClientsMessageUsingPOSTRequest();
    $request->msg = 'reiciendis';
    $request->padID = 'voluptatibus';

    $response = $sdk->pad->sendClientsMessageUsingPOST($request);

    if ($response->sendClientsMessageUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setHTMLUsingGET

sets the text of a pad with HTML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetHTMLUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetHTMLUsingGETRequest();
    $request->html = 'vero';
    $request->padID = 'nihil';

    $response = $sdk->pad->setHTMLUsingGET($request);

    if ($response->setHTMLUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setHTMLUsingPOST

sets the text of a pad with HTML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetHTMLUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetHTMLUsingPOSTRequest();
    $request->html = 'praesentium';
    $request->padID = 'voluptatibus';

    $response = $sdk->pad->setHTMLUsingPOST($request);

    if ($response->setHTMLUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPublicStatusUsingGET

sets a boolean for the public status of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPublicStatusUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPublicStatusUsingGETRequest();
    $request->padID = 'ipsa';
    $request->publicStatus = 'omnis';

    $response = $sdk->pad->setPublicStatusUsingGET($request);

    if ($response->setPublicStatusUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPublicStatusUsingPOST

sets a boolean for the public status of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPublicStatusUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPublicStatusUsingPOSTRequest();
    $request->padID = 'voluptate';
    $request->publicStatus = 'cum';

    $response = $sdk->pad->setPublicStatusUsingPOST($request);

    if ($response->setPublicStatusUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTextUsingGET

sets the text of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetTextUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTextUsingGETRequest();
    $request->padID = 'perferendis';
    $request->text = 'doloremque';

    $response = $sdk->pad->setTextUsingGET($request);

    if ($response->setTextUsingGET200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTextUsingPOST

sets the text of a pad

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetTextUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTextUsingPOSTRequest();
    $request->padID = 'reprehenderit';
    $request->text = 'ut';

    $response = $sdk->pad->setTextUsingPOST($request);

    if ($response->setTextUsingPOST200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
