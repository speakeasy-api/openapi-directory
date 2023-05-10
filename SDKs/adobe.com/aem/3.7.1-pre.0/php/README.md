# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [console](docs/console/README.md)

* [getAemProductInfo](docs/console/README.md#getaemproductinfo)
* [getBundleInfo](docs/console/README.md#getbundleinfo)
* [getConfigMgr](docs/console/README.md#getconfigmgr)
* [postBundle](docs/console/README.md#postbundle)
* [postJmxRepository](docs/console/README.md#postjmxrepository)
* [postSamlConfiguration](docs/console/README.md#postsamlconfiguration)

### [cq](docs/cq/README.md)

* [getLoginPage](docs/cq/README.md#getloginpage)
* [postCqActions](docs/cq/README.md#postcqactions)

### [crx](docs/crx/README.md)

* [getCrxdeStatus](docs/crx/README.md#getcrxdestatus)
* [getInstallStatus](docs/crx/README.md#getinstallstatus)
* [getPackageManagerServlet](docs/crx/README.md#getpackagemanagerservlet)
* [postPackageService](docs/crx/README.md#postpackageservice)
* [postPackageServiceJson](docs/crx/README.md#postpackageservicejson)
* [postPackageUpdate](docs/crx/README.md#postpackageupdate)
* [postSetPassword](docs/crx/README.md#postsetpassword)

### [custom](docs/custom/README.md)

* [getAemHealthCheck](docs/custom/README.md#getaemhealthcheck)
* [postConfigAemHealthCheckServlet](docs/custom/README.md#postconfigaemhealthcheckservlet)
* [postConfigAemPasswordReset](docs/custom/README.md#postconfigaempasswordreset)

### [granite](docs/granite/README.md)

* [sslSetup](docs/granite/README.md#sslsetup)

### [sling](docs/sling/README.md)

* [deleteAgent](docs/sling/README.md#deleteagent)
* [deleteNode](docs/sling/README.md#deletenode)
* [getAgent](docs/sling/README.md#getagent)
* [getAgents](docs/sling/README.md#getagents)
* [getAuthorizableKeystore](docs/sling/README.md#getauthorizablekeystore)
* [getKeystore](docs/sling/README.md#getkeystore)
* [getNode](docs/sling/README.md#getnode)
* [getPackage](docs/sling/README.md#getpackage)
* [getPackageFilter](docs/sling/README.md#getpackagefilter)
* [getQuery](docs/sling/README.md#getquery)
* [getTruststore](docs/sling/README.md#gettruststore)
* [getTruststoreInfo](docs/sling/README.md#gettruststoreinfo)
* [postAgent](docs/sling/README.md#postagent)
* [postAuthorizableKeystore](docs/sling/README.md#postauthorizablekeystore)
* [postAuthorizables](docs/sling/README.md#postauthorizables)
* [postConfigAdobeGraniteSamlAuthenticationHandler](docs/sling/README.md#postconfigadobegranitesamlauthenticationhandler)
* [postConfigApacheFelixJettyBasedHttpService](docs/sling/README.md#postconfigapachefelixjettybasedhttpservice)
* [postConfigApacheHttpComponentsProxyConfiguration](docs/sling/README.md#postconfigapachehttpcomponentsproxyconfiguration)
* [postConfigApacheSlingDavExServlet](docs/sling/README.md#postconfigapacheslingdavexservlet)
* [postConfigApacheSlingGetServlet](docs/sling/README.md#postconfigapacheslinggetservlet)
* [postConfigApacheSlingReferrerFilter](docs/sling/README.md#postconfigapacheslingreferrerfilter)
* [postConfigProperty](docs/sling/README.md#postconfigproperty)
* [postNode](docs/sling/README.md#postnode)
* [postNodeRw](docs/sling/README.md#postnoderw)
* [postPath](docs/sling/README.md#postpath)
* [postQuery](docs/sling/README.md#postquery)
* [postTreeActivation](docs/sling/README.md#posttreeactivation)
* [postTruststore](docs/sling/README.md#posttruststore)
* [postTruststorePkcs12](docs/sling/README.md#posttruststorepkcs12)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
