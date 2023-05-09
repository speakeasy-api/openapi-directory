# SDK

## Overview

<p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects:</p> <p>Notification rules, by calling the following: </p> <ul> <li> <p> <a>CreateNotificationRule</a>, which creates a notification rule for a resource in your account. </p> </li> <li> <p> <a>DeleteNotificationRule</a>, which deletes a notification rule. </p> </li> <li> <p> <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p> </li> <li> <p> <a>ListNotificationRules</a>, which lists the notification rules associated with your account. </p> </li> <li> <p> <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a notification rule. </p> </li> <li> <p> <a>Subscribe</a>, which subscribes a target to a notification rule. </p> </li> <li> <p> <a>Unsubscribe</a>, which removes a target from a notification rule. </p> </li> </ul> <p>Targets, by calling the following: </p> <ul> <li> <p> <a>DeleteTarget</a>, which removes a notification rule target from a notification rule. </p> </li> <li> <p> <a>ListTargets</a>, which lists the targets associated with a notification rule. </p> </li> </ul> <p>Events, by calling the following: </p> <ul> <li> <p> <a>ListEventTypes</a>, which lists the event types you can include in a notification rule. </p> </li> </ul> <p>Tags, by calling the following: </p> <ul> <li> <p> <a>ListTagsForResource</a>, which lists the tags already associated with a notification rule in your account. </p> </li> <li> <p> <a>TagResource</a>, which associates a tag you provide with a notification rule in your account. </p> </li> <li> <p> <a>UntagResource</a>, which removes a tag from a notification rule in your account. </p> </li> </ul> <p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar-notifications/>
### Available Operations

