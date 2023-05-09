# images

### Available Operations

* [deleteImagesId](#deleteimagesid) - Remove a Docker image.
* [getImagesJson](#getimagesjson) - List all Docker images that are available in your private Bluemix registry.
* [getImagesNameOrIdJson](#getimagesnameoridjson) - Inspect a Docker image in private Bluemix registry
* [postBuild](#postbuild) - Build a Docker image from a Dockerfile

## deleteImagesId

Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImagesIdRequest;
import org.openapis.openapi.models.operations.DeleteImagesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteImagesIdRequest req = new DeleteImagesIdRequest("fuga", "in", "corporis");            

            DeleteImagesIdResponse res = sdk.images.deleteImagesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagesJson

This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesJsonRequest;
import org.openapis.openapi.models.operations.GetImagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesJsonRequest req = new GetImagesJsonRequest("iste", "iure");            

            GetImagesJsonResponse res = sdk.images.getImagesJson(req);

            if (res.imageInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImagesNameOrIdJson

This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImagesNameOrIdJsonRequest;
import org.openapis.openapi.models.operations.GetImagesNameOrIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetImagesNameOrIdJsonRequest req = new GetImagesNameOrIdJsonRequest("saepe", "quidem", "architecto");            

            GetImagesNameOrIdJsonResponse res = sdk.images.getImagesNameOrIdJson(req);

            if (res.imageDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBuild

This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).

 To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBuildRequest;
import org.openapis.openapi.models.operations.PostBuildResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBuildRequest req = new PostBuildRequest("ipsa".getBytes(), "reiciendis", "est", "mollitia") {{
                nocache = false;
                pull = false;
                q = false;
            }};            

            PostBuildResponse res = sdk.images.postBuild(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
