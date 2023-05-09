# scripts

## Overview

Scripts Restv 2 Controller

### Available Operations

* [exportZipUsingGET](#exportzipusingget) - exportZip
* [getScriptDifferencesUsingGET](#getscriptdifferencesusingget) - getScriptDifferences
* [getScriptVersionsUsingGET](#getscriptversionsusingget) - getScriptVersions
* [getScriptVersionsUsingGET1](#getscriptversionsusingget1) - getScriptVersions
* [importAcceptUsingPOST](#importacceptusingpost) - importAccept
* [importZipUsingPOST](#importzipusingpost) - importZip

## exportZipUsingGET

exportZip

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportZipUsingGETRequest;
import org.openapis.openapi.models.operations.ExportZipUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportZipUsingGETRequest req = new ExportZipUsingGETRequest("sint");            

            ExportZipUsingGETResponse res = sdk.scripts.exportZipUsingGET(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScriptDifferencesUsingGET

getScriptDifferences

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETScriptDifferencesUsingGETRequest;
import org.openapis.openapi.models.operations.GETScriptDifferencesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETScriptDifferencesUsingGETRequest req = new GETScriptDifferencesUsingGETRequest("accusantium", "mollitia", "reiciendis");            

            GETScriptDifferencesUsingGETResponse res = sdk.scripts.getScriptDifferencesUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScriptVersionsUsingGET

getScriptVersions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETScriptVersionsUsingGETRequest;
import org.openapis.openapi.models.operations.GETScriptVersionsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETScriptVersionsUsingGETRequest req = new GETScriptVersionsUsingGETRequest("mollitia", 320997) {{
                pageSize = 431418;
            }};            

            GETScriptVersionsUsingGETResponse res = sdk.scripts.getScriptVersionsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScriptVersionsUsingGET1

getScriptVersions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETScriptVersionsUsingGET1Request;
import org.openapis.openapi.models.operations.GETScriptVersionsUsingGET1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETScriptVersionsUsingGET1Request req = new GETScriptVersionsUsingGET1Request("dolor") {{
                pageSize = 896547;
            }};            

            GETScriptVersionsUsingGET1Response res = sdk.scripts.getScriptVersionsUsingGET1(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importAcceptUsingPOST

importAccept

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportAcceptUsingPOSTRequest;
import org.openapis.openapi.models.operations.ImportAcceptUsingPOSTRequestBody;
import org.openapis.openapi.models.operations.ImportAcceptUsingPOSTRequestBodyFile;
import org.openapis.openapi.models.operations.ImportAcceptUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportAcceptUsingPOSTRequest req = new ImportAcceptUsingPOSTRequest(                new ImportAcceptUsingPOSTRequestBody(                new ImportAcceptUsingPOSTRequestBodyFile("odit".getBytes(), "nemo"););, "quasi", "iure");            

            ImportAcceptUsingPOSTResponse res = sdk.scripts.importAcceptUsingPOST(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importZipUsingPOST

importZip

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportZipUsingPOSTRequest;
import org.openapis.openapi.models.operations.ImportZipUsingPOSTRequestBody;
import org.openapis.openapi.models.operations.ImportZipUsingPOSTRequestBodyFile;
import org.openapis.openapi.models.operations.ImportZipUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportZipUsingPOSTRequest req = new ImportZipUsingPOSTRequest(                new ImportZipUsingPOSTRequestBody(                new ImportZipUsingPOSTRequestBodyFile("doloribus".getBytes(), "debitis"););, "eius");            

            ImportZipUsingPOSTResponse res = sdk.scripts.importZipUsingPOST(req);

            if (res.scriptsDifferenceListModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
