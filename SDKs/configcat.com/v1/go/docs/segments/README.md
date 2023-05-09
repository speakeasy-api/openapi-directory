# Segments

## Overview

With these endpoints you can manage your Segments.
Segments allow you to group your users based on any of their properties. Define user segments and add them to multiple feature flags.

### Available Operations

* [CreateSegment](#createsegment) - Create Segment
* [DeleteSegment](#deletesegment) - Delete Segment
* [GetSegment](#getsegment) - Get Segment
* [GetSegments](#getsegments) - List Segments
* [UpdateSegment](#updatesegment) - Update Segment

## CreateSegment

This endpoint creates a new Segment in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Segments.CreateSegment(ctx, operations.CreateSegmentRequest{
        CreateSegmentModel: shared.CreateSegmentModel{
            Comparator: shared.RolloutRuleComparatorEnumSemVerLess,
            ComparisonAttribute: "sed",
            ComparisonValue: "odio",
            Description: sdk.String("natus"),
            Name: "Felipe Wyman",
        },
        ProductID: "e6949fb2-bb4e-4cae-ac3d-5db3adebd5da",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentModelHaljson != nil {
        // handle response
    }
}
```

## DeleteSegment

This endpoint removes a Segment identified by the `segmentId` parameter.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Segments.DeleteSegment(ctx, operations.DeleteSegmentRequest{
        SegmentID: "ea4c506a-8aa9-44c0-a644-cf5e9d9a4578",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSegment

This endpoint returns the metadata of a Segment
identified by the `segmentId`.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Segments.GetSegment(ctx, operations.GetSegmentRequest{
        SegmentID: "adc1ac60-0dec-4001-ac80-2e2ec09ff8f0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentModelHaljson != nil {
        // handle response
    }
}
```

## GetSegments

This endpoint returns the list of the Segments that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Segments.GetSegments(ctx, operations.GetSegmentsRequest{
        ProductID: "f816ff34-77c1-43e9-82c1-4125b0960a66",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentListModelHaljsons != nil {
        // handle response
    }
}
```

## UpdateSegment

This endpoint updates a Segment identified by the `segmentId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Segments.UpdateSegment(ctx, operations.UpdateSegmentRequest{
        UpdateSegmentModel: shared.UpdateSegmentModel{
            Comparator: shared.RolloutRuleComparatorEnumNumberEquals.ToPointer(),
            ComparisonAttribute: sdk.String("veritatis"),
            ComparisonValue: sdk.String("ullam"),
            Description: sdk.String("quae"),
            Name: sdk.String("Barry Koepp"),
        },
        SegmentID: "f923c594-9f83-4f35-8cf8-76ffb901c6ec",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentModelHaljson != nil {
        // handle response
    }
}
```