* [CreateNotificationRule](#createnotificationrule) - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* [DeleteNotificationRule](#deletenotificationrule) - Deletes a notification rule for a resource.
* [DeleteTarget](#deletetarget) - Deletes a specified target for notifications.
* [DescribeNotificationRule](#describenotificationrule) - Returns information about a specified notification rule.
* [ListEventTypes](#listeventtypes) - Returns information about the event types available for configuring notifications.
* [ListNotificationRules](#listnotificationrules) - Returns a list of the notification rules for an Amazon Web Services account.
* [ListTagsForResource](#listtagsforresource) - Returns a list of the tags associated with a notification rule.
* [ListTargets](#listtargets) - Returns a list of the notification rule targets for an Amazon Web Services account.
* [Subscribe](#subscribe) - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* [TagResource](#tagresource) - Associates a set of provided tags with a notification rule.
* [Unsubscribe](#unsubscribe) - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* [UntagResource](#untagresource) - Removes the association between one or more provided tags and a notification rule.
* [UpdateNotificationRule](#updatenotificationrule) - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>

## CreateNotificationRule

Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateNotificationRule(ctx, operations.CreateNotificationRuleRequest{
        RequestBody: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: sdk.String("perferendis"),
            DetailType: operations.CreateNotificationRuleRequestBodyDetailTypeEnumBasic,
            EventTypeIds: []string{
                "sapiente",
                "quo",
                "odit",
                "at",
            },
            Name: "at",
            Resource: "maiores",
            Status: operations.CreateNotificationRuleRequestBodyStatusEnumEnabled.ToPointer(),
            Tags: map[string]string{
                "quod": "esse",
                "totam": "porro",
                "dolorum": "dicta",
                "nam": "officia",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: sdk.String("fugit"),
                    TargetType: sdk.String("deleniti"),
                },
                shared.Target{
                    TargetAddress: sdk.String("hic"),
                    TargetType: sdk.String("optio"),
                },
                shared.Target{
                    TargetAddress: sdk.String("totam"),
                    TargetType: sdk.String("beatae"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotificationRuleResult != nil {
        // handle response
    }
}
```

## DeleteNotificationRule

Deletes a notification rule for a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteNotificationRule(ctx, operations.DeleteNotificationRuleRequest{
        RequestBody: operations.DeleteNotificationRuleRequestBody{
            Arn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNotificationRuleResult != nil {
        // handle response
    }
}
```

## DeleteTarget

Deletes a specified target for notifications.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTarget(ctx, operations.DeleteTargetRequest{
        RequestBody: operations.DeleteTargetRequestBody{
            ForceUnsubscribeAll: sdk.Bool(false),
            TargetAddress: "dolor",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTargetResult != nil {
        // handle response
    }
}
```

## DescribeNotificationRule

Returns information about a specified notification rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeNotificationRule(ctx, operations.DescribeNotificationRuleRequest{
        RequestBody: operations.DescribeNotificationRuleRequestBody{
            Arn: "iste",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNotificationRuleResult != nil {
        // handle response
    }
}
```

## ListEventTypes

Returns information about the event types available for configuring notifications.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEventTypes(ctx, operations.ListEventTypesRequest{
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("laborum"),
        RequestBody: operations.ListEventTypesRequestBody{
            Filters: []shared.ListEventTypesFilter{
                shared.ListEventTypesFilter{
                    Name: shared.ListEventTypesFilterNameEnumResourceType,
                    Value: "corporis",
                },
            },
            MaxResults: sdk.Int64(128926),
            NextToken: sdk.String("nobis"),
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventTypesResult != nil {
        // handle response
    }
}
```

## ListNotificationRules

Returns a list of the notification rules for an Amazon Web Services account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListNotificationRules(ctx, operations.ListNotificationRulesRequest{
        MaxResults: sdk.String("culpa"),
        NextToken: sdk.String("doloribus"),
        RequestBody: operations.ListNotificationRulesRequestBody{
            Filters: []shared.ListNotificationRulesFilter{
                shared.ListNotificationRulesFilter{
                    Name: shared.ListNotificationRulesFilterNameEnumEventTypeID,
                    Value: "mollitia",
                },
                shared.ListNotificationRulesFilter{
                    Name: shared.ListNotificationRulesFilterNameEnumEventTypeID,
                    Value: "culpa",
                },
                shared.ListNotificationRulesFilter{
                    Name: shared.ListNotificationRulesFilterNameEnumEventTypeID,
                    Value: "repellat",
                },
                shared.ListNotificationRulesFilter{
                    Name: shared.ListNotificationRulesFilterNameEnumResource,
                    Value: "occaecati",
                },
            },
            MaxResults: sdk.Int64(253291),
            NextToken: sdk.String("commodi"),
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationRulesResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of the tags associated with a notification rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        RequestBody: operations.ListTagsForResourceRequestBody{
            Arn: "laborum",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResult != nil {
        // handle response
    }
}
```

## ListTargets

Returns a list of the notification rule targets for an Amazon Web Services account.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTargets(ctx, operations.ListTargetsRequest{
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("possimus"),
        RequestBody: operations.ListTargetsRequestBody{
            Filters: []shared.ListTargetsFilter{
                shared.ListTargetsFilter{
                    Name: shared.ListTargetsFilterNameEnumTargetType,
                    Value: "error",
                },
            },
            MaxResults: sdk.Int64(837945),
            NextToken: sdk.String("laborum"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTargetsResult != nil {
        // handle response
    }
}
```

## Subscribe

Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Subscribe(ctx, operations.SubscribeRequest{
        RequestBody: operations.SubscribeRequestBody{
            Arn: "ipsa",
            ClientRequestToken: sdk.String("omnis"),
            Target: operations.SubscribeRequestBodyTarget{
                TargetAddress: sdk.String("voluptate"),
                TargetType: sdk.String("cum"),
            },
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribeResult != nil {
        // handle response
    }
}
```

## TagResource

Associates a set of provided tags with a notification rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Arn: "dolore",
            Tags: map[string]string{
                "dicta": "harum",
                "enim": "accusamus",
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResult != nil {
        // handle response
    }
}
```

## Unsubscribe

Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Unsubscribe(ctx, operations.UnsubscribeRequest{
        RequestBody: operations.UnsubscribeRequestBody{
            Arn: "pariatur",
            TargetAddress: "modi",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnsubscribeResult != nil {
        // handle response
    }
}
```

## UntagResource

Removes the association between one or more provided tags and a notification rule.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        ResourceArn: "deserunt",
        TagKeys: []string{
            "quibusdam",
            "labore",
            "modi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResult != nil {
        // handle response
    }
}
```

## UpdateNotificationRule

<p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateNotificationRule(ctx, operations.UpdateNotificationRuleRequest{
        RequestBody: operations.UpdateNotificationRuleRequestBody{
            Arn: "qui",
            DetailType: operations.UpdateNotificationRuleRequestBodyDetailTypeEnumBasic.ToPointer(),
            EventTypeIds: []string{
                "quos",
                "perferendis",
                "magni",
            },
            Name: sdk.String("assumenda"),
            Status: operations.UpdateNotificationRuleRequestBodyStatusEnumEnabled.ToPointer(),
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: sdk.String("fugit"),
                    TargetType: sdk.String("dolorum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotificationRuleResult != nil {
        // handle response
    }
}
```
