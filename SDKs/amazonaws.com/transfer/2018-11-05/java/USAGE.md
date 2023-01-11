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

            CreateAccessRequest req = new CreateAccessRequest() {{
                headers = new CreateAccessHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "TransferService.CreateAccess";
                }};
                request = new CreateAccessRequest() {{
                    externalId = "fugit";
                    homeDirectory = "et";
                    homeDirectoryMappings = new openapisdk.models.shared.HomeDirectoryMapEntry[]() {{
                        add(new HomeDirectoryMapEntry() {{
                            entry = "rerum";
                            target = "dicta";
                        }}),
                    }};
                    homeDirectoryType = "PATH";
                    policy = "voluptatum";
                    posixProfile = new PosixProfile() {{
                        gid = 2339563716805116249;
                        secondaryGids = new Long[]() {{
                            add(161231572858529631),
                            add(7259475919510918339),
                            add(7373105480197164748),
                        }};
                        uid = 3287288577352441706;
                    }};
                    role = "vitae";
                    serverId = "totam";
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