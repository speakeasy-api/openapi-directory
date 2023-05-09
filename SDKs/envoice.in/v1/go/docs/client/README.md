# Client

### Available Operations

* [ClientAPIAll](#clientapiall) - Return all clients for the account
* [ClientAPICanDelete](#clientapicandelete) - Check if the provided client can be deleted
* [ClientAPIDeleteForm](#clientapideleteform) - Delete an existing client
* [ClientAPIDeleteJSON](#clientapideletejson) - Delete an existing client
* [ClientAPIDeleteRaw](#clientapideleteraw) - Delete an existing client
* [ClientAPIDetails](#clientapidetails) - Return client details. Activities and invoices included.
* [ClientAPINewForm](#clientapinewform) - Create a client
* [ClientAPINewJSON](#clientapinewjson) - Create a client
* [ClientAPINewRaw](#clientapinewraw) - Create a client
* [ClientAPIUpdateForm](#clientapiupdateform) - Update an existing client
* [ClientAPIUpdateJSON](#clientapiupdatejson) - Update an existing client
* [ClientAPIUpdateRaw](#clientapiupdateraw) - Update an existing client

## ClientAPIAll

Return all clients for the account

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
    res, err := s.Client.ClientAPIAll(ctx, operations.ClientAPIAllRequest{
        XAuthKey: "distinctio",
        XAuthSecret: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientDetailsAPIModels != nil {
        // handle response
    }
}
```

## ClientAPICanDelete

Check if the provided client can be deleted

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
    res, err := s.Client.ClientAPICanDelete(ctx, operations.ClientAPICanDeleteRequest{
        ID: 602763,
        XAuthKey: "nulla",
        XAuthSecret: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientAPICanDelete200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## ClientAPIDeleteForm

Delete an existing client

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
    res, err := s.Client.ClientAPIDeleteForm(ctx, operations.ClientAPIDeleteFormRequest{
        ClientDeleteAPIModel: shared.ClientDeleteAPIModel{
            ID: sdk.Int(847252),
        },
        XAuthKey: "vel",
        XAuthSecret: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientAPIDeleteForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ClientAPIDeleteJSON

Delete an existing client

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
    res, err := s.Client.ClientAPIDeleteJSON(ctx, operations.ClientAPIDeleteJSONRequest{
        ClientDeleteAPIModel: shared.ClientDeleteAPIModel{
            ID: sdk.Int(645894),
        },
        XAuthKey: "suscipit",
        XAuthSecret: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientAPIDeleteJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ClientAPIDeleteRaw

Delete an existing client

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
    res, err := s.Client.ClientAPIDeleteRaw(ctx, operations.ClientAPIDeleteRawRequest{
        RequestBody: []byte("magnam"),
        XAuthKey: "debitis",
        XAuthSecret: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientAPIDeleteRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ClientAPIDetails

Return client details. Activities and invoices included.

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
    res, err := s.Client.ClientAPIDetails(ctx, operations.ClientAPIDetailsRequest{
        ID: 963663,
        XAuthKey: "tempora",
        XAuthSecret: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientDetailsAPIModel != nil {
        // handle response
    }
}
```

## ClientAPINewForm

Create a client

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
    res, err := s.Client.ClientAPINewForm(ctx, operations.ClientAPINewFormRequest{
        ClientCreateAPIModel: shared.ClientCreateAPIModel{
            AdditionalEmails: []shared.AdditionalClientEmailAPIModel{
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Randy_Lehner@hotmail.com"),
                },
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Tianna33@yahoo.com"),
                },
            },
            Address: sdk.String("60389 Connelly Trace"),
            ClientCountryID: sdk.Int(870088),
            ClientCurrencyID: sdk.Int(978619),
            CompanyRegistrationNumber: sdk.String("molestiae"),
            DefaultDueDateInDays: sdk.Int(799159),
            Email: sdk.String("Jakayla_Lebsack11@hotmail.com"),
            Name: sdk.String("Luke McCullough"),
            PhoneNumber: sdk.String("hic"),
            UILanguageID: sdk.Int(758616),
            Vat: sdk.String("totam"),
        },
        XAuthKey: "beatae",
        XAuthSecret: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientAPINewForm200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ClientAPINewJSON

Create a client

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
    res, err := s.Client.ClientAPINewJSON(ctx, operations.ClientAPINewJSONRequest{
        ClientCreateAPIModel: shared.ClientCreateAPIModel{
            AdditionalEmails: []shared.AdditionalClientEmailAPIModel{
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Christy.Ryan21@gmail.com"),
                },
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Brianne61@yahoo.com"),
                },
            },
            Address: sdk.String("62639 Parker Lake"),
            ClientCountryID: sdk.Int(359508),
            ClientCurrencyID: sdk.Int(613064),
            CompanyRegistrationNumber: sdk.String("iure"),
            DefaultDueDateInDays: sdk.Int(902349),
            Email: sdk.String("Baby_Beier65@hotmail.com"),
            Name: sdk.String("Ernest Ebert"),
            PhoneNumber: sdk.String("nobis"),
            UILanguageID: sdk.Int(315428),
            Vat: sdk.String("omnis"),
        },
        XAuthKey: "nemo",
        XAuthSecret: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientAPINewJSON200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ClientAPINewRaw

Create a client

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
    res, err := s.Client.ClientAPINewRaw(ctx, operations.ClientAPINewRawRequest{
        RequestBody: []byte("excepturi"),
        XAuthKey: "accusantium",
        XAuthSecret: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientAPINewRaw200ApplicationJSONInt32Integer != nil {
        // handle response
    }
}
```

## ClientAPIUpdateForm

Update an existing client

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
    res, err := s.Client.ClientAPIUpdateForm(ctx, operations.ClientAPIUpdateFormRequest{
        ClientUpdateAPIModel: shared.ClientUpdateAPIModel{
            AdditionalEmails: []shared.AdditionalClientEmailAPIModel{
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Veronica.Brakus@hotmail.com"),
                },
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Caroline_Ziemann@yahoo.com"),
                },
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Harvey.Konopelski@gmail.com"),
                },
            },
            Address: sdk.String("1316 Hamill Cove"),
            ClientCountryID: sdk.Int(778346),
            ClientCurrencyID: sdk.Int(196582),
            CompanyRegistrationNumber: sdk.String("tenetur"),
            DefaultDueDateInDays: sdk.Int(368725),
            Email: sdk.String("Reid62@yahoo.com"),
            ID: sdk.Int(837945),
            Name: sdk.String("Ryan Witting"),
            PhoneNumber: sdk.String("nihil"),
            UILanguageID: sdk.Int(509624),
            Vat: sdk.String("voluptatibus"),
        },
        XAuthKey: "ipsa",
        XAuthSecret: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ClientAPIUpdateJSON

Update an existing client

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
    res, err := s.Client.ClientAPIUpdateJSON(ctx, operations.ClientAPIUpdateJSONRequest{
        ClientUpdateAPIModel: shared.ClientUpdateAPIModel{
            AdditionalEmails: []shared.AdditionalClientEmailAPIModel{
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Aiyana.Batz@hotmail.com"),
                },
                shared.AdditionalClientEmailAPIModel{
                    Email: sdk.String("Blanche48@hotmail.com"),
                },
            },
            Address: sdk.String("63849 Curt Radial"),
            ClientCountryID: sdk.Int(565189),
            ClientCurrencyID: sdk.Int(566602),
            CompanyRegistrationNumber: sdk.String("pariatur"),
            DefaultDueDateInDays: sdk.Int(265389),
            Email: sdk.String("Judah92@yahoo.com"),
            ID: sdk.Int(575947),
            Name: sdk.String("Patti Gottlieb MD"),
            PhoneNumber: sdk.String("quibusdam"),
            UILanguageID: sdk.Int(131797),
            Vat: sdk.String("deserunt"),
        },
        XAuthKey: "distinctio",
        XAuthSecret: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ClientAPIUpdateRaw

Update an existing client

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
    res, err := s.Client.ClientAPIUpdateRaw(ctx, operations.ClientAPIUpdateRawRequest{
        RequestBody: []byte("labore"),
        XAuthKey: "modi",
        XAuthSecret: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
