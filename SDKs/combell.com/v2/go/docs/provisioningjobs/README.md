# ProvisioningJobs

### Available Operations

* [GetProvisioningjobsJobID](#getprovisioningjobsjobid) - Detail of a provisioning job

## GetProvisioningjobsJobID

Provisioning failures may occur. Contact support in the event of a failure or wait for error resolution.<br />
Do NOT retry provisioning until the job reports finished or cancelled.

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
    res, err := s.ProvisioningJobs.GetProvisioningjobsJobID(ctx, operations.GetProvisioningjobsJobIDRequest{
        JobIDPathParameter: "aspernatur",
        JobIDQueryParameter: "2bb679d2-3227-415b-b0cb-b1e31b8b90f3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisioningJobInfo != nil {
        // handle response
    }
}
```
