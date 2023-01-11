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

            AcceptSharedDirectoryRequest req = new AcceptSharedDirectoryRequest() {{
                headers = new AcceptSharedDirectoryHeaders() {{
                    xAmzAlgorithm = "quis";
                    xAmzContentSha256 = "saepe";
                    xAmzCredential = "illo";
                    xAmzDate = "aliquam";
                    xAmzSecurityToken = "qui";
                    xAmzSignature = "quia";
                    xAmzSignedHeaders = "aperiam";
                    xAmzTarget = "DirectoryService_20150416.AcceptSharedDirectory";
                }};
                request = new AcceptSharedDirectoryRequest() {{
                    sharedDirectoryId = "voluptatem";
                }};
            }};

            AcceptSharedDirectoryResponse res = sdk.acceptSharedDirectory(req);

            if (res.acceptSharedDirectoryResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->