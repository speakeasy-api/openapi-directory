<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequest;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesRequestBody;
import org.openapis.openapi.models.operations.BatchPutPropertyValuesResponse;
import org.openapis.openapi.models.shared.DataValue;
import org.openapis.openapi.models.shared.EntityPropertyReference;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.PropertyValueEntry;
import org.openapis.openapi.models.shared.RelationshipValue;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchPutPropertyValuesRequest req = new BatchPutPropertyValuesRequest(                new BatchPutPropertyValuesRequestBody(                new org.openapis.openapi.models.shared.PropertyValueEntry[]{{
                                                add(new PropertyValueEntry(                new EntityPropertyReference("natus") {{
                                                                    componentName = "sed";
                                                                    entityId = "iste";
                                                                    externalIdProperty = new java.util.HashMap<String, String>() {{
                                                                        put("natus", "laboriosam");
                                                                    }};
                                                                }};) {{
                                                    entityPropertyReference = new EntityPropertyReference("iure") {{
                                                        componentName = "distinctio";
                                                        entityId = "quibusdam";
                                                        externalIdProperty = new java.util.HashMap<String, String>() {{
                                                            put("nulla", "corrupti");
                                                            put("illum", "vel");
                                                            put("error", "deserunt");
                                                        }};
                                                        propertyName = "suscipit";
                                                    }};
                                                    propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 3373.96;
                                                                            expression = "veritatis";
                                                                            integerValue = 648172L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 368241L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("sapiente", new DataValue() {{}});
                                                                                put("quo", new DataValue() {{}});
                                                                                put("odit", new DataValue() {{}});
                                                                                put("at", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "at";
                                                                                targetEntityId = "maiores";
                                                                            }};;
                                                                            stringValue = "molestiae";
                                                                        }};) {{
                                                            time = "debitis";
                                                            timestamp = OffsetDateTime.parse("2022-01-14T06:18:51.036Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 2726.56;
                                                                expression = "suscipit";
                                                                integerValue = 477665L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 812169L;
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
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 1059.07;
                                                                            expression = "commodi";
                                                                            integerValue = 473600L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 186332L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("cum", new DataValue() {{}});
                                                                                put("esse", new DataValue() {{}});
                                                                                put("ipsum", new DataValue() {{}});
                                                                                put("excepturi", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "aspernatur";
                                                                                targetEntityId = "perferendis";
                                                                            }};;
                                                                            stringValue = "ad";
                                                                        }};) {{
                                                            time = "quod";
                                                            timestamp = OffsetDateTime.parse("2021-08-13T16:19:19.906Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 5204.78;
                                                                expression = "porro";
                                                                integerValue = 678880L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 720633L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("occaecati", new DataValue() {{}});
                                                                    put("fugit", new DataValue() {{}});
                                                                    put("deleniti", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "hic";
                                                                    targetEntityId = "optio";
                                                                }};
                                                                stringValue = "totam";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new PropertyValueEntry(                new EntityPropertyReference("modi") {{
                                                                    componentName = "qui";
                                                                    entityId = "aliquid";
                                                                    externalIdProperty = new java.util.HashMap<String, String>() {{
                                                                        put("quos", "perferendis");
                                                                        put("magni", "assumenda");
                                                                        put("ipsam", "alias");
                                                                    }};
                                                                }};) {{
                                                    entityPropertyReference = new EntityPropertyReference("ipsa") {{
                                                        componentName = "hic";
                                                        entityId = "saepe";
                                                        externalIdProperty = new java.util.HashMap<String, String>() {{
                                                            put("in", "corporis");
                                                            put("iste", "iure");
                                                            put("saepe", "quidem");
                                                        }};
                                                        propertyName = "architecto";
                                                    }};
                                                    propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 4386.01;
                                                                            expression = "culpa";
                                                                            integerValue = 988374L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 102044L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("dolorem", new DataValue() {{}});
                                                                                put("culpa", new DataValue() {{}});
                                                                                put("consequuntur", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "repellat";
                                                                                targetEntityId = "mollitia";
                                                                            }};;
                                                                            stringValue = "occaecati";
                                                                        }};) {{
                                                            time = "est";
                                                            timestamp = OffsetDateTime.parse("2021-08-29T10:25:27.700Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 1709.09;
                                                                expression = "dolorem";
                                                                integerValue = 358152L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 750686L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("omnis", new DataValue() {{}});
                                                                    put("nemo", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "minima";
                                                                    targetEntityId = "excepturi";
                                                                }};
                                                                stringValue = "accusantium";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 7783.46;
                                                                            expression = "sequi";
                                                                            integerValue = 949572L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 662527L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("aut", new DataValue() {{}});
                                                                                put("quasi", new DataValue() {{}});
                                                                                put("error", new DataValue() {{}});
                                                                                put("temporibus", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "laborum";
                                                                                targetEntityId = "quasi";
                                                                            }};;
                                                                            stringValue = "reiciendis";
                                                                        }};) {{
                                                            time = "numquam";
                                                            timestamp = OffsetDateTime.parse("2022-07-14T19:07:02.935Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 4746.97;
                                                                expression = "velit";
                                                                integerValue = 623510L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 338007L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("laborum", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "animi";
                                                                    targetEntityId = "enim";
                                                                }};
                                                                stringValue = "odit";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 3594.44;
                                                                            expression = "dolore";
                                                                            integerValue = 480894L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 688661L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("accusamus", new DataValue() {{}});
                                                                                put("commodi", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "repudiandae";
                                                                                targetEntityId = "quae";
                                                                            }};;
                                                                            stringValue = "ipsum";
                                                                        }};) {{
                                                            time = "voluptatibus";
                                                            timestamp = OffsetDateTime.parse("2021-08-05T19:50:46.898Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 5096.24;
                                                                expression = "voluptatibus";
                                                                integerValue = 55714L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 451159L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("perferendis", new DataValue() {{}});
                                                                    put("doloremque", new DataValue() {{}});
                                                                    put("reprehenderit", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "ut";
                                                                    targetEntityId = "maiores";
                                                                }};
                                                                stringValue = "dicta";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2777.18;
                                                                            expression = "enim";
                                                                            integerValue = 9356L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 842342L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("deserunt", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "distinctio";
                                                                                targetEntityId = "quibusdam";
                                                                            }};;
                                                                            stringValue = "labore";
                                                                        }};) {{
                                                            time = "quidem";
                                                            timestamp = OffsetDateTime.parse("2021-11-13T09:08:33.009Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 8651.03;
                                                                expression = "modi";
                                                                integerValue = 508969L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 916723L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("repudiandae", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "sint";
                                                                    targetEntityId = "veritatis";
                                                                }};
                                                                stringValue = "itaque";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                                add(new PropertyValueEntry(                new EntityPropertyReference("facilis") {{
                                                                    componentName = "in";
                                                                    entityId = "architecto";
                                                                    externalIdProperty = new java.util.HashMap<String, String>() {{
                                                                        put("repudiandae", "ullam");
                                                                    }};
                                                                }};) {{
                                                    entityPropertyReference = new EntityPropertyReference("eligendi") {{
                                                        componentName = "fugit";
                                                        entityId = "dolorum";
                                                        externalIdProperty = new java.util.HashMap<String, String>() {{
                                                            put("tempora", "facilis");
                                                            put("tempore", "labore");
                                                            put("delectus", "eum");
                                                        }};
                                                        propertyName = "non";
                                                    }};
                                                    propertyValues = new org.openapis.openapi.models.shared.PropertyValue[]{{
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2974.37;
                                                                            expression = "cumque";
                                                                            integerValue = 813798L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 396506L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("accusamus", new DataValue() {{}});
                                                                                put("non", new DataValue() {{}});
                                                                                put("occaecati", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "enim";
                                                                                targetEntityId = "accusamus";
                                                                            }};;
                                                                            stringValue = "delectus";
                                                                        }};) {{
                                                            time = "aliquid";
                                                            timestamp = OffsetDateTime.parse("2021-03-17T21:24:26.606Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 5722.52;
                                                                expression = "officia";
                                                                integerValue = 223081L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 952749L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("in", new DataValue() {{}});
                                                                    put("in", new DataValue() {{}});
                                                                    put("illum", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "maiores";
                                                                    targetEntityId = "rerum";
                                                                }};
                                                                stringValue = "dicta";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 4701.32;
                                                                            expression = "magnam";
                                                                            integerValue = 716075L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 287991L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("suscipit", new DataValue() {{}});
                                                                                put("natus", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "nobis";
                                                                                targetEntityId = "eum";
                                                                            }};;
                                                                            stringValue = "vero";
                                                                        }};) {{
                                                            time = "quidem";
                                                            timestamp = OffsetDateTime.parse("2021-07-20T13:32:41.687Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 6596.69;
                                                                expression = "blanditiis";
                                                                integerValue = 533206L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 230533L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("nisi", new DataValue() {{}});
                                                                    put("vel", new DataValue() {{}});
                                                                    put("natus", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "omnis";
                                                                    targetEntityId = "molestiae";
                                                                }};
                                                                stringValue = "perferendis";
                                                            }};
                                                        }}),
                                                        add(new PropertyValue(                new DataValue() {{
                                                                            booleanValue = false;
                                                                            doubleValue = 2212.62;
                                                                            expression = "necessitatibus";
                                                                            integerValue = 141264L;
                                                                            listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                                add(new DataValue() {{}}),
                                                                                add(new DataValue() {{}}),
                                                                            }};
                                                                            longValue = 97260L;
                                                                            mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                                put("doloribus", new DataValue() {{}});
                                                                                put("debitis", new DataValue() {{}});
                                                                            }};
                                                                            relationshipValue = new RelationshipValue() {{
                                                                                targetComponentName = "eius";
                                                                                targetEntityId = "maxime";
                                                                            }};;
                                                                            stringValue = "deleniti";
                                                                        }};) {{
                                                            time = "aspernatur";
                                                            timestamp = OffsetDateTime.parse("2022-09-14T03:02:47.808Z");
                                                            value = new DataValue() {{
                                                                booleanValue = false;
                                                                doubleValue = 923.73;
                                                                expression = "excepturi";
                                                                integerValue = 354047L;
                                                                listValue = new org.openapis.openapi.models.shared.DataValue[]{{
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                    add(new DataValue() {{}}),
                                                                }};
                                                                longValue = 551816L;
                                                                mapValue = new java.util.HashMap<String, org.openapis.openapi.models.shared.DataValue>() {{
                                                                    put("accusantium", new DataValue() {{}});
                                                                    put("mollitia", new DataValue() {{}});
                                                                    put("reiciendis", new DataValue() {{}});
                                                                }};
                                                                relationshipValue = new RelationshipValue() {{
                                                                    targetComponentName = "mollitia";
                                                                    targetEntityId = "ad";
                                                                }};
                                                                stringValue = "eum";
                                                            }};
                                                        }}),
                                                    }};
                                                }}),
                                            }});, "expedita") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            BatchPutPropertyValuesResponse res = sdk.batchPutPropertyValues(req);

            if (res.batchPutPropertyValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->