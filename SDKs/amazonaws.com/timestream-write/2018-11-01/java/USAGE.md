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

            CreateDatabaseRequest req = new CreateDatabaseRequest() {{
                headers = new CreateDatabaseHeaders() {{
                    xAmzAlgorithm = "omnis";
                    xAmzContentSha256 = "accusantium";
                    xAmzCredential = "architecto";
                    xAmzDate = "omnis";
                    xAmzSecurityToken = "porro";
                    xAmzSignature = "ut";
                    xAmzSignedHeaders = "eius";
                    xAmzTarget = "Timestream_20181101.CreateDatabase";
                }};
                request = new CreateDatabaseRequest() {{
                    databaseName = "beatae";
                    kmsKeyId = "quia";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "id";
                            value = "dolorem";
                        }}),
                        add(new Tag() {{
                            key = "et";
                            value = "quibusdam";
                        }}),
                        add(new Tag() {{
                            key = "cupiditate";
                            value = "eaque";
                        }}),
                    }};
                }};
            }};

            CreateDatabaseResponse res = sdk.createDatabase(req);

            if (res.createDatabaseResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->