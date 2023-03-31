<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesPathParams;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesHeaders;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequestBody;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequest;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesResponse;
import org.openapis.openapi.models.shared.PropertyValueEntry;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.EntityPropertyReference;

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

            BatchPutPropertyValuesRequest req = new BatchPutPropertyValuesRequest() {{
                pathParams = new BatchPutPropertyValuesPathParams() {{
                    workspaceId = "corrupti";
                }};
                headers = new BatchPutPropertyValuesHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new BatchPutPropertyValuesRequestBody() {{
                    entries = new org.openapis.openapi.models.shared.PropertyValueEntry[]{{
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "error";
                                entityId = "deserunt";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("iure", "magnam");
                                    put("debitis", "ipsa");
                                }};
                                propertyName = "delectus";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "suscipit";
                                    timestamp = "2022-03-18T00:29:19.137Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 8121.69;
                                        expression = "voluptatum";
                                        integerValue = 479977;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 392785;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("temporibus", new DataValue() {{}});
                                            put("ab", new DataValue() {{}});
                                            put("quis", new DataValue() {{}});
                                            put("veritatis", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "deserunt";
                                            targetEntityId = "perferendis";
                                        }};
                                        stringValue = "ipsam";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "repellendus";
                                    timestamp = "2020-08-31T22:02:25.322Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 1403.5;
                                        expression = "at";
                                        integerValue = 870088;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 473608;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("quod", new DataValue() {{}});
                                            put("esse", new DataValue() {{}});
                                            put("totam", new DataValue() {{}});
                                            put("porro", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "dolorum";
                                            targetEntityId = "dicta";
                                        }};
                                        stringValue = "nam";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "officia";
                                entityId = "occaecati";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "hic");
                                }};
                                propertyName = "optio";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "beatae";
                                    timestamp = "2022-07-12T03:15:36.542Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 2645.55;
                                        expression = "qui";
                                        integerValue = 774234;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 456150;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("excepturi", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "aspernatur";
                                            targetEntityId = "perferendis";
                                        }};
                                        stringValue = "ad";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "natus";
                                    timestamp = "2022-05-22T14:02:28.908Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 2223.21;
                                        expression = "natus";
                                        integerValue = 386489;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 902599;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("in", new DataValue() {{}});
                                            put("corporis", new DataValue() {{}});
                                            put("iste", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "iure";
                                            targetEntityId = "saepe";
                                        }};
                                        stringValue = "quidem";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "architecto";
                                    timestamp = "2022-01-12T00:28:21.182Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 6667.67;
                                        expression = "mollitia";
                                        integerValue = 670638;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 210382;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("explicabo", new DataValue() {{}});
                                            put("nobis", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "enim";
                                            targetEntityId = "omnis";
                                        }};
                                        stringValue = "nemo";
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};            

            BatchPutPropertyValuesResponse res = sdk.batchPutPropertyValues(req);

            if (res.batchPutPropertyValuesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->