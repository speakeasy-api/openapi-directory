# SalesRep

### Available Operations

* [SalesRepDelete](#salesrepdelete) - Removes an existing Sale Rep.
* [SalesRepGet](#salesrepget) - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* [SalesRepPost](#salesreppost) - Creates a new SaleRep.
* [SalesRepProcessBatch](#salesrepprocessbatch) - Processes a batch of Sale Rep.
* [SalesRepPut](#salesrepput) - Updates an existing Sale Rep.
* [GetV1SalesRepsID](#getv1salesrepsid) - Returns information about a single SaleRep.

## SalesRepDelete

Removes an existing Sale Rep.

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
    res, err := s.SalesRep.SalesRepDelete(ctx, operations.SalesRepDeleteRequest{
        ID: 32719,
        Timestamp: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesRepDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesRepGet

Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SalesRep.SalesRepGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PageResultSaleRepsDto != nil {
        // handle response
    }
}
```

## SalesRepPost

Creates a new SaleRep.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SalesRep.SalesRepPost(ctx, shared.SaleRepsDto{
        Code: sdk.String("laudantium"),
        CompanyID: sdk.Int64(703407),
        Email: sdk.String("Fermin64@yahoo.com"),
        ID: sdk.Int64(312690),
        Name: sdk.String("Rochelle Kshlerin"),
        Phone: sdk.String("775.438.1106"),
        TimeStamp: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesRepPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesRepProcessBatch

Processes a batch of Sale Rep.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SalesRep.SalesRepProcessBatch(ctx, []shared.BatchItemSaleRepsDto{
        shared.BatchItemSaleRepsDto{
            Item: &shared.SaleRepsDto{
                Code: sdk.String("error"),
                CompanyID: sdk.Int64(973894),
                Email: sdk.String("May_Parisian56@gmail.com"),
                ID: sdk.Int64(256567),
                Name: sdk.String("Pat Mueller"),
                Phone: sdk.String("1-577-412-1444 x350"),
                TimeStamp: sdk.String("suscipit"),
            },
            OpCode: shared.BatchItemSaleRepsDtoOpCodeEnumThree.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesRepProcessBatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SalesRepPut

Updates an existing Sale Rep.

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
    res, err := s.SalesRep.SalesRepPut(ctx, operations.SalesRepPutRequest{
        SaleRepsDto: shared.SaleRepsDto{
            Code: sdk.String("fugiat"),
            CompanyID: sdk.Int64(771603),
            Email: sdk.String("Karine.Volkman7@yahoo.com"),
            ID: sdk.Int64(984669),
            Name: sdk.String("Rudolph Gleason"),
            Phone: sdk.String("(387) 217-8668 x0884"),
            TimeStamp: sdk.String("similique"),
        },
        ID: 962408,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesRepPut200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetV1SalesRepsID

Returns information about a single SaleRep.

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
    res, err := s.SalesRep.GetV1SalesRepsID(ctx, operations.GetV1SalesRepsIDRequest{
        ID: 904983,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaleRepsDto != nil {
        // handle response
    }
}
```
