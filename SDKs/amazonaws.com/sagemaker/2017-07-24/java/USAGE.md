<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddAssociationXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddAssociationHeaders;
import org.openapis.openapi.models.operations.AddAssociationRequest;
import org.openapis.openapi.models.operations.AddAssociationResponse;
import org.openapis.openapi.models.shared.AddAssociationRequest;
import org.openapis.openapi.models.shared.AssociationEdgeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddAssociationRequest req = new AddAssociationRequest() {{
                headers = new AddAssociationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "SageMaker.AddAssociation";
                }};
                request = new AddAssociationRequest() {{
                    associationType = "Produced";
                    destinationArn = "vel";
                    sourceArn = "error";
                }};
            }};            

            AddAssociationResponse res = sdk.addAssociation(req);

            if (res.addAssociationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->