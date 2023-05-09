# singleContainers

### Available Operations

* [deleteContainersNameOrId](#deletecontainersnameorid) - Remove a single container
* [getContainersJson](#getcontainersjson) - List single containers in a space.
* [getContainersIdStatus](#getcontainersidstatus) - List the current state of a container.
* [getContainersNameOrIdJson](#getcontainersnameoridjson) - Inspect a single container
* [postContainersCreate](#postcontainerscreate) - Create and start a single container
* [postContainersNameOrIdPause](#postcontainersnameoridpause) - Pause a single container
* [postContainersNameOrIdRename](#postcontainersnameoridrename) - Rename a single container
* [postContainersNameOrIdRestart](#postcontainersnameoridrestart) - Restart a single container
* [postContainersNameOrIdStart](#postcontainersnameoridstart) - Start a single container
* [postContainersNameOrIdStop](#postcontainersnameoridstop) - Stop a single container
* [postContainersNameOrIdUnpause](#postcontainersnameoridunpause) - Unpause a single container

## deleteContainersNameOrId

Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteContainersNameOrIdRequest;
import org.openapis.openapi.models.operations.DeleteContainersNameOrIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteContainersNameOrIdRequest req = new DeleteContainersNameOrIdRequest("quis", "vitae", "laborum") {{
                force = false;
            }};            

            DeleteContainersNameOrIdResponse res = sdk.singleContainers.deleteContainersNameOrId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainersJson

This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersJsonRequest;
import org.openapis.openapi.models.operations.GetContainersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersJsonRequest req = new GetContainersJsonRequest("animi", "enim") {{
                all = "odit";
                filters = "quo";
            }};            

            GetContainersJsonResponse res = sdk.singleContainers.getContainersJson(req);

            if (res.containers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainersIdStatus

This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersIdStatusRequest;
import org.openapis.openapi.models.operations.GetContainersIdStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersIdStatusRequest req = new GetContainersIdStatusRequest("sequi", "tenetur", "ipsam");            

            GetContainersIdStatusResponse res = sdk.singleContainers.getContainersIdStatus(req);

            if (res.getContainerStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContainersNameOrIdJson

This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersNameOrIdJsonRequest;
import org.openapis.openapi.models.operations.GetContainersNameOrIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersNameOrIdJsonRequest req = new GetContainersNameOrIdJsonRequest("id", "possimus", "aut");            

            GetContainersNameOrIdJsonResponse res = sdk.singleContainers.getContainersNameOrIdJson(req);

            if (res.containerInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersCreate

This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app. 

 In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container. 

 To create a container with IBM Containers, you must at least define the image that the container is based on.

- Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersCreateRequest;
import org.openapis.openapi.models.operations.PostContainersCreateResponse;
import org.openapis.openapi.models.shared.CreateContainer;
import org.openapis.openapi.models.shared.HostConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersCreateRequest req = new PostContainersCreateRequest(                new CreateContainer("quasi") {{
                                bluemixApp = "error";
                                cmd = new String[]{{
                                    add("laborum"),
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
                                }};
                                cpuset = "vero";
                                env = new String[]{{
                                    add("praesentium"),
                                    add("voluptatibus"),
                                }};
                                exposedPorts = new String[]{{
                                    add("omnis"),
                                }};
                                hostConfig = new HostConfig() {{
                                    binds = new String[]{{
                                        add("cum"),
                                        add("perferendis"),
                                    }};
                                    extraHosts = new String[]{{
                                        add("reprehenderit"),
                                    }};
                                    links = new String[]{{
                                        add("maiores"),
                                        add("dicta"),
                                    }};
                                    portBindings = new String[]{{
                                        add("dolore"),
                                        add("iusto"),
                                    }};
                                }};;
                                memory = 118727;
                                numberCpus = 688661;
                                volumes = "enim";
                            }};, "accusamus", "commodi") {{
                name = "Eric Emmerich";
            }};            

            PostContainersCreateResponse res = sdk.singleContainers.postContainersCreate(req);

            if (res.containerId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdPause

Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdPauseRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdPauseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdPauseRequest req = new PostContainersNameOrIdPauseRequest("excepturi", "pariatur", "modi");            

            PostContainersNameOrIdPauseResponse res = sdk.singleContainers.postContainersNameOrIdPause(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdRename

Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdRenameRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdRenameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdRenameRequest req = new PostContainersNameOrIdRenameRequest("praesentium", "rem", "voluptates", "quasi");            

            PostContainersNameOrIdRenameResponse res = sdk.singleContainers.postContainersNameOrIdRename(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdRestart

Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdRestartRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdRestartResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdRestartRequest req = new PostContainersNameOrIdRestartRequest("repudiandae", "sint", "veritatis") {{
                t = 929297L;
            }};            

            PostContainersNameOrIdRestartResponse res = sdk.singleContainers.postContainersNameOrIdRestart(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdStart

Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdStartRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdStartResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdStartRequest req = new PostContainersNameOrIdStartRequest("incidunt", "enim", "consequatur");            

            PostContainersNameOrIdStartResponse res = sdk.singleContainers.postContainersNameOrIdStart(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdStop

Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdStopRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdStopResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdStopRequest req = new PostContainersNameOrIdStopRequest("est", "quibusdam", "explicabo") {{
                t = 647174L;
            }};            

            PostContainersNameOrIdStopResponse res = sdk.singleContainers.postContainersNameOrIdStop(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContainersNameOrIdUnpause

Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContainersNameOrIdUnpauseRequest;
import org.openapis.openapi.models.operations.PostContainersNameOrIdUnpauseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContainersNameOrIdUnpauseRequest req = new PostContainersNameOrIdUnpauseRequest("distinctio", "quibusdam", "labore");            

            PostContainersNameOrIdUnpauseResponse res = sdk.singleContainers.postContainersNameOrIdUnpause(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
