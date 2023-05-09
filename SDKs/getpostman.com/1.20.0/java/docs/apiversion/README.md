# apiVersion

## Overview

This folder contains the requests around API versions.

### Available Operations

* [createApiVersion](#createapiversion) - Create API Version
* [deleteAnApiVersion](#deleteanapiversion) - Delete an API Version
* [getAllApiVersions](#getallapiversions) - Get All API Versions
* [getAnApiVersion](#getanapiversion) - Get an API Version
* [updateAnApiVersion](#updateanapiversion) - Update an API Version

## createApiVersion

This call creates a new API version in the specified API.  

Request body should contain a `version` object which should have fields:

<table>
<tr>
	<td>name</td>
	<td>Required. Name of the API Version</td>
</tr>
<tr>
	<td>source</td>
	<td>
		If specified, it will copy the contents of the specified api version to create a new api verison.
		<table>
			<tr>
				<td>id</td>
				<td>Required. Id of the apiversion from where the details are to be copied</td>
			</tr>
			<tr>
				<td>schema</td>
				<td>Boolean. If true then copies the schema from the specified api version</td>
			</tr>
			<tr>
				<td>relations</td>
				<td>Object. {"&lt;relationType&gt;": true/false}.  
					Allowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`
				Relation types which should be copied over to the new api verison</td>
			</tr>
		</table>
	</td>
</tr>
</table>

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiVersionRequest;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBody;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBodyVersion;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBodyVersionSource;
import org.openapis.openapi.models.operations.CreateApiVersionRequestBodyVersionSourceRelations;
import org.openapis.openapi.models.operations.CreateApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApiVersionRequest req = new CreateApiVersionRequest("quod") {{
                requestBody = new CreateApiVersionRequestBody() {{
                    version = new CreateApiVersionRequestBodyVersion() {{
                        name = "1.0";
                        source = new CreateApiVersionRequestBodyVersionSource() {{
                            id = "{{apiVersionId}}";
                            relations = new CreateApiVersionRequestBodyVersionSourceRelations() {{
                                documentation = true;
                                mock = true;
                                monitor = true;
                            }};;
                            schema = true;
                        }};;
                    }};;
                }};;
            }};            

            CreateApiVersionResponse res = sdk.apiVersion.createApiVersion(req);

            if (res.createApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnApiVersion

This call deletes an existing API Version having the specified id.  

Response contains an `version` object with `id` of the API Version which was deleted.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnApiVersionRequest;
import org.openapis.openapi.models.operations.DeleteAnApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAnApiVersionRequest req = new DeleteAnApiVersionRequest("esse", "totam");            

            DeleteAnApiVersionResponse res = sdk.apiVersion.deleteAnApiVersion(req);

            if (res.deleteAnApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllApiVersions

This call fetches details about the all the API Versions in the specified API.

The response will contain an array `versions` object which would be a list of all the API Version along with their details.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllApiVersionsRequest;
import org.openapis.openapi.models.operations.GetAllApiVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllApiVersionsRequest req = new GetAllApiVersionsRequest("porro");            

            GetAllApiVersionsResponse res = sdk.apiVersion.getAllApiVersions(req);

            if (res.getAllApiVersions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnApiVersion

This call fetches details about the specified API Version.

The response will contain a `version` object which would contain all the details of the API Version.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnApiVersionRequest;
import org.openapis.openapi.models.operations.GetAnApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnApiVersionRequest req = new GetAnApiVersionRequest("dolorum", "dicta");            

            GetAnApiVersionResponse res = sdk.apiVersion.getAnApiVersion(req);

            if (res.getAnApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnApiVersion

This call updates an existing API Version.  

Request body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.

Response contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnApiVersionRequest;
import org.openapis.openapi.models.operations.UpdateAnApiVersionRequestBody;
import org.openapis.openapi.models.operations.UpdateAnApiVersionRequestBodyVersion;
import org.openapis.openapi.models.operations.UpdateAnApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAnApiVersionRequest req = new UpdateAnApiVersionRequest("nam", "officia") {{
                requestBody = new UpdateAnApiVersionRequestBody() {{
                    version = new UpdateAnApiVersionRequestBodyVersion() {{
                        name = "2.0";
                    }};;
                }};;
            }};            

            UpdateAnApiVersionResponse res = sdk.apiVersion.updateAnApiVersion(req);

            if (res.updateAnApiVersion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
