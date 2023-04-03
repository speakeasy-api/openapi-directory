<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddCustomAttributesXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddCustomAttributesRequest;
import org.openapis.openapi.models.operations.AddCustomAttributesResponse;
import org.openapis.openapi.models.shared.AddCustomAttributesRequest;
import org.openapis.openapi.models.shared.SchemaAttributeType;
import org.openapis.openapi.models.shared.StringAttributeConstraintsType;
import org.openapis.openapi.models.shared.NumberAttributeConstraintsType;
import org.openapis.openapi.models.shared.AttributeDataTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCustomAttributesRequest req = new AddCustomAttributesRequest() {{
                addCustomAttributesRequest = new AddCustomAttributesRequest() {{
                    customAttributes = new org.openapis.openapi.models.shared.SchemaAttributeType[]{{
                        add(new SchemaAttributeType() {{
                            attributeDataType = "DateTime";
                            developerOnlyAttribute = false;
                            mutable = false;
                            name = "distinctio";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "quibusdam";
                                minValue = "unde";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "nulla";
                                minLength = "corrupti";
                            }};
                        }}),
                        add(new SchemaAttributeType() {{
                            attributeDataType = "Boolean";
                            developerOnlyAttribute = false;
                            mutable = false;
                            name = "vel";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "error";
                                minValue = "deserunt";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "suscipit";
                                minLength = "iure";
                            }};
                        }}),
                        add(new SchemaAttributeType() {{
                            attributeDataType = "Number";
                            developerOnlyAttribute = false;
                            mutable = false;
                            name = "debitis";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "ipsa";
                                minValue = "delectus";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "tempora";
                                minLength = "suscipit";
                            }};
                        }}),
                    }};
                    userPoolId = "molestiae";
                }};
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
                xAmzTarget = "AWSCognitoIdentityProviderService.AddCustomAttributes";
            }}            

            AddCustomAttributesResponse res = sdk.addCustomAttributes(req);

            if (res.addCustomAttributesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->