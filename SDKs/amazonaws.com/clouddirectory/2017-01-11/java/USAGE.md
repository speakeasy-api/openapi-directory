<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFacetToObjectRequest;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBody;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBodyObjectReference;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBodySchemaFacet;
import org.openapis.openapi.models.operations.AddFacetToObjectResponse;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.AttributeKeyAndValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddFacetToObjectRequest req = new AddFacetToObjectRequest(                new AddFacetToObjectRequestBody(                new AddFacetToObjectRequestBodyObjectReference() {{
                                                selector = "provident";
                                            }};,                 new AddFacetToObjectRequestBodySchemaFacet() {{
                                                facetName = "distinctio";
                                                schemaArn = "quibusdam";
                                            }};) {{
                                objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                    add(new AttributeKeyAndValue(                new AttributeKey("minus", "placeat", "voluptatum");,                 new TypedAttributeValue() {{
                                                        binaryValue = "iusto";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-03-20T06:24:36.919Z");
                                                        numberValue = "recusandae";
                                                        stringValue = "temporibus";
                                                    }};) {{
                                        key = new AttributeKey("iure", "magnam", "debitis") {{
                                            facetName = "nulla";
                                            name = "Dallas Kassulke";
                                            schemaArn = "suscipit";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "ipsa";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2022-03-08T10:35:32.561Z");
                                            numberValue = "suscipit";
                                            stringValue = "molestiae";
                                        }};
                                    }}),
                                    add(new AttributeKeyAndValue(                new AttributeKey("esse", "totam", "porro");,                 new TypedAttributeValue() {{
                                                        binaryValue = "dolorum";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-04-12T23:15:28.420Z");
                                                        numberValue = "officia";
                                                        stringValue = "occaecati";
                                                    }};) {{
                                        key = new AttributeKey("quo", "odit", "at") {{
                                            facetName = "ab";
                                            name = "Mrs. Marie O'Connell";
                                            schemaArn = "sapiente";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "at";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2021-07-31T09:34:50.024Z");
                                            numberValue = "quod";
                                            stringValue = "quod";
                                        }};
                                    }}),
                                    add(new AttributeKeyAndValue(                new AttributeKey("perferendis", "ad", "natus");,                 new TypedAttributeValue() {{
                                                        binaryValue = "sed";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-07-22T16:55:44.795Z");
                                                        numberValue = "natus";
                                                        stringValue = "laboriosam";
                                                    }};) {{
                                        key = new AttributeKey("modi", "qui", "impedit") {{
                                            facetName = "fugit";
                                            name = "Irvin Rosenbaum III";
                                            schemaArn = "molestiae";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "cum";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2022-10-13T23:01:07.168Z");
                                            numberValue = "excepturi";
                                            stringValue = "aspernatur";
                                        }};
                                    }}),
                                }};
                            }};, "hic") {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            AddFacetToObjectResponse res = sdk.addFacetToObject(req);

            if (res.addFacetToObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->