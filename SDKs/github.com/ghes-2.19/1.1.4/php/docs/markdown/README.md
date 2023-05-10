# markdown

## Overview

Render Github flavored markdown

### Available Operations

* [markdownRender](#markdownrender) - Render a Markdown document
* [markdownRenderRaw](#markdownrenderraw) - Render a Markdown document in raw mode

## markdownRender

Render a Markdown document

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/markdown#render-a-markdown-document>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MarkdownRenderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\MarkdownRenderRequestBodyModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MarkdownRenderRequestBody();
    $request->context = 'culpa';
    $request->mode = MarkdownRenderRequestBodyModeEnum::MARKDOWN;
    $request->text = 'est';

    $response = $sdk->markdown->markdownRender($request);

    if ($response->markdownRender200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## markdownRenderRaw

You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/markdown#render-a-markdown-document-in-raw-mode>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'recusandae'

    $response = $sdk->markdown->markdownRenderRaw($request);

    if ($response->markdownRenderRaw200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
