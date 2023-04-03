<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBodyObjectReference;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBodySchemaFacet;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBody;
import org.openapis.openapi.models.operations.AddFacetToObjectRequest;
import org.openapis.openapi.models.operations.AddFacetToObjectResponse;
import org.openapis.openapi.models.shared.AttributeKeyAndValue;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.AttributeKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddFacetToObjectRequest req = new AddFacetToObjectRequest() {{
                requestBody = new AddFacetToObjectRequestBody() {{
                    objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "provident";
                                name = "distinctio";
                                schemaArn = "quibusdam";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "unde";
                                booleanValue = false;
                                datetimeValue = "2021-05-14T08:28:11.899Z";
                                numberValue = "illum";
                                stringValue = "vel";
                            }};
                        }}),
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "error";
                                name = "deserunt";
                                schemaArn = "suscipit";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "iure";
                                booleanValue = false;
                                datetimeValue = "2022-02-09T12:04:06.508Z";
                                numberValue = "ipsa";
                                stringValue = "delectus";
                            }};
                        }}),
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "tempora";
                                name = "suscipit";
                                schemaArn = "molestiae";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "minus";
                                booleanValue = false;
                                datetimeValue = "2021-05-31T20:38:28.793Z";
                                numberValue = "iusto";
                                stringValue = "excepturi";
                            }};
                        }}),
                    }};
                    objectReference = new AddFacetToObjectRequestBodyObjectReference() {{
                        selector = "nisi";
                    }};
                    schemaFacet = new AddFacetToObjectRequestBodySchemaFacet() {{
                        facetName = "recusandae";
                        schemaArn = "temporibus";
                    }};
                }};
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
                xAmzDataPartition = "sapiente";
            }}            

            AddFacetToObjectResponse res = sdk.addFacetToObject(req);

            if (res.addFacetToObjectResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->