# SDK

## Overview

Polls is a simple API allowing consumers to view polls and vote in them.

### Available Operations

* [createANewQuestion](#createanewquestion) - Create a New Question
* [listAllQuestions](#listallquestions) - List All Questions

## createANewQuestion

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateANewQuestionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateANewQuestionRequestBody();
    $request->choices = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->question = 'deserunt';

    $response = $sdk->sdk->createANewQuestion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAllQuestions

List All Questions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->listAllQuestions();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
