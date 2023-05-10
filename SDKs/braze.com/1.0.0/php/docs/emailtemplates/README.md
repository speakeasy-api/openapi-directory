# emailTemplates

### Available Operations

* [listAvailableEmailTemplates](#listavailableemailtemplates) - List Available Email Templates
* [seeEmailTemplateInformation](#seeemailtemplateinformation) - See Email Template Information

## listAvailableEmailTemplates

Use this endpoint to get a list of available templates in your Braze account.

Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.

### Successful Response Properties
```json
{
  "count": number of templates returned
  "templates": [template with the following properties]:
    "email_template_id": (string) your email template's API Identifier,
    "template_name": (string) the name of your email template,
    "created_at": (string, in ISO 8601),
    "updated_at": (string, in ISO 8601),
    "tags": (array of strings) tags appended to the template
}
  ```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailableEmailTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailableEmailTemplatesRequest();
    $request->limit = '1';
    $request->modifiedAfter = '2020-01-01T01:01:01.000000';
    $request->modifiedBefore = '2020-02-01T01:01:01.000000';
    $request->offset = '0';

    $response = $sdk->emailTemplates->listAvailableEmailTemplates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## seeEmailTemplateInformation

Use to get information on your email templates.

Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.

### Request Components
- [Template Identifier](https://www.braze.com/docs/api/identifier_types/)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SeeEmailTemplateInformationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SeeEmailTemplateInformationRequest();
    $request->emailTemplateId = '{{email_template_id}}';

    $response = $sdk->emailTemplates->seeEmailTemplateInformation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
