# Consumers

## Overview

A consumer represents an account or user in your system. All connections to connectors are scoped to a consumer.

### Available Operations

* [ConsumerRequestCountsAll](#consumerrequestcountsall) - Consumer request counts
* [ConsumersAdd](#consumersadd) - Create consumer
* [ConsumersAll](#consumersall) - Get all consumers
* [ConsumersDelete](#consumersdelete) - Delete consumer
* [ConsumersOne](#consumersone) - Get consumer
* [ConsumersUpdate](#consumersupdate) - Update consumer

## ConsumerRequestCountsAll

Get consumer request counts within a given datetime range.


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
    res, err := s.Consumers.ConsumerRequestCountsAll(ctx, operations.ConsumerRequestCountsAllRequest{
        ConsumerID: "iure",
        EndDatetime: "odio",
        StartDatetime: "quaerat",
        XApideckAppID: "accusamus",
    }, operations.ConsumerRequestCountsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConsumerRequestCountsInDateRangeResponse != nil {
        // handle response
    }
}
```

## ConsumersAdd

Create a consumer

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
    res, err := s.Consumers.ConsumersAdd(ctx, operations.ConsumersAddRequest{
        ConsumerInput: shared.ConsumerInput{
            ConsumerID: "test_consumer_id",
            Metadata: &shared.ConsumerMetadata{
                AccountName: sdk.String("SpaceX"),
                Email: sdk.String("elon@musk.com"),
                Image: sdk.String("https://www.spacex.com/static/images/share.jpg"),
                UserName: sdk.String("Elon Musk"),
            },
        },
        XApideckAppID: "quidem",
    }, operations.ConsumersAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConsumerResponse != nil {
        // handle response
    }
}
```

## ConsumersAll

This endpoint includes all application consumers, along with an aggregated count of requests made.


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
    res, err := s.Consumers.ConsumersAll(ctx, operations.ConsumersAllRequest{
        Cursor: sdk.String("voluptatibus"),
        Limit: sdk.Int64(377752),
        XApideckAppID: "natus",
    }, operations.ConsumersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConsumersResponse != nil {
        // handle response
    }
}
```

## ConsumersDelete

Delete consumer and all their connections, including credentials.

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
    res, err := s.Consumers.ConsumersDelete(ctx, operations.ConsumersDeleteRequest{
        ConsumerID: "eos",
        XApideckAppID: "atque",
    }, operations.ConsumersDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConsumerResponse != nil {
        // handle response
    }
}
```

## ConsumersOne

Consumer detail including their aggregated counts with the connections they have authorized.


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
    res, err := s.Consumers.ConsumersOne(ctx, operations.ConsumersOneRequest{
        ConsumerID: "sit",
        XApideckAppID: "fugiat",
    }, operations.ConsumersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConsumerResponse != nil {
        // handle response
    }
}
```

## ConsumersUpdate

Update consumer metadata such as name and email.

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
    res, err := s.Consumers.ConsumersUpdate(ctx, operations.ConsumersUpdateRequest{
        UpdateConsumerRequest: shared.UpdateConsumerRequest{
            Metadata: &shared.ConsumerMetadata{
                AccountName: sdk.String("SpaceX"),
                Email: sdk.String("elon@musk.com"),
                Image: sdk.String("https://www.spacex.com/static/images/share.jpg"),
                UserName: sdk.String("Elon Musk"),
            },
        },
        ConsumerID: "ab",
        XApideckAppID: "soluta",
    }, operations.ConsumersUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConsumerResponse != nil {
        // handle response
    }
}
```
