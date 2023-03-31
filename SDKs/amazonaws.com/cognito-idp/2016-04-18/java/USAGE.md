<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddCustomAttributesXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddCustomAttributesHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddCustomAttributesRequest req = new AddCustomAttributesRequest() {{
                headers = new AddCustomAttributesHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSCognitoIdentityProviderService.AddCustomAttributes";
                }};
                request = new AddCustomAttributesRequest() {{
                    customAttributes = new org.openapis.openapi.models.shared.SchemaAttributeType[]{{
                        add(new SchemaAttributeType() {{
                            attributeDataType = "Number";
                            developerOnlyAttribute = false;
                            mutable = false;
                            name = "error";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "deserunt";
                                minValue = "suscipit";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "iure";
                                minLength = "magnam";
                            }};
                        }}),
                        add(new SchemaAttributeType() {{
                            attributeDataType = "Boolean";
                            developerOnlyAttribute = false;
                            mutable = false;
                            name = "ipsa";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "delectus";
                                minValue = "tempora";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "suscipit";
                                minLength = "molestiae";
                            }};
                        }}),
                        add(new SchemaAttributeType() {{
                            attributeDataType = "Boolean";
                            developerOnlyAttribute = false;
                            mutable = false;
                            name = "placeat";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "voluptatum";
                                minValue = "iusto";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "excepturi";
                                minLength = "nisi";
                            }};
                        }}),
                        add(new SchemaAttributeType() {{
                            attributeDataType = "Boolean";
                            developerOnlyAttribute = false;
                            mutable = false;
                            name = "temporibus";
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
                    }};
                    userPoolId = "perferendis";
                }};
            }};            

            AddCustomAttributesResponse res = sdk.addCustomAttributes(req);

            if (res.addCustomAttributesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->