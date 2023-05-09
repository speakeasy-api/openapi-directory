# Departments

### Available Operations

* [DepartmentsAdd](#departmentsadd) - Create Department
* [DepartmentsAll](#departmentsall) - List Departments
* [DepartmentsDelete](#departmentsdelete) - Delete Department
* [DepartmentsOne](#departmentsone) - Get Department
* [DepartmentsUpdate](#departmentsupdate) - Update Department

## DepartmentsAdd

Create Department

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
    res, err := s.Departments.DepartmentsAdd(ctx, operations.DepartmentsAddRequest{
        DepartmentInput: shared.DepartmentInput{
            Code: sdk.String("2"),
            Description: sdk.String("R&D"),
            Name: sdk.String("R&D"),
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "quo",
        XApideckConsumerID: "sequi",
        XApideckServiceID: sdk.String("tenetur"),
    }, operations.DepartmentsAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDepartmentResponse != nil {
        // handle response
    }
}
```

## DepartmentsAll

List Departments

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
    res, err := s.Departments.DepartmentsAll(ctx, operations.DepartmentsAllRequest{
        Cursor: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Limit: sdk.Int64(820994),
        Raw: sdk.Bool(false),
        XApideckAppID: "aut",
        XApideckConsumerID: "quasi",
        XApideckServiceID: sdk.String("error"),
    }, operations.DepartmentsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDepartmentsResponse != nil {
        // handle response
    }
}
```

## DepartmentsDelete

Delete Department

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
    res, err := s.Departments.DepartmentsDelete(ctx, operations.DepartmentsDeleteRequest{
        ID: "da1ffe78-f097-4b00-b4f1-5471b5e6e13b",
        Raw: sdk.Bool(false),
        XApideckAppID: "molestias",
        XApideckConsumerID: "excepturi",
        XApideckServiceID: sdk.String("pariatur"),
    }, operations.DepartmentsDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDepartmentResponse != nil {
        // handle response
    }
}
```

## DepartmentsOne

Get Department

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
    res, err := s.Departments.DepartmentsOne(ctx, operations.DepartmentsOneRequest{
        Fields: sdk.String("modi"),
        ID: "88e1e91e-450a-4d2a-bd44-269802d502a9",
        Raw: sdk.Bool(false),
        XApideckAppID: "tempora",
        XApideckConsumerID: "facilis",
        XApideckServiceID: sdk.String("tempore"),
    }, operations.DepartmentsOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDepartmentResponse != nil {
        // handle response
    }
}
```

## DepartmentsUpdate

Update Department

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
    res, err := s.Departments.DepartmentsUpdate(ctx, operations.DepartmentsUpdateRequest{
        DepartmentInput: shared.DepartmentInput{
            Code: sdk.String("2"),
            Description: sdk.String("R&D"),
            Name: sdk.String("R&D"),
        },
        ID: "4f63c969-e9a3-4efa-b7df-b14cd66ae395",
        Raw: sdk.Bool(false),
        XApideckAppID: "accusamus",
        XApideckConsumerID: "delectus",
        XApideckServiceID: sdk.String("quidem"),
    }, operations.DepartmentsUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDepartmentResponse != nil {
        // handle response
    }
}
```
