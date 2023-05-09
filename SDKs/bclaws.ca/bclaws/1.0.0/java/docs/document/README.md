# document

### Available Operations

* [getDocumentIdAspectIdCivixIndexIdCivixDocumentId](#getdocumentidaspectidcivixindexidcivixdocumentid) - Retrieves a specific document from the BCLaws legislative repository (HTML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString](#getdocumentidaspectidcivixindexidcivixdocumentidsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml](#getdocumentidaspectidcivixindexidcivixdocumentidxml) - Retrieves a specific document from the BCLaws legislative repository (XML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString](#getdocumentidaspectidcivixindexidcivixdocumentidxmlsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)

## getDocumentIdAspectIdCivixIndexIdCivixDocumentId

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest req = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest(GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum.PSL, "nulla", "corrupti");            

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse res = sdk.document.getDocumentIdAspectIdCivixIndexIdCivixDocumentId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest req = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest(GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum.HSCR, "vel", "error", "deserunt");            

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse res = sdk.document.getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlAspectIDEnum;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest req = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest(GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlAspectIDEnum.BCGAZ2, "iure", "magnam");            

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse res = sdk.document.getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlSearchSearchStringAspectIDEnum;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest;
import org.openapis.openapi.models.operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest req = new GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest(GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXmlSearchSearchStringAspectIDEnum.ARCH_OIC, "ipsa", "delectus", "tempora");            

            GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse res = sdk.document.getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
