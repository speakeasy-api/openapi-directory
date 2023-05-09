<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCustomAttributesRequest;
import org.openapis.openapi.models.operations.AddCustomAttributesResponse;
import org.openapis.openapi.models.operations.AddCustomAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddCustomAttributesRequest;
import org.openapis.openapi.models.shared.AttributeDataTypeEnum;
import org.openapis.openapi.models.shared.NumberAttributeConstraintsType;
import org.openapis.openapi.models.shared.SchemaAttributeType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StringAttributeConstraintsType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCustomAttributesRequest req = new AddCustomAttributesRequest(                new AddCustomAttributesRequest(                new org.openapis.openapi.models.shared.SchemaAttributeType[]{{
                                                add(new SchemaAttributeType() {{
                                                    attributeDataType = AttributeDataTypeEnum.DATE_TIME;
                                                    developerOnlyAttribute = false;
                                                    mutable = false;
                                                    name = "Stuart Stiedemann";
                                                    numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                                        maxValue = "vel";
                                                        minValue = "error";
                                                    }};
                                                    required = false;
                                                    stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                                        maxLength = "deserunt";
                                                        minLength = "suscipit";
                                                    }};
                                                }}),
                                                add(new SchemaAttributeType() {{
                                                    attributeDataType = AttributeDataTypeEnum.NUMBER;
                                                    developerOnlyAttribute = false;
                                                    mutable = false;
                                                    name = "Raquel Bednar";
                                                    numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                                        maxValue = "suscipit";
                                                        minValue = "molestiae";
                                                    }};
                                                    required = false;
                                                    stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                                        maxLength = "minus";
                                                        minLength = "placeat";
                                                    }};
                                                }}),
                                                add(new SchemaAttributeType() {{
                                                    attributeDataType = AttributeDataTypeEnum.DATE_TIME;
                                                    developerOnlyAttribute = false;
                                                    mutable = false;
                                                    name = "Miriam Huel";
                                                    numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                                        maxValue = "ab";
                                                        minValue = "quis";
                                                    }};
                                                    required = false;
                                                    stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                                        maxLength = "veritatis";
                                                        minLength = "deserunt";
                                                    }};
                                                }}),
                                            }}, "perferendis");, AddCustomAttributesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADD_CUSTOM_ATTRIBUTES) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            AddCustomAttributesResponse res = sdk.addCustomAttributes(req);

            if (res.addCustomAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->