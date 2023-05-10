# sling

### Available Operations

* [deleteAgent](#deleteagent)
* [deleteNode](#deletenode)
* [getAgent](#getagent)
* [getAgents](#getagents)
* [getAuthorizableKeystore](#getauthorizablekeystore)
* [getKeystore](#getkeystore)
* [getNode](#getnode)
* [getPackage](#getpackage)
* [getPackageFilter](#getpackagefilter)
* [getQuery](#getquery)
* [getTruststore](#gettruststore)
* [getTruststoreInfo](#gettruststoreinfo)
* [postAgent](#postagent)
* [postAuthorizableKeystore](#postauthorizablekeystore)
* [postAuthorizables](#postauthorizables)
* [postConfigAdobeGraniteSamlAuthenticationHandler](#postconfigadobegranitesamlauthenticationhandler)
* [postConfigApacheFelixJettyBasedHttpService](#postconfigapachefelixjettybasedhttpservice)
* [postConfigApacheHttpComponentsProxyConfiguration](#postconfigapachehttpcomponentsproxyconfiguration)
* [postConfigApacheSlingDavExServlet](#postconfigapacheslingdavexservlet)
* [postConfigApacheSlingGetServlet](#postconfigapacheslinggetservlet)
* [postConfigApacheSlingReferrerFilter](#postconfigapacheslingreferrerfilter)
* [postConfigProperty](#postconfigproperty)
* [postNode](#postnode)
* [postNodeRw](#postnoderw)
* [postPath](#postpath)
* [postQuery](#postquery)
* [postTreeActivation](#posttreeactivation)
* [postTruststore](#posttruststore)
* [postTruststorePkcs12](#posttruststorepkcs12)

## deleteAgent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAgentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAgentRequest();
    $request->name = 'Roger Beier';
    $request->runmode = 'mollitia';

    $response = $sdk->sling->deleteAgent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNodeRequest();
    $request->name = 'Ernest Ebert';
    $request->path = 'nobis';

    $response = $sdk->sling->deleteNode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAgent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAgentRequest();
    $request->name = 'Guadalupe Hickle';
    $request->runmode = 'accusantium';

    $response = $sdk->sling->getAgent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAgents

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAgentsRequest();
    $request->runmode = 'iure';

    $response = $sdk->sling->getAgents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuthorizableKeystore

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthorizableKeystoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuthorizableKeystoreRequest();
    $request->authorizableId = 'culpa';
    $request->intermediatePath = 'doloribus';

    $response = $sdk->sling->getAuthorizableKeystore($request);

    if ($response->keystoreInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeystore

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetKeystoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeystoreRequest();
    $request->authorizableId = 'sapiente';
    $request->intermediatePath = 'architecto';

    $response = $sdk->sling->getKeystore($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNodeRequest();
    $request->name = 'Mike Nicolas';
    $request->path = 'mollitia';

    $response = $sdk->sling->getNode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPackage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPackageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPackageRequest();
    $request->group = 'occaecati';
    $request->name = 'Lucy Konopelski';
    $request->version = 'error';

    $response = $sdk->sling->getPackage($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPackageFilter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPackageFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPackageFilterRequest();
    $request->group = 'quia';
    $request->name = 'Gloria Padberg';
    $request->version = 'odit';

    $response = $sdk->sling->getPackageFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryRequest();
    $request->oneProperty = 'quo';
    $request->onePropertyValue = 'sequi';
    $request->pLimit = 9495.72;
    $request->path = 'ipsam';

    $response = $sdk->sling->getQuery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruststore

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
    $response = $sdk->sling->getTruststore();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTruststoreInfo

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
    $response = $sdk->sling->getTruststoreInfo();

    if ($response->truststoreInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAgent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAgentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAgentRequest();
    $request->operation = 'id';
    $request->jcrContentCqDistribute = false;
    $request->jcrContentCqDistributeAtTypeHint = 'possimus';
    $request->jcrContentCqName = 'aut';
    $request->jcrContentCqTemplate = 'quasi';
    $request->jcrContentEnabled = false;
    $request->jcrContentJcrDescription = 'error';
    $request->jcrContentJcrLastModified = 'temporibus';
    $request->jcrContentJcrLastModifiedBy = 'laborum';
    $request->jcrContentJcrMixinTypes = 'quasi';
    $request->jcrContentJcrTitle = 'reiciendis';
    $request->jcrContentLogLevel = 'voluptatibus';
    $request->jcrContentNoStatusUpdate = false;
    $request->jcrContentNoVersioning = false;
    $request->jcrContentProtocolConnectTimeout = 8781.94;
    $request->jcrContentProtocolHTTPConnectionClosed = false;
    $request->jcrContentProtocolHTTPExpired = 'nihil';
    $request->jcrContentProtocolHTTPHeaders = [
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->jcrContentProtocolHTTPHeadersAtTypeHint = 'voluptate';
    $request->jcrContentProtocolHTTPMethod = 'cum';
    $request->jcrContentProtocolHTTPSRelaxed = false;
    $request->jcrContentProtocolInterface = 'perferendis';
    $request->jcrContentProtocolSocketTimeout = 391.87;
    $request->jcrContentProtocolVersion = 'reprehenderit';
    $request->jcrContentProxyHost = 'ut';
    $request->jcrContentProxyNTLMDomain = 'maiores';
    $request->jcrContentProxyNTLMHost = 'dicta';
    $request->jcrContentProxyPassword = 'corporis';
    $request->jcrContentProxyPort = 2961.4;
    $request->jcrContentProxyUser = 'iusto';
    $request->jcrContentQueueBatchMaxSize = 1187.27;
    $request->jcrContentQueueBatchMode = 'harum';
    $request->jcrContentQueueBatchWaitTime = 3179.83;
    $request->jcrContentRetryDelay = 'accusamus';
    $request->jcrContentReverseReplication = false;
    $request->jcrContentSerializationType = 'commodi';
    $request->jcrContentSlingResourceType = 'repudiandae';
    $request->jcrContentSsl = 'quae';
    $request->jcrContentTransportNTLMDomain = 'ipsum';
    $request->jcrContentTransportNTLMHost = 'quidem';
    $request->jcrContentTransportPassword = 'molestias';
    $request->jcrContentTransportUri = 'excepturi';
    $request->jcrContentTransportUser = 'pariatur';
    $request->jcrContentTriggerDistribute = false;
    $request->jcrContentTriggerModified = false;
    $request->jcrContentTriggerOnOffTime = false;
    $request->jcrContentTriggerReceive = false;
    $request->jcrContentTriggerSpecific = false;
    $request->jcrContentUserId = 'modi';
    $request->jcrPrimaryType = 'praesentium';
    $request->name = 'Grady Botsford';
    $request->runmode = 'veritatis';

    $response = $sdk->sling->postAgent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizableKeystore

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthorizableKeystoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthorizableKeystoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthorizableKeystoreRequestBodyCertChain;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthorizableKeystoreRequestBodyKeyStore;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthorizableKeystoreRequestBodyPk;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthorizableKeystoreRequest();
    $request->operation = 'itaque';
    $request->requestBody = new PostAuthorizableKeystoreRequestBody();
    $request->requestBody->certChain = new PostAuthorizableKeystoreRequestBodyCertChain();
    $request->requestBody->certChain->certChain = 'incidunt';
    $request->requestBody->certChain->content = 'enim';
    $request->requestBody->keyStore = new PostAuthorizableKeystoreRequestBodyKeyStore();
    $request->requestBody->keyStore->content = 'consequatur';
    $request->requestBody->keyStore->keyStore = 'est';
    $request->requestBody->pk = new PostAuthorizableKeystoreRequestBodyPk();
    $request->requestBody->pk->content = 'quibusdam';
    $request->requestBody->pk->pk = 'explicabo';
    $request->alias = 'deserunt';
    $request->authorizableId = 'distinctio';
    $request->currentPassword = 'quibusdam';
    $request->intermediatePath = 'labore';
    $request->keyPassword = 'modi';
    $request->keyStorePass = 'qui';
    $request->newAlias = 'aliquid';
    $request->newPassword = 'cupiditate';
    $request->rePassword = 'quos';
    $request->removeAlias = 'perferendis';

    $response = $sdk->sling->postAuthorizableKeystore($request);

    if ($response->keystoreInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAuthorizables

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAuthorizablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAuthorizablesRequest();
    $request->authorizableId = 'magni';
    $request->createGroup = 'assumenda';
    $request->createUser = 'ipsam';
    $request->intermediatePath = 'alias';
    $request->profileGivenName = 'fugit';
    $request->repPassword = 'dolorum';

    $response = $sdk->sling->postAuthorizables($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigAdobeGraniteSamlAuthenticationHandler

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigAdobeGraniteSamlAuthenticationHandlerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigAdobeGraniteSamlAuthenticationHandlerRequest();
    $request->addGroupMemberships = false;
    $request->addGroupMembershipsAtTypeHint = 'excepturi';
    $request->assertionConsumerServiceURL = 'tempora';
    $request->assertionConsumerServiceURLAtTypeHint = 'facilis';
    $request->clockTolerance = 735194;
    $request->clockToleranceAtTypeHint = 'labore';
    $request->createUser = false;
    $request->createUserAtTypeHint = 'delectus';
    $request->defaultGroups = [
        'non',
        'eligendi',
    ];
    $request->defaultGroupsAtTypeHint = 'sint';
    $request->defaultRedirectUrl = 'aliquid';
    $request->defaultRedirectUrlAtTypeHint = 'provident';
    $request->digestMethod = 'necessitatibus';
    $request->digestMethodAtTypeHint = 'sint';
    $request->groupMembershipAttribute = 'officia';
    $request->groupMembershipAttributeAtTypeHint = 'dolor';
    $request->handleLogout = false;
    $request->handleLogoutAtTypeHint = 'debitis';
    $request->idpCertAlias = 'a';
    $request->idpCertAliasAtTypeHint = 'dolorum';
    $request->idpHttpRedirect = false;
    $request->idpHttpRedirectAtTypeHint = 'in';
    $request->idpUrl = 'in';
    $request->idpUrlAtTypeHint = 'illum';
    $request->keyStorePassword = 'maiores';
    $request->keyStorePasswordAtTypeHint = 'rerum';
    $request->logoutUrl = 'dicta';
    $request->logoutUrlAtTypeHint = 'magnam';
    $request->nameIdFormat = 'cumque';
    $request->nameIdFormatAtTypeHint = 'facere';
    $request->path = [
        'aliquid',
        'laborum',
    ];
    $request->pathAtTypeHint = 'accusamus';
    $request->serviceRanking = 249796;
    $request->serviceRankingAtTypeHint = 'occaecati';
    $request->serviceProviderEntityId = 'enim';
    $request->serviceProviderEntityIdAtTypeHint = 'accusamus';
    $request->signatureMethod = 'delectus';
    $request->signatureMethodAtTypeHint = 'quidem';
    $request->spPrivateKeyAlias = 'provident';
    $request->spPrivateKeyAliasAtTypeHint = 'nam';
    $request->synchronizeAttributes = [
        'blanditiis',
        'deleniti',
        'sapiente',
    ];
    $request->synchronizeAttributesAtTypeHint = 'amet';
    $request->useEncryption = false;
    $request->useEncryptionAtTypeHint = 'deserunt';
    $request->userIDAttribute = 'nisi';
    $request->userIDAttributeAtTypeHint = 'vel';
    $request->userIntermediatePath = 'natus';
    $request->userIntermediatePathAtTypeHint = 'omnis';

    $response = $sdk->sling->postConfigAdobeGraniteSamlAuthenticationHandler($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigApacheFelixJettyBasedHttpService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigApacheFelixJettyBasedHttpServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigApacheFelixJettyBasedHttpServiceRequest();
    $request->orgApacheFelixHttpsClientcertificate = 'molestiae';
    $request->orgApacheFelixHttpsClientcertificateAtTypeHint = 'perferendis';
    $request->orgApacheFelixHttpsEnable = false;
    $request->orgApacheFelixHttpsEnableAtTypeHint = 'nihil';
    $request->orgApacheFelixHttpsKeystore = 'magnam';
    $request->orgApacheFelixHttpsKeystoreKey = 'distinctio';
    $request->orgApacheFelixHttpsKeystoreKeyPassword = 'id';
    $request->orgApacheFelixHttpsKeystoreKeyPasswordAtTypeHint = 'labore';
    $request->orgApacheFelixHttpsKeystoreKeyAtTypeHint = 'labore';
    $request->orgApacheFelixHttpsKeystorePassword = 'suscipit';
    $request->orgApacheFelixHttpsKeystorePasswordAtTypeHint = 'natus';
    $request->orgApacheFelixHttpsKeystoreAtTypeHint = 'nobis';
    $request->orgApacheFelixHttpsNio = false;
    $request->orgApacheFelixHttpsNioAtTypeHint = 'eum';
    $request->orgApacheFelixHttpsTruststore = 'vero';
    $request->orgApacheFelixHttpsTruststorePassword = 'aspernatur';
    $request->orgApacheFelixHttpsTruststorePasswordAtTypeHint = 'architecto';
    $request->orgApacheFelixHttpsTruststoreAtTypeHint = 'magnam';
    $request->orgOsgiServiceHttpPortSecure = 'et';
    $request->orgOsgiServiceHttpPortSecureAtTypeHint = 'excepturi';

    $response = $sdk->sling->postConfigApacheFelixJettyBasedHttpService($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigApacheHttpComponentsProxyConfiguration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigApacheHttpComponentsProxyConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigApacheHttpComponentsProxyConfigurationRequest();
    $request->proxyEnabled = false;
    $request->proxyEnabledAtTypeHint = 'ullam';
    $request->proxyExceptions = [
        'quos',
        'sint',
        'accusantium',
    ];
    $request->proxyExceptionsAtTypeHint = 'mollitia';
    $request->proxyHost = 'reiciendis';
    $request->proxyHostAtTypeHint = 'mollitia';
    $request->proxyPassword = 'ad';
    $request->proxyPasswordAtTypeHint = 'eum';
    $request->proxyPort = 221262;
    $request->proxyPortAtTypeHint = 'necessitatibus';
    $request->proxyUser = 'odit';
    $request->proxyUserAtTypeHint = 'nemo';

    $response = $sdk->sling->postConfigApacheHttpComponentsProxyConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigApacheSlingDavExServlet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigApacheSlingDavExServletRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigApacheSlingDavExServletRequest();
    $request->alias = 'quasi';
    $request->aliasAtTypeHint = 'iure';
    $request->davCreateAbsoluteUri = false;
    $request->davCreateAbsoluteUriAtTypeHint = 'doloribus';

    $response = $sdk->sling->postConfigApacheSlingDavExServlet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigApacheSlingGetServlet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigApacheSlingGetServletRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigApacheSlingGetServletRequest();
    $request->enableHtml = false;
    $request->enableHtmlAtTypeHint = 'debitis';
    $request->enableTxt = false;
    $request->enableTxtAtTypeHint = 'eius';
    $request->enableXml = false;
    $request->enableXmlAtTypeHint = 'maxime';
    $request->jsonMaximumresults = 'deleniti';
    $request->jsonMaximumresultsAtTypeHint = 'facilis';

    $response = $sdk->sling->postConfigApacheSlingGetServlet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigApacheSlingReferrerFilter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigApacheSlingReferrerFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigApacheSlingReferrerFilterRequest();
    $request->allowEmpty = false;
    $request->allowEmptyAtTypeHint = 'in';
    $request->allowHosts = 'architecto';
    $request->allowHostsRegexp = 'architecto';
    $request->allowHostsRegexpAtTypeHint = 'repudiandae';
    $request->allowHostsAtTypeHint = 'ullam';
    $request->filterMethods = 'expedita';
    $request->filterMethodsAtTypeHint = 'nihil';

    $response = $sdk->sling->postConfigApacheSlingReferrerFilter($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigProperty

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigPropertyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigPropertyRequest();
    $request->configNodeName = 'repellat';

    $response = $sdk->sling->postConfigProperty($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostNodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostNodeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostNodeRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNodeRequest();
    $request->operation = 'quibusdam';
    $request->requestBody = new PostNodeRequestBody();
    $request->requestBody->file = new PostNodeRequestBodyFile();
    $request->requestBody->file->content = 'sed';
    $request->requestBody->file->file = 'saepe';
    $request->deleteAuthorizable = 'pariatur';
    $request->name = 'Kathryn Lang';
    $request->path = 'sunt';

    $response = $sdk->sling->postNode($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNodeRw

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostNodeRwRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNodeRwRequest();
    $request->addMembers = 'quo';
    $request->name = 'Ervin Schoen';
    $request->path = 'odit';

    $response = $sdk->sling->postNodeRw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPath

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPathRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPathRequest();
    $request->name = 'ea';
    $request->jcrPrimaryType = 'accusantium';
    $request->path = 'ab';

    $response = $sdk->sling->postPath($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostQueryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQueryRequest();
    $request->oneProperty = 'maiores';
    $request->onePropertyValue = 'quidem';
    $request->pLimit = 3732.91;
    $request->path = 'voluptate';

    $response = $sdk->sling->postQuery($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTreeActivation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTreeActivationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTreeActivationRequest();
    $request->cmd = 'autem';
    $request->ignoredeactivated = false;
    $request->onlymodified = false;
    $request->path = 'nam';

    $response = $sdk->sling->postTreeActivation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruststore

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruststoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostTruststoreRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostTruststoreRequestBodyCertificate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruststoreRequest();
    $request->operation = 'eaque';
    $request->requestBody = new PostTruststoreRequestBody();
    $request->requestBody->certificate = new PostTruststoreRequestBodyCertificate();
    $request->requestBody->certificate->certificate = 'pariatur';
    $request->requestBody->certificate->content = 'nemo';
    $request->keyStoreType = 'voluptatibus';
    $request->newPassword = 'perferendis';
    $request->rePassword = 'fugiat';
    $request->removeAlias = 'amet';

    $response = $sdk->sling->postTruststore($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTruststorePkcs12

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTruststorePkcs12RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostTruststorePkcs12RequestBodyTruststoreP12;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTruststorePkcs12RequestBody();
    $request->truststoreP12 = new PostTruststorePkcs12RequestBodyTruststoreP12();
    $request->truststoreP12->content = 'aut';
    $request->truststoreP12->truststoreP12 = 'cumque';

    $response = $sdk->sling->postTruststorePkcs12($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
