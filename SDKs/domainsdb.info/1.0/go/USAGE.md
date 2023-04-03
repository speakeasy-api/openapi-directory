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

    req := operations.GetDomainsTldZoneIDDownloadRequest{
        APIKey: "corrupti",
        Date: "provident",
        ZoneID: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Domains.GetDomainsTldZoneIDDownload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->