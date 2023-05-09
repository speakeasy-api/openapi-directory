# SDK

## Overview

Provide APIs to create and manage Amazon Connect Campaigns.

Amazon Web Services documentation
<https://docs.aws.amazon.com/connect-campaigns/>
### Available Operations

* [CreateCampaign](#createcampaign) - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* [DeleteCampaign](#deletecampaign) - Deletes a campaign from the specified Amazon Connect account.
* [DeleteConnectInstanceConfig](#deleteconnectinstanceconfig) - Deletes a connect instance config from the specified AWS account.
* [DeleteInstanceOnboardingJob](#deleteinstanceonboardingjob) - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* [DescribeCampaign](#describecampaign) - Describes the specific campaign.
* [GetCampaignState](#getcampaignstate) - Get state of a campaign for the specified Amazon Connect account.
* [GetCampaignStateBatch](#getcampaignstatebatch) - Get state of campaigns for the specified Amazon Connect account.
* [GetConnectInstanceConfig](#getconnectinstanceconfig) - Get the specific Connect instance config.
* [GetInstanceOnboardingJobStatus](#getinstanceonboardingjobstatus) - Get the specific instance onboarding job status.
* [ListCampaigns](#listcampaigns) - Provides summary information about the campaigns under the specified Amazon Connect account.
* [ListTagsForResource](#listtagsforresource) - List tags for a resource.
* [PauseCampaign](#pausecampaign) - Pauses a campaign for the specified Amazon Connect account.
* [PutDialRequestBatch](#putdialrequestbatch) - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* [ResumeCampaign](#resumecampaign) - Stops a campaign for the specified Amazon Connect account.
* [StartCampaign](#startcampaign) - Starts a campaign for the specified Amazon Connect account.
* [StartInstanceOnboardingJob](#startinstanceonboardingjob) - Onboard the specific Amazon Connect instance to Connect Campaigns.
* [StopCampaign](#stopcampaign) - Stops a campaign for the specified Amazon Connect account.
* [TagResource](#tagresource) - Tag a resource.
* [UntagResource](#untagresource) - Untag a resource.
* [UpdateCampaignDialerConfig](#updatecampaigndialerconfig) - Updates the dialer config of a campaign. This API is idempotent.
* [UpdateCampaignName](#updatecampaignname) - Updates the name of a campaign. This API is idempotent.
* [UpdateCampaignOutboundCallConfig](#updatecampaignoutboundcallconfig) - Updates the outbound call config of a campaign. This API is idempotent.

## CreateCampaign

Creates a campaign for the specified Amazon Connect account. This API is idempotent.

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
    res, err := s.SDK.CreateCampaign(ctx, operations.CreateCampaignRequest{
        RequestBody: operations.CreateCampaignRequestBody{
            ConnectInstanceID: "iusto",
            DialerConfig: operations.CreateCampaignRequestBodyDialerConfig{
                PredictiveDialerConfig: &shared.PredictiveDialerConfig{
                    BandwidthAllocation: 5680.45,
                },
                ProgressiveDialerConfig: &shared.ProgressiveDialerConfig{
                    BandwidthAllocation: 3927.85,
                },
            },
            Name: "Jake Bernier MD",
            OutboundCallConfig: operations.CreateCampaignRequestBodyOutboundCallConfig{
                AnswerMachineDetectionConfig: &shared.AnswerMachineDetectionConfig{
                    EnableAnswerMachineDetection: false,
                },
                ConnectContactFlowID: sdk.String("perferendis"),
                ConnectQueueID: sdk.String("ipsam"),
                ConnectSourcePhoneNumber: sdk.String("repellendus"),
            },
            Tags: map[string]string{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCampaignResponse != nil {
        // handle response
    }
}
```

## DeleteCampaign

Deletes a campaign from the specified Amazon Connect account.

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
    res, err := s.SDK.DeleteCampaign(ctx, operations.DeleteCampaignRequest{
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
        ID: "6742cb73-9205-4929-b96f-ea7596eb10fa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteConnectInstanceConfig

Deletes a connect instance config from the specified AWS account.

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
    res, err := s.SDK.DeleteConnectInstanceConfig(ctx, operations.DeleteConnectInstanceConfigRequest{
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        ConnectInstanceID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteInstanceOnboardingJob

Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.

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
    res, err := s.SDK.DeleteInstanceOnboardingJob(ctx, operations.DeleteInstanceOnboardingJobRequest{
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        ConnectInstanceID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeCampaign

Describes the specific campaign.

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
    res, err := s.SDK.DescribeCampaign(ctx, operations.DescribeCampaignRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellat"),
        ID: "a9467739-251a-4a52-83f5-ad019da1ffe7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCampaignResponse != nil {
        // handle response
    }
}
```

## GetCampaignState

Get state of a campaign for the specified Amazon Connect account.

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
    res, err := s.SDK.GetCampaignState(ctx, operations.GetCampaignStateRequest{
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        ID: "074f1547-1b5e-46e1-bb99-d488e1e91e45",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCampaignStateResponse != nil {
        // handle response
    }
}
```

## GetCampaignStateBatch

Get state of campaigns for the specified Amazon Connect account.

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
    res, err := s.SDK.GetCampaignStateBatch(ctx, operations.GetCampaignStateBatchRequest{
        RequestBody: operations.GetCampaignStateBatchRequestBody{
            CampaignIds: []string{
                "est",
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCampaignStateBatchResponse != nil {
        // handle response
    }
}
```

## GetConnectInstanceConfig

Get the specific Connect instance config.

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
    res, err := s.SDK.GetConnectInstanceConfig(ctx, operations.GetConnectInstanceConfigRequest{
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        ConnectInstanceID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConnectInstanceConfigResponse != nil {
        // handle response
    }
}
```

## GetInstanceOnboardingJobStatus

Get the specific instance onboarding job status.

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
    res, err := s.SDK.GetInstanceOnboardingJobStatus(ctx, operations.GetInstanceOnboardingJobStatusRequest{
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("tempore"),
        ConnectInstanceID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInstanceOnboardingJobStatusResponse != nil {
        // handle response
    }
}
```

## ListCampaigns

Provides summary information about the campaigns under the specified Amazon Connect account.

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
    res, err := s.SDK.ListCampaigns(ctx, operations.ListCampaignsRequest{
        RequestBody: operations.ListCampaignsRequestBody{
            Filters: &operations.ListCampaignsRequestBodyFilters{
                InstanceIDFilter: &shared.InstanceIDFilter{
                    Operator: shared.InstanceIDFilterOperatorEnumEq,
                    Value: "delectus",
                },
            },
            MaxResults: sdk.Int64(433288),
            NextToken: sdk.String("non"),
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCampaignsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

List tags for a resource.

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
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        Arn: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PauseCampaign

Pauses a campaign for the specified Amazon Connect account.

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
    res, err := s.SDK.PauseCampaign(ctx, operations.PauseCampaignRequest{
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ID: "395efb9b-a88f-43a6-a997-074ba4469b6e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutDialRequestBatch

Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutDialRequestBatch(ctx, operations.PutDialRequestBatchRequest{
        RequestBody: operations.PutDialRequestBatchRequestBody{
            DialRequests: []shared.DialRequest{
                shared.DialRequest{
                    Attributes: map[string]string{
                        "magnam": "et",
                    },
                    ClientToken: "excepturi",
                    ExpirationTime: types.MustTimeFromString("2022-05-30T07:57:16.138Z"),
                    PhoneNumber: "quos",
                },
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        ID: "3e2516fe-4c8b-4711-a5b7-fd2ed028921c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutDialRequestBatchResponse != nil {
        // handle response
    }
}
```

## ResumeCampaign

Stops a campaign for the specified Amazon Connect account.

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
    res, err := s.SDK.ResumeCampaign(ctx, operations.ResumeCampaignRequest{
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("ea"),
        ID: "01fb576b-0d5f-40d3-8c5f-bb2587053202",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartCampaign

Starts a campaign for the specified Amazon Connect account.

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
    res, err := s.SDK.StartCampaign(ctx, operations.StartCampaignRequest{
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        ID: "9b90c289-09b3-4fe4-9a8d-9cbf48633323",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StartInstanceOnboardingJob

Onboard the specific Amazon Connect instance to Connect Campaigns.

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
    res, err := s.SDK.StartInstanceOnboardingJob(ctx, operations.StartInstanceOnboardingJobRequest{
        RequestBody: operations.StartInstanceOnboardingJobRequestBody{
            EncryptionConfig: operations.StartInstanceOnboardingJobRequestBodyEncryptionConfig{
                Enabled: sdk.Bool(false),
                EncryptionType: shared.EncryptionTypeEnumKms.ToPointer(),
                KeyArn: sdk.String("hic"),
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        ConnectInstanceID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartInstanceOnboardingJobResponse != nil {
        // handle response
    }
}
```

## StopCampaign

Stops a campaign for the specified Amazon Connect account.

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
    res, err := s.SDK.StopCampaign(ctx, operations.StopCampaignRequest{
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        ID: "bf69280d-1ba7-47a8-9ebf-737ae4203ce5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

Tag a resource.

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
                "suscipit": "deserunt",
                "provident": "minima",
                "repellendus": "totam",
                "similique": "alias",
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("qui"),
        Arn: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

Untag a resource.

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
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        Arn: "amet",
        TagKeys: []string{
            "accusamus",
            "numquam",
            "enim",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCampaignDialerConfig

Updates the dialer config of a campaign. This API is idempotent.

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
    res, err := s.SDK.UpdateCampaignDialerConfig(ctx, operations.UpdateCampaignDialerConfigRequest{
        RequestBody: operations.UpdateCampaignDialerConfigRequestBody{
            DialerConfig: operations.UpdateCampaignDialerConfigRequestBodyDialerConfig{
                PredictiveDialerConfig: &shared.PredictiveDialerConfig{
                    BandwidthAllocation: 2133.12,
                },
                ProgressiveDialerConfig: &shared.ProgressiveDialerConfig{
                    BandwidthAllocation: 9574.51,
                },
            },
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
        ID: "b5a73429-cdb1-4a84-a2bb-679d2322715b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCampaignName

Updates the name of a campaign. This API is idempotent.

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
    res, err := s.SDK.UpdateCampaignName(ctx, operations.UpdateCampaignNameRequest{
        RequestBody: operations.UpdateCampaignNameRequestBody{
            Name: "George Runolfsdottir",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        ID: "90f3443a-1108-4e0a-9cf4-b921879fce95",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCampaignOutboundCallConfig

Updates the outbound call config of a campaign. This API is idempotent.

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
    res, err := s.SDK.UpdateCampaignOutboundCallConfig(ctx, operations.UpdateCampaignOutboundCallConfigRequest{
        RequestBody: operations.UpdateCampaignOutboundCallConfigRequestBody{
            AnswerMachineDetectionConfig: &operations.UpdateCampaignOutboundCallConfigRequestBodyAnswerMachineDetectionConfig{
                EnableAnswerMachineDetection: sdk.Bool(false),
            },
            ConnectContactFlowID: sdk.String("ipsum"),
            ConnectSourcePhoneNumber: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        ID: "c7abd74d-d39c-40f5-92cf-f7c70a45626d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
