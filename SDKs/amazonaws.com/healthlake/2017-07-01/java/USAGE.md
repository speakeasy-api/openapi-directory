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

            CreateFhirDatastoreRequest req = new CreateFhirDatastoreRequest() {{
                headers = new CreateFhirDatastoreHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "HealthLake.CreateFHIRDatastore";
                }};
                request = new CreateFhirDatastoreRequest() {{
                    clientToken = "fugit";
                    datastoreName = "et";
                    datastoreTypeVersion = "R4";
                    preloadDataConfig = new PreloadDataConfig() {{
                        preloadDataType = "SYNTHEA";
                    }};
                    sseConfiguration = new SseConfiguration() {{
                        kmsEncryptionConfig = new KmsEncryptionConfig() {{
                            cmkType = "AWS_OWNED_KMS_KEY";
                            kmsKeyId = "debitis";
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "et";
                            value = "ut";
                        }}),
                    }};
                }};
            }};

            CreateFhirDatastoreResponse res = sdk.createFhirDatastore(req);

            if (res.createFHIRDatastoreResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->