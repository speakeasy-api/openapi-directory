# privateDockerImagesRegistry

### Available Operations

* [getRegistryNamespaces](#getregistrynamespaces) - Retrieve the namespace of an organization.
* [getRegistryNamespacesNamespace](#getregistrynamespacesnamespace) - Check the availability of a namespace
* [putRegistryNamespacesNamespace](#putregistrynamespacesnamespace) - Set a namespace for your private Bluemix registry.

## getRegistryNamespaces

This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegistryNamespacesRequest;
import org.openapis.openapi.models.operations.GetRegistryNamespacesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRegistryNamespacesRequest req = new GetRegistryNamespacesRequest("laborum", "dolores");            

            GetRegistryNamespacesResponse res = sdk.privateDockerImagesRegistry.getRegistryNamespaces(req);

            if (res.namespace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRegistryNamespacesNamespace

This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization. 

 Consider the following rules when choosing a namespace for your organization: 

- Every organization can have one namespace at a time only 
- The namespace must be unique in Bluemix. 
- The namespace can be 4-30 characters long. 
- The namespace must start with at least one letter or number. 
- The namespace can only contain lowercase letters, numbers or underscores (_). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRegistryNamespacesNamespaceRequest;
import org.openapis.openapi.models.operations.GetRegistryNamespacesNamespaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRegistryNamespacesNamespaceRequest req = new GetRegistryNamespacesNamespaceRequest("dolorem", "corporis", "explicabo");            

            GetRegistryNamespacesNamespaceResponse res = sdk.privateDockerImagesRegistry.getRegistryNamespacesNamespace(req);

            if (res.namespace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRegistryNamespacesNamespace

Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry. 

 The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization: 

- Every organization can have one namespace at a time only 
- The namespace must be unique in Bluemix. 
- The namespace can be 4-30 characters long. 
- The namespace must start with at least one letter or number. 
- The namespace can only contain lowercase letters, numbers or underscores (_).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRegistryNamespacesNamespaceRequest;
import org.openapis.openapi.models.operations.PutRegistryNamespacesNamespaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRegistryNamespacesNamespaceRequest req = new PutRegistryNamespacesNamespaceRequest("nobis", "enim", "omnis");            

            PutRegistryNamespacesNamespaceResponse res = sdk.privateDockerImagesRegistry.putRegistryNamespacesNamespace(req);

            if (res.namespace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
