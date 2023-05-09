# Districts

### Available Operations

* [GetAdminsForDistrict](#getadminsfordistrict) - Returns the admins for a district
* [GetDistrict](#getdistrict) - Returns a specific district
* [GetDistrictStatus](#getdistrictstatus) - Returns the status of the district
* [GetDistricts](#getdistricts) - Returns a list of districts. In practice this will only return the one district associated with the bearer token
* [GetSchoolsForDistrict](#getschoolsfordistrict) - Returns the schools for a district
* [GetSectionsForDistrict](#getsectionsfordistrict) - Returns the sections for a district
* [GetStudentsForDistrict](#getstudentsfordistrict) - Returns the students for a district
* [GetTeachersForDistrict](#getteachersfordistrict) - Returns the teachers for a district

## GetAdminsForDistrict

Returns the admins for a district

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetAdminsForDistrict(ctx, operations.GetAdminsForDistrictRequest{
        ID: "e6e13b99-d488-4e1e-91e4-50ad2abd4426",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictAdminsResponse != nil {
        // handle response
    }
}
```

## GetDistrict

Returns a specific district

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetDistrict(ctx, operations.GetDistrictRequest{
        ID: "9802d502-a94b-4b4f-a3c9-69e9a3efa77d",
        Include: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictResponse != nil {
        // handle response
    }
}
```

## GetDistrictStatus

Returns the status of the district

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetDistrictStatus(ctx, operations.GetDistrictStatusRequest{
        ID: "b14cd66a-e395-4efb-9ba8-8f3a66997074",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictStatusResponses != nil {
        // handle response
    }
}
```

## GetDistricts

Returns a list of districts. In practice this will only return the one district associated with the bearer token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetDistricts(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictsResponse != nil {
        // handle response
    }
}
```

## GetSchoolsForDistrict

Returns the schools for a district

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetSchoolsForDistrict(ctx, operations.GetSchoolsForDistrictRequest{
        EndingBefore: sdk.String("distinctio"),
        ID: "a4469b6e-2141-4959-890a-fa563e2516fe",
        Limit: sdk.Int64(260341),
        StartingAfter: sdk.String("maxime"),
        Where: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolsResponse != nil {
        // handle response
    }
}
```

## GetSectionsForDistrict

Returns the sections for a district

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetSectionsForDistrict(ctx, operations.GetSectionsForDistrictRequest{
        EndingBefore: sdk.String("facilis"),
        ID: "711e5b7f-d2ed-4028-921c-ddc692601fb5",
        Limit: sdk.Int64(453543),
        StartingAfter: sdk.String("autem"),
        Where: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SectionsResponse != nil {
        // handle response
    }
}
```

## GetStudentsForDistrict

Returns the students for a district

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetStudentsForDistrict(ctx, operations.GetStudentsForDistrictRequest{
        EndingBefore: sdk.String("eaque"),
        ID: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
        Limit: sdk.Int64(596656),
        StartingAfter: sdk.String("voluptatem"),
        Where: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentsResponse != nil {
        // handle response
    }
}
```

## GetTeachersForDistrict

Returns the teachers for a district

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
            Oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Districts.GetTeachersForDistrict(ctx, operations.GetTeachersForDistrictRequest{
        EndingBefore: sdk.String("consequuntur"),
        ID: "8909b3fe-49a8-4d9c-bf48-633323f9b77f",
        Limit: sdk.Int64(227414),
        StartingAfter: sdk.String("dolorum"),
        Where: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeachersResponse != nil {
        // handle response
    }
}
```
