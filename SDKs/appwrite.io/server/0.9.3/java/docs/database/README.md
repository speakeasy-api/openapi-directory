# database

## Overview

The Database service allows you to create structured collections of documents, query and filter lists of documents

### Available Operations

* [databaseCreateCollection](#databasecreatecollection) - Create Collection
* [databaseCreateDocument](#databasecreatedocument) - Create Document
* [databaseDeleteCollection](#databasedeletecollection) - Delete Collection
* [databaseDeleteDocument](#databasedeletedocument) - Delete Document
* [databaseGetCollection](#databasegetcollection) - Get Collection
* [databaseGetDocument](#databasegetdocument) - Get Document
* [databaseListCollections](#databaselistcollections) - List Collections
* [databaseListDocuments](#databaselistdocuments) - List Documents
* [databaseUpdateCollection](#databaseupdatecollection) - Update Collection
* [databaseUpdateDocument](#databaseupdatedocument) - Update Document

## databaseCreateCollection

Create a new Collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseCreateCollectionRequestBody;
import org.openapis.openapi.models.operations.DatabaseCreateCollectionResponse;
import org.openapis.openapi.models.operations.DatabaseCreateCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseCreateCollectionRequestBody req = new DatabaseCreateCollectionRequestBody("consequuntur",                 new String[]{{
                                add("mollitia"),
                                add("occaecati"),
                                add("numquam"),
                                add("commodi"),
                            }},                 new String[]{{
                                add("molestiae"),
                                add("velit"),
                            }},                 new String[]{{
                                add("quia"),
                                add("quis"),
                                add("vitae"),
                            }});            

            DatabaseCreateCollectionResponse res = sdk.database.databaseCreateCollection(req, new DatabaseCreateCollectionSecurity("laborum", "animi") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            DatabaseCreateDocumentRequest req = new DatabaseCreateDocumentRequest("enim") {{
                requestBody = new DatabaseCreateDocumentRequestBody(                new java.util.HashMap<String, Object>() {{
                                    put("quo", "sequi");
                                }}) {{
                    parentDocument = "tenetur";
                    parentProperty = "ipsam";
                    parentPropertyType = "id";
                    read = new String[]{{
                        add("aut"),
                        add("quasi"),
                        add("error"),
                        add("temporibus"),
                    }};
                    write = new String[]{{
                        add("quasi"),
                        add("reiciendis"),
                        add("voluptatibus"),
                    }};
                }};;
            }};            

            DatabaseCreateDocumentResponse res = sdk.database.databaseCreateDocument(req, new DatabaseCreateDocumentSecurity("vero", "nihil", "praesentium") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## databaseDeleteCollection

Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseDeleteCollectionRequest;
import org.openapis.openapi.models.operations.DatabaseDeleteCollectionResponse;
import org.openapis.openapi.models.operations.DatabaseDeleteCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseDeleteCollectionRequest req = new DatabaseDeleteCollectionRequest("voluptatibus");            

            DatabaseDeleteCollectionResponse res = sdk.database.databaseDeleteCollection(req, new DatabaseDeleteCollectionSecurity("ipsa", "omnis") {{
                key = "YOUR_API_KEY_HERE";
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

            DatabaseDeleteDocumentRequest req = new DatabaseDeleteDocumentRequest("voluptate", "cum");            

            DatabaseDeleteDocumentResponse res = sdk.database.databaseDeleteDocument(req, new DatabaseDeleteDocumentSecurity("perferendis", "doloremque", "reprehenderit") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## databaseGetCollection

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseGetCollectionRequest;
import org.openapis.openapi.models.operations.DatabaseGetCollectionResponse;
import org.openapis.openapi.models.operations.DatabaseGetCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseGetCollectionRequest req = new DatabaseGetCollectionRequest("ut");            

            DatabaseGetCollectionResponse res = sdk.database.databaseGetCollection(req, new DatabaseGetCollectionSecurity("maiores", "dicta") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.collection != null) {
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

            DatabaseGetDocumentRequest req = new DatabaseGetDocumentRequest("corporis", "dolore");            

            DatabaseGetDocumentResponse res = sdk.database.databaseGetDocument(req, new DatabaseGetDocumentSecurity("iusto", "dicta", "harum") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## databaseListCollections

Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseListCollectionsRequest;
import org.openapis.openapi.models.operations.DatabaseListCollectionsResponse;
import org.openapis.openapi.models.operations.DatabaseListCollectionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseListCollectionsRequest req = new DatabaseListCollectionsRequest() {{
                limit = 317983;
                offset = 880476;
                orderType = "commodi";
                search = "repudiandae";
            }};            

            DatabaseListCollectionsResponse res = sdk.database.databaseListCollections(req, new DatabaseListCollectionsSecurity("quae", "ipsum") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.collectionList != null) {
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

            DatabaseListDocumentsRequest req = new DatabaseListDocumentsRequest("quidem") {{
                filters = new String[]{{
                    add("excepturi"),
                    add("pariatur"),
                    add("modi"),
                }};
                limit = 508969;
                offset = 523248;
                orderCast = "voluptates";
                orderField = "quasi";
                orderType = "repudiandae";
                search = "sint";
            }};            

            DatabaseListDocumentsResponse res = sdk.database.databaseListDocuments(req, new DatabaseListDocumentsSecurity("veritatis", "itaque", "incidunt") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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

## databaseUpdateCollection

Update a collection by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatabaseUpdateCollectionRequest;
import org.openapis.openapi.models.operations.DatabaseUpdateCollectionRequestBody;
import org.openapis.openapi.models.operations.DatabaseUpdateCollectionResponse;
import org.openapis.openapi.models.operations.DatabaseUpdateCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatabaseUpdateCollectionRequest req = new DatabaseUpdateCollectionRequest("enim") {{
                requestBody = new DatabaseUpdateCollectionRequestBody("consequatur") {{
                    read = new String[]{{
                        add("quibusdam"),
                        add("explicabo"),
                        add("deserunt"),
                    }};
                    rules = new String[]{{
                        add("quibusdam"),
                        add("labore"),
                        add("modi"),
                    }};
                    write = new String[]{{
                        add("aliquid"),
                    }};
                }};;
            }};            

            DatabaseUpdateCollectionResponse res = sdk.database.databaseUpdateCollection(req, new DatabaseUpdateCollectionSecurity("cupiditate", "quos") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.collection != null) {
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

            DatabaseUpdateDocumentRequest req = new DatabaseUpdateDocumentRequest("perferendis", "magni") {{
                requestBody = new DatabaseUpdateDocumentRequestBody(                new java.util.HashMap<String, Object>() {{
                                    put("ipsam", "alias");
                                    put("fugit", "dolorum");
                                    put("excepturi", "tempora");
                                    put("facilis", "tempore");
                                }}) {{
                    read = new String[]{{
                        add("delectus"),
                        add("eum"),
                    }};
                    write = new String[]{{
                        add("eligendi"),
                    }};
                }};;
            }};            

            DatabaseUpdateDocumentResponse res = sdk.database.databaseUpdateDocument(req, new DatabaseUpdateDocumentSecurity("sint", "aliquid", "provident") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
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
