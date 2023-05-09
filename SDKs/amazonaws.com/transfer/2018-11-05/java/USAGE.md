<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessRequest;
import org.openapis.openapi.models.operations.CreateAccessResponse;
import org.openapis.openapi.models.operations.CreateAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAccessRequest;
import org.openapis.openapi.models.shared.HomeDirectoryMapEntry;
import org.openapis.openapi.models.shared.HomeDirectoryTypeEnum;
import org.openapis.openapi.models.shared.PosixProfile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessRequest req = new CreateAccessRequest(                new CreateAccessRequest("provident", "distinctio", "quibusdam") {{
                                homeDirectory = "unde";
                                homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                                    add(new HomeDirectoryMapEntry("vel", "error") {{
                                        entry = "corrupti";
                                        target = "illum";
                                    }}),
                                    add(new HomeDirectoryMapEntry("iure", "magnam") {{
                                        entry = "deserunt";
                                        target = "suscipit";
                                    }}),
                                    add(new HomeDirectoryMapEntry("delectus", "tempora") {{
                                        entry = "debitis";
                                        target = "ipsa";
                                    }}),
                                    add(new HomeDirectoryMapEntry("minus", "placeat") {{
                                        entry = "suscipit";
                                        target = "molestiae";
                                    }}),
                                }};
                                homeDirectoryType = HomeDirectoryTypeEnum.LOGICAL;
                                policy = "iusto";
                                posixProfile = new PosixProfile(568045L, 392785L) {{
                                    secondaryGids = new Long[]{{
                                        add(836079L),
                                        add(71036L),
                                        add(337396L),
                                        add(87129L),
                                    }};
                                }};;
                            }};, CreateAccessXAmzTargetEnum.TRANSFER_SERVICE_CREATE_ACCESS) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateAccessResponse res = sdk.createAccess(req);

            if (res.createAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->