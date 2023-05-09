# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/cdcgov.local/prime-data-hub/0.2.0-oas3/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DeleteSettingsOrganizationsOrganizationName(ctx, operations.DeleteSettingsOrganizationsOrganizationNameRequest{
        OrganizationName: "corrupti",
    }, operations.DeleteSettingsOrganizationsOrganizationNameSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Organization != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteSettingsOrganizationsOrganizationName](docs/sdk/README.md#deletesettingsorganizationsorganizationname) - Delete an organization (and the associated receivers and senders)
* [DeleteSettingsOrganizationsOrganizationNameReceiversReceiverName](docs/sdk/README.md#deletesettingsorganizationsorganizationnamereceiversreceivername) - Delete a receiver
* [DeleteSettingsOrganizationsOrganizationNameSendersSenderName](docs/sdk/README.md#deletesettingsorganizationsorganizationnamesenderssendername) - Delete a sender
* [GetSettingsOrganizations](docs/sdk/README.md#getsettingsorganizations) - The settings for all organizations of the system. Must have admin access.
* [GetSettingsOrganizationsOrganizationName](docs/sdk/README.md#getsettingsorganizationsorganizationname) - A single organization settings
* [GetSettingsOrganizationsOrganizationNameReceivers](docs/sdk/README.md#getsettingsorganizationsorganizationnamereceivers) - A list of receivers and their current settings
* [GetSettingsOrganizationsOrganizationNameReceiversReceiverName](docs/sdk/README.md#getsettingsorganizationsorganizationnamereceiversreceivername) - The settings of a single of receiver
* [GetSettingsOrganizationsOrganizationNameSenders](docs/sdk/README.md#getsettingsorganizationsorganizationnamesenders) - A list of senders
* [GetSettingsOrganizationsOrganizationNameSendersSenderName](docs/sdk/README.md#getsettingsorganizationsorganizationnamesenderssendername) - The settings of a single of sender
* [HeadSettingsOrganizations](docs/sdk/README.md#headsettingsorganizations) - Retrived the last modified for all settings of the system. Must have admin access.
* [PostReports](docs/sdk/README.md#postreports) - Post a report to the data hub
* [PutSettingsOrganizationsOrganizationName](docs/sdk/README.md#putsettingsorganizationsorganizationname) - Create or update the direct settings associated with an organization
* [PutSettingsOrganizationsOrganizationNameReceiversReceiverName](docs/sdk/README.md#putsettingsorganizationsorganizationnamereceiversreceivername) - Update a single reciever
* [PutSettingsOrganizationsOrganizationNameSendersSenderName](docs/sdk/README.md#putsettingsorganizationsorganizationnamesenderssendername) - Update a single sender
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
