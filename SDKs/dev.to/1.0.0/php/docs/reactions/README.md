# reactions

### Available Operations

* [postApiReactions](#postapireactions) - create reaction
* [postApiReactionsToggle](#postapireactionstoggle) - toggle reaction

## postApiReactions

This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will return the previous "like"

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostApiReactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiReactionsCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostApiReactionsReactableTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiReactionsRequest();
    $request->category = PostApiReactionsCategoryEnum::LIKE;
    $request->reactableId = 778346;
    $request->reactableType = PostApiReactionsReactableTypeEnum::COMMENT;

    $response = $sdk->reactions->postApiReactions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiReactionsToggle

This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will remove the "like" from the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostApiReactionsToggleRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiReactionsToggleCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostApiReactionsToggleReactableTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiReactionsToggleRequest();
    $request->category = PostApiReactionsToggleCategoryEnum::FIRE;
    $request->reactableId = 368725;
    $request->reactableType = PostApiReactionsToggleReactableTypeEnum::ARTICLE;

    $response = $sdk->reactions->postApiReactionsToggle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
