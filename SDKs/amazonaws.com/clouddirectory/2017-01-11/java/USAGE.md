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

            AddFacetToObjectRequest req = new AddFacetToObjectRequest() {{
                headers = new AddFacetToObjectHeaders() {{
                    xAmzAlgorithm = "facilis";
                    xAmzContentSha256 = "omnis";
                    xAmzCredential = "mollitia";
                    xAmzDate = "velit";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "eum";
                    xAmzSignedHeaders = "quo";
                    xAmzDataPartition = "et";
                }};
                request = new AddFacetToObjectRequestBody() {{
                    objectAttributeList = new openapisdk.models.shared.AttributeKeyAndValue[]() {{
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "omnis";
                                name = "tempora";
                                schemaArn = "aliquid";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "molestiae";
                                booleanValue = false;
                                datetimeValue = "2009-08-18T16:12:12Z";
                                numberValue = "cum";
                                stringValue = "a";
                            }};
                        }}),
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "quo";
                                name = "delectus";
                                schemaArn = "et";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "ipsum";
                                booleanValue = false;
                                datetimeValue = "1971-08-07T18:15:28Z";
                                numberValue = "et";
                                stringValue = "cupiditate";
                            }};
                        }}),
                    }};
                    objectReference = new AddFacetToObjectRequestBodyObjectReference() {{
                        selector = "sed";
                    }};
                    schemaFacet = new AddFacetToObjectRequestBodySchemaFacet() {{
                        facetName = "praesentium";
                        schemaArn = "excepturi";
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