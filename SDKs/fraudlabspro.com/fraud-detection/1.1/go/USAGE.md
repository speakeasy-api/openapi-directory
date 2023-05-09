<!-- Start SDK Example Usage -->
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
    res, err := s.PostV1OrderFeedback(ctx, operations.PostV1OrderFeedbackRequest{
        Action: operations.PostV1OrderFeedbackActionEnumReject,
        Format: operations.PostV1OrderFeedbackFormatEnumXML.ToPointer(),
        ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
        Key: "ipsam",
        Notes: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostV1OrderFeedback200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->