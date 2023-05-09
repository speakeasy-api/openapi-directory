# Scripts

## Overview

Scripts Restv 2 Controller

### Available Operations

* [ExportZipUsingGET](#exportzipusingget) - exportZip
* [GETScriptDifferencesUsingGET](#getscriptdifferencesusingget) - getScriptDifferences
* [GETScriptVersionsUsingGET](#getscriptversionsusingget) - getScriptVersions
* [GETScriptVersionsUsingGET1](#getscriptversionsusingget1) - getScriptVersions
* [ImportAcceptUsingPOST](#importacceptusingpost) - importAccept
* [ImportZipUsingPOST](#importzipusingpost) - importZip

## ExportZipUsingGET

exportZip

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
    res, err := s.Scripts.ExportZipUsingGET(ctx, operations.ExportZipUsingGETRequest{
        APIKey: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETScriptDifferencesUsingGET

getScriptDifferences

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
    res, err := s.Scripts.GETScriptDifferencesUsingGET(ctx, operations.GETScriptDifferencesUsingGETRequest{
        APIKey: "ullam",
        SnapshotId1: "expedita",
        SnapshotId2: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETScriptVersionsUsingGET

getScriptVersions

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
    res, err := s.Scripts.GETScriptVersionsUsingGET(ctx, operations.GETScriptVersionsUsingGETRequest{
        APIKey: "repellat",
        Page: 841140,
        PageSize: sdk.Int(149448),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETScriptVersionsUsingGET1

getScriptVersions

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
    res, err := s.Scripts.GETScriptVersionsUsingGET1(ctx, operations.GETScriptVersionsUsingGET1Request{
        APIKey: "saepe",
        PageSize: sdk.Int(868126),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ImportAcceptUsingPOST

importAccept

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
    res, err := s.Scripts.ImportAcceptUsingPOST(ctx, operations.ImportAcceptUsingPOSTRequest{
        RequestBody: operations.ImportAcceptUsingPOSTRequestBody{
            File: operations.ImportAcceptUsingPOSTRequestBodyFile{
                Content: []byte("accusantium"),
                File: "consequuntur",
            },
        },
        APIKey: "praesentium",
        Body: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageModel != nil {
        // handle response
    }
}
```

## ImportZipUsingPOST

importZip

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
    res, err := s.Scripts.ImportZipUsingPOST(ctx, operations.ImportZipUsingPOSTRequest{
        RequestBody: operations.ImportZipUsingPOSTRequestBody{
            File: operations.ImportZipUsingPOSTRequestBodyFile{
                Content: []byte("magni"),
                File: "sunt",
            },
        },
        APIKey: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScriptsDifferenceListModel != nil {
        // handle response
    }
}
```
