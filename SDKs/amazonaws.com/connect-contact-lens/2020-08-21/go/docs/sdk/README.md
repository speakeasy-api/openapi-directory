# SDK

## Overview

<p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.</p> <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/contact-lens/>
### Available Operations

* [ListRealtimeContactAnalysisSegments](#listrealtimecontactanalysissegments) - Provides a list of analysis segments for a real-time analysis session.

## ListRealtimeContactAnalysisSegments

Provides a list of analysis segments for a real-time analysis session.

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
    res, err := s.SDK.ListRealtimeContactAnalysisSegments(ctx, operations.ListRealtimeContactAnalysisSegmentsRequest{
        MaxResults: sdk.String("magnam"),
        NextToken: sdk.String("debitis"),
        RequestBody: operations.ListRealtimeContactAnalysisSegmentsRequestBody{
            ContactID: "ipsa",
            InstanceID: "delectus",
            MaxResults: sdk.Int64(272656),
            NextToken: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRealtimeContactAnalysisSegmentsResponse != nil {
        // handle response
    }
}
```
