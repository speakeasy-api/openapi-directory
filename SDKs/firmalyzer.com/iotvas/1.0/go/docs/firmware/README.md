# Firmware

### Available Operations

* [GetAccounts](#getaccounts) - Get default accounts and password hashes of a firmware
* [GetConfigIssues](#getconfigissues) - Get default OS configuration issues of a device firmware
* [GetExpiredCerts](#getexpiredcerts) - Get expired digital certificates embedded in a device firmware
* [GetPrivateKeys](#getprivatekeys) - Get private crypto keys embedded in a device firmware
* [GetRisk](#getrisk) - Get iot device firmware risk analysis
* [GetWeakCerts](#getweakcerts) - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
* [GetWeakKeys](#getweakkeys) - Get weak crypto keys with short length

## GetAccounts

Get default accounts and password hashes of a firmware

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
    res, err := s.Firmware.GetAccounts(ctx, operations.GetAccountsRequest{
        FirmwareHash: "af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175",
    }, operations.GetAccountsSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultAccounts != nil {
        // handle response
    }
}
```

## GetConfigIssues

Get default OS configuration issues of a device firmware

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
    res, err := s.Firmware.GetConfigIssues(ctx, operations.GetConfigIssuesRequest{
        FirmwareHash: "aa96e4d41a4b0ceb3f1ae4d94f3cb445621b9501e3a9c69e6b9eb37c5888a03c",
    }, operations.GetConfigIssuesSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigIssues != nil {
        // handle response
    }
}
```

## GetExpiredCerts

Get expired digital certificates embedded in a device firmware

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
    res, err := s.Firmware.GetExpiredCerts(ctx, operations.GetExpiredCertsRequest{
        FirmwareHash: "ac7c090c34338ea6a3b335004755e24578e7e4eee739c5c33736f0822b64907e",
    }, operations.GetExpiredCertsSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExpiredCerts != nil {
        // handle response
    }
}
```

## GetPrivateKeys

Get private crypto keys embedded in a device firmware

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
    res, err := s.Firmware.GetPrivateKeys(ctx, operations.GetPrivateKeysRequest{
        FirmwareHash: "90e3e68e1c61850f20c50e551816d47d484d7feb46890f5bc0a0e0dab3e3ba0b",
    }, operations.GetPrivateKeysSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKeys != nil {
        // handle response
    }
}
```

## GetRisk

Get iot device firmware risk analysis

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
    res, err := s.Firmware.GetRisk(ctx, operations.GetRiskRequest{
        FirmwareHash: "af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175",
    }, operations.GetRiskSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirmwareRisk != nil {
        // handle response
    }
}
```

## GetWeakCerts

Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware

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
    res, err := s.Firmware.GetWeakCerts(ctx, operations.GetWeakCertsRequest{
        FirmwareHash: "52841661d61e00649451cc471e9b56d169df8041926b1252bb3fd0710c27b12c",
    }, operations.GetWeakCertsSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WeakCerts != nil {
        // handle response
    }
}
```

## GetWeakKeys

Get weak crypto keys with short length

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
    res, err := s.Firmware.GetWeakKeys(ctx, operations.GetWeakKeysRequest{
        FirmwareHash: "852031776c09f8152c90496f2c3fac85b46a938d20612d7fc03eea8aab46f23e",
    }, operations.GetWeakKeysSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CryptoKeys != nil {
        // handle response
    }
}
```
