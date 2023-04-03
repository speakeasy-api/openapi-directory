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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.ConvertRecoveryPointToSnapshotRequest{
        ConvertRecoveryPointToSnapshotRequest: shared.ConvertRecoveryPointToSnapshotRequest{
            RecoveryPointID: "corrupti",
            RetentionPeriod: 592845,
            SnapshotName: "distinctio",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
            },
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
        XAmzTarget: "RedshiftServerless.ConvertRecoveryPointToSnapshot",
    }

    ctx := context.Background()
    res, err := s.ConvertRecoveryPointToSnapshot(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertRecoveryPointToSnapshotResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->