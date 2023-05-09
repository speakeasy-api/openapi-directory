# Connections

## Overview

A connection represents an account of a consumer for a connector. For example a consumer with ID "test-consumer" has a Salesforce connection for the CRM API. Connections securely save credentials and settings for a connector.

### Available Operations

* [ConnectionSettingsAll](#connectionsettingsall) - Get resource settings
* [ConnectionSettingsUpdate](#connectionsettingsupdate) - Update settings
* [ConnectionsAdd](#connectionsadd) - Create connection
* [ConnectionsAll](#connectionsall) - Get all connections
* [ConnectionsCallback](#connectionscallback) - Callback
* [ConnectionsDelete](#connectionsdelete) - Deletes a connection
* [ConnectionsImport](#connectionsimport) - Import connection
* [ConnectionsOne](#connectionsone) - Get connection
* [ConnectionsRevoke](#connectionsrevoke) - Revoke connection
* [ConnectionsToken](#connectionstoken) - Get Access Token
* [ConnectionsUpdate](#connectionsupdate) - Update connection

## ConnectionSettingsAll

This endpoint returns custom settings and their defaults required by connection for a given resource.


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
    res, err := s.Connections.ConnectionSettingsAll(ctx, operations.ConnectionSettingsAllRequest{
        Resource: "nulla",
        ServiceID: "corrupti",
        UnifiedAPI: "illum",
        XApideckAppID: "vel",
        XApideckConsumerID: "error",
    }, operations.ConnectionSettingsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
}
```

## ConnectionSettingsUpdate

Update default values for a connection's resource settings

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
    res, err := s.Connections.ConnectionSettingsUpdate(ctx, operations.ConnectionSettingsUpdateRequest{
        ConnectionInput: shared.ConnectionInput{
            Configuration: []shared.ConnectionConfigurationInput{
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: []interface{}{
                                        2726.56,
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Float64(12.5),
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Int64(123),
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                4736.08,
                                                8009.11,
                                                520478,
                                                6788.8,
                                            },
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                    },
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                    },
                    Resource: sdk.String("leads"),
                },
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Float64(12.5),
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.String("general"),
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Int64(123),
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Bool(true),
                                },
                            },
                            Value: sdk.String("GC5000 series"),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Bool(true),
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: []interface{}{
                                        4499.5,
                                        613064,
                                        902349,
                                        992.8,
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: []interface{}{
                                        670638,
                                        "dolorem",
                                        128926,
                                    },
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                    },
                    Resource: sdk.String("leads"),
                },
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Int64(123),
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                208876,
                                            },
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                253291,
                                                466311,
                                                244425,
                                            },
                                        },
                                    },
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.String("general"),
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                    },
                    Resource: sdk.String("leads"),
                },
            },
            Enabled: sdk.Bool(true),
            Metadata: map[string]interface{}{
                "enim": "odit",
                "quo": "sequi",
                "tenetur": "ipsam",
            },
            Settings: map[string]interface{}{
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
        },
        Resource: "quasi",
        ServiceID: "reiciendis",
        UnifiedAPI: "voluptatibus",
        XApideckAppID: "vero",
        XApideckConsumerID: "nihil",
    }, operations.ConnectionSettingsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectionResponse != nil {
        // handle response
    }
}
```

## ConnectionsAdd

Create an authorized connection


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
    res, err := s.Connections.ConnectionsAdd(ctx, operations.ConnectionsAddRequest{
        ConnectionInput: shared.ConnectionInput{
            Configuration: []shared.ConnectionConfigurationInput{
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                    },
                                },
                            },
                            Value: sdk.String("GC5000 series"),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: []interface{}{
                                        296140,
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.String("general"),
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                "quidem",
                                            },
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                5759.47,
                                            },
                                        },
                                    },
                                },
                            },
                            Value: sdk.String("GC5000 series"),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Int64(123),
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Bool(true),
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                    },
                                },
                            },
                            Value: sdk.Float64(10.5),
                        },
                    },
                    Resource: sdk.String("leads"),
                },
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: []interface{}{
                                        "fugit",
                                        5696.18,
                                    },
                                },
                            },
                            Value: sdk.Int64(10),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                "eligendi",
                                                396098,
                                            },
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                4471.25,
                                                846409,
                                                6994.79,
                                                "magnam",
                                            },
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                313218,
                                            },
                                        },
                                    },
                                },
                            },
                            Value: []interface{}{
                                10.5,
                                10,
                                10.5,
                                10,
                            },
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Bool(true),
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                    },
                    Resource: sdk.String("leads"),
                },
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Bool(true),
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                "magnam",
                                            },
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                    },
                                },
                            },
                            Value: sdk.Float64(10.5),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.String("general"),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Bool(true),
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                    },
                                },
                            },
                            Value: []interface{}{
                                10,
                            },
                        },
                    },
                    Resource: sdk.String("leads"),
                },
            },
            Enabled: sdk.Bool(true),
            Metadata: map[string]interface{}{
                "iure": "doloribus",
            },
            Settings: map[string]interface{}{
                "eius": "maxime",
                "deleniti": "facilis",
                "in": "architecto",
                "architecto": "repudiandae",
            },
        },
        ServiceID: "ullam",
        UnifiedAPI: "expedita",
        XApideckAppID: "nihil",
        XApideckConsumerID: "repellat",
    }, operations.ConnectionsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionResponse != nil {
        // handle response
    }
}
```

## ConnectionsAll

This endpoint includes all the configured integrations and contains the required assets
to build an integrations page where your users can install integrations.
OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.


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
    res, err := s.Connections.ConnectionsAll(ctx, operations.ConnectionsAllRequest{
        API: sdk.String("quibusdam"),
        Configured: sdk.Bool(false),
        XApideckAppID: "sed",
        XApideckConsumerID: "saepe",
    }, operations.ConnectionsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionsResponse != nil {
        // handle response
    }
}
```

