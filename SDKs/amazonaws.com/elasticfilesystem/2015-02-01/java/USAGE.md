<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAccessPointHeaders;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBodyPosixUser;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBodyRootDirectory;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBody;
import org.openapis.openapi.models.operations.CreateAccessPointRequest;
import org.openapis.openapi.models.operations.CreateAccessPointResponse;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.CreationInfo;

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

            CreateAccessPointRequest req = new CreateAccessPointRequest() {{
                headers = new CreateAccessPointHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAccessPointRequestBody() {{
                    clientToken = "illum";
                    fileSystemId = "vel";
                    posixUser = new CreateAccessPointRequestBodyPosixUser() {{
                        gid = 623564;
                        secondaryGids = new Long[]{{
                            add(384382),
                            add(437587),
                            add(297534),
                        }};
                        uid = 891773;
                    }};
                    rootDirectory = new CreateAccessPointRequestBodyRootDirectory() {{
                        creationInfo = new CreationInfo() {{
                            ownerGid = 56713;
                            ownerUid = 963663;
                            permissions = "tempora";
                        }};
                        path = "suscipit";
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "minus";
                            value = "placeat";
                        }}),
                        add(new Tag() {{
                            key = "voluptatum";
                            value = "iusto";
                        }}),
                    }};
                }};
            }};            

            CreateAccessPointResponse res = sdk.createAccessPoint(req);

            if (res.accessPointDescription.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->