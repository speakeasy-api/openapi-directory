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

            AddCustomAttributesRequest req = new AddCustomAttributesRequest() {{
                headers = new AddCustomAttributesHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSCognitoIdentityProviderService.AddCustomAttributes";
                }};
                request = new AddCustomAttributesRequest() {{
                    customAttributes = new openapisdk.models.shared.SchemaAttributeType[]() {{
                        add(new SchemaAttributeType() {{
                            attributeDataType = "String";
                            developerOnlyAttribute = true;
                            mutable = true;
                            name = "dicta";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "debitis";
                                minValue = "voluptatum";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "ut";
                                minLength = "dolorem";
                            }};
                        }}),
                    }};
                    userPoolId = "et";
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