# console

### Available Operations

* [getAemProductInfo](#getaemproductinfo)
* [getBundleInfo](#getbundleinfo)
* [getConfigMgr](#getconfigmgr)
* [postBundle](#postbundle)
* [postJmxRepository](#postjmxrepository)
* [postSamlConfiguration](#postsamlconfiguration)

## getAemProductInfo

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
    $response = $sdk->console->getAemProductInfo();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBundleInfo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBundleInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundleInfoRequest();
    $request->name = 'Terrence Rau';

    $response = $sdk->console->getBundleInfo($request);

    if ($response->bundleInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigMgr

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
    $response = $sdk->console->getConfigMgr();

    if ($response->getConfigMgr200TextXMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostBundleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBundleRequest();
    $request->action = 'nulla';
    $request->name = 'Dallas Kassulke';

    $response = $sdk->console->postBundle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postJmxRepository

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostJmxRepositoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostJmxRepositoryRequest();
    $request->action = 'suscipit';

    $response = $sdk->console->postJmxRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSamlConfiguration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSamlConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSamlConfigurationRequest();
    $request->dollarLocation = 'iure';
    $request->action = 'magnam';
    $request->addGroupMemberships = false;
    $request->apply = false;
    $request->assertionConsumerServiceURL = 'debitis';
    $request->clockTolerance = 56713;
    $request->createUser = false;
    $request->defaultGroups = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->defaultRedirectUrl = 'placeat';
    $request->delete = false;
    $request->digestMethod = 'voluptatum';
    $request->groupMembershipAttribute = 'iusto';
    $request->handleLogout = false;
    $request->idpCertAlias = 'excepturi';
    $request->idpHttpRedirect = false;
    $request->idpUrl = 'nisi';
    $request->keyStorePassword = 'recusandae';
    $request->logoutUrl = 'temporibus';
    $request->nameIdFormat = 'ab';
    $request->path = [
        'veritatis',
        'deserunt',
    ];
    $request->post = false;
    $request->propertylist = [
        'ipsam',
    ];
    $request->serviceRanking = 832620;
    $request->serviceProviderEntityId = 'sapiente';
    $request->signatureMethod = 'quo';
    $request->spPrivateKeyAlias = 'odit';
    $request->synchronizeAttributes = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->useEncryption = false;
    $request->userIDAttribute = 'quod';
    $request->userIntermediatePath = 'esse';

    $response = $sdk->console->postSamlConfiguration($request);

    if ($response->samlConfigurationInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
