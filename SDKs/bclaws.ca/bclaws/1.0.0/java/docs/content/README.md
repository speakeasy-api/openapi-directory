# content

### Available Operations

* [getContentAspectId](#getcontentaspectid) - Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
* [getContentAspectIdCivixDocumentId](#getcontentaspectidcivixdocumentid) - Lists the metadata available for the specified index or directory from the BCLaws legislative respository

## getContentAspectId

Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentAspectIDAspectIDEnum;
import org.openapis.openapi.models.operations.GetContentAspectIdRequest;
import org.openapis.openapi.models.operations.GetContentAspectIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContentAspectIdRequest req = new GetContentAspectIdRequest(GetContentAspectIDAspectIDEnum.PSL);            

            GetContentAspectIdResponse res = sdk.content.getContentAspectId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContentAspectIdCivixDocumentId

Lists the metadata available for the specified index or directory from the BCLaws legislative respository

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentAspectIDCivixDocumentIDAspectIDEnum;
import org.openapis.openapi.models.operations.GetContentAspectIdCivixDocumentIdRequest;
import org.openapis.openapi.models.operations.GetContentAspectIdCivixDocumentIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContentAspectIdCivixDocumentIdRequest req = new GetContentAspectIdCivixDocumentIdRequest(GetContentAspectIDCivixDocumentIDAspectIDEnum.ECB, "quibusdam");            

            GetContentAspectIdCivixDocumentIdResponse res = sdk.content.getContentAspectIdCivixDocumentId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
