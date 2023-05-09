# Collections

### Available Operations

* [AllCollections](#allcollections) - All Collections
* [CreateAFork](#createafork) - Create a Fork
* [CreateCollection](#createcollection) - Create Collection
* [DeleteCollection](#deletecollection) - Delete Collection
* [MergeAFork](#mergeafork) - Merge a Fork
* [SingleCollection](#singlecollection) - Single Collection 
* [UpdateCollection](#updatecollection) - Update Collection

## AllCollections

The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.

The response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.AllCollections(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AllCollections200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateAFork

This endpoint allows you to create a fork from an existing collection.

On successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.

You can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

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
    res, err := s.Collections.CreateAFork(ctx, operations.CreateAForkRequest{
        RequestBody: &operations.CreateAForkRequestBody{
            Name: sdk.String("Fork name"),
        },
        CollectionUID: "occaecati",
        Workspace: sdk.String("{{workspace_id}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateCollection

This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).

On successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.

You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

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
    res, err := s.Collections.CreateCollection(ctx, operations.CreateCollectionRequestBody{
        Collection: &operations.CreateCollectionRequestBodyCollection{
            Info: &operations.CreateCollectionRequestBodyCollectionInfo{
                Description: sdk.String("This is just a sample collection."),
                Name: sdk.String("Sample Collection {{$randomInt}}"),
                Schema: sdk.String("https://schema.getpostman.com/json/collection/v2.1.0/collection.json"),
            },
            Item: []CreateCollectionRequestBodyCollectionItem{
                operations.CreateCollectionRequestBodyCollectionItem{
                    Item: []CreateCollectionRequestBodyCollectionItemItem{
                        operations.CreateCollectionRequestBodyCollectionItemItem{
                            Name: sdk.String("Sample POST Request"),
                            Request: &operations.CreateCollectionRequestBodyCollectionItemItemRequest{
                                Body: &operations.CreateCollectionRequestBodyCollectionItemItemRequestBody{
                                    Mode: sdk.String("raw"),
                                    Raw: sdk.String("{"data": "123"}"),
                                },
                                Description: sdk.String("This is a sample POST Request"),
                                Header: []CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                },
                                Method: sdk.String("POST"),
                                URL: sdk.String("https://postman-echo.com/post"),
                            },
                        },
                        operations.CreateCollectionRequestBodyCollectionItemItem{
                            Name: sdk.String("Sample POST Request"),
                            Request: &operations.CreateCollectionRequestBodyCollectionItemItemRequest{
                                Body: &operations.CreateCollectionRequestBodyCollectionItemItemRequestBody{
                                    Mode: sdk.String("raw"),
                                    Raw: sdk.String("{"data": "123"}"),
                                },
                                Description: sdk.String("This is a sample POST Request"),
                                Header: []CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                },
                                Method: sdk.String("POST"),
                                URL: sdk.String("https://postman-echo.com/post"),
                            },
                        },
                        operations.CreateCollectionRequestBodyCollectionItemItem{
                            Name: sdk.String("Sample POST Request"),
                            Request: &operations.CreateCollectionRequestBodyCollectionItemItemRequest{
                                Body: &operations.CreateCollectionRequestBodyCollectionItemItemRequestBody{
                                    Mode: sdk.String("raw"),
                                    Raw: sdk.String("{"data": "123"}"),
                                },
                                Description: sdk.String("This is a sample POST Request"),
                                Header: []CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                    operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        Key: sdk.String("Content-Type"),
                                        Value: sdk.String("application/json"),
                                    },
                                },
                                Method: sdk.String("POST"),
                                URL: sdk.String("https://postman-echo.com/post"),
                            },
                        },
                    },
                    Name: sdk.String("This is a folder"),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCollection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteCollection

This endpoint allows you to delete an existing collection.

On successful deletion of the collection, the response returns the `id` and `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

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
    res, err := s.Collections.DeleteCollection(ctx, operations.DeleteCollectionRequest{
        CollectionUID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCollection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MergeAFork

This endpoint allows you to merge a forked collection back to its destination collection.

On successful creation of the collection, the response returns the collection `name`, `id` and `uid`.

You need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.

Optionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies

| Merge Strategy | Behaviour |
| --- | --- |
| deleteSource | Forked collection is deleted after merging |
| updateSourceWithDestination | Forked collection is up to date with changes in destination collection |

If the collections cannot be merged (due to conflicts), appropriate error messages will be returned.


> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

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
    res, err := s.Collections.MergeAFork(ctx, operations.MergeAForkRequestBody{
        Destination: sdk.String("{{destination_collection_uid}}"),
        Source: sdk.String("{{source_collection_uid}}"),
        Strategy: sdk.String("deleteSource"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SingleCollection

Access the contents of a collection that is accessible to you using its unique id (`uid`).

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

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
    res, err := s.Collections.SingleCollection(ctx, operations.SingleCollectionRequest{
        CollectionUID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SingleCollection200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateCollection

This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).

On successful updation of the collection, the response returns the collection `name`, `id` and `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.

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
    res, err := s.Collections.UpdateCollection(ctx, operations.UpdateCollectionRequest{
        RequestBody: &operations.UpdateCollectionRequestBody{
            Collection: &operations.UpdateCollectionRequestBodyCollection{
                Info: &operations.UpdateCollectionRequestBodyCollectionInfo{
                    PostmanID: sdk.String("174bad7c-07e3-45f3-914f-36cf84e5586f"),
                    Description: sdk.String("This is just a sample collection."),
                    Name: sdk.String("Sample Collection {{$randomInt}}"),
                    Schema: sdk.String("https://schema.getpostman.com/json/collection/v2.1.0/collection.json"),
                },
                Item: []UpdateCollectionRequestBodyCollectionItem{
                    operations.UpdateCollectionRequestBodyCollectionItem{
                        Item: []UpdateCollectionRequestBodyCollectionItemItem{
                            operations.UpdateCollectionRequestBodyCollectionItemItem{
                                Name: sdk.String("Sample POST Request"),
                                Request: &operations.UpdateCollectionRequestBodyCollectionItemItemRequest{
                                    Body: &operations.UpdateCollectionRequestBodyCollectionItemItemRequestBody{
                                        Mode: sdk.String("raw"),
                                        Raw: sdk.String("{"data": "123"}"),
                                    },
                                    Description: sdk.String("This is a sample POST Request"),
                                    Header: []UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                    },
                                    Method: sdk.String("POST"),
                                    URL: sdk.String("https://postman-echo.com/post"),
                                },
                            },
                            operations.UpdateCollectionRequestBodyCollectionItemItem{
                                Name: sdk.String("Sample POST Request"),
                                Request: &operations.UpdateCollectionRequestBodyCollectionItemItemRequest{
                                    Body: &operations.UpdateCollectionRequestBodyCollectionItemItemRequestBody{
                                        Mode: sdk.String("raw"),
                                        Raw: sdk.String("{"data": "123"}"),
                                    },
                                    Description: sdk.String("This is a sample POST Request"),
                                    Header: []UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                    },
                                    Method: sdk.String("POST"),
                                    URL: sdk.String("https://postman-echo.com/post"),
                                },
                            },
                        },
                        Name: sdk.String("This is a folder"),
                    },
                    operations.UpdateCollectionRequestBodyCollectionItem{
                        Item: []UpdateCollectionRequestBodyCollectionItemItem{
                            operations.UpdateCollectionRequestBodyCollectionItemItem{
                                Name: sdk.String("Sample POST Request"),
                                Request: &operations.UpdateCollectionRequestBodyCollectionItemItemRequest{
                                    Body: &operations.UpdateCollectionRequestBodyCollectionItemItemRequestBody{
                                        Mode: sdk.String("raw"),
                                        Raw: sdk.String("{"data": "123"}"),
                                    },
                                    Description: sdk.String("This is a sample POST Request"),
                                    Header: []UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                    },
                                    Method: sdk.String("POST"),
                                    URL: sdk.String("https://postman-echo.com/post"),
                                },
                            },
                            operations.UpdateCollectionRequestBodyCollectionItemItem{
                                Name: sdk.String("Sample POST Request"),
                                Request: &operations.UpdateCollectionRequestBodyCollectionItemItemRequest{
                                    Body: &operations.UpdateCollectionRequestBodyCollectionItemItemRequestBody{
                                        Mode: sdk.String("raw"),
                                        Raw: sdk.String("{"data": "123"}"),
                                    },
                                    Description: sdk.String("This is a sample POST Request"),
                                    Header: []UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                    },
                                    Method: sdk.String("POST"),
                                    URL: sdk.String("https://postman-echo.com/post"),
                                },
                            },
                            operations.UpdateCollectionRequestBodyCollectionItemItem{
                                Name: sdk.String("Sample POST Request"),
                                Request: &operations.UpdateCollectionRequestBodyCollectionItemItemRequest{
                                    Body: &operations.UpdateCollectionRequestBodyCollectionItemItemRequestBody{
                                        Mode: sdk.String("raw"),
                                        Raw: sdk.String("{"data": "123"}"),
                                    },
                                    Description: sdk.String("This is a sample POST Request"),
                                    Header: []UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                        operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader{
                                            Key: sdk.String("Content-Type"),
                                            Value: sdk.String("application/json"),
                                        },
                                    },
                                    Method: sdk.String("POST"),
                                    URL: sdk.String("https://postman-echo.com/post"),
                                },
                            },
                        },
                        Name: sdk.String("This is a folder"),
                    },
                },
            },
        },
        CollectionUID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCollection200ApplicationJSONObject != nil {
        // handle response
    }
}
```
