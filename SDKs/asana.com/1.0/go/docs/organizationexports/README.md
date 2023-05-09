# OrganizationExports

## Overview

An `organization_export` object represents a request to export the complete data of an organization in JSON format.

To export an organization using this API:

* Create an `organization_export`
  [request](/docs/create-an-organization-export-request)
  and store the ID that is returned.
* Request the `organization_export` every few minutes, until the
  `state` field contains ‘finished’.
* Download the file located at the URL in the `download_url` field. * Exports can take a long time, from several minutes to a few hours
  for large organizations.


*Note: These endpoints are only available to [Service Accounts](https://asana.com/guide/help/premium/service-accounts) of an [Enterprise](https://asana.com/enterprise) organization.*

### Available Operations

* [CreateOrganizationExport](#createorganizationexport) - Create an organization export request
* [GetOrganizationExport](#getorganizationexport) - Get details on an org export request

## CreateOrganizationExport

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.OrganizationExports.CreateOrganizationExport(ctx, operations.CreateOrganizationExportRequest{
        RequestBody: operations.CreateOrganizationExportRequestBody{
            Data: &shared.OrganizationExportRequest{
                Organization: sdk.String("1331"),
            },
        },
        Limit: sdk.Int64(354047),
        Offset: sdk.String("provident"),
        OptFields: []string{
            "sint",
            "accusantium",
            "mollitia",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationExport201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationExport

Returns details of a previously-requested Organization export.

### Example Usage

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
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.OrganizationExports.GetOrganizationExport(ctx, operations.GetOrganizationExportRequest{
        OptFields: []string{
            "mollitia",
            "ad",
            "eum",
            "dolor",
        },
        OptPretty: sdk.Bool(false),
        OrganizationExportGid: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationExport200ApplicationJSONObject != nil {
        // handle response
    }
}
```
