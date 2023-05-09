<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddAssociationRequest;
import org.openapis.openapi.models.operations.AddAssociationResponse;
import org.openapis.openapi.models.operations.AddAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddAssociationRequest;
import org.openapis.openapi.models.shared.AssociationEdgeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddAssociationRequest req = new AddAssociationRequest(                new AddAssociationRequest("provident", "distinctio") {{
                                associationType = AssociationEdgeTypeEnum.PRODUCED;
                            }};, AddAssociationXAmzTargetEnum.SAGE_MAKER_ADD_ASSOCIATION) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            AddAssociationResponse res = sdk.addAssociation(req);

            if (res.addAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->