<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetDomainsTldZoneIDDownloadRequest{
        PathParams: operations.GetDomainsTldZoneIDDownloadPathParams{
            ZoneID: "dolorem",
        },
        QueryParams: operations.GetDomainsTldZoneIDDownloadQueryParams{
            APIKey: "molestias",
            Date: "dolor",
        },
    }
    
    res, err := s.Domains.GetDomainsTldZoneIDDownload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->