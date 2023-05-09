# Schools

### Available Operations

* [GetDistrictForSchool](#getdistrictforschool) - Returns the district for a school
* [GetSchool](#getschool) - Returns a specific school
* [GetSchools](#getschools) - Returns a list of schools
* [GetSectionsForSchool](#getsectionsforschool) - Returns the sections for a school
* [GetStudentsForSchool](#getstudentsforschool) - Returns the students for a school
* [GetTeachersForSchool](#getteachersforschool) - Returns the teachers for a school

## GetDistrictForSchool

Returns the district for a school

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
    res, err := s.Schools.GetDistrictForSchool(ctx, operations.GetDistrictForSchoolRequest{
        ID: "70b326b5-a734-429c-9b1a-8422bb679d23",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictResponse != nil {
        // handle response
    }
}
```

## GetSchool

Returns a specific school

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
    res, err := s.Schools.GetSchool(ctx, operations.GetSchoolRequest{
        ID: "22715bf0-cbb1-4e31-b8b9-0f3443a1108e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolResponse != nil {
        // handle response
    }
}
```

## GetSchools

Returns a list of schools

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
    res, err := s.Schools.GetSchools(ctx, operations.GetSchoolsRequest{
        EndingBefore: sdk.String("consequatur"),
        Limit: sdk.Int64(669917),
        StartingAfter: sdk.String("repellendus"),
        Where: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolsResponse != nil {
        // handle response
    }
}
```

## GetSectionsForSchool

Returns the sections for a school

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
    res, err := s.Schools.GetSectionsForSchool(ctx, operations.GetSectionsForSchoolRequest{
        EndingBefore: sdk.String("doloribus"),
        ID: "4b921879-fce9-453f-b3ef-7fbc7abd74dd",
        Limit: sdk.Int64(194342),
        StartingAfter: sdk.String("natus"),
        Where: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SectionsResponse != nil {
        // handle response
    }
}
```

## GetStudentsForSchool

Returns the students for a school

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
    res, err := s.Schools.GetStudentsForSchool(ctx, operations.GetStudentsForSchoolRequest{
        EndingBefore: sdk.String("aut"),
        ID: "f5d2cff7-c70a-4456-a6d4-36813f16d9f5",
        Limit: sdk.Int64(960835),
        StartingAfter: sdk.String("quisquam"),
        Where: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentsResponse != nil {
        // handle response
    }
}
```

## GetTeachersForSchool

Returns the teachers for a school

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
    res, err := s.Schools.GetTeachersForSchool(ctx, operations.GetTeachersForSchoolRequest{
        EndingBefore: sdk.String("ea"),
        ID: "c556146c-3e25-40fb-808c-42e141aac366",
        Limit: sdk.Int64(752135),
        StartingAfter: sdk.String("quas"),
        Where: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeachersResponse != nil {
        // handle response
    }
}
```
