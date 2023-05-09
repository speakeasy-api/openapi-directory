# SDK

## Overview

Etherpad is a real-time collaborative editor scalable to thousands of simultaneous real time users. It provides full data export capabilities, and runs on your server, under your control.

### Available Operations

* [AppendTextUsingGET](#appendtextusingget)
* [AppendTextUsingPOST](#appendtextusingpost)
* [CopyPadUsingGET](#copypadusingget)
* [CopyPadUsingPOST](#copypadusingpost)
* [CopyPadWithoutHistoryUsingGET](#copypadwithouthistoryusingget)
* [CopyPadWithoutHistoryUsingPOST](#copypadwithouthistoryusingpost)
* [GETAttributePoolUsingGET](#getattributepoolusingget)
* [GetAttributePoolUsingPOST](#getattributepoolusingpost)
* [GETPadIDUsingGET](#getpadidusingget)
* [GetPadIDUsingPOST](#getpadidusingpost)
* [GETRevisionChangesetUsingGET](#getrevisionchangesetusingget)
* [GetRevisionChangesetUsingPOST](#getrevisionchangesetusingpost)
* [GETSavedRevisionsCountUsingGET](#getsavedrevisionscountusingget)
* [GetSavedRevisionsCountUsingPOST](#getsavedrevisionscountusingpost)
* [GETStatsUsingGET](#getstatsusingget)
* [GetStatsUsingPOST](#getstatsusingpost)
* [ListSavedRevisionsUsingGET](#listsavedrevisionsusingget)
* [ListSavedRevisionsUsingPOST](#listsavedrevisionsusingpost)
* [MovePadUsingGET](#movepadusingget)
* [MovePadUsingPOST](#movepadusingpost)
* [RestoreRevisionUsingGET](#restorerevisionusingget)
* [RestoreRevisionUsingPOST](#restorerevisionusingpost)
* [SaveRevisionUsingGET](#saverevisionusingget)
* [SaveRevisionUsingPOST](#saverevisionusingpost)

## AppendTextUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AppendTextUsingGET(ctx, operations.AppendTextUsingGETRequest{
        PadID: sdk.String("distinctio"),
        Text: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendTextUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppendTextUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AppendTextUsingPOST(ctx, operations.AppendTextUsingPOSTRequest{
        PadID: sdk.String("unde"),
        Text: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendTextUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CopyPadUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopyPadUsingGET(ctx, operations.CopyPadUsingGETRequest{
        DestinationID: sdk.String("corrupti"),
        Force: sdk.String("illum"),
        SourceID: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyPadUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CopyPadUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopyPadUsingPOST(ctx, operations.CopyPadUsingPOSTRequest{
        DestinationID: sdk.String("error"),
        Force: sdk.String("deserunt"),
        SourceID: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyPadUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CopyPadWithoutHistoryUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopyPadWithoutHistoryUsingGET(ctx, operations.CopyPadWithoutHistoryUsingGETRequest{
        DestinationID: sdk.String("iure"),
        Force: sdk.String("magnam"),
        SourceID: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyPadWithoutHistoryUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CopyPadWithoutHistoryUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopyPadWithoutHistoryUsingPOST(ctx, operations.CopyPadWithoutHistoryUsingPOSTRequest{
        DestinationID: sdk.String("ipsa"),
        Force: sdk.String("delectus"),
        SourceID: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyPadWithoutHistoryUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETAttributePoolUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETAttributePoolUsingGET(ctx, operations.GETAttributePoolUsingGETRequest{
        PadID: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETAttributePoolUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAttributePoolUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAttributePoolUsingPOST(ctx, operations.GetAttributePoolUsingPOSTRequest{
        PadID: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAttributePoolUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETPadIDUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETPadIDUsingGET(ctx, operations.GETPadIDUsingGETRequest{
        RoID: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETPadIDUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPadIDUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPadIDUsingPOST(ctx, operations.GetPadIDUsingPOSTRequest{
        RoID: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPadIDUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETRevisionChangesetUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETRevisionChangesetUsingGET(ctx, operations.GETRevisionChangesetUsingGETRequest{
        PadID: sdk.String("voluptatum"),
        Rev: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETRevisionChangesetUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetRevisionChangesetUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRevisionChangesetUsingPOST(ctx, operations.GetRevisionChangesetUsingPOSTRequest{
        PadID: sdk.String("excepturi"),
        Rev: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRevisionChangesetUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETSavedRevisionsCountUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETSavedRevisionsCountUsingGET(ctx, operations.GETSavedRevisionsCountUsingGETRequest{
        PadID: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETSavedRevisionsCountUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSavedRevisionsCountUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSavedRevisionsCountUsingPOST(ctx, operations.GetSavedRevisionsCountUsingPOSTRequest{
        PadID: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSavedRevisionsCountUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETStatsUsingGET

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GETStatsUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GETStatsUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetStatsUsingPOST

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStatsUsingPOST(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetStatsUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListSavedRevisionsUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSavedRevisionsUsingGET(ctx, operations.ListSavedRevisionsUsingGETRequest{
        PadID: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSavedRevisionsUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListSavedRevisionsUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSavedRevisionsUsingPOST(ctx, operations.ListSavedRevisionsUsingPOSTRequest{
        PadID: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSavedRevisionsUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MovePadUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MovePadUsingGET(ctx, operations.MovePadUsingGETRequest{
        DestinationID: sdk.String("veritatis"),
        Force: sdk.String("deserunt"),
        SourceID: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MovePadUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MovePadUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MovePadUsingPOST(ctx, operations.MovePadUsingPOSTRequest{
        DestinationID: sdk.String("ipsam"),
        Force: sdk.String("repellendus"),
        SourceID: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MovePadUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RestoreRevisionUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreRevisionUsingGET(ctx, operations.RestoreRevisionUsingGETRequest{
        PadID: sdk.String("quo"),
        Rev: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreRevisionUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RestoreRevisionUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RestoreRevisionUsingPOST(ctx, operations.RestoreRevisionUsingPOSTRequest{
        PadID: sdk.String("at"),
        Rev: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreRevisionUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SaveRevisionUsingGET

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SaveRevisionUsingGET(ctx, operations.SaveRevisionUsingGETRequest{
        PadID: sdk.String("maiores"),
        Rev: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaveRevisionUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SaveRevisionUsingPOST

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SaveRevisionUsingPOST(ctx, operations.SaveRevisionUsingPOSTRequest{
        PadID: sdk.String("quod"),
        Rev: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SaveRevisionUsingPOST200ApplicationJSONObject != nil {
        // handle response
    }
}
```
