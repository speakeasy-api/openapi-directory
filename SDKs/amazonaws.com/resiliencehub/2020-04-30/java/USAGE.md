<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddDraftAppVersionResourceMappingsRequest req = new AddDraftAppVersionResourceMappingsRequest() {{
                requestBody = new AddDraftAppVersionResourceMappingsRequestBody() {{
                    appArn = "corrupti";
                    resourceMappings = new org.openapis.openapi.models.shared.ResourceMapping[]{{
                        add(new ResourceMapping() {{
                            appRegistryAppName = "distinctio";
                            eksSourceName = "quibusdam";
                            logicalStackName = "unde";
                            mappingType = "EKS";
                            physicalResourceId = new PhysicalResourceId() {{
                                awsAccountId = "corrupti";
                                awsRegion = "illum";
                                identifier = "vel";
                                type = "Native";
                            }};
                            resourceGroupName = "deserunt";
                            resourceName = "suscipit";
                            terraformSourceName = "iure";
                        }}),
                        add(new ResourceMapping() {{
                            appRegistryAppName = "magnam";
                            eksSourceName = "debitis";
                            logicalStackName = "ipsa";
                            mappingType = "EKS";
                            physicalResourceId = new PhysicalResourceId() {{
                                awsAccountId = "tempora";
                                awsRegion = "suscipit";
                                identifier = "molestiae";
                                type = "Native";
                            }};
                            resourceGroupName = "placeat";
                            resourceName = "voluptatum";
                            terraformSourceName = "iusto";
                        }}),
                        add(new ResourceMapping() {{
                            appRegistryAppName = "excepturi";
                            eksSourceName = "nisi";
                            logicalStackName = "recusandae";
                            mappingType = "EKS";
                            physicalResourceId = new PhysicalResourceId() {{
                                awsAccountId = "ab";
                                awsRegion = "quis";
                                identifier = "veritatis";
                                type = "Native";
                            }};
                            resourceGroupName = "perferendis";
                            resourceName = "ipsam";
                            terraformSourceName = "repellendus";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }}            

            AddDraftAppVersionResourceMappingsResponse res = sdk.addDraftAppVersionResourceMappings(req);

            if (res.addDraftAppVersionResourceMappingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->