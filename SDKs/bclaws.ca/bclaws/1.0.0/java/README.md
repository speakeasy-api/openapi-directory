# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            GetContentAspectIdRequest req = new GetContentAspectIdRequest(GetContentAspectIDAspectIDEnum.OIC);            

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [content](docs/content/README.md)

* [getContentAspectId](docs/content/README.md#getcontentaspectid) - Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
* [getContentAspectIdCivixDocumentId](docs/content/README.md#getcontentaspectidcivixdocumentid) - Lists the metadata available for the specified index or directory from the BCLaws legislative respository

### [document](docs/document/README.md)

* [getDocumentIdAspectIdCivixIndexIdCivixDocumentId](docs/document/README.md#getdocumentidaspectidcivixindexidcivixdocumentid) - Retrieves a specific document from the BCLaws legislative repository (HTML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString](docs/document/README.md#getdocumentidaspectidcivixindexidcivixdocumentidsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml](docs/document/README.md#getdocumentidaspectidcivixindexidcivixdocumentidxml) - Retrieves a specific document from the BCLaws legislative repository (XML format)
* [getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString](docs/document/README.md#getdocumentidaspectidcivixindexidcivixdocumentidxmlsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)

### [search](docs/search/README.md)

* [getSearchAspectIdFullsearch](docs/search/README.md#getsearchaspectidfullsearch) - A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
