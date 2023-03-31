<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreHeaders;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreResponse;
import org.openapis.openapi.models.shared.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.SseConfiguration;
import org.openapis.openapi.models.shared.KmsEncryptionConfig;
import org.openapis.openapi.models.shared.CmkTypeEnum;
import org.openapis.openapi.models.shared.PreloadDataConfig;
import org.openapis.openapi.models.shared.PreloadDataTypeEnum;
import org.openapis.openapi.models.shared.FHIRVersionEnum;

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

            CreateFHIRDatastoreRequest req = new CreateFHIRDatastoreRequest() {{
                headers = new CreateFHIRDatastoreHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "HealthLake.CreateFHIRDatastore";
                }};
                request = new CreateFHIRDatastoreRequest() {{
                    clientToken = "illum";
                    datastoreName = "vel";
                    datastoreTypeVersion = "R4";
                    preloadDataConfig = new PreloadDataConfig() {{
                        preloadDataType = "SYNTHEA";
                    }};
                    sseConfiguration = new SseConfiguration() {{
                        kmsEncryptionConfig = new KmsEncryptionConfig() {{
                            cmkType = "AWS_OWNED_KMS_KEY";
                            kmsKeyId = "deserunt";
                        }};
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                }};
            }};            

            CreateFHIRDatastoreResponse res = sdk.createFHIRDatastore(req);

            if (res.createFHIRDatastoreResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->