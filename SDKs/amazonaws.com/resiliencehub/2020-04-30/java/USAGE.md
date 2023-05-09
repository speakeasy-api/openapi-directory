<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequest;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsRequestBody;
import org.openapis.openapi.models.operations.AddDraftAppVersionResourceMappingsResponse;
import org.openapis.openapi.models.shared.PhysicalIdentifierTypeEnum;
import org.openapis.openapi.models.shared.PhysicalResourceId;
import org.openapis.openapi.models.shared.ResourceMapping;
import org.openapis.openapi.models.shared.ResourceMappingTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddDraftAppVersionResourceMappingsRequest req = new AddDraftAppVersionResourceMappingsRequest(                new AddDraftAppVersionResourceMappingsRequestBody("provident",                 new org.openapis.openapi.models.shared.ResourceMapping[]{{
                                                add(new ResourceMapping(ResourceMappingTypeEnum.EKS,                 new PhysicalResourceId("tempora", PhysicalIdentifierTypeEnum.ARN) {{
                                                                    awsAccountId = "molestiae";
                                                                    awsRegion = "minus";
                                                                }};) {{
                                                    appRegistryAppName = "quibusdam";
                                                    eksSourceName = "unde";
                                                    logicalStackName = "nulla";
                                                    mappingType = ResourceMappingTypeEnum.RESOURCE_GROUP;
                                                    physicalResourceId = new PhysicalResourceId("suscipit", PhysicalIdentifierTypeEnum.ARN) {{
                                                        awsAccountId = "illum";
                                                        awsRegion = "vel";
                                                        identifier = "error";
                                                        type = PhysicalIdentifierTypeEnum.NATIVE_;
                                                    }};
                                                    resourceGroupName = "magnam";
                                                    resourceName = "debitis";
                                                    terraformSourceName = "ipsa";
                                                }}),
                                                add(new ResourceMapping(ResourceMappingTypeEnum.TERRAFORM,                 new PhysicalResourceId("sapiente", PhysicalIdentifierTypeEnum.NATIVE_) {{
                                                                    awsAccountId = "odit";
                                                                    awsRegion = "at";
                                                                }};) {{
                                                    appRegistryAppName = "placeat";
                                                    eksSourceName = "voluptatum";
                                                    logicalStackName = "iusto";
                                                    mappingType = ResourceMappingTypeEnum.RESOURCE_GROUP;
                                                    physicalResourceId = new PhysicalResourceId("quis", PhysicalIdentifierTypeEnum.ARN) {{
                                                        awsAccountId = "nisi";
                                                        awsRegion = "recusandae";
                                                        identifier = "temporibus";
                                                        type = PhysicalIdentifierTypeEnum.ARN;
                                                    }};
                                                    resourceGroupName = "deserunt";
                                                    resourceName = "perferendis";
                                                    terraformSourceName = "ipsam";
                                                }}),
                                                add(new ResourceMapping(ResourceMappingTypeEnum.CFN_STACK,                 new PhysicalResourceId("deleniti", PhysicalIdentifierTypeEnum.NATIVE_) {{
                                                                    awsAccountId = "optio";
                                                                    awsRegion = "totam";
                                                                }};) {{
                                                    appRegistryAppName = "at";
                                                    eksSourceName = "maiores";
                                                    logicalStackName = "molestiae";
                                                    mappingType = ResourceMappingTypeEnum.TERRAFORM;
                                                    physicalResourceId = new PhysicalResourceId("dolorum", PhysicalIdentifierTypeEnum.ARN) {{
                                                        awsAccountId = "quod";
                                                        awsRegion = "esse";
                                                        identifier = "totam";
                                                        type = PhysicalIdentifierTypeEnum.NATIVE_;
                                                    }};
                                                    resourceGroupName = "nam";
                                                    resourceName = "officia";
                                                    terraformSourceName = "occaecati";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "molestiae";
                xAmzDate = "modi";
                xAmzSecurityToken = "qui";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "cum";
            }};            

            AddDraftAppVersionResourceMappingsResponse res = sdk.addDraftAppVersionResourceMappings(req);

            if (res.addDraftAppVersionResourceMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->