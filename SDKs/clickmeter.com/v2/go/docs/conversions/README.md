# Conversions

### Available Operations

* [ConversionsCount](#conversionscount) - Retrieve a count of conversions
* [ConversionsDelete](#conversionsdelete) - Delete conversion specified by id
* [ConversionsGet](#conversionsget) - Retrieve a list of conversions
* [ConversionsGetDatapoints](#conversionsgetdatapoints) - Retrieve a list of datapoints connected to this conversion
* [ConversionsGetDatapointsCount](#conversionsgetdatapointscount) - Retrieve a count of datapoints connected to this conversion
* [ConversionsGetHits](#conversionsgethits) - Retrieve the list of events related to this conversion.
* [ConversionsGetStatisticsAllList](#conversionsgetstatisticsalllist) - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* [ConversionsGetStatisticsList](#conversionsgetstatisticslist) - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* [ConversionsGetStatisticsSingle](#conversionsgetstatisticssingle) - Retrieve statistics about this conversion for a timeframe
* [ConversionsPatchNotesForm](#conversionspatchnotesform) - Fast patch the "notes" field of a conversion
* [ConversionsPatchNotesJSON](#conversionspatchnotesjson) - Fast patch the "notes" field of a conversion
* [ConversionsPatchNotesRaw](#conversionspatchnotesraw) - Fast patch the "notes" field of a conversion
* [ConversionsPatchForm](#conversionspatchform) - Modify the association between a conversion and a datapoint
* [ConversionsPatchJSON](#conversionspatchjson) - Modify the association between a conversion and a datapoint
* [ConversionsPatchRaw](#conversionspatchraw) - Modify the association between a conversion and a datapoint
* [ConversionsPostForm](#conversionspostform) - Update conversion specified by id
* [ConversionsPostJSON](#conversionspostjson) - Update conversion specified by id
* [ConversionsPostRaw](#conversionspostraw) - Update conversion specified by id
* [ConversionsPutForm](#conversionsputform) - Create a conversion
* [ConversionsPutJSON](#conversionsputjson) - Create a conversion
* [ConversionsPutRaw](#conversionsputraw) - Create a conversion
* [GetConversionsConversionID](#getconversionsconversionid) - Retrieve conversion specified by id
* [PutConversionsConversionIDDatapointsBatchPatch](#putconversionsconversioniddatapointsbatchpatch) - Modify the association between a conversion and multiple datapoints

## ConversionsCount

Retrieve a count of conversions

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
    res, err := s.Conversions.ConversionsCount(ctx, operations.ConversionsCountRequest{
        CreatedAfter: sdk.String("sapiente"),
        CreatedBefore: sdk.String("totam"),
        Status: operations.ConversionsCountStatusEnumDeleted.ToPointer(),
        TextSearch: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## ConversionsDelete

Delete conversion specified by id

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
    res, err := s.Conversions.ConversionsDelete(ctx, operations.ConversionsDeleteRequest{
        ConversionID: 711584,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsGet

Retrieve a list of conversions

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
    res, err := s.Conversions.ConversionsGet(ctx, operations.ConversionsGetRequest{
        CreatedAfter: sdk.String("neque"),
        CreatedBefore: sdk.String("sed"),
        Limit: sdk.Int(424685),
        Offset: sdk.Int(730442),
        Status: operations.ConversionsGetStatusEnumDeleted.ToPointer(),
        TextSearch: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsGetDatapoints

Retrieve a list of datapoints connected to this conversion

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
    res, err := s.Conversions.ConversionsGetDatapoints(ctx, operations.ConversionsGetDatapointsRequest{
        ConversionID: 463575,
        CreatedAfter: sdk.String("ipsum"),
        CreatedBefore: sdk.String("incidunt"),
        Limit: sdk.Int(186458),
        Offset: sdk.Int(586784),
        Status: operations.ConversionsGetDatapointsStatusEnumSpam.ToPointer(),
        Tags: sdk.String("pariatur"),
        TextSearch: sdk.String("soluta"),
        Type: operations.ConversionsGetDatapointsTypeEnumTp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsGetDatapointsCount

Retrieve a count of datapoints connected to this conversion

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
    res, err := s.Conversions.ConversionsGetDatapointsCount(ctx, operations.ConversionsGetDatapointsCountRequest{
        ConversionID: 674848,
        CreatedAfter: sdk.String("totam"),
        CreatedBefore: sdk.String("incidunt"),
        Status: sdk.String("aspernatur"),
        Tags: sdk.String("dolores"),
        TextSearch: sdk.String("distinctio"),
        Type: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## ConversionsGetHits

Retrieve the list of events related to this conversion.

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
    res, err := s.Conversions.ConversionsGetHits(ctx, operations.ConversionsGetHitsRequest{
        ConversionID: 396060,
        Filter: operations.ConversionsGetHitsFilterEnumUniques.ToPointer(),
        FromDay: sdk.String("molestias"),
        Limit: sdk.Int(840429),
        Offset: sdk.String("qui"),
        Timeframe: operations.ConversionsGetHitsTimeframeEnumLast30,
        ToDay: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoClickStreamHitListPage != nil {
        // handle response
    }
}
```

## ConversionsGetStatisticsAllList

Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)

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
    res, err := s.Conversions.ConversionsGetStatisticsAllList(ctx, operations.ConversionsGetStatisticsAllListRequest{
        FromDay: sdk.String("magni"),
        GroupBy: operations.ConversionsGetStatisticsAllListGroupByEnumWeek.ToPointer(),
        Status: operations.ConversionsGetStatisticsAllListStatusEnumDeleted.ToPointer(),
        TimeFrame: operations.ConversionsGetStatisticsAllListTimeFrameEnumCurrentmonth,
        ToDay: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## ConversionsGetStatisticsList

Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)

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
    res, err := s.Conversions.ConversionsGetStatisticsList(ctx, operations.ConversionsGetStatisticsListRequest{
        ConversionID: 940432,
        FromDay: sdk.String("voluptatem"),
        GroupBy: operations.ConversionsGetStatisticsListGroupByEnumMonth.ToPointer(),
        TimeFrame: operations.ConversionsGetStatisticsListTimeFrameEnumLastyear,
        ToDay: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## ConversionsGetStatisticsSingle

Retrieve statistics about this conversion for a timeframe

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
    res, err := s.Conversions.ConversionsGetStatisticsSingle(ctx, operations.ConversionsGetStatisticsSingleRequest{
        ConversionID: 92596,
        Favourite: sdk.Bool(false),
        FromDay: sdk.String("saepe"),
        Hourly: sdk.Bool(false),
        Tag: sdk.String("ipsum"),
        TimeFrame: operations.ConversionsGetStatisticsSingleTimeFrameEnumYesterday,
        ToDay: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAggregatedAggregatedResult != nil {
        // handle response
    }
}
```

## ConversionsPatchNotesForm

Fast patch the "notes" field of a conversion

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPatchNotesForm(ctx, operations.ConversionsPatchNotesFormRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("quos"),
        },
        ConversionID: 731694,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPatchNotesJSON

Fast patch the "notes" field of a conversion

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPatchNotesJSON(ctx, operations.ConversionsPatchNotesJSONRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("cupiditate"),
        },
        ConversionID: 45614,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPatchNotesRaw

Fast patch the "notes" field of a conversion

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPatchNotesRaw(ctx, operations.ConversionsPatchNotesRawRequest{
        RequestBody: []byte("delectus"),
        ConversionID: 209157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPatchForm

Modify the association between a conversion and a datapoint

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPatchForm(ctx, operations.ConversionsPatchFormRequest{
        APICoreRequestsConversionPatchBody: shared.APICoreRequestsConversionPatchBody{
            Action: sdk.String("dolore"),
            ID: sdk.Int64(286915),
            ReplaceID: sdk.Int64(240829),
        },
        ConversionID: 677263,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPatchJSON

Modify the association between a conversion and a datapoint

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPatchJSON(ctx, operations.ConversionsPatchJSONRequest{
        APICoreRequestsConversionPatchBody: shared.APICoreRequestsConversionPatchBody{
            Action: sdk.String("architecto"),
            ID: sdk.Int64(63038),
            ReplaceID: sdk.Int64(16429),
        },
        ConversionID: 555649,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPatchRaw

Modify the association between a conversion and a datapoint

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPatchRaw(ctx, operations.ConversionsPatchRawRequest{
        RequestBody: []byte("itaque"),
        ConversionID: 9240,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPostForm

Update conversion specified by id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPostForm(ctx, operations.ConversionsPostFormRequest{
        APICoreDtoConversionsConversion: shared.APICoreDtoConversionsConversion{
            Code: sdk.String("est"),
            CreationDate: sdk.String("20120203120530"),
            Deleted: sdk.Bool(false),
            Description: sdk.String("repellendus"),
            ID: sdk.Int64(785153),
            Name: sdk.String("Alexander Prosacco"),
            Protocol: shared.APICoreDtoConversionsConversionProtocolEnumHTTP.ToPointer(),
            Value: sdk.Float64(5123.93),
        },
        ConversionID: 485628,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPostJSON

Update conversion specified by id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPostJSON(ctx, operations.ConversionsPostJSONRequest{
        APICoreDtoConversionsConversion: shared.APICoreDtoConversionsConversion{
            Code: sdk.String("occaecati"),
            CreationDate: sdk.String("20120203120530"),
            Deleted: sdk.Bool(false),
            Description: sdk.String("voluptatibus"),
            ID: sdk.Int64(787542),
            Name: sdk.String("Arturo Hauck"),
            Protocol: shared.APICoreDtoConversionsConversionProtocolEnumHTTP.ToPointer(),
            Value: sdk.Float64(2317.01),
        },
        ConversionID: 878870,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPostRaw

Update conversion specified by id

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPostRaw(ctx, operations.ConversionsPostRawRequest{
        RequestBody: []byte("tenetur"),
        ConversionID: 492268,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPutForm

Create a conversion

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPutForm(ctx, shared.APICoreDtoConversionsConversion{
        Code: sdk.String("hic"),
        CreationDate: sdk.String("20120203120530"),
        Deleted: sdk.Bool(false),
        Description: sdk.String("distinctio"),
        ID: sdk.Int64(799203),
        Name: sdk.String("Harriet Quitzon"),
        Protocol: shared.APICoreDtoConversionsConversionProtocolEnumHTTP.ToPointer(),
        Value: sdk.Float64(8445.5),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPutJSON

Create a conversion

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPutJSON(ctx, shared.APICoreDtoConversionsConversion{
        Code: sdk.String("illum"),
        CreationDate: sdk.String("20120203120530"),
        Deleted: sdk.Bool(false),
        Description: sdk.String("sequi"),
        ID: sdk.Int64(617877),
        Name: sdk.String("Richard Wiza"),
        Protocol: shared.APICoreDtoConversionsConversionProtocolEnumHTTP.ToPointer(),
        Value: sdk.Float64(7804.27),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## ConversionsPutRaw

Create a conversion

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.ConversionsPutRaw(ctx, []byte("maiores"))
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GetConversionsConversionID

Retrieve conversion specified by id

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
    res, err := s.Conversions.GetConversionsConversionID(ctx, operations.GetConversionsConversionIDRequest{
        ConversionID: 985033,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoConversionsConversion != nil {
        // handle response
    }
}
```

## PutConversionsConversionIDDatapointsBatchPatch

Modify the association between a conversion and multiple datapoints

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversions.PutConversionsConversionIDDatapointsBatchPatch(ctx, operations.PutConversionsConversionIDDatapointsBatchPatchRequest{
        APICoreRequestsPatchBodyBatch: shared.APICoreRequestsPatchBodyBatch{
            PatchRequests: []shared.APICoreRequestsPatchBody{
                shared.APICoreRequestsPatchBody{
                    Action: sdk.String("eligendi"),
                    ID: sdk.Int64(497391),
                },
                shared.APICoreRequestsPatchBody{
                    Action: sdk.String("alias"),
                    ID: sdk.Int64(639473),
                },
            },
        },
        ConversionID: 269479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```
