<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchCreatePartitionRequest;
import org.openapis.openapi.models.operations.BatchCreatePartitionResponse;
import org.openapis.openapi.models.operations.BatchCreatePartitionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchCreatePartitionRequest;
import org.openapis.openapi.models.shared.Column;
import org.openapis.openapi.models.shared.Order;
import org.openapis.openapi.models.shared.PartitionInput;
import org.openapis.openapi.models.shared.SchemaId;
import org.openapis.openapi.models.shared.SchemaReference;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SerDeInfo;
import org.openapis.openapi.models.shared.SkewedInfo;
import org.openapis.openapi.models.shared.StorageDescriptor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreatePartitionRequest req = new BatchCreatePartitionRequest(                new BatchCreatePartitionRequest("provident",                 new org.openapis.openapi.models.shared.PartitionInput[]{{
                                                add(new PartitionInput() {{
                                                    lastAccessTime = OffsetDateTime.parse("2021-03-11T23:22:42.658Z");
                                                    lastAnalyzedTime = OffsetDateTime.parse("2021-05-14T08:28:11.899Z");
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("vel", "error");
                                                        put("deserunt", "suscipit");
                                                        put("iure", "magnam");
                                                        put("debitis", "ipsa");
                                                    }};
                                                    storageDescriptor = new StorageDescriptor() {{
                                                        additionalLocations = new String[]{{
                                                            add("tempora"),
                                                            add("suscipit"),
                                                            add("molestiae"),
                                                            add("minus"),
                                                        }};
                                                        bucketColumns = new String[]{{
                                                            add("voluptatum"),
                                                            add("iusto"),
                                                            add("excepturi"),
                                                            add("nisi"),
                                                        }};
                                                        columns = new org.openapis.openapi.models.shared.Column[]{{
                                                            add(new Column("esse") {{
                                                                comment = "temporibus";
                                                                name = "Erica Bogisich III";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("sapiente", "quo");
                                                                    put("odit", "at");
                                                                    put("at", "maiores");
                                                                    put("molestiae", "quod");
                                                                }};
                                                                type = "quod";
                                                            }}),
                                                            add(new Column("molestiae") {{
                                                                comment = "totam";
                                                                name = "Omar Carroll";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("fugit", "deleniti");
                                                                    put("hic", "optio");
                                                                    put("totam", "beatae");
                                                                }};
                                                                type = "commodi";
                                                            }}),
                                                            add(new Column("natus") {{
                                                                comment = "modi";
                                                                name = "Krista Rippin";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("aspernatur", "perferendis");
                                                                    put("ad", "natus");
                                                                    put("sed", "iste");
                                                                }};
                                                                type = "dolor";
                                                            }}),
                                                            add(new Column("mollitia") {{
                                                                comment = "laboriosam";
                                                                name = "Elias Parker";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("iure", "saepe");
                                                                    put("quidem", "architecto");
                                                                    put("ipsa", "reiciendis");
                                                                }};
                                                                type = "est";
                                                            }}),
                                                        }};
                                                        compressed = false;
                                                        inputFormat = "laborum";
                                                        location = "dolores";
                                                        numberOfBuckets = 210382L;
                                                        outputFormat = "corporis";
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("nobis", "enim");
                                                        }};
                                                        schemaReference = new SchemaReference() {{
                                                            schemaId = new SchemaId() {{
                                                                registryName = "omnis";
                                                                schemaArn = "nemo";
                                                                schemaName = "minima";
                                                            }};
                                                            schemaVersionId = "excepturi";
                                                            schemaVersionNumber = 38425L;
                                                        }};
                                                        serdeInfo = new SerDeInfo() {{
                                                            name = "Cecilia Yundt MD";
                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                put("culpa", "consequuntur");
                                                            }};
                                                            serializationLibrary = "repellat";
                                                        }};
                                                        skewedInfo = new SkewedInfo() {{
                                                            skewedColumnNames = new String[]{{
                                                                add("occaecati"),
                                                                add("numquam"),
                                                                add("commodi"),
                                                            }};
                                                            skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                                                put("molestiae", "velit");
                                                                put("error", "quia");
                                                            }};
                                                            skewedColumnValues = new String[]{{
                                                                add("vitae"),
                                                                add("laborum"),
                                                            }};
                                                        }};
                                                        sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                                            add(new Order("quo", 196582L) {{
                                                                column = "enim";
                                                                sortOrder = 138183L;
                                                            }}),
                                                            add(new Order("id", 820994L) {{
                                                                column = "tenetur";
                                                                sortOrder = 368725L;
                                                            }}),
                                                            add(new Order("error", 837945L) {{
                                                                column = "aut";
                                                                sortOrder = 97101L;
                                                            }}),
                                                        }};
                                                        storedAsSubDirectories = false;
                                                    }};
                                                    values = new String[]{{
                                                        add("quasi"),
                                                        add("reiciendis"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                                add(new PartitionInput() {{
                                                    lastAccessTime = OffsetDateTime.parse("2021-08-05T19:50:46.898Z");
                                                    lastAnalyzedTime = OffsetDateTime.parse("2021-01-17T23:08:44.457Z");
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("omnis", "voluptate");
                                                    }};
                                                    storageDescriptor = new StorageDescriptor() {{
                                                        additionalLocations = new String[]{{
                                                            add("perferendis"),
                                                            add("doloremque"),
                                                            add("reprehenderit"),
                                                        }};
                                                        bucketColumns = new String[]{{
                                                            add("maiores"),
                                                            add("dicta"),
                                                        }};
                                                        columns = new org.openapis.openapi.models.shared.Column[]{{
                                                            add(new Column("excepturi") {{
                                                                comment = "dolore";
                                                                name = "Mildred Pfeffer";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("repudiandae", "quae");
                                                                    put("ipsum", "quidem");
                                                                }};
                                                                type = "molestias";
                                                            }}),
                                                            add(new Column("explicabo") {{
                                                                comment = "pariatur";
                                                                name = "Irma Ledner DVM";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("veritatis", "itaque");
                                                                    put("incidunt", "enim");
                                                                    put("consequatur", "est");
                                                                }};
                                                                type = "quibusdam";
                                                            }}),
                                                        }};
                                                        compressed = false;
                                                        inputFormat = "deserunt";
                                                        location = "distinctio";
                                                        numberOfBuckets = 841386L;
                                                        outputFormat = "labore";
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("qui", "aliquid");
                                                            put("cupiditate", "quos");
                                                        }};
                                                        schemaReference = new SchemaReference() {{
                                                            schemaId = new SchemaId() {{
                                                                registryName = "perferendis";
                                                                schemaArn = "magni";
                                                                schemaName = "assumenda";
                                                            }};
                                                            schemaVersionId = "ipsam";
                                                            schemaVersionNumber = 4695L;
                                                        }};
                                                        serdeInfo = new SerDeInfo() {{
                                                            name = "Sonya Marks";
                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                put("labore", "delectus");
                                                                put("eum", "non");
                                                                put("eligendi", "sint");
                                                            }};
                                                            serializationLibrary = "aliquid";
                                                        }};
                                                        skewedInfo = new SkewedInfo() {{
                                                            skewedColumnNames = new String[]{{
                                                                add("necessitatibus"),
                                                                add("sint"),
                                                                add("officia"),
                                                            }};
                                                            skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                                                put("debitis", "a");
                                                            }};
                                                            skewedColumnValues = new String[]{{
                                                                add("in"),
                                                                add("in"),
                                                                add("illum"),
                                                            }};
                                                        }};
                                                        sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                                            add(new Order("magnam", 767024L) {{
                                                                column = "rerum";
                                                                sortOrder = 116202L;
                                                            }}),
                                                            add(new Order("aliquid", 675439L) {{
                                                                column = "facere";
                                                                sortOrder = 411820L;
                                                            }}),
                                                            add(new Order("occaecati", 313218L) {{
                                                                column = "accusamus";
                                                                sortOrder = 249796L;
                                                            }}),
                                                            add(new Order("quidem", 588465L) {{
                                                                column = "accusamus";
                                                                sortOrder = 965417L;
                                                            }}),
                                                        }};
                                                        storedAsSubDirectories = false;
                                                    }};
                                                    values = new String[]{{
                                                        add("id"),
                                                        add("blanditiis"),
                                                        add("deleniti"),
                                                    }};
                                                }}),
                                                add(new PartitionInput() {{
                                                    lastAccessTime = OffsetDateTime.parse("2022-04-23T13:35:30.978Z");
                                                    lastAnalyzedTime = OffsetDateTime.parse("2022-03-18T17:53:23.400Z");
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("natus", "omnis");
                                                        put("molestiae", "perferendis");
                                                    }};
                                                    storageDescriptor = new StorageDescriptor() {{
                                                        additionalLocations = new String[]{{
                                                            add("magnam"),
                                                            add("distinctio"),
                                                        }};
                                                        bucketColumns = new String[]{{
                                                            add("labore"),
                                                            add("labore"),
                                                            add("suscipit"),
                                                        }};
                                                        columns = new org.openapis.openapi.models.shared.Column[]{{
                                                            add(new Column("reiciendis") {{
                                                                comment = "nobis";
                                                                name = "Mrs. Meghan Collins V";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("provident", "quos");
                                                                    put("sint", "accusantium");
                                                                }};
                                                                type = "mollitia";
                                                            }}),
                                                            add(new Column("maxime") {{
                                                                comment = "mollitia";
                                                                name = "Natalie Ernser";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("quasi", "iure");
                                                                    put("doloribus", "debitis");
                                                                }};
                                                                type = "eius";
                                                            }}),
                                                            add(new Column("consequuntur") {{
                                                                comment = "deleniti";
                                                                name = "Dr. Arnold Bradtke";
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("nihil", "repellat");
                                                                    put("quibusdam", "sed");
                                                                    put("saepe", "pariatur");
                                                                }};
                                                                type = "accusantium";
                                                            }}),
                                                        }};
                                                        compressed = false;
                                                        inputFormat = "praesentium";
                                                        location = "natus";
                                                        numberOfBuckets = 166847L;
                                                        outputFormat = "sunt";
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("illum", "pariatur");
                                                            put("maxime", "ea");
                                                            put("excepturi", "odit");
                                                            put("ea", "accusantium");
                                                        }};
                                                        schemaReference = new SchemaReference() {{
                                                            schemaId = new SchemaId() {{
                                                                registryName = "ab";
                                                                schemaArn = "maiores";
                                                                schemaName = "quidem";
                                                            }};
                                                            schemaVersionId = "ipsam";
                                                            schemaVersionNumber = 453543L;
                                                        }};
                                                        serdeInfo = new SerDeInfo() {{
                                                            name = "Candice Beatty";
                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                put("perferendis", "fugiat");
                                                                put("amet", "aut");
                                                                put("cumque", "corporis");
                                                                put("hic", "libero");
                                                            }};
                                                            serializationLibrary = "nobis";
                                                        }};
                                                        skewedInfo = new SkewedInfo() {{
                                                            skewedColumnNames = new String[]{{
                                                                add("quis"),
                                                            }};
                                                            skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                                                put("dignissimos", "eaque");
                                                                put("quis", "nesciunt");
                                                                put("eos", "perferendis");
                                                            }};
                                                            skewedColumnValues = new String[]{{
                                                                add("minus"),
                                                            }};
                                                        }};
                                                        sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                                            add(new Order("nostrum", 944120L) {{
                                                                column = "dolor";
                                                                sortOrder = 874573L;
                                                            }}),
                                                            add(new Order("facilis", 596656L) {{
                                                                column = "recusandae";
                                                                sortOrder = 608253L;
                                                            }}),
                                                        }};
                                                        storedAsSubDirectories = false;
                                                    }};
                                                    values = new String[]{{
                                                        add("porro"),
                                                    }};
                                                }}),
                                            }}, "consequuntur") {{
                                catalogId = "blanditiis";
                            }};, BatchCreatePartitionXAmzTargetEnum.AWS_GLUE_BATCH_CREATE_PARTITION) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            BatchCreatePartitionResponse res = sdk.batchCreatePartition(req);

            if (res.batchCreatePartitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->