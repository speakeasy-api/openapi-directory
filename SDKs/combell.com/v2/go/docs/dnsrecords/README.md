# DNSRecords

## Overview

Manage the dns records for a domain name.<p>The interface allows you to manage following records: A, CNAME, MX, SRV, ALIAS and TXT.

### Available Operations

* [DeleteDNSDomainNameRecordsRecordID](#deletednsdomainnamerecordsrecordid) - Delete a record
* [GetDNSDomainNameRecords](#getdnsdomainnamerecords) - Get records
* [GetDNSDomainNameRecordsRecordID](#getdnsdomainnamerecordsrecordid) - Get specific record
* [PostDNSDomainNameRecords](#postdnsdomainnamerecords) - Create a record
* [PutDNSDomainNameRecordsRecordID](#putdnsdomainnamerecordsrecordid) - Edit a record

## DeleteDNSDomainNameRecordsRecordID

Delete a record

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
    res, err := s.DNSRecords.DeleteDNSDomainNameRecordsRecordID(ctx, operations.DeleteDNSDomainNameRecordsRecordIDRequest{
        DomainNamePathParameter: "iure",
        DomainNameQueryParameter: "magnam",
        RecordIDPathParameter: "debitis",
        RecordIDQueryParameter: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDNSDomainNameRecords

Get records

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
    res, err := s.DNSRecords.GetDNSDomainNameRecords(ctx, operations.GetDNSDomainNameRecordsRequest{
        DomainNamePathParameter: "delectus",
        DomainNameQueryParameter: "tempora",
        RecordName: sdk.String("suscipit"),
        Service: sdk.String("molestiae"),
        Skip: sdk.Int(791725),
        Take: sdk.Int(812169),
        Type: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DNSRecords != nil {
        // handle response
    }
}
```

## GetDNSDomainNameRecordsRecordID

Get specific record

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
    res, err := s.DNSRecords.GetDNSDomainNameRecordsRecordID(ctx, operations.GetDNSDomainNameRecordsRecordIDRequest{
        DomainNamePathParameter: "iusto",
        DomainNameQueryParameter: "excepturi",
        RecordIDPathParameter: "nisi",
        RecordIDQueryParameter: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DNSRecord != nil {
        // handle response
    }
}
```

## PostDNSDomainNameRecords

Create a record

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DNSRecords.PostDNSDomainNameRecords(ctx, operations.PostDNSDomainNameRecordsRequest{
        DNSRecord: &shared.DNSRecord{
            Content: sdk.String("temporibus"),
            ID: sdk.String("151a05df-c2dd-4f7c-878c-a1ba928fc816"),
            Port: sdk.Int(473600),
            Priority: sdk.Int(264555),
            Protocol: sdk.String("qui"),
            RecordName: sdk.String("impedit"),
            Service: sdk.String("cum"),
            Target: sdk.String("esse"),
            TTL: sdk.Int(216550),
            Type: sdk.String("excepturi"),
            Weight: sdk.Int(135218),
        },
        DomainNamePathParameter: "perferendis",
        DomainNameQueryParameter: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutDNSDomainNameRecordsRecordID

Edit a record

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DNSRecords.PutDNSDomainNameRecordsRecordID(ctx, operations.PutDNSDomainNameRecordsRecordIDRequest{
        DNSRecord: &shared.DNSRecord{
            Content: sdk.String("natus"),
            ID: sdk.String("29396fea-7596-4eb1-8faa-a2352c595590"),
            Port: sdk.Int(438601),
            Priority: sdk.Int(634274),
            Protocol: sdk.String("doloribus"),
            RecordName: sdk.String("sapiente"),
            Service: sdk.String("architecto"),
            Target: sdk.String("mollitia"),
            TTL: sdk.Int(208876),
            Type: sdk.String("culpa"),
            Weight: sdk.Int(161309),
        },
        DomainNamePathParameter: "repellat",
        DomainNameQueryParameter: "mollitia",
        RecordIDPathParameter: "occaecati",
        RecordIDQueryParameter: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
