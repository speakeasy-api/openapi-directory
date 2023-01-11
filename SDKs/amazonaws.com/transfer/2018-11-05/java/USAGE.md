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
                    xAmzAlgorithm = "eos";
                    xAmzContentSha256 = "modi";
                    xAmzCredential = "et";
                    xAmzDate = "culpa";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "quae";
                    xAmzSignedHeaders = "incidunt";
                    xAmzTarget = "TransferService.CreateAccess";
                }};
                request = new CreateAccessRequest() {{
                    externalId = "nam";
                    homeDirectory = "optio";
                    homeDirectoryMappings = new openapisdk.models.shared.HomeDirectoryMapEntry[]() {{
                        add(new HomeDirectoryMapEntry() {{
                            entry = "ratione";
                            target = "quaerat";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "qui";
                            target = "modi";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "cum";
                            target = "rem";
                        }}),
                    }};
                    homeDirectoryType = "LOGICAL";
                    policy = "cum";
                    posixProfile = new PosixProfile() {{
                        gid = 5917608095681824334;
                        secondaryGids = new Long[]() {{
                            add(7738685661617987022),
                        }};
                        uid = 3301601712436159733;
                    }};
                    role = "dolore";
                    serverId = "placeat";
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