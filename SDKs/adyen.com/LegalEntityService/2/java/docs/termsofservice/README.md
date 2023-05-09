# termsOfService

### Available Operations

* [getLegalEntitiesIdTermsOfServiceAcceptanceInfos](#getlegalentitiesidtermsofserviceacceptanceinfos) - Get Terms of Service information for a legal entity
* [patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid](#patchlegalentitiesidtermsofservicetermsofservicedocumentid) - Accept Terms of Service
* [postLegalEntitiesIdTermsOfService](#postlegalentitiesidtermsofservice) - Get Terms of Service document

## getLegalEntitiesIdTermsOfServiceAcceptanceInfos

Returns Terms of Service information for a legal entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosResponse;
import org.openapis.openapi.models.operations.GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest req = new GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest("tempore");            

            GetLegalEntitiesIdTermsOfServiceAcceptanceInfosResponse res = sdk.termsOfService.getLegalEntitiesIdTermsOfServiceAcceptanceInfos(req, new GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getTermsOfServiceAcceptanceInfosResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid

Accepts Terms of Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest;
import org.openapis.openapi.models.operations.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidResponse;
import org.openapis.openapi.models.operations.PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidSecurity;
import org.openapis.openapi.models.shared.AcceptTermsOfServiceRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest req = new PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest("cupiditate", "aperiam") {{
                acceptTermsOfServiceRequest = new AcceptTermsOfServiceRequest() {{
                    acceptedBy = "delectus";
                    ipAddress = "dolorem";
                }};;
            }};            

            PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidResponse res = sdk.termsOfService.patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid(req, new PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.acceptTermsOfServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLegalEntitiesIdTermsOfService

Returns the Terms of Service document for a legal entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdTermsOfServiceRequest;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdTermsOfServiceResponse;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdTermsOfServiceSecurity;
import org.openapis.openapi.models.shared.GetTermsOfServiceDocumentRequest;
import org.openapis.openapi.models.shared.GetTermsOfServiceDocumentRequestTypeEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLegalEntitiesIdTermsOfServiceRequest req = new PostLegalEntitiesIdTermsOfServiceRequest("dolore") {{
                getTermsOfServiceDocumentRequest = new GetTermsOfServiceDocumentRequest() {{
                    language = "labore";
                    type = GetTermsOfServiceDocumentRequestTypeEnum.ADYEN_CAPITAL;
                }};;
            }};            

            PostLegalEntitiesIdTermsOfServiceResponse res = sdk.termsOfService.postLegalEntitiesIdTermsOfService(req, new PostLegalEntitiesIdTermsOfServiceSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getTermsOfServiceDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
