# mocks

### Available Operations

* [allMocks](#allmocks) - All Mocks
* [createMock](#createmock) - Create Mock
* [deleteMock](#deletemock) - Delete Mock
* [publishMock](#publishmock) - Publish Mock
* [singleMock](#singlemock) - Single Mock
* [unpublishMock](#unpublishmock) - Unpublish Mock
* [updateMock](#updatemock) - Update Mock

## allMocks

This endpoint fetches all the mocks that you have created.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllMocksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllMocksResponse res = sdk.mocks.allMocks();

            if (res.allMocks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMock

This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.

You can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMockRequestBody;
import org.openapis.openapi.models.operations.CreateMockRequestBodyMock;
import org.openapis.openapi.models.operations.CreateMockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMockRequestBody req = new CreateMockRequestBody() {{
                mock = new CreateMockRequestBodyMock() {{
                    collection = "1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc";
                    environment = "1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524";
                }};;
            }};            

            CreateMockResponse res = sdk.mocks.createMock(req);

            if (res.createMock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMock

This endpoint allows you to delete an existing mock using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMockRequest;
import org.openapis.openapi.models.operations.DeleteMockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMockRequest req = new DeleteMockRequest("hic");            

            DeleteMockResponse res = sdk.mocks.deleteMock(req);

            if (res.deleteMock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishMock

This endpoint publishes the mock you have created using its `uid`

> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishMockRequest;
import org.openapis.openapi.models.operations.PublishMockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishMockRequest req = new PublishMockRequest("saepe");            

            PublishMockResponse res = sdk.mocks.publishMock(req);

            if (res.publishMock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## singleMock

This endpoint fetches you the basic information about a single mock using its `uid`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SingleMockRequest;
import org.openapis.openapi.models.operations.SingleMockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SingleMockRequest req = new SingleMockRequest("fuga");            

            SingleMockResponse res = sdk.mocks.singleMock(req);

            if (res.singleMock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unpublishMock

This endpoint unpublishes the mock you have created using its `uid`

> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnpublishMockRequest;
import org.openapis.openapi.models.operations.UnpublishMockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnpublishMockRequest req = new UnpublishMockRequest("in");            

            UnpublishMockResponse res = sdk.mocks.unpublishMock(req);

            if (res.unpublishMock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMock

This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,
* name
* environment
* description
* private
* versionTag

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMockRequest;
import org.openapis.openapi.models.operations.UpdateMockRequestBody;
import org.openapis.openapi.models.operations.UpdateMockRequestBodyMock;
import org.openapis.openapi.models.operations.UpdateMockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMockRequest req = new UpdateMockRequest("corporis") {{
                requestBody = new UpdateMockRequestBody() {{
                    mock = new UpdateMockRequestBodyMock() {{
                        description = "example describing update mock description";
                        environment = "11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19";
                        name = "My Mock Server";
                        private_ = false;
                        versionTag = "abf07d3d-f8ec-47d4-8015-9fe83078b4ec";
                    }};;
                }};;
            }};            

            UpdateMockResponse res = sdk.mocks.updateMock(req);

            if (res.updateMock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
