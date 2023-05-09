# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/codat.io/sync-for-expenses/prealpha/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Configuration.GetCompanyConfiguration(ctx, operations.GetCompanyConfigurationRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyConfiguration != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Configuration](docs/configuration/README.md)

* [GetCompanyConfiguration](docs/configuration/README.md#getcompanyconfiguration) - Get company configuration
* [SaveCompanyConfiguration](docs/configuration/README.md#savecompanyconfiguration) - Set company configuration

### [Connections](docs/connections/README.md)

* [CreatePartnerExpenseConnection](docs/connections/README.md#createpartnerexpenseconnection) - Create Partner Expense connection

### [Expenses](docs/expenses/README.md)

* [CreateExpenseDataset](docs/expenses/README.md#createexpensedataset) - Create expense-transactions
* [UploadAttachment](docs/expenses/README.md#uploadattachment) - Upload attachment

### [MappingOptions](docs/mappingoptions/README.md)

* [GetMappingOptions](docs/mappingoptions/README.md#getmappingoptions) - Mapping options

### [Sync](docs/sync/README.md)

* [IntiateSync](docs/sync/README.md#intiatesync) - Initiate sync

### [SyncStatus](docs/syncstatus/README.md)

* [GetLastSuccessfulSync](docs/syncstatus/README.md#getlastsuccessfulsync) - Last successful sync
* [GetLatestSync](docs/syncstatus/README.md#getlatestsync) - Latest sync status
* [GetSyncByID](docs/syncstatus/README.md#getsyncbyid) - Get Sync status
* [ListSyncs](docs/syncstatus/README.md#listsyncs) - List sync statuses

### [TransactionStatus](docs/transactionstatus/README.md)

* [GetSyncTransaction](docs/transactionstatus/README.md#getsynctransaction) - Get Sync Transaction
* [ListSyncTransactions](docs/transactionstatus/README.md#listsynctransactions) - Get Sync transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
