# TerminalActionsCompanyLevel

### Available Operations

* [GetCompaniesCompanyIDAndroidApps](#getcompaniescompanyidandroidapps) - Get a list of Android apps
* [GetCompaniesCompanyIDAndroidCertificates](#getcompaniescompanyidandroidcertificates) - Get a list of Android certificates
* [GetCompaniesCompanyIDTerminalActions](#getcompaniescompanyidterminalactions) - Get a list of terminal actions
* [GetCompaniesCompanyIDTerminalActionsActionID](#getcompaniescompanyidterminalactionsactionid) - Get terminal action

## GetCompaniesCompanyIDAndroidApps

Returns a list of the Android apps that are available for the company identified in the path. 
These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TerminalActionsCompanyLevel.GetCompaniesCompanyIDAndroidApps(ctx, operations.GetCompaniesCompanyIDAndroidAppsRequest{
        CompanyID: "iure",
        PageNumber: sdk.Int(487838),
        PageSize: sdk.Int(311796),
    }, operations.GetCompaniesCompanyIDAndroidAppsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AndroidAppsResponse != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyIDAndroidCertificates

Returns a list of the Android certificates that are available for the company identified in the path.
Typically, these certificates enable running apps on Android payment terminals. The certifcates in the list have been uploaded to Adyen and can be installed or uninstalled on Android terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TerminalActionsCompanyLevel.GetCompaniesCompanyIDAndroidCertificates(ctx, operations.GetCompaniesCompanyIDAndroidCertificatesRequest{
        CompanyID: "accusamus",
        PageNumber: sdk.Int(696344),
        PageSize: sdk.Int(976405),
    }, operations.GetCompaniesCompanyIDAndroidCertificatesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AndroidCertificatesResponse != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyIDTerminalActions

Returns the [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) that have been scheduled for the company identified in the path.The response doesn't include actions that are scheduled by Adyen.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TerminalActionsCompanyLevel.GetCompaniesCompanyIDTerminalActions(ctx, operations.GetCompaniesCompanyIDTerminalActionsRequest{
        CompanyID: "voluptas",
        PageNumber: sdk.Int(617658),
        PageSize: sdk.Int(179603),
        Status: sdk.String("atque"),
        Type: sdk.String("sit"),
    }, operations.GetCompaniesCompanyIDTerminalActionsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExternalTerminalActionsResponse != nil {
        // handle response
    }
}
```

## GetCompaniesCompanyIDTerminalActionsActionID

Returns the details of the [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) identified in the path.
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal actions read
* Management API—Terminal actions read and write

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TerminalActionsCompanyLevel.GetCompaniesCompanyIDTerminalActionsActionID(ctx, operations.GetCompaniesCompanyIDTerminalActionsActionIDRequest{
        ActionID: "fugiat",
        CompanyID: "ab",
    }, operations.GetCompaniesCompanyIDTerminalActionsActionIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExternalTerminalAction != nil {
        // handle response
    }
}
```
