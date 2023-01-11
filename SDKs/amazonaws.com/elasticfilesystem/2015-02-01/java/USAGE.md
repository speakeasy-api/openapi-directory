<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAccessPointRequest req = new CreateAccessPointRequest() {{
                headers = new CreateAccessPointHeaders() {{
                    xAmzAlgorithm = "vero";
                    xAmzContentSha256 = "debitis";
                    xAmzCredential = "vitae";
                    xAmzDate = "illo";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateAccessPointRequestBody() {{
                    clientToken = "iusto";
                    fileSystemId = "necessitatibus";
                    posixUser = new CreateAccessPointRequestBodyPosixUser() {{
                        gid = 9099396917438780945;
                        secondaryGids = new Long[]() {{
                            add(7393415062790344033),
                            add(5573655011999427817),
                        }};
                        uid = 3450856630666814463;
                    }};
                    rootDirectory = new CreateAccessPointRequestBodyRootDirectory() {{
                        creationInfo = new CreationInfo() {{
                            ownerGid = 2817162217093611776;
                            ownerUid = 2020632354827331984;
                            permissions = "magni";
                        }};
                        path = "nostrum";
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "tenetur";
                            value = "numquam";
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