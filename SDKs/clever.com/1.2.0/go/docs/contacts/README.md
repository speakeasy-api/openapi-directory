# Contacts

### Available Operations

* [GetContact](#getcontact) - Returns a specific student contact
* [GetContacts](#getcontacts) - Returns a list of student contacts
* [GetDistrictForStudentContact](#getdistrictforstudentcontact) - Returns the district for a student contact
* [GetStudentForContact](#getstudentforcontact) - Returns the student for a student contact

## GetContact

Returns a specific student contact

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
    res, err := s.Contacts.GetContact(ctx, operations.GetContactRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentContactResponse != nil {
        // handle response
    }
}
```

## GetContacts

Returns a list of student contacts

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
    res, err := s.Contacts.GetContacts(ctx, operations.GetContactsRequest{
        EndingBefore: sdk.String("impedit"),
        Limit: sdk.Int64(736918),
        StartingAfter: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentContactsResponse != nil {
        // handle response
    }
}
```

## GetDistrictForStudentContact

Returns the district for a student contact

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
    res, err := s.Contacts.GetDistrictForStudentContact(ctx, operations.GetDistrictForStudentContactRequest{
        ID: "39205929-396f-4ea7-996e-b10faaa2352c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictResponse != nil {
        // handle response
    }
}
```

## GetStudentForContact

Returns the student for a student contact

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
    res, err := s.Contacts.GetStudentForContact(ctx, operations.GetStudentForContactRequest{
        ID: "5955907a-ff1a-43a2-ba94-67739251aa52",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudentResponse != nil {
        // handle response
    }
}
```
