<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAccessXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAccessHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAccessRequest req = new CreateAccessRequest() {{
                headers = new CreateAccessHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "TransferService.CreateAccess";
                }};
                request = new CreateAccessRequest() {{
                    externalId = "illum";
                    homeDirectory = "vel";
                    homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                        add(new HomeDirectoryMapEntry() {{
                            entry = "deserunt";
                            target = "suscipit";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "iure";
                            target = "magnam";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "debitis";
                            target = "ipsa";
                        }}),
                    }};
                    homeDirectoryType = "LOGICAL";
                    policy = "tempora";
                    posixProfile = new PosixProfile() {{
                        gid = 383441;
                        secondaryGids = new Long[]{{
                            add(791725),
                            add(812169),
                        }};
                        uid = 528895;
                    }};
                    role = "iusto";
                    serverId = "excepturi";
                }};
            }};            

            CreateAccessResponse res = sdk.createAccess(req);

            if (res.createAccessResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->