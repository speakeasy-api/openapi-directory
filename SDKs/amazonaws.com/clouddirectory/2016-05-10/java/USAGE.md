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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzDataPartition = "voluptas";
                }};
                request = new AddFacetToObjectRequestBody() {{
                    objectAttributeList = new openapisdk.models.shared.AttributeKeyAndValue[]() {{
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "et";
                                name = "nihil";
                                schemaArn = "rerum";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "dicta";
                                booleanValue = true;
                                datetimeValue = "1981-07-21T06:30:48Z";
                                numberValue = "et";
                                stringValue = "ut";
                            }};
                        }}),
                    }};
                    objectReference = new AddFacetToObjectRequestBodyObjectReference() {{
                        selector = "dolorem";
                    }};
                    schemaFacet = new AddFacetToObjectRequestBodySchemaFacet() {{
                        facetName = "et";
                        schemaArn = "voluptate";
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