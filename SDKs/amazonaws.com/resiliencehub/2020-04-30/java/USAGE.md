<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsHeaders;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequestBody;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequest;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsResponse;
import org.openapis.openapi.models.shared.ResourceMapping;
import org.openapis.openapi.models.shared.PhysicalResourceId;
import org.openapis.openapi.models.shared.PhysicalIdentifierTypeEnum;
import org.openapis.openapi.models.shared.ResourceMappingTypeEnum;

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

            AddDraftAppVersionResourceMappingsRequest req = new AddDraftAppVersionResourceMappingsRequest() {{
                headers = new AddDraftAppVersionResourceMappingsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AddDraftAppVersionResourceMappingsRequestBody() {{
                    appArn = "illum";
                    resourceMappings = new org.openapis.openapi.models.shared.ResourceMapping[]{{
                        add(new ResourceMapping() {{
                            appRegistryAppName = "error";
                            eksSourceName = "deserunt";
                            logicalStackName = "suscipit";
                            mappingType = "AppRegistryApp";
                            physicalResourceId = new PhysicalResourceId() {{
                                awsAccountId = "magnam";
                                awsRegion = "debitis";
                                identifier = "ipsa";
                                type = "Native";
                            }};
                            resourceGroupName = "tempora";
                            resourceName = "suscipit";
                            terraformSourceName = "molestiae";
                        }}),
                        add(new ResourceMapping() {{
                            appRegistryAppName = "minus";
                            eksSourceName = "placeat";
                            logicalStackName = "voluptatum";
                            mappingType = "AppRegistryApp";
                            physicalResourceId = new PhysicalResourceId() {{
                                awsAccountId = "excepturi";
                                awsRegion = "nisi";
                                identifier = "recusandae";
                                type = "Native";
                            }};
                            resourceGroupName = "ab";
                            resourceName = "quis";
                            terraformSourceName = "veritatis";
                        }}),
                    }};
                }};
            }};            

            AddDraftAppVersionResourceMappingsResponse res = sdk.addDraftAppVersionResourceMappings(req);

            if (res.addDraftAppVersionResourceMappingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->