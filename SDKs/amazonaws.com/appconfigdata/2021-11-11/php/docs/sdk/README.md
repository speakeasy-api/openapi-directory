# SDK

## Overview

<p>AppConfig Data provides the data plane APIs your application uses to retrieve configuration data. Here's how it works:</p> <p>Your application retrieves configuration data by first establishing a configuration session using the AppConfig Data <a>StartConfigurationSession</a> API action. Your session's client then makes periodic calls to <a>GetLatestConfiguration</a> to check for and retrieve the latest data available.</p> <p>When calling <code>StartConfigurationSession</code>, your code sends the following information:</p> <ul> <li> <p>Identifiers (ID or name) of an AppConfig application, environment, and configuration profile that the session tracks.</p> </li> <li> <p>(Optional) The minimum amount of time the session's client must wait between calls to <code>GetLatestConfiguration</code>.</p> </li> </ul> <p>In response, AppConfig provides an <code>InitialConfigurationToken</code> to be given to the session's client and used the first time it calls <code>GetLatestConfiguration</code> for that session.</p> <important> <p>This token should only be used once in your first call to <code>GetLatestConfiguration</code>. You <i>must</i> use the new token in the <code>GetLatestConfiguration</code> response (<code>NextPollConfigurationToken</code>) in each subsequent call to <code>GetLatestConfiguration</code>.</p> </important> <p>When calling <code>GetLatestConfiguration</code>, your client code sends the most recent <code>ConfigurationToken</code> value it has and receives in response:</p> <ul> <li> <p> <code>NextPollConfigurationToken</code>: the <code>ConfigurationToken</code> value to use on the next call to <code>GetLatestConfiguration</code>.</p> </li> <li> <p> <code>NextPollIntervalInSeconds</code>: the duration the client should wait before making its next call to <code>GetLatestConfiguration</code>. This duration may vary over the course of the session, so it should be used instead of the value sent on the <code>StartConfigurationSession</code> call.</p> </li> <li> <p>The configuration: the latest data intended for the session. This may be empty if the client already has the latest version of the configuration.</p> </li> </ul> <important> <p>The <code>InitialConfigurationToken</code> and <code>NextPollConfigurationToken</code> should only be used once. To support long poll use cases, the tokens are valid for up to 24 hours. If a <code>GetLatestConfiguration</code> call uses an expired token, the system returns <code>BadRequestException</code>.</p> </important> <p>For more information and to view example CLI commands that show how to retrieve a configuration using the AppConfig Data <code>StartConfigurationSession</code> and <code>GetLatestConfiguration</code> API actions, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/appconfigdata/>
### Available Operations

* [getLatestConfiguration](#getlatestconfiguration) - <p>Retrieves the latest deployed configuration. This API may return empty configuration data if the client already has the latest version. For more information about this API action and to view example CLI commands that show how to use it with the <a>StartConfigurationSession</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>. </p> <important> <p>Note the following important information.</p> <ul> <li> <p>Each configuration token is only valid for one call to <code>GetLatestConfiguration</code>. The <code>GetLatestConfiguration</code> response includes a <code>NextPollConfigurationToken</code> that should always replace the token used for the just-completed call in preparation for the next one. </p> </li> <li> <p> <code>GetLatestConfiguration</code> is a priced call. For more information, see <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p> </li> </ul> </important>
* [startConfigurationSession](#startconfigurationsession) - Starts a configuration session used to retrieve a deployed configuration. For more information about this API action and to view example CLI commands that show how to use it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>. 

## getLatestConfiguration

<p>Retrieves the latest deployed configuration. This API may return empty configuration data if the client already has the latest version. For more information about this API action and to view example CLI commands that show how to use it with the <a>StartConfigurationSession</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>. </p> <important> <p>Note the following important information.</p> <ul> <li> <p>Each configuration token is only valid for one call to <code>GetLatestConfiguration</code>. The <code>GetLatestConfiguration</code> response includes a <code>NextPollConfigurationToken</code> that should always replace the token used for the just-completed call in preparation for the next one. </p> </li> <li> <p> <code>GetLatestConfiguration</code> is a priced call. For more information, see <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p> </li> </ul> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestConfigurationRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->configurationToken = 'ipsa';

    $response = $sdk->sdk->getLatestConfiguration($request);

    if ($response->getLatestConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startConfigurationSession

Starts a configuration session used to retrieve a deployed configuration. For more information about this API action and to view example CLI commands that show how to use it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the configuration</a> in the <i>AppConfig User Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartConfigurationSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartConfigurationSessionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartConfigurationSessionRequest();
    $request->requestBody = new StartConfigurationSessionRequestBody();
    $request->requestBody->applicationIdentifier = 'delectus';
    $request->requestBody->configurationProfileIdentifier = 'tempora';
    $request->requestBody->environmentIdentifier = 'suscipit';
    $request->requestBody->requiredMinimumPollIntervalInSeconds = 477665;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->startConfigurationSession($request);

    if ($response->startConfigurationSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
