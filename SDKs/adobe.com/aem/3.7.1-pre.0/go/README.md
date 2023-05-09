# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adobe.com/aem/3.7.1-pre.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Console.GetAemProductInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Console](docs/console/README.md)

* [GetAemProductInfo](docs/console/README.md#getaemproductinfo)
* [GetBundleInfo](docs/console/README.md#getbundleinfo)
* [GetConfigMgr](docs/console/README.md#getconfigmgr)
* [PostBundle](docs/console/README.md#postbundle)
* [PostJmxRepository](docs/console/README.md#postjmxrepository)
* [PostSamlConfiguration](docs/console/README.md#postsamlconfiguration)

### [Cq](docs/cq/README.md)

* [GetLoginPage](docs/cq/README.md#getloginpage)
* [PostCqActions](docs/cq/README.md#postcqactions)

### [Crx](docs/crx/README.md)

* [GetCrxdeStatus](docs/crx/README.md#getcrxdestatus)
* [GetInstallStatus](docs/crx/README.md#getinstallstatus)
* [GetPackageManagerServlet](docs/crx/README.md#getpackagemanagerservlet)
* [PostPackageService](docs/crx/README.md#postpackageservice)
* [PostPackageServiceJSON](docs/crx/README.md#postpackageservicejson)
* [PostPackageUpdate](docs/crx/README.md#postpackageupdate)
* [PostSetPassword](docs/crx/README.md#postsetpassword)

### [Custom](docs/custom/README.md)

* [GetAemHealthCheck](docs/custom/README.md#getaemhealthcheck)
* [PostConfigAemHealthCheckServlet](docs/custom/README.md#postconfigaemhealthcheckservlet)
* [PostConfigAemPasswordReset](docs/custom/README.md#postconfigaempasswordreset)

### [Granite](docs/granite/README.md)

* [SslSetup](docs/granite/README.md#sslsetup)

### [Sling](docs/sling/README.md)

* [DeleteAgent](docs/sling/README.md#deleteagent)
* [DeleteNode](docs/sling/README.md#deletenode)
* [GetAgent](docs/sling/README.md#getagent)
* [GetAgents](docs/sling/README.md#getagents)
* [GetAuthorizableKeystore](docs/sling/README.md#getauthorizablekeystore)
* [GetKeystore](docs/sling/README.md#getkeystore)
* [GetNode](docs/sling/README.md#getnode)
* [GetPackage](docs/sling/README.md#getpackage)
* [GetPackageFilter](docs/sling/README.md#getpackagefilter)
* [GetQuery](docs/sling/README.md#getquery)
* [GetTruststore](docs/sling/README.md#gettruststore)
* [GetTruststoreInfo](docs/sling/README.md#gettruststoreinfo)
* [PostAgent](docs/sling/README.md#postagent)
* [PostAuthorizableKeystore](docs/sling/README.md#postauthorizablekeystore)
* [PostAuthorizables](docs/sling/README.md#postauthorizables)
* [PostConfigAdobeGraniteSamlAuthenticationHandler](docs/sling/README.md#postconfigadobegranitesamlauthenticationhandler)
* [PostConfigApacheFelixJettyBasedHTTPService](docs/sling/README.md#postconfigapachefelixjettybasedhttpservice)
* [PostConfigApacheHTTPComponentsProxyConfiguration](docs/sling/README.md#postconfigapachehttpcomponentsproxyconfiguration)
* [PostConfigApacheSlingDavExServlet](docs/sling/README.md#postconfigapacheslingdavexservlet)
* [PostConfigApacheSlingGetServlet](docs/sling/README.md#postconfigapacheslinggetservlet)
* [PostConfigApacheSlingReferrerFilter](docs/sling/README.md#postconfigapacheslingreferrerfilter)
* [PostConfigProperty](docs/sling/README.md#postconfigproperty)
* [PostNode](docs/sling/README.md#postnode)
* [PostNodeRw](docs/sling/README.md#postnoderw)
* [PostPath](docs/sling/README.md#postpath)
* [PostQuery](docs/sling/README.md#postquery)
* [PostTreeActivation](docs/sling/README.md#posttreeactivation)
* [PostTruststore](docs/sling/README.md#posttruststore)
* [PostTruststorePkcs12](docs/sling/README.md#posttruststorepkcs12)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
