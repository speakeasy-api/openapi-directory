<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutPropertyValuesRequest req = new BatchPutPropertyValuesRequest() {{
                requestBody = new BatchPutPropertyValuesRequestBody() {{
                    entries = new org.openapis.openapi.models.shared.PropertyValueEntry[]{{
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "provident";
                                entityId = "distinctio";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("unde", "nulla");
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                }};
                                propertyName = "iure";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "debitis";
                                    timestamp = "2022-01-14T06:18:51.036Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 2726.56;
                                        expression = "suscipit";
                                        integerValue = 477665;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 812169;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("iusto", new DataValue() {{}});
                                            put("excepturi", new DataValue() {{}});
                                            put("nisi", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "recusandae";
                                            targetEntityId = "temporibus";
                                        }};
                                        stringValue = "ab";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "quis";
                                    timestamp = "2022-05-09T10:00:51.349Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 202.18;
                                        expression = "ipsam";
                                        integerValue = 832620;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 778157;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("at", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "at";
                                            targetEntityId = "maiores";
                                        }};
                                        stringValue = "molestiae";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "quod";
                                entityId = "quod";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                                propertyName = "nam";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "occaecati";
                                    timestamp = "2022-06-18T20:36:37.412Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 9446.69;
                                        expression = "optio";
                                        integerValue = 521848;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 414662;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("modi", new DataValue() {{}});
                                            put("qui", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "impedit";
                                            targetEntityId = "cum";
                                        }};
                                        stringValue = "esse";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "ipsum";
                                    timestamp = "2022-09-24T06:58:38.511Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 187.89;
                                        expression = "ad";
                                        integerValue = 617636;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 612096;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("natus", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "laboriosam";
                                            targetEntityId = "hic";
                                        }};
                                        stringValue = "saepe";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "fuga";
                                    timestamp = "2022-08-22T18:42:38.160Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 6130.64;
                                        expression = "iure";
                                        integerValue = 902349;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 99280;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("reiciendis", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "est";
                                            targetEntityId = "mollitia";
                                        }};
                                        stringValue = "laborum";
                                    }};
                                }}),
                            }};
                        }}),
                        add(new PropertyValueEntry() {{
                            entityPropertyReference = new EntityPropertyReference() {{
                                componentName = "dolores";
                                entityId = "dolorem";
                                externalIdProperty = new java.util.HashMap<String, String>() {{
                                    put("explicabo", "nobis");
                                    put("enim", "omnis");
                                }};
                                propertyName = "nemo";
                            }};
                            propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                add(new PropertyValue() {{
                                    time = "excepturi";
                                    timestamp = "2022-07-24T21:51:02.112Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 6342.74;
                                        expression = "doloribus";
                                        integerValue = 958950;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 652790;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("culpa", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "consequuntur";
                                            targetEntityId = "repellat";
                                        }};
                                        stringValue = "mollitia";
                                    }};
                                }}),
                                add(new PropertyValue() {{
                                    time = "occaecati";
                                    timestamp = "2022-08-02T18:07:51.623Z";
                                    value = new DataValue() {{
                                        booleanValue = false;
                                        doubleValue = 4663.11;
                                        expression = "molestiae";
                                        integerValue = 244425;
                                        listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                            add(new DataValue() {{}}),
                                        }};
                                        longValue = 158969;
                                        mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                            put("vitae", new DataValue() {{}});
                                            put("laborum", new DataValue() {{}});
                                        }};
                                        relationshipValue = new RelationshipValue() {{
                                            targetComponentName = "animi";
                                            targetEntityId = "enim";
                                        }};
                                        stringValue = "odit";
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "tenetur";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "id";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "aut";
                workspaceId = "quasi";
            }}            

            BatchPutPropertyValuesResponse res = sdk.batchPutPropertyValues(req);

            if (res.batchPutPropertyValuesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->