## ConnectionsCallback

This endpoint gets called after the triggering the authorize flow.

Callback links need a state and code parameter to verify the validity of the request.


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
            APIKey: "YOUR_API_KEY_HERE",
            ApplicationID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Connections.ConnectionsCallback(ctx, operations.ConnectionsCallbackRequest{
        Code: "pariatur",
        State: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConnectionsDelete

Deletes a connection

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
    res, err := s.Connections.ConnectionsDelete(ctx, operations.ConnectionsDeleteRequest{
        ServiceID: "consequuntur",
        UnifiedAPI: "praesentium",
        XApideckAppID: "natus",
        XApideckConsumerID: "magni",
    }, operations.ConnectionsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConnectionsImport

Import an authorized connection.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Connections.ConnectionsImport(ctx, operations.ConnectionsImportRequest{
        ConnectionImportData: shared.ConnectionImportData{
            Credentials: &shared.ConnectionImportDataCredentials{
                AccessToken: sdk.String("1234567890abcdefghijklmnopqrstuvwxyz"),
                ExpiresIn: sdk.Int64(3600),
                IssuedAt: types.MustTimeFromString("2020-01-01T00:00:00Z"),
                RefreshToken: "1234567890abcdefghijklmnopqrstuvwxyz",
            },
            Metadata: map[string]interface{}{
                "quo": "illum",
            },
            Settings: map[string]interface{}{
                "maxime": "ea",
                "excepturi": "odit",
                "ea": "accusantium",
                "ab": "maiores",
            },
        },
        ServiceID: "quidem",
        UnifiedAPI: "ipsam",
        XApideckAppID: "voluptate",
        XApideckConsumerID: "autem",
    }, operations.ConnectionsImportSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionResponse != nil {
        // handle response
    }
}
```

## ConnectionsOne

Get a connection

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
    res, err := s.Connections.ConnectionsOne(ctx, operations.ConnectionsOneRequest{
        ServiceID: "nam",
        UnifiedAPI: "eaque",
        XApideckAppID: "pariatur",
        XApideckConsumerID: "nemo",
    }, operations.ConnectionsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
}
```

## ConnectionsRevoke

__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__

Use this endpoint to revoke an existing OAuth connector.

Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.

Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.


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
            APIKey: "YOUR_API_KEY_HERE",
            ApplicationID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Connections.ConnectionsRevoke(ctx, operations.ConnectionsRevokeRequest{
        ApplicationID: "voluptatibus",
        RedirectURI: "perferendis",
        ServiceID: "fugiat",
        State: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConnectionsToken

Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.

Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.


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
    res, err := s.Connections.ConnectionsToken(ctx, operations.ConnectionsTokenRequest{
        RequestBody: map[string]interface{}{
            "cumque": "corporis",
        },
        ServiceID: "hic",
        UnifiedAPI: "libero",
        XApideckAppID: "nobis",
        XApideckConsumerID: "dolores",
    }, operations.ConnectionsTokenSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectionResponse != nil {
        // handle response
    }
}
```

## ConnectionsUpdate

Update a connection

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
    res, err := s.Connections.ConnectionsUpdate(ctx, operations.ConnectionsUpdateRequest{
        ConnectionInput: shared.ConnectionInput{
            Configuration: []shared.ConnectionConfigurationInput{
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Int64(123),
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.String("general"),
                                },
                            },
                            Value: sdk.String("GC5000 series"),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                9280.82,
                                                704415,
                                            },
                                        },
                                    },
                                },
                            },
                            Value: sdk.Float64(10.5),
                        },
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                    },
                                },
                            },
                            Value: sdk.Bool(true),
                        },
                    },
                    Resource: sdk.String("leads"),
                },
                shared.ConnectionConfigurationInput{
                    Defaults: []shared.ConnectionConfigurationDefaultsInput{
                        shared.ConnectionConfigurationDefaultsInput{
                            ID: sdk.String("ProductInterest"),
                            Options: []interface{}{
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: []interface{}{
                                                "iste",
                                                5356.33,
                                                5899.1,
                                                7301.22,
                                            },
                                        },
                                    },
                                },
                                shared.FormFieldOptionGroup{
                                    ID: sdk.String("1234"),
                                    Label: sdk.String("General Channel"),
                                    Options: []shared.SimpleFormFieldOption{
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Float64(12.5),
                                        },
                                        shared.SimpleFormFieldOption{
                                            Label: sdk.String("General Channel"),
                                            Value: sdk.Int64(123),
                                        },
                                    },
                                },
                                shared.SimpleFormFieldOption{
                                    Label: sdk.String("General Channel"),
                                    Value: sdk.Int64(123),
                                },
                            },
                            Value: sdk.Int64(10),
                        },
                    },
                    Resource: sdk.String("leads"),
                },
            },
            Enabled: sdk.Bool(true),
            Metadata: map[string]interface{}{
                "ipsum": "hic",
            },
            Settings: map[string]interface{}{
                "cum": "voluptate",
                "dignissimos": "reiciendis",
                "amet": "dolorum",
            },
        },
        ServiceID: "numquam",
        UnifiedAPI: "veritatis",
        XApideckAppID: "ipsa",
        XApideckConsumerID: "ipsa",
    }, operations.ConnectionsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectionResponse != nil {
        // handle response
    }
}
```
