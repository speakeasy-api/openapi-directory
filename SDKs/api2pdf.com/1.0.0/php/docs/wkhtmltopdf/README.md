# wkhtmltopdf

### Available Operations

* [wkhtmltopdfFromHtmlPost](#wkhtmltopdffromhtmlpost) - Convert raw HTML to PDF
* [wkhtmltopdfFromUrlGET](#wkhtmltopdffromurlget) - Convert URL to PDF
* [wkhtmltopdfFromUrlPost](#wkhtmltopdffromurlpost) - Convert URL to PDF

## wkhtmltopdfFromHtmlPost

Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WkHtmlToPdfHtmlToPdfRequest;
use \OpenAPI\OpenAPI\Models\Shared\WkHtmlToPdfAdvancedOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WkHtmlToPdfHtmlToPdfRequest();
    $request->fileName = 'test.pdf';
    $request->html = '<p>Hello World</p>';
    $request->inlinePdf = true;
    $request->options = new WkHtmlToPdfAdvancedOptions();
    $request->options->orientation = 'landscape';
    $request->options->pageSize = 'A4';

    $response = $sdk->wkhtmltopdf->wkhtmltopdfFromHtmlPost($request);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wkhtmltopdfFromUrlGET

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WkhtmltopdfFromUrlGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\WkhtmltopdfFromUrlGETSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WkhtmltopdfFromUrlGETRequest();
    $request->output = 'deserunt';
    $request->url = 'suscipit';

    $requestSecurity = new WkhtmltopdfFromUrlGETSecurity();
    $requestSecurity->queryApiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->wkhtmltopdf->wkhtmltopdfFromUrlGET($request, $requestSecurity);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## wkhtmltopdfFromUrlPost

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\WkHtmlToPdfUrlToPdfRequest;
use \OpenAPI\OpenAPI\Models\Shared\WkHtmlToPdfAdvancedOptions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WkHtmlToPdfUrlToPdfRequest();
    $request->fileName = 'test.pdf';
    $request->inlinePdf = true;
    $request->options = new WkHtmlToPdfAdvancedOptions();
    $request->options->orientation = 'landscape';
    $request->options->pageSize = 'A4';
    $request->url = 'https://www.github.com';

    $response = $sdk->wkhtmltopdf->wkhtmltopdfFromUrlPost($request);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
