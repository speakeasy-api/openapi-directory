# sessions

## Overview

A session represents an authorized session for a consumer. A session is a JWT token that is valid for a short time (1h by default). Use this session token to open Hosted Vault or Vault JS for a consumer.

### Available Operations

* [sessionsCreate](#sessionscreate) - Create Session

## sessionsCreate

Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
URL to allow temporary access to manage their integrations and settings.

Note: This is a short lived token that will expire after 1 hour (TTL: 3600).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SessionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Session;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerMetadata;
use \OpenAPI\OpenAPI\Models\Shared\SessionSettings;
use \OpenAPI\OpenAPI\Models\Shared\SessionSettingsAllowActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnifiedApiIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionTheme;
use \OpenAPI\OpenAPI\Models\Operations\SessionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SessionsCreateRequest();
    $request->session = new Session();
    $request->session->consumerMetadata = new ConsumerMetadata();
    $request->session->consumerMetadata->accountName = 'SpaceX';
    $request->session->consumerMetadata->email = 'elon@musk.com';
    $request->session->consumerMetadata->image = 'https://www.spacex.com/static/images/share.jpg';
    $request->session->consumerMetadata->userName = 'Elon Musk';
    $request->session->customConsumerSettings = [
        'quo' => 'sequi',
    ];
    $request->session->redirectUri = 'https://mysaas.com/dashboard';
    $request->session->settings = new SessionSettings();
    $request->session->settings->allowActions = [
        SessionSettingsAllowActionsEnum::DISCONNECT,
        SessionSettingsAllowActionsEnum::REAUTHORIZE,
        SessionSettingsAllowActionsEnum::DISABLE,
        SessionSettingsAllowActionsEnum::DELETE,
    ];
    $request->session->settings->autoRedirect = false;
    $request->session->settings->hideGuides = false;
    $request->session->settings->hideResourceSettings = false;
    $request->session->settings->isolationMode = false;
    $request->session->settings->sandboxMode = false;
    $request->session->settings->sessionLength = '30m';
    $request->session->settings->showLogs = false;
    $request->session->settings->showSidebar = false;
    $request->session->settings->showSuggestions = false;
    $request->session->settings->unifiedApis = [
        UnifiedApiIdEnum::CRM,
    ];
    $request->session->theme = new SessionTheme();
    $request->session->theme->favicon = 'https://res.cloudinary.com/apideck/icons/intercom';
    $request->session->theme->logo = 'https://res.cloudinary.com/apideck/icons/intercom';
    $request->session->theme->primaryColor = '#286efa';
    $request->session->theme->privacyUrl = 'https://compliance.apideck.com/privacy-policy';
    $request->session->theme->sidepanelBackgroundColor = '#286efa';
    $request->session->theme->sidepanelTextColor = '#FFFFFF';
    $request->session->theme->termsUrl = 'https://www.termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e';
    $request->session->theme->vaultName = 'Intercom';
    $request->xApideckAppId = 'error';
    $request->xApideckConsumerId = 'temporibus';

    $requestSecurity = new SessionsCreateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sessions->sessionsCreate($request, $requestSecurity);

    if ($response->createSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
