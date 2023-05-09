# Tags

### Available Operations

* [TagsCount](#tagscount) - List of all the groups associated to the user filtered by this tag.
* [TagsDelete](#tagsdelete) - Delete a tag
* [TagsDeleteRelatedDatapoints](#tagsdeleterelateddatapoints) - Delete the association of this tag with all datapoints
* [TagsDeleteRelatedGroups](#tagsdeleterelatedgroups) - Delete the association of this tag with all groups
* [TagsGet](#tagsget) - List of all the groups associated to the user filtered by this tag.
* [TagsGetDatapoints](#tagsgetdatapoints) - List of all the datapoints associated to the user filtered by this tag
* [TagsGetDatapointsCount](#tagsgetdatapointscount) - Count the datapoints associated to the user filtered by this tag
* [TagsGetGroups](#tagsgetgroups) - List of all the groups associated to the user filtered by this tag.
* [TagsGetGroupsCount](#tagsgetgroupscount) - Count the groups associated to the user filtered by this tag
* [TagsPatchDataPointForm](#tagspatchdatapointform) - Associate/Deassociate a tag with a datapoint
* [TagsPatchDataPointJSON](#tagspatchdatapointjson) - Associate/Deassociate a tag with a datapoint
* [TagsPatchDataPointRaw](#tagspatchdatapointraw) - Associate/Deassociate a tag with a datapoint
* [TagsPatchGroupForm](#tagspatchgroupform) - Associate/Deassociate a tag with a group
* [TagsPatchGroupJSON](#tagspatchgroupjson) - Associate/Deassociate a tag with a group
* [TagsPatchGroupRaw](#tagspatchgroupraw) - Associate/Deassociate a tag with a group
* [TagsPatchTagNameForm](#tagspatchtagnameform) - Fast patch a tag name
* [TagsPatchTagNameJSON](#tagspatchtagnamejson) - Fast patch a tag name
* [TagsPatchTagNameRaw](#tagspatchtagnameraw) - Fast patch a tag name
* [TagsPut](#tagsput) - Create a tag
* [GetTagsTagID](#gettagstagid) - Retrieve a tag

## TagsCount

List of all the groups associated to the user filtered by this tag.

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
    res, err := s.Tags.TagsCount(ctx, operations.TagsCountRequest{
        Datapoints: sdk.String("soluta"),
        Groups: sdk.String("natus"),
        Name: sdk.String("Luke Fay"),
        Type: operations.TagsCountTypeEnumGr.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## TagsDelete

Delete a tag

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
    res, err := s.Tags.TagsDelete(ctx, operations.TagsDeleteRequest{
        TagID: 931077,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## TagsDeleteRelatedDatapoints

Delete the association of this tag with all datapoints

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
    res, err := s.Tags.TagsDeleteRelatedDatapoints(ctx, operations.TagsDeleteRelatedDatapointsRequest{
        TagID: 848346,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsDeleteRelatedGroups

Delete the association of this tag with all groups

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
    res, err := s.Tags.TagsDeleteRelatedGroups(ctx, operations.TagsDeleteRelatedGroupsRequest{
        TagID: 670762,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsGet

List of all the groups associated to the user filtered by this tag.

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
    res, err := s.Tags.TagsGet(ctx, operations.TagsGetRequest{
        Datapoints: sdk.String("dignissimos"),
        Groups: sdk.String("vero"),
        Limit: sdk.Int(185348),
        Name: sdk.String("Jaime Champlin"),
        Offset: sdk.Int(471457),
        Type: operations.TagsGetTypeEnumTl.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsGetDatapoints

List of all the datapoints associated to the user filtered by this tag

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
    res, err := s.Tags.TagsGetDatapoints(ctx, operations.TagsGetDatapointsRequest{
        CreatedAfter: sdk.String("ab"),
        CreatedBefore: sdk.String("illo"),
        Limit: sdk.Int(943851),
        Offset: sdk.Int(644479),
        Status: operations.TagsGetDatapointsStatusEnumSpam.ToPointer(),
        TagID: 251212,
        TextSearch: sdk.String("distinctio"),
        Type: operations.TagsGetDatapointsTypeEnumTp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsGetDatapointsCount

Count the datapoints associated to the user filtered by this tag

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
    res, err := s.Tags.TagsGetDatapointsCount(ctx, operations.TagsGetDatapointsCountRequest{
        CreatedAfter: sdk.String("exercitationem"),
        CreatedBefore: sdk.String("labore"),
        Status: operations.TagsGetDatapointsCountStatusEnumActive.ToPointer(),
        TagID: 921193,
        TextSearch: sdk.String("modi"),
        Type: operations.TagsGetDatapointsCountTypeEnumTp.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## TagsGetGroups

List of all the groups associated to the user filtered by this tag.

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
    res, err := s.Tags.TagsGetGroups(ctx, operations.TagsGetGroupsRequest{
        CreatedAfter: sdk.String("explicabo"),
        CreatedBefore: sdk.String("accusamus"),
        Limit: sdk.Int(525809),
        Offset: sdk.Int(44016),
        Status: operations.TagsGetGroupsStatusEnumDeleted.ToPointer(),
        TagID: 535802,
        TextSearch: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsGetGroupsCount

Count the groups associated to the user filtered by this tag

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
    res, err := s.Tags.TagsGetGroupsCount(ctx, operations.TagsGetGroupsCountRequest{
        CreatedAfter: sdk.String("voluptate"),
        CreatedBefore: sdk.String("similique"),
        Status: operations.TagsGetGroupsCountStatusEnumDeleted.ToPointer(),
        TagID: 727544,
        TextSearch: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## TagsPatchDataPointForm

Associate/Deassociate a tag with a datapoint

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
    res, err := s.Tags.TagsPatchDataPointForm(ctx, operations.TagsPatchDataPointFormRequest{
        APICoreRequestsPatchBody: shared.APICoreRequestsPatchBody{
            Action: sdk.String("sit"),
            ID: sdk.Int64(266788),
        },
        TagID: 430116,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchDataPointJSON

Associate/Deassociate a tag with a datapoint

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
    res, err := s.Tags.TagsPatchDataPointJSON(ctx, operations.TagsPatchDataPointJSONRequest{
        APICoreRequestsPatchBody: shared.APICoreRequestsPatchBody{
            Action: sdk.String("nesciunt"),
            ID: sdk.Int64(652125),
        },
        TagID: 492632,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchDataPointRaw

Associate/Deassociate a tag with a datapoint

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
    res, err := s.Tags.TagsPatchDataPointRaw(ctx, operations.TagsPatchDataPointRawRequest{
        RequestBody: []byte("fugiat"),
        TagID: 345138,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchGroupForm

Associate/Deassociate a tag with a group

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
    res, err := s.Tags.TagsPatchGroupForm(ctx, operations.TagsPatchGroupFormRequest{
        APICoreRequestsPatchBody: shared.APICoreRequestsPatchBody{
            Action: sdk.String("molestiae"),
            ID: sdk.Int64(330600),
        },
        TagID: 969206,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchGroupJSON

Associate/Deassociate a tag with a group

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
    res, err := s.Tags.TagsPatchGroupJSON(ctx, operations.TagsPatchGroupJSONRequest{
        APICoreRequestsPatchBody: shared.APICoreRequestsPatchBody{
            Action: sdk.String("ab"),
            ID: sdk.Int64(265632),
        },
        TagID: 13865,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchGroupRaw

Associate/Deassociate a tag with a group

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
    res, err := s.Tags.TagsPatchGroupRaw(ctx, operations.TagsPatchGroupRawRequest{
        RequestBody: []byte("aut"),
        TagID: 911657,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchTagNameForm

Fast patch a tag name

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
    res, err := s.Tags.TagsPatchTagNameForm(ctx, operations.TagsPatchTagNameFormRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("odio"),
        },
        TagID: 413758,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchTagNameJSON

Fast patch a tag name

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
    res, err := s.Tags.TagsPatchTagNameJSON(ctx, operations.TagsPatchTagNameJSONRequest{
        APICoreRequestsGenericTextPatch: shared.APICoreRequestsGenericTextPatch{
            Text: sdk.String("numquam"),
        },
        TagID: 677045,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPatchTagNameRaw

Fast patch a tag name

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
    res, err := s.Tags.TagsPatchTagNameRaw(ctx, operations.TagsPatchTagNameRawRequest{
        RequestBody: []byte("possimus"),
        TagID: 452399,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## TagsPut

Create a tag

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
    res, err := s.Tags.TagsPut(ctx, shared.APICoreDtoTagsTag{
        Datapoints: []int64{
            200637,
        },
        Groups: []int64{
            929476,
            791228,
        },
        ID: sdk.Int64(122662),
        Name: sdk.String("Miss Mathew Lynch"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## GetTagsTagID

Retrieve a tag

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
    res, err := s.Tags.GetTagsTagID(ctx, operations.GetTagsTagIDRequest{
        TagID: 418637,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoTagsTag != nil {
        // handle response
    }
}
```
