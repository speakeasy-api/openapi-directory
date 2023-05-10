<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Article;
use \OpenAPI\OpenAPI\Models\Shared\ArticleArticle;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Article();
    $request->article = new ArticleArticle();
    $request->article->bodyMarkdown = 'corrupti';
    $request->article->canonicalUrl = 'provident';
    $request->article->description = 'distinctio';
    $request->article->mainImage = 'quibusdam';
    $request->article->organizationId = 602763;
    $request->article->published = false;
    $request->article->series = 'nulla';
    $request->article->tags = 'corrupti';
    $request->article->title = 'Dr.';

    $response = $sdk->articles->createArticle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->