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
                    xAmzAlgorithm = "consectetur";
                    xAmzContentSha256 = "voluptatibus";
                    xAmzCredential = "doloremque";
                    xAmzDate = "neque";
                    xAmzSecurityToken = "sint";
                    xAmzSignature = "iste";
                    xAmzSignedHeaders = "temporibus";
                    xAmzTarget = "AWSCognitoIdentityProviderService.AddCustomAttributes";
                }};
                request = new AddCustomAttributesRequest() {{
                    customAttributes = new openapisdk.models.shared.SchemaAttributeType[]() {{
                        add(new SchemaAttributeType() {{
                            attributeDataType = "Boolean";
                            developerOnlyAttribute = false;
                            mutable = true;
                            name = "ducimus";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "ut";
                                minValue = "incidunt";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "voluptatem";
                                minLength = "voluptates";
                            }};
                        }}),
                        add(new SchemaAttributeType() {{
                            attributeDataType = "DateTime";
                            developerOnlyAttribute = true;
                            mutable = false;
                            name = "ut";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "quaerat";
                                minValue = "ut";
                            }};
                            required = true;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "vel";
                                minLength = "et";
                            }};
                        }}),
                        add(new SchemaAttributeType() {{
                            attributeDataType = "DateTime";
                            developerOnlyAttribute = false;
                            mutable = true;
                            name = "inventore";
                            numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                maxValue = "impedit";
                                minValue = "molestiae";
                            }};
                            required = false;
                            stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                maxLength = "dignissimos";
                                minLength = "consectetur";
                            }};
                        }}),
                    }};
                    userPoolId = "repellendus";
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