# Teachers

### Available Operations

* [GetDistrictForTeacher](#getdistrictforteacher) - Returns the district for a teacher
* [GetGradeLevelsForTeacher](#getgradelevelsforteacher) - Returns the grade levels for sections a teacher teaches
* [GetSchoolForTeacher](#getschoolforteacher) - Retrieves school info for a teacher.
* [GetSectionsForTeacher](#getsectionsforteacher) - Returns the sections for a teacher
* [GetStudentsForTeacher](#getstudentsforteacher) - Returns the students for a teacher
* [GetTeacher](#getteacher) - Returns a specific teacher
* [GetTeachers](#getteachers) - Returns a list of teachers

## GetDistrictForTeacher

Returns the district for a teacher

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
    res, err := s.Teachers.GetDistrictForTeacher(ctx, operations.GetDistrictForTeacherRequest{
        ID: "be3a5aa8-e482-44d0-ab40-75088e518620",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictResponse != nil {
        // handle response
    }
}
```

## GetGradeLevelsForTeacher

Returns the grade levels for sections a teacher teaches

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
    res, err := s.Teachers.GetGradeLevelsForTeacher(ctx, operations.GetGradeLevelsForTeacherRequest{
        ID: "65e904f3-b119-44b8-abf6-03a79f9dfe0a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GradeLevelsResponse != nil {
        // handle response
    }
}
```

## GetSchoolForTeacher

Retrieves school info for a teacher.

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
    res, err := s.Teachers.GetSchoolForTeacher(ctx, operations.GetSchoolForTeacherRequest{
        ID: "b7da8a50-ce18-47f8-abc1-73d689eee952",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolResponse != nil {
        // handle response
    }
}
```

## GetSectionsForTeacher

Returns the sections for a teacher

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
    res, err := s.Teachers.GetSectionsForTeacher(ctx, operations.GetSectionsForTeacherRequest{
        EndingBefore: sdk.String("ex"),
        ID: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
        Limit: sdk.Int64(597937),
        StartingAfter: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SectionsResponse != nil {
        // handle response
    }
}
```

## GetStudentsForTeacher

Returns the students for a teacher

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
    res, err := s.Teachers.GetStudentsForTeacher(ctx, operations.GetStudentsForTeacherRequest{
        EndingBefore: sdk.String("adipisci"),
        ID: "e922a57a-15be-43e0-a080-7e2b6e3ab884",
        Limit: sdk.Int64(320565),
        StartingAfter: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentsResponse != nil {
        // handle response
    }
}
```

## GetTeacher

Returns a specific teacher

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
    res, err := s.Teachers.GetTeacher(ctx, operations.GetTeacherRequest{
        ID: "0597a60f-f2a5-44a3-9e94-764a3e865e79",
        Include: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeacherResponse != nil {
        // handle response
    }
}
```

## GetTeachers

Returns a list of teachers

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
    res, err := s.Teachers.GetTeachers(ctx, operations.GetTeachersRequest{
        EndingBefore: sdk.String("eum"),
        Limit: sdk.Int64(970494),
        StartingAfter: sdk.String("provident"),
        Where: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeachersResponse != nil {
        // handle response
    }
}
```
