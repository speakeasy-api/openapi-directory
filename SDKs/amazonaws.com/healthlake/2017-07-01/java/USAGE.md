<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreResponse;
import org.openapis.openapi.models.operations.CreateFHIRDatastoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.CmkTypeEnum;
import org.openapis.openapi.models.shared.CreateFHIRDatastoreRequest;
import org.openapis.openapi.models.shared.FHIRVersionEnum;
import org.openapis.openapi.models.shared.KmsEncryptionConfig;
import org.openapis.openapi.models.shared.PreloadDataConfig;
import org.openapis.openapi.models.shared.PreloadDataTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SseConfiguration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFHIRDatastoreRequest req = new CreateFHIRDatastoreRequest(                new CreateFHIRDatastoreRequest(FHIRVersionEnum.R4) {{
                                clientToken = "provident";
                                datastoreName = "distinctio";
                                preloadDataConfig = new PreloadDataConfig(PreloadDataTypeEnum.SYNTHEA);;
                                sseConfiguration = new SseConfiguration(                new KmsEncryptionConfig(CmkTypeEnum.AWS_OWNED_KMS_KEY) {{
                                                    kmsKeyId = "unde";
                                                }};);;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vel", "error") {{
                                        key = "corrupti";
                                        value = "illum";
                                    }}),
                                    add(new Tag("iure", "magnam") {{
                                        key = "deserunt";
                                        value = "suscipit";
                                    }}),
                                    add(new Tag("delectus", "tempora") {{
                                        key = "debitis";
                                        value = "ipsa";
                                    }}),
                                    add(new Tag("minus", "placeat") {{
                                        key = "suscipit";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateFHIRDatastoreXAmzTargetEnum.HEALTH_LAKE_CREATE_FHIR_DATASTORE) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            CreateFHIRDatastoreResponse res = sdk.createFHIRDatastore(req);

            if (res.createFHIRDatastoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->