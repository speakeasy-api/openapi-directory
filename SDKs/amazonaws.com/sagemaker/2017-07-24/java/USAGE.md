<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddAssociationXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddAssociationRequest;
import org.openapis.openapi.models.operations.AddAssociationResponse;
import org.openapis.openapi.models.shared.AddAssociationRequest;
import org.openapis.openapi.models.shared.AssociationEdgeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddAssociationRequest req = new AddAssociationRequest() {{
                addAssociationRequest = new AddAssociationRequest() {{
                    associationType = "DerivedFrom";
                    destinationArn = "provident";
                    sourceArn = "distinctio";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
                xAmzTarget = "SageMaker.AddAssociation";
            }}            

            AddAssociationResponse res = sdk.addAssociation(req);

            if (res.addAssociationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->