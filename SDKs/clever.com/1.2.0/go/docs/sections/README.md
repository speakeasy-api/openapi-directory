# Sections

### Available Operations

* [GetDistrictForSection](#getdistrictforsection) - Returns the district for a section
* [GetSchoolForSection](#getschoolforsection) - Returns the school for a section
* [GetSection](#getsection) - Returns a specific section
* [GetSections](#getsections) - Returns a list of sections
* [GetStudentsForSection](#getstudentsforsection) - Returns the students for a section
* [GetTeacherForSection](#getteacherforsection) - Returns the primary teacher for a section
* [GetTeachersForSection](#getteachersforsection) - Returns the teachers for a section

## GetDistrictForSection

Returns the district for a section

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
    res, err := s.Sections.GetDistrictForSection(ctx, operations.GetDistrictForSectionRequest{
        ID: "d6b14429-0747-4477-8a7b-d466d28c10ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictResponse != nil {
        // handle response
    }
}
```

## GetSchoolForSection

Returns the school for a section

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
    res, err := s.Sections.GetSchoolForSection(ctx, operations.GetSchoolForSectionRequest{
        ID: "3cdca425-1904-4e52-bc7e-0bc7178e4796",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolResponse != nil {
        // handle response
    }
}
```

## GetSection

Returns a specific section

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
    res, err := s.Sections.GetSection(ctx, operations.GetSectionRequest{
        ID: "f2a70c68-8282-4aa4-8256-2f222e9817ee",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SectionResponse != nil {
        // handle response
    }
}
```

## GetSections

Returns a list of sections

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
    res, err := s.Sections.GetSections(ctx, operations.GetSectionsRequest{
        EndingBefore: sdk.String("veritatis"),
        Limit: sdk.Int64(458604),
        StartingAfter: sdk.String("quod"),
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

## GetStudentsForSection

Returns the students for a section

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
    res, err := s.Sections.GetStudentsForSection(ctx, operations.GetStudentsForSectionRequest{
        EndingBefore: sdk.String("vero"),
        ID: "61e6b7b9-5bc0-4ab3-820c-4f3789fd871f",
        Limit: sdk.Int64(621679),
        StartingAfter: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentsResponse != nil {
        // handle response
    }
}
```

## GetTeacherForSection

Returns the primary teacher for a section

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
    res, err := s.Sections.GetTeacherForSection(ctx, operations.GetTeacherForSectionRequest{
        ID: "dd2efd12-1aa6-4f1e-a74b-db04f1575608",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeacherResponse != nil {
        // handle response
    }
}
```

## GetTeachersForSection

Returns the teachers for a section

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
    res, err := s.Sections.GetTeachersForSection(ctx, operations.GetTeachersForSectionRequest{
        EndingBefore: sdk.String("qui"),
        ID: "d68ea19f-1d17-4051-b39d-08086a184039",
        Limit: sdk.Int64(253191),
        StartingAfter: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeachersResponse != nil {
        // handle response
    }
}
```
