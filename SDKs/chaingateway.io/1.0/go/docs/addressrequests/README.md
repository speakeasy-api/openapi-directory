# AddressRequests

## Overview

Requests to create, list and delete addresses

### Available Operations

* [DeleteAddress](#deleteaddress) - deleteAddress
* [ExportAddress](#exportaddress) - exportAddress
* [ImportAddress](#importaddress) - importAddress
* [ListAddresses](#listaddresses) - listAddresses
* [NewAddress](#newaddress) - newAddress

## DeleteAddress

Deletes an existing ethereum address. Be careful when using this function.

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
    res, err := s.AddressRequests.DeleteAddress(ctx, operations.DeleteAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        DeleteAddressRequest: shared.DeleteAddressRequest{
            Ethereumaddress: "distinctio",
            Password: "quibusdam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAddress != nil {
        // handle response
    }
}
```

## ExportAddress

Returns all ethereum addresses created with an account.

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
    res, err := s.AddressRequests.ExportAddress(ctx, operations.ExportAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ExportAddressRequest: shared.ExportAddressRequest{
            Ethaddress: "unde",
            Password: "nulla",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportAddress != nil {
        // handle response
    }
}
```

## ImportAddress

Returns all ethereum addresses created with an account.

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
    res, err := s.AddressRequests.ImportAddress(ctx, operations.ImportAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ImportAddressRequest: shared.ImportAddressRequest{
            Content: shared.Content{
                Address: "8466 Hunter Fort",
                Crypto: shared.Crypto{
                    Cipher: "debitis",
                    Cipherparams: shared.Cipherparams{
                        Iv: "ipsa",
                    },
                    Ciphertext: "delectus",
                    Kdf: "tempora",
                    Kdfparams: shared.Kdfparams{
                        Dklen: 383441,
                        N: 477665,
                        P: 791725,
                        R: 812169,
                        Salt: "voluptatum",
                    },
                    Mac: "iusto",
                },
                ID: "96ed151a-05df-4c2d-9f7c-c78ca1ba928f",
                Version: 758616,
            },
            Filename: "totam",
            Password: "beatae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportAddress != nil {
        // handle response
    }
}
```

## ListAddresses

Returns all ethereum addresses created with an account.

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
    res, err := s.AddressRequests.ListAddresses(ctx, operations.ListAddressesRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAddresses != nil {
        // handle response
    }
}
```

## NewAddress

Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.

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
    res, err := s.AddressRequests.NewAddress(ctx, operations.NewAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        NewAddressRequest: shared.NewAddressRequest{
            Password: "commodi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NewAddress != nil {
        // handle response
    }
}
```
