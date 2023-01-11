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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateAccessPointRequestBody() {{
                    clientToken = "voluptas";
                    fileSystemId = "fugit";
                    posixUser = new CreateAccessPointRequestBodyPosixUser() {{
                        gid = 1543572285742637646;
                        secondaryGids = new Long[]() {{
                            add(8325060299420976708),
                        }};
                        uid = 7837839688282259259;
                    }};
                    rootDirectory = new CreateAccessPointRequestBodyRootDirectory() {{
                        creationInfo = new CreationInfo() {{
                            ownerGid = 2518412263346885298;
                            ownerUid = 5617773211005988520;
                            permissions = "et";
                        }};
                        path = "ut";
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "et";
                            value = "voluptate";
                        }}),
                        add(new Tag() {{
                            key = "iste";
                            value = "vitae";
                        }}),
                        add(new Tag() {{
                            key = "totam";
                            value = "dolores";
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