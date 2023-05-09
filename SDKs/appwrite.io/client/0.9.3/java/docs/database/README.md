# database

## Overview

The Database service allows you to create structured collections of documents, query and filter lists of documents

### Available Operations

* [databaseCreateDocument](#databasecreatedocument) - Create Document
* [databaseDeleteDocument](#databasedeletedocument) - Delete Document
* [databaseGetDocument](#databasegetdocument) - Get Document
* [databaseListDocuments](#databaselistdocuments) - List Documents
* [databaseUpdateDocument](#databaseupdatedocument) - Update Document

## databaseCreateDocument

Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseCreateDocumentRequest;
import org.openapis.openapi.models.operations.DatabaseCreateDocumentRequestBody;
import org.openapis.openapi.models.operations.DatabaseCreateDocumentResponse;
import org.openapis.openapi.models.operations.DatabaseCreateDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseCreateDocumentRequest req = new DatabaseCreateDocumentRequest("quo") {{
                requestBody = new DatabaseCreateDocumentRequestBody(                new java.util.HashMap<String, Object>() {{
                                    put("tenetur", "ipsam");
                                }}) {{
                    parentDocument = "id";
                    parentProperty = "possimus";
                    parentPropertyType = "aut";
                    read = new String[]{{
                        add("error"),
                    }};
                    write = new String[]{{
                        add("laborum"),
                        add("quasi"),
                        add("reiciendis"),
                        add("voluptatibus"),
                    }};
                }};;
            }};            

            DatabaseCreateDocumentResponse res = sdk.database.databaseCreateDocument(req, new DatabaseCreateDocumentSecurity("vero", "nihil") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## databaseDeleteDocument

Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseDeleteDocumentRequest;
import org.openapis.openapi.models.operations.DatabaseDeleteDocumentResponse;
import org.openapis.openapi.models.operations.DatabaseDeleteDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseDeleteDocumentRequest req = new DatabaseDeleteDocumentRequest("praesentium", "voluptatibus");            

            DatabaseDeleteDocumentResponse res = sdk.database.databaseDeleteDocument(req, new DatabaseDeleteDocumentSecurity("ipsa", "omnis") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## databaseGetDocument

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseGetDocumentRequest;
import org.openapis.openapi.models.operations.DatabaseGetDocumentResponse;
import org.openapis.openapi.models.operations.DatabaseGetDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseGetDocumentRequest req = new DatabaseGetDocumentRequest("voluptate", "cum");            

            DatabaseGetDocumentResponse res = sdk.database.databaseGetDocument(req, new DatabaseGetDocumentSecurity("perferendis", "doloremque") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## databaseListDocuments

Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseListDocumentsRequest;
import org.openapis.openapi.models.operations.DatabaseListDocumentsResponse;
import org.openapis.openapi.models.operations.DatabaseListDocumentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseListDocumentsRequest req = new DatabaseListDocumentsRequest("reprehenderit") {{
                filters = new String[]{{
                    add("maiores"),
                    add("dicta"),
                }};
                limit = 359444;
                offset = 296140;
                orderCast = "iusto";
                orderField = "dicta";
                orderType = "harum";
                search = "enim";
            }};            

            DatabaseListDocumentsResponse res = sdk.database.databaseListDocuments(req, new DatabaseListDocumentsSecurity("accusamus", "commodi") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.documentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## databaseUpdateDocument

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseUpdateDocumentRequest;
import org.openapis.openapi.models.operations.DatabaseUpdateDocumentRequestBody;
import org.openapis.openapi.models.operations.DatabaseUpdateDocumentResponse;
import org.openapis.openapi.models.operations.DatabaseUpdateDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseUpdateDocumentRequest req = new DatabaseUpdateDocumentRequest("repudiandae", "quae") {{
                requestBody = new DatabaseUpdateDocumentRequestBody(                new java.util.HashMap<String, Object>() {{
                                    put("quidem", "molestias");
                                }}) {{
                    read = new String[]{{
                        add("pariatur"),
                        add("modi"),
                        add("praesentium"),
                    }};
                    write = new String[]{{
                        add("voluptates"),
                        add("quasi"),
                        add("repudiandae"),
                    }};
                }};;
            }};            

            DatabaseUpdateDocumentResponse res = sdk.database.databaseUpdateDocument(req, new DatabaseUpdateDocumentSecurity("sint", "veritatis") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
