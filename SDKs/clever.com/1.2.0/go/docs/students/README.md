# Students

### Available Operations

* [GetContactsForStudent](#getcontactsforstudent) - Returns the contacts for a student
* [GetDistrictForStudent](#getdistrictforstudent) - Returns the district for a student
* [GetSchoolForStudent](#getschoolforstudent) - Returns the primary school for a student
* [GetSectionsForStudent](#getsectionsforstudent) - Returns the sections for a student
* [GetStudent](#getstudent) - Returns a specific student
* [GetStudents](#getstudents) - Returns a list of students
* [GetTeachersForStudent](#getteachersforstudent) - Returns the teachers for a student

## GetContactsForStudent

Returns the contacts for a student

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
    res, err := s.Students.GetContactsForStudent(ctx, operations.GetContactsForStudentRequest{
        ID: "26071f93-f5f0-4642-9ac7-af515cc413aa",
        Limit: sdk.Int64(380729),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentContactsForStudentResponse != nil {
        // handle response
    }
}
```

## GetDistrictForStudent

Returns the district for a student

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
    res, err := s.Students.GetDistrictForStudent(ctx, operations.GetDistrictForStudentRequest{
        ID: "3aae8d67-864d-4bb6-b5fd-5e60b375ed4f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictResponse != nil {
        // handle response
    }
}
```

## GetSchoolForStudent

Returns the primary school for a student

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
    res, err := s.Students.GetSchoolForStudent(ctx, operations.GetSchoolForStudentRequest{
        ID: "6fbee41f-3331-47fe-b5b6-0eb1ea426555",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchoolResponse != nil {
        // handle response
    }
}
```

## GetSectionsForStudent

Returns the sections for a student

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
    res, err := s.Students.GetSectionsForStudent(ctx, operations.GetSectionsForStudentRequest{
        EndingBefore: sdk.String("nobis"),
        ID: "a3c28744-ed53-4b88-b3a8-d8f5c0b2f2fb",
        Limit: sdk.Int64(451822),
        StartingAfter: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SectionsResponse != nil {
        // handle response
    }
}
```

## GetStudent

Returns a specific student

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
    res, err := s.Students.GetStudent(ctx, operations.GetStudentRequest{
        ID: "194a276b-2691-46fe-9f08-f4294e3698f4",
        Include: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentResponse != nil {
        // handle response
    }
}
```

## GetStudents

Returns a list of students

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
    res, err := s.Students.GetStudents(ctx, operations.GetStudentsRequest{
        EndingBefore: sdk.String("voluptate"),
        Limit: sdk.Int64(970076),
        StartingAfter: sdk.String("ex"),
        Where: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentsResponse != nil {
        // handle response
    }
}
```

## GetTeachersForStudent

Returns the teachers for a student

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
    res, err := s.Students.GetTeachersForStudent(ctx, operations.GetTeachersForStudentRequest{
        EndingBefore: sdk.String("non"),
        ID: "e8b445e8-0ca5-45ef-920e-457e1858b6a8",
        Limit: sdk.Int64(622385),
        StartingAfter: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeachersResponse != nil {
        // handle response
    }
}
```
