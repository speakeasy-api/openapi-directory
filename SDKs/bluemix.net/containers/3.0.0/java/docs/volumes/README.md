# volumes

### Available Operations

* [deleteVolumesName](#deletevolumesname) - Delete a volume
* [getVolumesJson](#getvolumesjson) - List all volumes for a space
* [getVolumesNameJson](#getvolumesnamejson) - Retrieve detailed information about a volume. 
* [postVolumesCreate](#postvolumescreate) - Create a volume in a space
* [postVolumesName](#postvolumesname) - Share a volume with another space

## deleteVolumesName

Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVolumesNameRequest;
import org.openapis.openapi.models.operations.DeleteVolumesNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteVolumesNameRequest req = new DeleteVolumesNameRequest("modi", "qui", "aliquid");            

            DeleteVolumesNameResponse res = sdk.volumes.deleteVolumesName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumesJson

This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumesJsonRequest;
import org.openapis.openapi.models.operations.GetVolumesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVolumesJsonRequest req = new GetVolumesJsonRequest("cupiditate", "quos");            

            GetVolumesJsonResponse res = sdk.volumes.getVolumesJson(req);

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumesNameJson

Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumesNameJsonRequest;
import org.openapis.openapi.models.operations.GetVolumesNameJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVolumesNameJsonRequest req = new GetVolumesNameJsonRequest("perferendis", "magni", "assumenda");            

            GetVolumesNameJsonResponse res = sdk.volumes.getVolumesNameJson(req);

            if (res.volume != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVolumesCreate

This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS). 

 After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints. 

 Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVolumesCreateRequest;
import org.openapis.openapi.models.operations.PostVolumesCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVolumesCreateRequest req = new PostVolumesCreateRequest("ipsam", "alias", "fugit") {{
                fsName = "dolorum";
            }};            

            PostVolumesCreateResponse res = sdk.volumes.postVolumesCreate(req);

            if (res.volume != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVolumesName

This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVolumesNameRequest;
import org.openapis.openapi.models.operations.PostVolumesNameResponse;
import org.openapis.openapi.models.shared.UpdateVolume;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVolumesNameRequest req = new PostVolumesNameRequest(                new UpdateVolume() {{
                                addSpaces = new String[]{{
                                    add("tempora"),
                                    add("facilis"),
                                    add("tempore"),
                                }};
                                removeSpaces = new String[]{{
                                    add("delectus"),
                                    add("eum"),
                                }};
                            }};, "non", "eligendi", "sint");            

            PostVolumesNameResponse res = sdk.volumes.postVolumesName(req);

            if (res.volume != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
