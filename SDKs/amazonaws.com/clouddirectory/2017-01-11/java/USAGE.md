<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddFacetToObjectHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddFacetToObjectRequest req = new AddFacetToObjectRequest() {{
                headers = new AddFacetToObjectHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzDataPartition = "illum";
                }};
                request = new AddFacetToObjectRequestBody() {{
                    objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
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
            }};            

            AddFacetToObjectResponse res = sdk.addFacetToObject(req);

            if (res.addFacetToObjectResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->