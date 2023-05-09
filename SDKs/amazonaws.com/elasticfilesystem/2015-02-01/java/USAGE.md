<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessPointRequest;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBody;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBodyPosixUser;
import org.openapis.openapi.models.operations.CreateAccessPointRequestBodyRootDirectory;
import org.openapis.openapi.models.operations.CreateAccessPointResponse;
import org.openapis.openapi.models.shared.CreationInfo;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessPointRequest req = new CreateAccessPointRequest(                new CreateAccessPointRequestBody("provident", "distinctio") {{
                                posixUser = new CreateAccessPointRequestBodyPosixUser() {{
                                    gid = 844266L;
                                    secondaryGids = new Long[]{{
                                        add(857946L),
                                        add(544883L),
                                        add(847252L),
                                    }};
                                    uid = 423655L;
                                }};;
                                rootDirectory = new CreateAccessPointRequestBodyRootDirectory() {{
                                    creationInfo = new CreationInfo(623564L, 645894L, "suscipit");;
                                    path = "iure";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("delectus", "tempora") {{
                                        key = "debitis";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag("minus", "placeat") {{
                                        key = "suscipit";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            CreateAccessPointResponse res = sdk.createAccessPoint(req);

            if (res.accessPointDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->