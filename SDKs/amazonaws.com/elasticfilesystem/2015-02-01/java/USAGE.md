<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessPointRequest req = new CreateAccessPointRequest() {{
                requestBody = new CreateAccessPointRequestBody() {{
                    clientToken = "corrupti";
                    fileSystemId = "provident";
                    posixUser = new CreateAccessPointRequestBodyPosixUser() {{
                        gid = 715190;
                        secondaryGids = new Long[]{{
                            add(602763),
                            add(857946),
                            add(544883),
                            add(847252),
                        }};
                        uid = 423655;
                    }};
                    rootDirectory = new CreateAccessPointRequestBodyRootDirectory() {{
                        creationInfo = new CreationInfo() {{
                            ownerGid = 623564;
                            ownerUid = 645894;
                            permissions = "suscipit";
                        }};
                        path = "iure";
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                        add(new Tag() {{
                            key = "delectus";
                            value = "tempora";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }}            

            CreateAccessPointResponse res = sdk.createAccessPoint(req);

            if (res.accessPointDescription.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->