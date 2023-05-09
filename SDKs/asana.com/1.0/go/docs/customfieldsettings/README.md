# CustomFieldSettings

## Overview

Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the `is_important` property determines some possible application-specific handling of that custom field.

### Available Operations

* [GetCustomFieldSettingsForPortfolio](#getcustomfieldsettingsforportfolio) - Get a portfolio's custom fields
* [GetCustomFieldSettingsForProject](#getcustomfieldsettingsforproject) - Get a project's custom fields

## GetCustomFieldSettingsForPortfolio

Returns a list of all of the custom fields settings on a portfolio, in compact form.

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
    res, err := s.CustomFieldSettings.GetCustomFieldSettingsForPortfolio(ctx, operations.GetCustomFieldSettingsForPortfolioRequest{
        Limit: sdk.Int64(128926),
        Offset: sdk.String("nobis"),
        OptFields: []string{
            "omnis",
            "nemo",
        },
        OptPretty: sdk.Bool(false),
        PortfolioGid: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomFieldSettingsForPortfolio200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCustomFieldSettingsForProject

Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [getting started guide on input/output options](https://developers.asana.com/docs/#input-output-options) for more information.

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
    res, err := s.CustomFieldSettings.GetCustomFieldSettingsForProject(ctx, operations.GetCustomFieldSettingsForProjectRequest{
        Limit: sdk.Int64(570197),
        Offset: sdk.String("accusantium"),
        OptFields: []string{
            "culpa",
            "doloribus",
        },
        OptPretty: sdk.Bool(false),
        ProjectGid: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomFieldSettingsForProject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
