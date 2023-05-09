# Topics

### Available Operations

* [BookmarkTopic](#bookmarktopic) - Bookmark topic
* [CreateTopicPostPM](#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [CreateTopicTimer](#createtopictimer) - Create topic timer
* [GetSpecificPostsFromTopic](#getspecificpostsfromtopic) - Get specific posts from a topic
* [GetTopic](#gettopic) - Get a single topic
* [GetTopicByExternalID](#gettopicbyexternalid) - Get topic by external_id
* [InviteToTopic](#invitetotopic) - Invite to topic
* [ListLatestTopics](#listlatesttopics) - Get the latest topics
* [ListTopTopics](#listtoptopics) - Get the top topics filtered by period
* [RemoveTopic](#removetopic) - Remove a topic
* [SetNotificationLevel](#setnotificationlevel) - Set notification level
* [UpdateTopic](#updatetopic) - Update a topic
* [UpdateTopicStatus](#updatetopicstatus) - Update the status of a topic
* [UpdateTopicTimestamp](#updatetopictimestamp) - Update topic timestamp

## BookmarkTopic

Bookmark topic

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
    res, err := s.Topics.BookmarkTopic(ctx, operations.BookmarkTopicRequest{
        APIKey: "dolorem",
        APIUsername: "dolore",
        ID: "43a1108e-0adc-4f4b-9218-79fce953f73e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateTopicPostPM

Creates a new topic, a new post, or a private message

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
    res, err := s.Topics.CreateTopicPostPM(ctx, operations.CreateTopicPostPMRequestBody{
        Archetype: sdk.String("tenetur"),
        Category: sdk.Int64(492268),
        CreatedAt: sdk.String("hic"),
        EmbedURL: sdk.String("distinctio"),
        ExternalID: sdk.String("quod"),
        Raw: "odio",
        TargetRecipients: sdk.String("similique"),
        TargetUsernames: sdk.String("facilis"),
        Title: sdk.String("Dr."),
        TopicID: sdk.Int64(498140),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTopicPostPM200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateTopicTimer

Create topic timer

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
    res, err := s.Topics.CreateTopicTimer(ctx, operations.CreateTopicTimerRequest{
        APIKey: "dolore",
        APIUsername: "quibusdam",
        RequestBody: &operations.CreateTopicTimerRequestBody{
            BasedOnLastPost: sdk.Bool(false),
            CategoryID: sdk.Int64(848944),
            StatusType: sdk.String("sequi"),
            Time: sdk.String("natus"),
        },
        ID: "c0f5d2cf-f7c7-40a4-9626-d436813f16d9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTopicTimer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpecificPostsFromTopic

Get specific posts from a topic

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
    res, err := s.Topics.GetSpecificPostsFromTopic(ctx, operations.GetSpecificPostsFromTopicRequest{
        APIKey: "voluptatibus",
        APIUsername: "nostrum",
        RequestBody: &operations.GetSpecificPostsFromTopicRequestBody{
            PostIds: 960835,
        },
        ID: "ce6c5561-46c3-4e25-8fb0-08c42e141aac",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpecificPostsFromTopic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTopic

Get a single topic

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
    res, err := s.Topics.GetTopic(ctx, operations.GetTopicRequest{
        APIKey: "velit",
        APIUsername: "eum",
        ID: "6c8dd6b1-4429-4074-b477-8a7bd466d28c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTopic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTopicByExternalID

Get topic by external_id

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
    res, err := s.Topics.GetTopicByExternalID(ctx, operations.GetTopicByExternalIDRequest{
        ExternalID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InviteToTopic

Invite to topic

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
    res, err := s.Topics.InviteToTopic(ctx, operations.InviteToTopicRequest{
        APIKey: "ipsa",
        APIUsername: "id",
        RequestBody: &operations.InviteToTopicRequestBody{
            Email: sdk.String("Cooper_Satterfield68@hotmail.com"),
            User: sdk.String("eius"),
        },
        ID: "251904e5-23c7-4e0b-8717-8e4796f2a70c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InviteToTopic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListLatestTopics

Get the latest topics

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
    res, err := s.Topics.ListLatestTopics(ctx, operations.ListLatestTopicsRequest{
        APIKey: "eum",
        APIUsername: "quas",
        Ascending: sdk.String("praesentium"),
        Order: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLatestTopics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListTopTopics

Get the top topics filtered by period

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
    res, err := s.Topics.ListTopTopics(ctx, operations.ListTopTopicsRequest{
        APIKey: "deleniti",
        APIUsername: "fugit",
        Period: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTopTopics200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveTopic

Remove a topic

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
    res, err := s.Topics.RemoveTopic(ctx, operations.RemoveTopicRequest{
        APIKey: "mollitia",
        APIUsername: "incidunt",
        ID: "82562f22-2e98-417e-a17c-be61e6b7b95b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SetNotificationLevel

Set notification level

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
    res, err := s.Topics.SetNotificationLevel(ctx, operations.SetNotificationLevelRequest{
        APIKey: "eligendi",
        APIUsername: "sit",
        RequestBody: &operations.SetNotificationLevelRequestBody{
            NotificationLevel: operations.SetNotificationLevelRequestBodyNotificationLevelEnumTwo,
        },
        ID: "b3c20c4f-3789-4fd8-b1f9-9dd2efd121aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetNotificationLevel200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTopic

Update a topic

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
    res, err := s.Topics.UpdateTopic(ctx, operations.UpdateTopicRequest{
        APIKey: "aliquid",
        APIUsername: "tenetur",
        RequestBody: &operations.UpdateTopicRequestBody{
            Topic: &operations.UpdateTopicRequestBodyTopic{
                CategoryID: sdk.Int64(62713),
                Title: sdk.String("Dr."),
            },
        },
        ID: "674bdb04-f157-4560-82d6-8ea19f1d1705",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTopic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTopicStatus

Update the status of a topic

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
    res, err := s.Topics.UpdateTopicStatus(ctx, operations.UpdateTopicStatusRequest{
        APIKey: "veritatis",
        APIUsername: "consectetur",
        RequestBody: &operations.UpdateTopicStatusRequestBody{
            Enabled: operations.UpdateTopicStatusRequestBodyEnabledEnumTrue,
            Status: operations.UpdateTopicStatusRequestBodyStatusEnumArchived,
            Until: sdk.String("temporibus"),
        },
        ID: "08086a18-4039-44c2-a071-f93f5f0642da",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTopicStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateTopicTimestamp

Update topic timestamp

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
    res, err := s.Topics.UpdateTopicTimestamp(ctx, operations.UpdateTopicTimestampRequest{
        APIKey: "maxime",
        APIUsername: "dignissimos",
        RequestBody: &operations.UpdateTopicTimestampRequestBody{
            Timestamp: "officia",
        },
        ID: "f515cc41-3aa6-43aa-a8d6-7864dbb675fd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTopicTimestamp200ApplicationJSONObject != nil {
        // handle response
    }
}
```
