# DNSRecords

## Overview

Operations about dns_records

### Available Operations

* [GetDNSRecords](#getdnsrecords) - Show site DNS configuration.

## GetDNSRecords

Show site DNS configuration.

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
    res, err := s.DNSRecords.GetDNSRecords(ctx, operations.GetDNSRecordsRequest{
        Cursor: sdk.String("dolor"),
        PerPage: sdk.Int(980700),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DNSRecordEntities != nil {
        // handle response
    }
}
```
