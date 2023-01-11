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
                    xAmzAlgorithm = "doloremque";
                    xAmzContentSha256 = "animi";
                    xAmzCredential = "exercitationem";
                    xAmzDate = "quia";
                    xAmzSecurityToken = "ut";
                    xAmzSignature = "hic";
                    xAmzSignedHeaders = "veniam";
                    xAmzDataPartition = "et";
                }};
                request = new AddFacetToObjectRequestBody() {{
                    objectAttributeList = new openapisdk.models.shared.AttributeKeyAndValue[]() {{
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "animi";
                                name = "atque";
                                schemaArn = "omnis";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "unde";
                                booleanValue = true;
                                datetimeValue = "2005-01-16T03:32:55Z";
                                numberValue = "et";
                                stringValue = "quia";
                            }};
                        }}),
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "qui";
                                name = "voluptates";
                                schemaArn = "consequatur";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "explicabo";
                                booleanValue = true;
                                datetimeValue = "1975-12-26T09:00:02Z";
                                numberValue = "ipsum";
                                stringValue = "autem";
                            }};
                        }}),
                        add(new AttributeKeyAndValue() {{
                            key = new AttributeKey() {{
                                facetName = "perferendis";
                                name = "dolorem";
                                schemaArn = "odit";
                            }};
                            value = new TypedAttributeValue() {{
                                binaryValue = "maxime";
                                booleanValue = false;
                                datetimeValue = "2000-05-18T09:59:51Z";
                                numberValue = "dolore";
                                stringValue = "est";
                            }};
                        }}),
                    }};
                    objectReference = new AddFacetToObjectRequestBodyObjectReference() {{
                        selector = "velit";
                    }};
                    schemaFacet = new AddFacetToObjectRequestBodySchemaFacet() {{
                        facetName = "eveniet";
                        schemaArn = "nam";
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