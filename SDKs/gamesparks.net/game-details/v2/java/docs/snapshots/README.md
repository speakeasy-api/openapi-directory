# snapshots

### Available Operations

* [copySnapshotToExistingGameUsingPOST1](#copysnapshottoexistinggameusingpost1) - copySnapshotToExistingGame
* [copySnapshotToNewGameUsingPOST](#copysnapshottonewgameusingpost) - copySnapshotToNewGame
* [createSnapshotsUsingPOST](#createsnapshotsusingpost) - createSnapshots
* [deleteSnapshotUsingDELETE1](#deletesnapshotusingdelete1) - deleteSnapshot
* [getLiveSnapshotIdUsingGET](#getlivesnapshotidusingget) - getLiveSnapshotId
* [getSnapshotUsingGET](#getsnapshotusingget) - getSnapshot
* [getSnapshotsUsingGET](#getsnapshotsusingget) - getSnapshots
* [getSnapshotsUsingGET1](#getsnapshotsusingget1) - getSnapshots
* [publishSnapshotUsingPOST1](#publishsnapshotusingpost1) - publishSnapshot
* [revertToSnapshotUsingPOST](#reverttosnapshotusingpost) - revertToSnapshot
* [unpublishSnapshotUsingPOST](#unpublishsnapshotusingpost) - unpublishSnapshot

## copySnapshotToExistingGameUsingPOST1

copySnapshotToExistingGame

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopySnapshotToExistingGameUsingPOST1Request;
import org.openapis.openapi.models.operations.CopySnapshotToExistingGameUsingPOST1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CopySnapshotToExistingGameUsingPOST1Request req = new CopySnapshotToExistingGameUsingPOST1Request("iste", "dolorum", "deleniti") {{
                includeBinaries = false;
                includeCollaborators = false;
                includeGameConfig = false;
                includeMetadata = false;
            }};            

            CopySnapshotToExistingGameUsingPOST1Response res = sdk.snapshots.copySnapshotToExistingGameUsingPOST1(req);

            if (res.snapshotCreationSuccessModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copySnapshotToNewGameUsingPOST

copySnapshotToNewGame

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopySnapshotToNewGameUsingPOSTRequest;
import org.openapis.openapi.models.operations.CopySnapshotToNewGameUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CopySnapshotToNewGameUsingPOSTRequest req = new CopySnapshotToNewGameUsingPOSTRequest("pariatur", "provident") {{
                includeBinaries = false;
                includeCollaborators = false;
                includeGameConfig = false;
                includeMetadata = false;
            }};            

            CopySnapshotToNewGameUsingPOSTResponse res = sdk.snapshots.copySnapshotToNewGameUsingPOST(req);

            if (res.snapshotCreationSuccessModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnapshotsUsingPOST

createSnapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSnapshotsUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateSnapshotsUsingPOSTResponse;
import org.openapis.openapi.models.shared.SnapshotCreationModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSnapshotsUsingPOSTRequest req = new CreateSnapshotsUsingPOSTRequest(                new SnapshotCreationModel() {{
                                description = "nobis";
                            }};, "libero");            

            CreateSnapshotsUsingPOSTResponse res = sdk.snapshots.createSnapshotsUsingPOST(req);

            if (res.snapshotModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSnapshotUsingDELETE1

deleteSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETESnapshotUsingDELETE1Request;
import org.openapis.openapi.models.operations.DELETESnapshotUsingDELETE1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETESnapshotUsingDELETE1Request req = new DELETESnapshotUsingDELETE1Request("delectus", "quaerat");            

            DELETESnapshotUsingDELETE1Response res = sdk.snapshots.deleteSnapshotUsingDELETE1(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLiveSnapshotIdUsingGET

getLiveSnapshotId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETLiveSnapshotIdUsingGETRequest;
import org.openapis.openapi.models.operations.GETLiveSnapshotIdUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETLiveSnapshotIdUsingGETRequest req = new GETLiveSnapshotIdUsingGETRequest("quos");            

            GETLiveSnapshotIdUsingGETResponse res = sdk.snapshots.getLiveSnapshotIdUsingGET(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshotUsingGET

getSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSnapshotUsingGETRequest;
import org.openapis.openapi.models.operations.GETSnapshotUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSnapshotUsingGETRequest req = new GETSnapshotUsingGETRequest("aliquid", "dolorem");            

            GETSnapshotUsingGETResponse res = sdk.snapshots.getSnapshotUsingGET(req);

            if (res.snapshotModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshotsUsingGET

getSnapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSnapshotsUsingGETRequest;
import org.openapis.openapi.models.operations.GETSnapshotsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSnapshotsUsingGETRequest req = new GETSnapshotsUsingGETRequest("dolorem", 222443) {{
                pageSize = 186193;
            }};            

            GETSnapshotsUsingGETResponse res = sdk.snapshots.getSnapshotsUsingGET(req);

            if (res.snapshotModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshotsUsingGET1

getSnapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSnapshotsUsingGET1Request;
import org.openapis.openapi.models.operations.GETSnapshotsUsingGET1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSnapshotsUsingGET1Request req = new GETSnapshotsUsingGET1Request("ipsum") {{
                pageSize = 944373;
            }};            

            GETSnapshotsUsingGET1Response res = sdk.snapshots.getSnapshotsUsingGET1(req);

            if (res.snapshotModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishSnapshotUsingPOST1

publishSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishSnapshotUsingPOST1Request;
import org.openapis.openapi.models.operations.PublishSnapshotUsingPOST1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishSnapshotUsingPOST1Request req = new PublishSnapshotUsingPOST1Request("excepturi", "cum");            

            PublishSnapshotUsingPOST1Response res = sdk.snapshots.publishSnapshotUsingPOST1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revertToSnapshotUsingPOST

revertToSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevertToSnapshotUsingPOSTRequest;
import org.openapis.openapi.models.operations.RevertToSnapshotUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RevertToSnapshotUsingPOSTRequest req = new RevertToSnapshotUsingPOSTRequest("voluptate", "dignissimos");            

            RevertToSnapshotUsingPOSTResponse res = sdk.snapshots.revertToSnapshotUsingPOST(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unpublishSnapshotUsingPOST

unpublishSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnpublishSnapshotUsingPOSTRequest;
import org.openapis.openapi.models.operations.UnpublishSnapshotUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnpublishSnapshotUsingPOSTRequest req = new UnpublishSnapshotUsingPOSTRequest("reiciendis", "amet");            

            UnpublishSnapshotUsingPOSTResponse res = sdk.snapshots.unpublishSnapshotUsingPOST(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
