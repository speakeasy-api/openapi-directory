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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
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


### Console

* `GetAemProductInfo`
* `GetBundleInfo`
* `GetConfigMgr`
* `PostBundle`
* `PostJmxRepository`
* `PostSamlConfiguration`

### Cq

* `GetLoginPage`
* `PostCqActions`

### Crx

* `GetCrxdeStatus`
* `GetInstallStatus`
* `GetPackageManagerServlet`
* `PostPackageService`
* `PostPackageServiceJSON`
* `PostPackageUpdate`
* `PostSetPassword`

### Custom

* `GetAemHealthCheck`
* `PostConfigAemHealthCheckServlet`
* `PostConfigAemPasswordReset`

### Granite

* `SslSetup`

### Sling

* `DeleteAgent`
* `DeleteNode`
* `GetAgent`
* `GetAgents`
* `GetAuthorizableKeystore`
* `GetKeystore`
* `GetNode`
* `GetPackage`
* `GetPackageFilter`
* `GetQuery`
* `GetTruststore`
* `GetTruststoreInfo`
* `PostAgent`
* `PostAuthorizableKeystore`
* `PostAuthorizables`
* `PostConfigAdobeGraniteSamlAuthenticationHandler`
* `PostConfigApacheFelixJettyBasedHTTPService`
* `PostConfigApacheHTTPComponentsProxyConfiguration`
* `PostConfigApacheSlingDavExServlet`
* `PostConfigApacheSlingGetServlet`
* `PostConfigApacheSlingReferrerFilter`
* `PostConfigProperty`
* `PostNode`
* `PostNodeRw`
* `PostPath`
* `PostQuery`
* `PostTreeActivation`
* `PostTruststore`
* `PostTruststorePkcs12`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
