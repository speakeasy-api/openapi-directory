<!-- Start SDK Example Usage -->
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
    res, err := s.Attempt.SaveStats(ctx, shared.SaveStatsRequestBody{
        AttemptNumber: 548814,
        JobID: 592845,
        Stats: shared.AttemptStats{
            BytesEmitted: sdk.Int64(715190),
            EstimatedBytes: sdk.Int64(844266),
            EstimatedRecords: sdk.Int64(602763),
            RecordsCommitted: sdk.Int64(857946),
            RecordsEmitted: sdk.Int64(544883),
            StateMessagesEmitted: sdk.Int64(847252),
        },
        StreamStats: []shared.AttemptStreamStats{
            shared.AttemptStreamStats{
                Stats: shared.AttemptStats{
                    BytesEmitted: sdk.Int64(623564),
                    EstimatedBytes: sdk.Int64(645894),
                    EstimatedRecords: sdk.Int64(384382),
                    RecordsCommitted: sdk.Int64(437587),
                    RecordsEmitted: sdk.Int64(297534),
                    StateMessagesEmitted: sdk.Int64(891773),
                },
                StreamName: "ipsa",
                StreamNamespace: sdk.String("delectus"),
            },
            shared.AttemptStreamStats{
                Stats: shared.AttemptStats{
                    BytesEmitted: sdk.Int64(272656),
                    EstimatedBytes: sdk.Int64(383441),
                    EstimatedRecords: sdk.Int64(477665),
                    RecordsCommitted: sdk.Int64(791725),
                    RecordsEmitted: sdk.Int64(812169),
                    StateMessagesEmitted: sdk.Int64(528895),
                },
                StreamName: "iusto",
                StreamNamespace: sdk.String("excepturi"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalOperationResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->