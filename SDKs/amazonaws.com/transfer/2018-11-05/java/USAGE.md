<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAccessXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAccessRequest;
import org.openapis.openapi.models.operations.CreateAccessResponse;
import org.openapis.openapi.models.shared.CreateAccessRequest;
import org.openapis.openapi.models.shared.PosixProfile;
import org.openapis.openapi.models.shared.HomeDirectoryTypeEnum;
import org.openapis.openapi.models.shared.HomeDirectoryMapEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessRequest req = new CreateAccessRequest() {{
                createAccessRequest = new CreateAccessRequest() {{
                    externalId = "corrupti";
                    homeDirectory = "provident";
                    homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                        add(new HomeDirectoryMapEntry() {{
                            entry = "quibusdam";
                            target = "unde";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "nulla";
                            target = "corrupti";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "illum";
                            target = "vel";
                        }}),
                    }};
                    homeDirectoryType = "LOGICAL";
                    policy = "deserunt";
                    posixProfile = new PosixProfile() {{
                        gid = 384382;
                        secondaryGids = new Long[]{{
                            add(297534),
                            add(891773),
                        }};
                        uid = 56713;
                    }};
                    role = "delectus";
                    serverId = "tempora";
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
                xAmzTarget = "TransferService.CreateAccess";
            }}            

            CreateAccessResponse res = sdk.createAccess(req);

            if (res.createAccessResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->