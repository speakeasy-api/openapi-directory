# Locations

### Available Operations

* [DeleteLocation](#deletelocation) - Delete a location
* [GetLocation](#getlocation) - Get a location's data
* [GetLocations](#getlocations) - Get Locations data
* [PatchLocation](#patchlocation) - Update a location's data
* [PostLocations](#postlocations) - Create a new location

## DeleteLocation

Delete a location

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.DeleteLocation(ctx, operations.DeleteLocationRequest{
        ID: "50fb008c-42e1-441a-ac36-6c8dd6b14429",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLocation

Get a location's data

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.GetLocation(ctx, operations.GetLocationRequest{
        ID: "07474778-a7bd-4466-928c-10ab3cdca425",
        IncludeChargestations: sdk.Bool(false),
        IncludeOrganization: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLocations

Get Locations data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.GetLocations(ctx, operations.GetLocationsRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2022-05-31T12:37:37.443Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-09-23T10:04:47.931Z"),
        IncludeOrganization: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(892050),
        PaginatePage: sdk.String("ipsam"),
        SortBy: sdk.String("aspernatur"),
        SortOrder: shared.SortOrder1EnumDesc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2021-08-15T10:59:14.485Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2022-11-13T03:35:18.820Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchLocation

Update a location's data

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.PatchLocation(ctx, operations.PatchLocationRequest{
        RequestBody: operations.PatchLocationRequestBody{
            Active: sdk.Bool(false),
            Address: &operations.PatchLocationRequestBodyAddress{
                City: sdk.String("Schmidtmouth"),
                Country: sdk.String("Barbados"),
                PostalCode: sdk.String("58345"),
                State: sdk.String("commodi"),
                StreetAndNumber: sdk.String("sapiente"),
            },
            Chargestations: []interface{}{
                "deserunt",
            },
            Coordinates: &operations.PatchLocationRequestBodyCoordinates{
                Latitude: sdk.Float64(4752.89),
                Longitude: sdk.Float64(353.62),
            },
            OpeningHours: &operations.PatchLocationRequestBodyOpeningHours{
                Zero: []PatchLocationRequestBodyOpeningHours0{
                    operations.PatchLocationRequestBodyOpeningHours0{
                        EndTime: sdk.String("eum"),
                        StartTime: sdk.String("quas"),
                    },
                    operations.PatchLocationRequestBodyOpeningHours0{
                        EndTime: sdk.String("praesentium"),
                        StartTime: sdk.String("consequuntur"),
                    },
                    operations.PatchLocationRequestBodyOpeningHours0{
                        EndTime: sdk.String("deleniti"),
                        StartTime: sdk.String("fugit"),
                    },
                    operations.PatchLocationRequestBodyOpeningHours0{
                        EndTime: sdk.String("fuga"),
                        StartTime: sdk.String("mollitia"),
                    },
                },
                One: []PatchLocationRequestBodyOpeningHours1{
                    operations.PatchLocationRequestBodyOpeningHours1{
                        EndTime: sdk.String("atque"),
                        StartTime: sdk.String("explicabo"),
                    },
                    operations.PatchLocationRequestBodyOpeningHours1{
                        EndTime: sdk.String("minima"),
                        StartTime: sdk.String("nisi"),
                    },
                },
                Two: []PatchLocationRequestBodyOpeningHours2{
                    operations.PatchLocationRequestBodyOpeningHours2{
                        EndTime: sdk.String("sapiente"),
                        StartTime: sdk.String("consequuntur"),
                    },
                },
                Three: []PatchLocationRequestBodyOpeningHours3{
                    operations.PatchLocationRequestBodyOpeningHours3{
                        EndTime: sdk.String("explicabo"),
                        StartTime: sdk.String("saepe"),
                    },
                },
                Four: []PatchLocationRequestBodyOpeningHours4{
                    operations.PatchLocationRequestBodyOpeningHours4{
                        EndTime: sdk.String("atque"),
                        StartTime: sdk.String("et"),
                    },
                    operations.PatchLocationRequestBodyOpeningHours4{
                        EndTime: sdk.String("esse"),
                        StartTime: sdk.String("eveniet"),
                    },
                    operations.PatchLocationRequestBodyOpeningHours4{
                        EndTime: sdk.String("accusamus"),
                        StartTime: sdk.String("veritatis"),
                    },
                },
                Five: []PatchLocationRequestBodyOpeningHours5{
                    operations.PatchLocationRequestBodyOpeningHours5{
                        EndTime: sdk.String("quod"),
                        StartTime: sdk.String("nam"),
                    },
                    operations.PatchLocationRequestBodyOpeningHours5{
                        EndTime: sdk.String("vero"),
                        StartTime: sdk.String("aliquid"),
                    },
                },
                Six: []PatchLocationRequestBodyOpeningHours6{
                    operations.PatchLocationRequestBodyOpeningHours6{
                        EndTime: sdk.String("saepe"),
                        StartTime: sdk.String("vel"),
                    },
                },
            },
            OperatorName: sdk.String("harum"),
            Timezone: sdk.String("molestiae"),
        },
        ID: "b95bc0ab-3c20-4c4f-b789-fd871f99dd2e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchLocation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostLocations

Create a new location

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.PostLocations(ctx, operations.PostLocationsRequestBody{
        Active: sdk.Bool(false),
        Address: operations.PostLocationsRequestBodyAddress{
            City: sdk.String("Schenectady"),
            Country: sdk.String("Belgium"),
            PostalCode: sdk.String("06639"),
            StreetAndNumber: sdk.String("quae"),
        },
        Chargestations: []interface{}{
            "vel",
            "in",
            "eius",
            "libero",
        },
        Coordinates: operations.PostLocationsRequestBodyCoordinates{
            Latitude: sdk.Float64(8490.39),
            Longitude: sdk.Float64(7422.38),
        },
        OperatorName: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostLocations200ApplicationJSONObject != nil {
        // handle response
    }
}
```
