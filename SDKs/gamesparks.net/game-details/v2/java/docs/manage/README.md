# manage

## Overview

Manage Restv 2 Controller

### Available Operations

* [copySnapshotToExistingGameUsingPOST](#copysnapshottoexistinggameusingpost) - copySnapshotToExistingGame
* [createQueryUsingPOST](#createqueryusingpost) - createQuery
* [createScreenUsingPOST](#createscreenusingpost) - createScreen
* [createSnapshotUsingPOST](#createsnapshotusingpost) - createSnapshot
* [createSnippetUsingPOST](#createsnippetusingpost) - createSnippet
* [deleteQueryUsingDELETE](#deletequeryusingdelete) - deleteQuery
* [deleteScreenUsingDELETE](#deletescreenusingdelete) - deleteScreen
* [deleteSnapshotUsingDELETE](#deletesnapshotusingdelete) - deleteSnapshot
* [deleteSnippetUsingDELETE](#deletesnippetusingdelete) - deleteSnippet
* [getQueryUsingGET](#getqueryusingget) - getQuery
* [getScreenUsingGET](#getscreenusingget) - getScreen
* [getSnippetUsingGET](#getsnippetusingget) - getSnippet
* [listExecutableScreensUsingGET](#listexecutablescreensusingget) - listExecutableScreens
* [listQueriesUsingGET](#listqueriesusingget) - listQueries
* [listScreensUsingGET](#listscreensusingget) - listScreens
* [listSnapshotsUsingGET](#listsnapshotsusingget) - listSnapshots
* [listSnippetsUsingGET](#listsnippetsusingget) - listSnippets
* [publishSnapshotUsingPOST](#publishsnapshotusingpost) - publishSnapshot
* [revertSnapshotUsingPOST](#revertsnapshotusingpost) - revertSnapshot
* [updateQueryUsingPUT](#updatequeryusingput) - updateQuery
* [updateScreenUsingPUT](#updatescreenusingput) - updateScreen
* [updateSnippetUsingPUT](#updatesnippetusingput) - updateSnippet

## copySnapshotToExistingGameUsingPOST

copySnapshotToExistingGame

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopySnapshotToExistingGameUsingPOSTRequest;
import org.openapis.openapi.models.operations.CopySnapshotToExistingGameUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CopySnapshotToExistingGameUsingPOSTRequest req = new CopySnapshotToExistingGameUsingPOSTRequest("dolorem", "culpa", "consequuntur");            

            CopySnapshotToExistingGameUsingPOSTResponse res = sdk.manage.copySnapshotToExistingGameUsingPOST(req);

            if (res.manageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createQueryUsingPOST

createQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQueryUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateQueryUsingPOSTResponse;
import org.openapis.openapi.models.shared.ManageQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateQueryUsingPOSTRequest req = new CreateQueryUsingPOSTRequest(                new ManageQuery() {{
                                esRules = "repellat";
                                name = "Tracy Fritsch";
                                qbRules = "molestiae";
                                shortCode = "velit";
                            }};, "error");            

            CreateQueryUsingPOSTResponse res = sdk.manage.createQueryUsingPOST(req);

            if (res.manageQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScreenUsingPOST

createScreen

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScreenUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateScreenUsingPOSTResponse;
import org.openapis.openapi.models.shared.ManageScreen;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateScreenUsingPOSTRequest req = new CreateScreenUsingPOSTRequest(                new ManageScreen() {{
                                groups = new String[]{{
                                    add("quis"),
                                }};
                                name = "Kayla O'Kon";
                                shortCode = "quo";
                                template = "sequi";
                            }};, "tenetur");            

            CreateScreenUsingPOSTResponse res = sdk.manage.createScreenUsingPOST(req);

            if (res.manageScreen != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnapshotUsingPOST

createSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSnapshotUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateSnapshotUsingPOSTResponse;
import org.openapis.openapi.models.shared.SnapshotCreationModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSnapshotUsingPOSTRequest req = new CreateSnapshotUsingPOSTRequest(                new SnapshotCreationModel() {{
                                description = "ipsam";
                            }};, "id");            

            CreateSnapshotUsingPOSTResponse res = sdk.manage.createSnapshotUsingPOST(req);

            if (res.manageSnapshot != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnippetUsingPOST

createSnippet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSnippetUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateSnippetUsingPOSTResponse;
import org.openapis.openapi.models.shared.ManageSnippet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSnippetUsingPOSTRequest req = new CreateSnippetUsingPOSTRequest(                new ManageSnippet() {{
                                groups = new String[]{{
                                    add("aut"),
                                    add("quasi"),
                                    add("error"),
                                    add("temporibus"),
                                }};
                                name = "Ryan Witting";
                                script = "nihil";
                                scriptData = "praesentium";
                                shortCode = "voluptatibus";
                                template = "ipsa";
                            }};, "omnis");            

            CreateSnippetUsingPOSTResponse res = sdk.manage.createSnippetUsingPOST(req);

            if (res.manageSnippet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQueryUsingDELETE

deleteQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETEQueryUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETEQueryUsingDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETEQueryUsingDELETERequest req = new DELETEQueryUsingDELETERequest("voluptate", "cum");            

            DELETEQueryUsingDELETEResponse res = sdk.manage.deleteQueryUsingDELETE(req);

            if (res.manageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScreenUsingDELETE

deleteScreen

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETEScreenUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETEScreenUsingDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETEScreenUsingDELETERequest req = new DELETEScreenUsingDELETERequest("perferendis", "doloremque");            

            DELETEScreenUsingDELETEResponse res = sdk.manage.deleteScreenUsingDELETE(req);

            if (res.manageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSnapshotUsingDELETE

deleteSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETESnapshotUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETESnapshotUsingDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETESnapshotUsingDELETERequest req = new DELETESnapshotUsingDELETERequest("reprehenderit", "ut");            

            DELETESnapshotUsingDELETEResponse res = sdk.manage.deleteSnapshotUsingDELETE(req);

            if (res.manageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSnippetUsingDELETE

deleteSnippet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DELETESnippetUsingDELETERequest;
import org.openapis.openapi.models.operations.DELETESnippetUsingDELETEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DELETESnippetUsingDELETERequest req = new DELETESnippetUsingDELETERequest("maiores", "dicta");            

            DELETESnippetUsingDELETEResponse res = sdk.manage.deleteSnippetUsingDELETE(req);

            if (res.manageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryUsingGET

getQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETQueryUsingGETRequest;
import org.openapis.openapi.models.operations.GETQueryUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETQueryUsingGETRequest req = new GETQueryUsingGETRequest("corporis", "dolore");            

            GETQueryUsingGETResponse res = sdk.manage.getQueryUsingGET(req);

            if (res.manageQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScreenUsingGET

getScreen

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETScreenUsingGETRequest;
import org.openapis.openapi.models.operations.GETScreenUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETScreenUsingGETRequest req = new GETScreenUsingGETRequest("iusto", "dicta");            

            GETScreenUsingGETResponse res = sdk.manage.getScreenUsingGET(req);

            if (res.manageScreen != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnippetUsingGET

getSnippet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSnippetUsingGETRequest;
import org.openapis.openapi.models.operations.GETSnippetUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSnippetUsingGETRequest req = new GETSnippetUsingGETRequest("harum", "enim");            

            GETSnippetUsingGETResponse res = sdk.manage.getSnippetUsingGET(req);

            if (res.manageSnippet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExecutableScreensUsingGET

listExecutableScreens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExecutableScreensUsingGETRequest;
import org.openapis.openapi.models.operations.ListExecutableScreensUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListExecutableScreensUsingGETRequest req = new ListExecutableScreensUsingGETRequest("accusamus");            

            ListExecutableScreensUsingGETResponse res = sdk.manage.listExecutableScreensUsingGET(req);

            if (res.manageItemSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQueriesUsingGET

listQueries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQueriesUsingGETRequest;
import org.openapis.openapi.models.operations.ListQueriesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListQueriesUsingGETRequest req = new ListQueriesUsingGETRequest("commodi");            

            ListQueriesUsingGETResponse res = sdk.manage.listQueriesUsingGET(req);

            if (res.manageItemSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listScreensUsingGET

listScreens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScreensUsingGETRequest;
import org.openapis.openapi.models.operations.ListScreensUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListScreensUsingGETRequest req = new ListScreensUsingGETRequest("repudiandae");            

            ListScreensUsingGETResponse res = sdk.manage.listScreensUsingGET(req);

            if (res.manageItemSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSnapshotsUsingGET

listSnapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSnapshotsUsingGETRequest;
import org.openapis.openapi.models.operations.ListSnapshotsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSnapshotsUsingGETRequest req = new ListSnapshotsUsingGETRequest("quae");            

            ListSnapshotsUsingGETResponse res = sdk.manage.listSnapshotsUsingGET(req);

            if (res.manageSnapshots != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSnippetsUsingGET

listSnippets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSnippetsUsingGETRequest;
import org.openapis.openapi.models.operations.ListSnippetsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSnippetsUsingGETRequest req = new ListSnippetsUsingGETRequest("ipsum");            

            ListSnippetsUsingGETResponse res = sdk.manage.listSnippetsUsingGET(req);

            if (res.manageItemSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishSnapshotUsingPOST

publishSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishSnapshotUsingPOSTRequest;
import org.openapis.openapi.models.operations.PublishSnapshotUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishSnapshotUsingPOSTRequest req = new PublishSnapshotUsingPOSTRequest("quidem", "molestias");            

            PublishSnapshotUsingPOSTResponse res = sdk.manage.publishSnapshotUsingPOST(req);

            if (res.manageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revertSnapshotUsingPOST

revertSnapshot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevertSnapshotUsingPOSTRequest;
import org.openapis.openapi.models.operations.RevertSnapshotUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RevertSnapshotUsingPOSTRequest req = new RevertSnapshotUsingPOSTRequest("excepturi", "pariatur");            

            RevertSnapshotUsingPOSTResponse res = sdk.manage.revertSnapshotUsingPOST(req);

            if (res.manageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQueryUsingPUT

updateQuery

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQueryUsingPUTRequest;
import org.openapis.openapi.models.operations.UpdateQueryUsingPUTResponse;
import org.openapis.openapi.models.shared.ManageQuery;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateQueryUsingPUTRequest req = new UpdateQueryUsingPUTRequest(                new ManageQuery() {{
                                esRules = "modi";
                                name = "Dr. Jordan Von";
                                qbRules = "veritatis";
                                shortCode = "itaque";
                            }};, "incidunt", "enim");            

            UpdateQueryUsingPUTResponse res = sdk.manage.updateQueryUsingPUT(req);

            if (res.manageQuery != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScreenUsingPUT

updateScreen

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScreenUsingPUTRequest;
import org.openapis.openapi.models.operations.UpdateScreenUsingPUTResponse;
import org.openapis.openapi.models.shared.ManageScreen;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateScreenUsingPUTRequest req = new UpdateScreenUsingPUTRequest(                new ManageScreen() {{
                                groups = new String[]{{
                                    add("est"),
                                }};
                                name = "Benjamin O'Connell";
                                shortCode = "labore";
                                template = "modi";
                            }};, "qui", "aliquid");            

            UpdateScreenUsingPUTResponse res = sdk.manage.updateScreenUsingPUT(req);

            if (res.manageScreen != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSnippetUsingPUT

updateSnippet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSnippetUsingPUTRequest;
import org.openapis.openapi.models.operations.UpdateSnippetUsingPUTResponse;
import org.openapis.openapi.models.shared.ManageSnippet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSnippetUsingPUTRequest req = new UpdateSnippetUsingPUTRequest(                new ManageSnippet() {{
                                groups = new String[]{{
                                    add("quos"),
                                    add("perferendis"),
                                    add("magni"),
                                }};
                                name = "Vernon Abshire";
                                script = "excepturi";
                                scriptData = "tempora";
                                shortCode = "facilis";
                                template = "tempore";
                            }};, "labore", "delectus");            

            UpdateSnippetUsingPUTResponse res = sdk.manage.updateSnippetUsingPUT(req);

            if (res.manageSnippet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
