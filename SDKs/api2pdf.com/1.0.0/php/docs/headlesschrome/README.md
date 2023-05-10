# headlessChrome

### Available Operations

* [chromeFromHtmlPost](#chromefromhtmlpost) - Convert raw HTML to PDF
* [chromeFromUrlGET](#chromefromurlget) - Convert URL to PDF
* [chromeFromUrlPost](#chromefromurlpost) - Convert URL to PDF

## chromeFromHtmlPost

Convert HTML to a PDF using Headless Chrome on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ChromeHtmlToPdfRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChromeAdvancedOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeHtmlToPdfRequest();
    $request->fileName = 'test.pdf';
    $request->html = '<p>Hello World</p>';
    $request->inlinePdf = true;
    $request->options = new ChromeAdvancedOptions();
    $request->options->landscape = 'true';
    $request->options->printBackground = false;

    $response = $sdk->headlessChrome->chromeFromHtmlPost($request);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromeFromUrlGET

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChromeFromUrlGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChromeFromUrlGETSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeFromUrlGETRequest();
    $request->output = 'corrupti';
    $request->url = 'provident';

    $requestSecurity = new ChromeFromUrlGETSecurity();
    $requestSecurity->queryApiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->headlessChrome->chromeFromUrlGET($request, $requestSecurity);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chromeFromUrlPost

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ChromeUrlToPdfRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChromeAdvancedOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeUrlToPdfRequest();
    $request->fileName = 'test.pdf';
    $request->inlinePdf = true;
    $request->options = new ChromeAdvancedOptions();
    $request->options->landscape = 'true';
    $request->options->printBackground = false;
    $request->url = 'https://www.github.com';

    $response = $sdk->headlessChrome->chromeFromUrlPost($request);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
