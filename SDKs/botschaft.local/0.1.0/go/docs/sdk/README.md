# SDK

### Available Operations

* [ConfigConfigGet](#configconfigget) - Config
* [TopicTopicTopicNameGet](#topictopictopicnameget) - Topic

## ConfigConfigGet

Config

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
    res, err := s.SDK.ConfigConfigGet(ctx, operations.ConfigConfigGetRequest{
        Authorization: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Config != nil {
        // handle response
    }
}
```

## TopicTopicTopicNameGet

Topic

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
    res, err := s.SDK.TopicTopicTopicNameGet(ctx, operations.TopicTopicTopicNameGetRequest{
        Authorization: sdk.String("distinctio"),
        Base64Message: sdk.String("quibusdam"),
        Message: sdk.String("unde"),
        TopicName: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TopicTopicTopicNameGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```
