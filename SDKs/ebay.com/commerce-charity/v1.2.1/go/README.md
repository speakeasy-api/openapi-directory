# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/commerce-charity/v1.2.1/go
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
    s := sdk.New()

    req := operations.GetCharityOrgRequest{
        XEbayCMarketplaceID: "corrupti",
        CharityOrgID: "provident",
    }

    ctx := context.Background()
    res, err := s.CharityOrg.GetCharityOrg(ctx, req, operations.GetCharityOrgSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CharityOrg != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### CharityOrg

* `GetCharityOrg` - This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.
* `GetCharityOrgs` - This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
