<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.SaveStatsRequestBody{
        AttemptNumber: 548814,
        JobID: 592845,
        Stats: shared.AttemptStats{
            BytesEmitted: 715190,
            EstimatedBytes: 844266,
            EstimatedRecords: 602763,
            RecordsCommitted: 857946,
            RecordsEmitted: 544883,
            StateMessagesEmitted: 847252,
        },
        StreamStats: []shared.AttemptStreamStats{
            shared.AttemptStreamStats{
                Stats: shared.AttemptStats{
                    BytesEmitted: 623564,
                    EstimatedBytes: 645894,
                    EstimatedRecords: 384382,
                    RecordsCommitted: 437587,
                    RecordsEmitted: 297534,
                    StateMessagesEmitted: 891773,
                },
                StreamName: "ipsa",
                StreamNamespace: "delectus",
            },
            shared.AttemptStreamStats{
                Stats: shared.AttemptStats{
                    BytesEmitted: 272656,
                    EstimatedBytes: 383441,
                    EstimatedRecords: 477665,
                    RecordsCommitted: 791725,
                    RecordsEmitted: 812169,
                    StateMessagesEmitted: 528895,
                },
                StreamName: "iusto",
                StreamNamespace: "excepturi",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Attempt.SaveStats(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalOperationResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->