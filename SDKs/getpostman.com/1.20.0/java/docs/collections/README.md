# collections

### Available Operations

* [allCollections](#allcollections) - All Collections
* [createAFork](#createafork) - Create a Fork
* [createCollection](#createcollection) - Create Collection
* [deleteCollection](#deletecollection) - Delete Collection
* [mergeAFork](#mergeafork) - Merge a Fork
* [singleCollection](#singlecollection) - Single Collection 
* [updateCollection](#updatecollection) - Update Collection

## allCollections

The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.

The response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllCollectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllCollectionsResponse res = sdk.collections.allCollections();

            if (res.allCollections200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAFork

This endpoint allows you to create a fork from an existing collection.

On successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.

You can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAForkRequest;
import org.openapis.openapi.models.operations.CreateAForkRequestBody;
import org.openapis.openapi.models.operations.CreateAForkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAForkRequest req = new CreateAForkRequest("occaecati") {{
                requestBody = new CreateAForkRequestBody() {{
                    name = "Fork name";
                }};;
                workspace = "{{workspace_id}}";
            }};            

            CreateAForkResponse res = sdk.collections.createAFork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCollection

This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).

On successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.

You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCollectionRequestBody;
import org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollection;
import org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionInfo;
import org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItem;
import org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItem;
import org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItemRequest;
import org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItemRequestBody;
import org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader;
import org.openapis.openapi.models.operations.CreateCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCollectionRequestBody req = new CreateCollectionRequestBody() {{
                collection = new CreateCollectionRequestBodyCollection() {{
                    info = new CreateCollectionRequestBodyCollectionInfo() {{
                        description = "This is just a sample collection.";
                        name = "Sample Collection {{$randomInt}}";
                        schema = "https://schema.getpostman.com/json/collection/v2.1.0/collection.json";
                    }};;
                    item = new org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItem[]{{
                        add(new CreateCollectionRequestBodyCollectionItem() {{
                            item = new org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItem[]{{
                                add(new CreateCollectionRequestBodyCollectionItemItem() {{
                                    name = "Sample POST Request";
                                    request = new CreateCollectionRequestBodyCollectionItemItemRequest() {{
                                        body = new CreateCollectionRequestBodyCollectionItemItemRequestBody() {{
                                            mode = "raw";
                                            raw = "{"data": "123"}";
                                        }};
                                        description = "This is a sample POST Request";
                                        header = new org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader[]{{
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                        }};
                                        method = "POST";
                                        url = "https://postman-echo.com/post";
                                    }};
                                }}),
                                add(new CreateCollectionRequestBodyCollectionItemItem() {{
                                    name = "Sample POST Request";
                                    request = new CreateCollectionRequestBodyCollectionItemItemRequest() {{
                                        body = new CreateCollectionRequestBodyCollectionItemItemRequestBody() {{
                                            mode = "raw";
                                            raw = "{"data": "123"}";
                                        }};
                                        description = "This is a sample POST Request";
                                        header = new org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader[]{{
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                        }};
                                        method = "POST";
                                        url = "https://postman-echo.com/post";
                                    }};
                                }}),
                                add(new CreateCollectionRequestBodyCollectionItemItem() {{
                                    name = "Sample POST Request";
                                    request = new CreateCollectionRequestBodyCollectionItemItemRequest() {{
                                        body = new CreateCollectionRequestBodyCollectionItemItemRequestBody() {{
                                            mode = "raw";
                                            raw = "{"data": "123"}";
                                        }};
                                        description = "This is a sample POST Request";
                                        header = new org.openapis.openapi.models.operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader[]{{
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                            add(new CreateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                key = "Content-Type";
                                                value = "application/json";
                                            }}),
                                        }};
                                        method = "POST";
                                        url = "https://postman-echo.com/post";
                                    }};
                                }}),
                            }};
                            name = "This is a folder";
                        }}),
                    }};
                }};;
            }};            

            CreateCollectionResponse res = sdk.collections.createCollection(req);

            if (res.createCollection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCollection

This endpoint allows you to delete an existing collection.

On successful deletion of the collection, the response returns the `id` and `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCollectionRequest;
import org.openapis.openapi.models.operations.DeleteCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCollectionRequest req = new DeleteCollectionRequest("beatae");            

            DeleteCollectionResponse res = sdk.collections.deleteCollection(req);

            if (res.deleteCollection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeAFork

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeAForkRequestBody;
import org.openapis.openapi.models.operations.MergeAForkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MergeAForkRequestBody req = new MergeAForkRequestBody() {{
                destination = "{{destination_collection_uid}}";
                source = "{{source_collection_uid}}";
                strategy = "deleteSource";
            }};            

            MergeAForkResponse res = sdk.collections.mergeAFork(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## singleCollection

Access the contents of a collection that is accessible to you using its unique id (`uid`).

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SingleCollectionRequest;
import org.openapis.openapi.models.operations.SingleCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SingleCollectionRequest req = new SingleCollectionRequest("commodi");            

            SingleCollectionResponse res = sdk.collections.singleCollection(req);

            if (res.singleCollection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCollection

This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).

On successful updation of the collection, the response returns the collection `name`, `id` and `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCollectionRequest;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBody;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollection;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionInfo;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItem;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItem;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItemRequest;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItemRequestBody;
import org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader;
import org.openapis.openapi.models.operations.UpdateCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCollectionRequest req = new UpdateCollectionRequest("molestiae") {{
                requestBody = new UpdateCollectionRequestBody() {{
                    collection = new UpdateCollectionRequestBodyCollection() {{
                        info = new UpdateCollectionRequestBodyCollectionInfo() {{
                            postmanId = "174bad7c-07e3-45f3-914f-36cf84e5586f";
                            description = "This is just a sample collection.";
                            name = "Sample Collection {{$randomInt}}";
                            schema = "https://schema.getpostman.com/json/collection/v2.1.0/collection.json";
                        }};;
                        item = new org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItem[]{{
                            add(new UpdateCollectionRequestBodyCollectionItem() {{
                                item = new org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItem[]{{
                                    add(new UpdateCollectionRequestBodyCollectionItemItem() {{
                                        name = "Sample POST Request";
                                        request = new UpdateCollectionRequestBodyCollectionItemItemRequest() {{
                                            body = new UpdateCollectionRequestBodyCollectionItemItemRequestBody() {{
                                                mode = "raw";
                                                raw = "{"data": "123"}";
                                            }};
                                            description = "This is a sample POST Request";
                                            header = new org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader[]{{
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                            }};
                                            method = "POST";
                                            url = "https://postman-echo.com/post";
                                        }};
                                    }}),
                                }};
                                name = "This is a folder";
                            }}),
                            add(new UpdateCollectionRequestBodyCollectionItem() {{
                                item = new org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItem[]{{
                                    add(new UpdateCollectionRequestBodyCollectionItemItem() {{
                                        name = "Sample POST Request";
                                        request = new UpdateCollectionRequestBodyCollectionItemItemRequest() {{
                                            body = new UpdateCollectionRequestBodyCollectionItemItemRequestBody() {{
                                                mode = "raw";
                                                raw = "{"data": "123"}";
                                            }};
                                            description = "This is a sample POST Request";
                                            header = new org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader[]{{
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                            }};
                                            method = "POST";
                                            url = "https://postman-echo.com/post";
                                        }};
                                    }}),
                                    add(new UpdateCollectionRequestBodyCollectionItemItem() {{
                                        name = "Sample POST Request";
                                        request = new UpdateCollectionRequestBodyCollectionItemItemRequest() {{
                                            body = new UpdateCollectionRequestBodyCollectionItemItemRequestBody() {{
                                                mode = "raw";
                                                raw = "{"data": "123"}";
                                            }};
                                            description = "This is a sample POST Request";
                                            header = new org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader[]{{
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                            }};
                                            method = "POST";
                                            url = "https://postman-echo.com/post";
                                        }};
                                    }}),
                                    add(new UpdateCollectionRequestBodyCollectionItemItem() {{
                                        name = "Sample POST Request";
                                        request = new UpdateCollectionRequestBodyCollectionItemItemRequest() {{
                                            body = new UpdateCollectionRequestBodyCollectionItemItemRequestBody() {{
                                                mode = "raw";
                                                raw = "{"data": "123"}";
                                            }};
                                            description = "This is a sample POST Request";
                                            header = new org.openapis.openapi.models.operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader[]{{
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                                add(new UpdateCollectionRequestBodyCollectionItemItemRequestHeader() {{
                                                    key = "Content-Type";
                                                    value = "application/json";
                                                }}),
                                            }};
                                            method = "POST";
                                            url = "https://postman-echo.com/post";
                                        }};
                                    }}),
                                }};
                                name = "This is a folder";
                            }}),
                        }};
                    }};;
                }};;
            }};            

            UpdateCollectionResponse res = sdk.collections.updateCollection(req);

            if (res.updateCollection200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
