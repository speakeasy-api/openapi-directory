# SDK

## Overview

<p> <b>Introduction</b> </p> <p>The Amazon Interactive Video Service (IVS) stage API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors. </p> <p>Terminology: The IVS stage API sometimes is referred to as the IVS RealTime API.</p> <p> <b>Resources</b> </p> <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html">Getting Started with Amazon IVS</a>):</p> <ul> <li> <p> <b>Stage</b> — A stage is a virtual space where multiple participants can exchange audio and video in real time.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p> <p>The Amazon IVS stage API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p> <p>At most 50 tags can be applied to a resource.</p> <p> <b>Stages Endpoints</b> </p> <ul> <li> <p> <a>CreateParticipantToken</a> — Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.</p> </li> <li> <p> <a>CreateStage</a> — Creates a new stage (and optionally participant tokens).</p> </li> <li> <p> <a>DeleteStage</a> — Shuts down and deletes the specified stage (disconnecting all participants).</p> </li> <li> <p> <a>DisconnectParticipant</a> — Disconnects a specified participant and revokes the participant permanently from a specified stage.</p> </li> <li> <p> <a>GetStage</a> — Gets information for the specified stage.</p> </li> <li> <p> <a>ListStages</a> — Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p> </li> <li> <p> <a>UpdateStage</a> — Updates a stage’s configuration.</p> </li> </ul> <p> <b>Tags Endpoints</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p> </li> <li> <p> <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ivsrealtime/>
### Available Operations

* [CreateParticipantToken](#createparticipanttoken) - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* [CreateStage](#createstage) - Creates a new stage (and optionally participant tokens).
* [DeleteStage](#deletestage) - Shuts down and deletes the specified stage (disconnecting all participants).
* [DisconnectParticipant](#disconnectparticipant) - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* [GetStage](#getstage) - Gets information for the specified stage.
* [ListStages](#liststages) - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* [ListTagsForResource](#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [TagResource](#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [UntagResource](#untagresource) - Removes tags from the resource with the specified ARN.
* [UpdateStage](#updatestage) - Updates a stage’s configuration.

## CreateParticipantToken

<p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>

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
    res, err := s.SDK.CreateParticipantToken(ctx, operations.CreateParticipantTokenRequest{
        RequestBody: operations.CreateParticipantTokenRequestBody{
            Attributes: map[string]string{
                "iusto": "excepturi",
                "nisi": "recusandae",
                "temporibus": "ab",
            },
            Capabilities: []shared.ParticipantTokenCapabilityEnum{
                shared.ParticipantTokenCapabilityEnumPublish,
                shared.ParticipantTokenCapabilityEnumSubscribe,
            },
            Duration: sdk.Int64(20218),
            StageArn: "ipsam",
            UserID: sdk.String("repellendus"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParticipantTokenResponse != nil {
        // handle response
    }
}
```

## CreateStage

Creates a new stage (and optionally participant tokens).

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
    res, err := s.SDK.CreateStage(ctx, operations.CreateStageRequest{
        RequestBody: operations.CreateStageRequestBody{
            Name: sdk.String("Forrest Koepp"),
            ParticipantTokenConfigurations: []shared.ParticipantTokenConfiguration{
                shared.ParticipantTokenConfiguration{
                    Attributes: map[string]string{
                        "nam": "officia",
                    },
                    Capabilities: []shared.ParticipantTokenCapabilityEnum{
                        shared.ParticipantTokenCapabilityEnumPublish,
                        shared.ParticipantTokenCapabilityEnumSubscribe,
                        shared.ParticipantTokenCapabilityEnumSubscribe,
                    },
                    Duration: sdk.Int64(758616),
                    UserID: sdk.String("totam"),
                },
                shared.ParticipantTokenConfiguration{
                    Attributes: map[string]string{
                        "commodi": "molestiae",
                    },
                    Capabilities: []shared.ParticipantTokenCapabilityEnum{
                        shared.ParticipantTokenCapabilityEnumPublish,
                        shared.ParticipantTokenCapabilityEnumSubscribe,
                    },
                    Duration: sdk.Int64(736918),
                    UserID: sdk.String("esse"),
                },
                shared.ParticipantTokenConfiguration{
                    Attributes: map[string]string{
                        "excepturi": "aspernatur",
                    },
                    Capabilities: []shared.ParticipantTokenCapabilityEnum{
                        shared.ParticipantTokenCapabilityEnumPublish,
                    },
                    Duration: sdk.Int64(617636),
                    UserID: sdk.String("sed"),
                },
            },
            Tags: map[string]string{
                "dolor": "natus",
                "laboriosam": "hic",
                "saepe": "fuga",
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStageResponse != nil {
        // handle response
    }
}
```

## DeleteStage

Shuts down and deletes the specified stage (disconnecting all participants).

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
    res, err := s.SDK.DeleteStage(ctx, operations.DeleteStageRequest{
        RequestBody: operations.DeleteStageRequestBody{
            Arn: "ipsa",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStageResponse != nil {
        // handle response
    }
}
```

## DisconnectParticipant

Disconnects a specified participant and revokes the participant permanently from a specified stage.

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
    res, err := s.SDK.DisconnectParticipant(ctx, operations.DisconnectParticipantRequest{
        RequestBody: operations.DisconnectParticipantRequestBody{
            ParticipantID: "explicabo",
            Reason: sdk.String("nobis"),
            StageArn: "enim",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisconnectParticipantResponse != nil {
        // handle response
    }
}
```

## GetStage

Gets information for the specified stage.

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
    res, err := s.SDK.GetStage(ctx, operations.GetStageRequest{
        RequestBody: operations.GetStageRequestBody{
            Arn: "doloribus",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStageResponse != nil {
        // handle response
    }
}
```

## ListStages

Gets summary information about all stages in your account, in the AWS region where the API request is processed.

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
    res, err := s.SDK.ListStages(ctx, operations.ListStagesRequest{
        RequestBody: operations.ListStagesRequestBody{
            MaxResults: sdk.Int64(653108),
            NextToken: sdk.String("occaecati"),
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
        MaxResults: sdk.String("quis"),
        NextToken: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStagesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets information about AWS tags for the specified ARN.

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
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        ResourceArn: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or updates tags for the AWS resource with the specified ARN.

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
            Tags: map[string]string{
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        ResourceArn: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from the resource with the specified ARN.

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
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("ut"),
        ResourceArn: "maiores",
        TagKeys: []string{
            "corporis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateStage

Updates a stage’s configuration.

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
    res, err := s.SDK.UpdateStage(ctx, operations.UpdateStageRequest{
        RequestBody: operations.UpdateStageRequestBody{
            Arn: "dolore",
            Name: sdk.String("Mildred Pfeffer"),
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

    if res.UpdateStageResponse != nil {
        // handle response
    }
}
```
