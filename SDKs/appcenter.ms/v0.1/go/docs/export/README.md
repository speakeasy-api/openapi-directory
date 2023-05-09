# Export

### Available Operations

* [ExportConfigurationsCreate](#exportconfigurationscreate) - Create new export configuration
* [ExportConfigurationsDelete](#exportconfigurationsdelete) - Delete export configuration.
* [ExportConfigurationsDisable](#exportconfigurationsdisable) - Disable export configuration.
* [ExportConfigurationsEnable](#exportconfigurationsenable) - Enable export configuration.
* [ExportConfigurationsGet](#exportconfigurationsget) - Get export configuration.
* [ExportConfigurationsList](#exportconfigurationslist) - List export configurations.
* [ExportConfigurationsPartialUpdate](#exportconfigurationspartialupdate) - Partially update export configuration.

## ExportConfigurationsCreate

Create new export configuration

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Export.ExportConfigurationsCreate(ctx, operations.ExportConfigurationsCreateRequest{
        RequestBody: operations.ExportConfigurationsCreateRequestBody{
            Backfill: sdk.Bool(false),
            ExportEntities: []ExportConfigurationsCreateRequestBodyExportEntitiesEnum{
                operations.ExportConfigurationsCreateRequestBodyExportEntitiesEnumAttachments,
                operations.ExportConfigurationsCreateRequestBodyExportEntitiesEnumErrors,
            },
            ResourceGroup: sdk.String("exercitationem"),
            ResourceName: sdk.String("labore"),
            Type: operations.ExportConfigurationsCreateRequestBodyTypeEnumApplicationInsightsInstrumentationKey,
        },
        AppName: "repudiandae",
        OwnerName: "modi",
    }, operations.ExportConfigurationsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportConfigurationsCreate202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ExportConfigurationsDelete

Delete export configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Export.ExportConfigurationsDelete(ctx, operations.ExportConfigurationsDeleteRequest{
        AppName: "in",
        ExportConfigurationID: "explicabo",
        OwnerName: "accusamus",
    }, operations.ExportConfigurationsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportConfigurationsDisable

Disable export configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Export.ExportConfigurationsDisable(ctx, operations.ExportConfigurationsDisableRequest{
        AppName: "rem",
        ExportConfigurationID: "aperiam",
        OwnerName: "odit",
    }, operations.ExportConfigurationsDisableSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportConfigurationsEnable

Enable export configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Export.ExportConfigurationsEnable(ctx, operations.ExportConfigurationsEnableRequest{
        AppName: "deleniti",
        ExportConfigurationID: "enim",
        OwnerName: "voluptate",
    }, operations.ExportConfigurationsEnableSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ExportConfigurationsGet

Get export configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Export.ExportConfigurationsGet(ctx, operations.ExportConfigurationsGetRequest{
        AppName: "similique",
        ExportConfigurationID: "minima",
        OwnerName: "libero",
    }, operations.ExportConfigurationsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportConfigurationsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ExportConfigurationsList

List export configurations.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Export.ExportConfigurationsList(ctx, operations.ExportConfigurationsListRequest{
        AppName: "magnam",
        OwnerName: "sit",
    }, operations.ExportConfigurationsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportConfigurationsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ExportConfigurationsPartialUpdate

Partially update export configuration.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Export.ExportConfigurationsPartialUpdate(ctx, operations.ExportConfigurationsPartialUpdateRequest{
        RequestBody: operations.ExportConfigurationsPartialUpdateRequestBody{
            Backfill: sdk.Bool(false),
            ExportEntities: []ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnum{
                operations.ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnumErrors,
                operations.ExportConfigurationsPartialUpdateRequestBodyExportEntitiesEnumCrashes,
            },
            ResourceGroup: sdk.String("mollitia"),
            ResourceName: sdk.String("dignissimos"),
            Type: operations.ExportConfigurationsPartialUpdateRequestBodyTypeEnumApplicationInsightsLinkedSubscription,
        },
        AppName: "nostrum",
        ExportConfigurationID: "molestiae",
        OwnerName: "veniam",
    }, operations.ExportConfigurationsPartialUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportConfigurationsPartialUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
