<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCreatePartitionXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchCreatePartitionRequest;
import org.openapis.openapi.models.operations.BatchCreatePartitionResponse;
import org.openapis.openapi.models.shared.BatchCreatePartitionRequest;
import org.openapis.openapi.models.shared.PartitionInput;
import org.openapis.openapi.models.shared.StorageDescriptor;
import org.openapis.openapi.models.shared.Order;
import org.openapis.openapi.models.shared.SkewedInfo;
import org.openapis.openapi.models.shared.SerDeInfo;
import org.openapis.openapi.models.shared.SchemaReference;
import org.openapis.openapi.models.shared.SchemaId;
import org.openapis.openapi.models.shared.Column;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreatePartitionRequest req = new BatchCreatePartitionRequest() {{
                batchCreatePartitionRequest = new BatchCreatePartitionRequest() {{
                    catalogId = "corrupti";
                    databaseName = "provident";
                    partitionInputList = new org.openapis.openapi.models.shared.PartitionInput[]{{
                        add(new PartitionInput() {{
                            lastAccessTime = "2021-03-11T23:22:42.658Z";
                            lastAnalyzedTime = "2021-05-14T08:28:11.899Z";
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
                                    add(new Column() {{
                                        comment = "temporibus";
                                        name = "ab";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("veritatis", "deserunt");
                                            put("perferendis", "ipsam");
                                        }};
                                        type = "repellendus";
                                    }}),
                                    add(new Column() {{
                                        comment = "sapiente";
                                        name = "quo";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("at", "at");
                                        }};
                                        type = "maiores";
                                    }}),
                                    add(new Column() {{
                                        comment = "molestiae";
                                        name = "quod";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("esse", "totam");
                                            put("porro", "dolorum");
                                            put("dicta", "nam");
                                            put("officia", "occaecati");
                                        }};
                                        type = "fugit";
                                    }}),
                                    add(new Column() {{
                                        comment = "deleniti";
                                        name = "hic";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("totam", "beatae");
                                            put("commodi", "molestiae");
                                            put("modi", "qui");
                                            put("impedit", "cum");
                                        }};
                                        type = "esse";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "ipsum";
                                location = "excepturi";
                                numberOfBuckets = 135218;
                                outputFormat = "perferendis";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("natus", "sed");
                                    put("iste", "dolor");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "natus";
                                        schemaArn = "laboriosam";
                                        schemaName = "hic";
                                    }};
                                    schemaVersionId = "saepe";
                                    schemaVersionNumber = 681820;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "in";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("iste", "iure");
                                        put("saepe", "quidem");
                                    }};
                                    serializationLibrary = "architecto";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]{{
                                        add("reiciendis"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("mollitia", "laborum");
                                        put("dolores", "dolorem");
                                        put("corporis", "explicabo");
                                    }};
                                    skewedColumnValues = new String[]{{
                                        add("enim"),
                                        add("omnis"),
                                        add("nemo"),
                                        add("minima"),
                                    }};
                                }};
                                sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                    add(new Order() {{
                                        column = "accusantium";
                                        sortOrder = 438601;
                                    }}),
                                    add(new Order() {{
                                        column = "culpa";
                                        sortOrder = 988374;
                                    }}),
                                    add(new Order() {{
                                        column = "sapiente";
                                        sortOrder = 102044;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]{{
                                add("dolorem"),
                                add("culpa"),
                                add("consequuntur"),
                            }};
                        }}),
                        add(new PartitionInput() {{
                            lastAccessTime = "2021-01-15T20:18:47.519Z";
                            lastAnalyzedTime = "2022-06-30T02:19:51.375Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("quam", "molestiae");
                                put("velit", "error");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                additionalLocations = new String[]{{
                                    add("quis"),
                                }};
                                bucketColumns = new String[]{{
                                    add("laborum"),
                                }};
                                columns = new org.openapis.openapi.models.shared.Column[]{{
                                    add(new Column() {{
                                        comment = "enim";
                                        name = "odit";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("sequi", "tenetur");
                                            put("ipsam", "id");
                                            put("possimus", "aut");
                                            put("quasi", "error");
                                        }};
                                        type = "temporibus";
                                    }}),
                                    add(new Column() {{
                                        comment = "laborum";
                                        name = "quasi";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("voluptatibus", "vero");
                                            put("nihil", "praesentium");
                                            put("voluptatibus", "ipsa");
                                            put("omnis", "voluptate");
                                        }};
                                        type = "cum";
                                    }}),
                                    add(new Column() {{
                                        comment = "perferendis";
                                        name = "doloremque";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("ut", "maiores");
                                            put("dicta", "corporis");
                                        }};
                                        type = "dolore";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "iusto";
                                location = "dicta";
                                numberOfBuckets = 688661;
                                outputFormat = "enim";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("commodi", "repudiandae");
                                    put("quae", "ipsum");
                                    put("quidem", "molestias");
                                    put("excepturi", "pariatur");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "modi";
                                        schemaArn = "praesentium";
                                        schemaName = "rem";
                                    }};
                                    schemaVersionId = "voluptates";
                                    schemaVersionNumber = 93940;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "repudiandae";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("veritatis", "itaque");
                                        put("incidunt", "enim");
                                        put("consequatur", "est");
                                    }};
                                    serializationLibrary = "quibusdam";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]{{
                                        add("deserunt"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("quibusdam", "labore");
                                        put("modi", "qui");
                                        put("aliquid", "cupiditate");
                                    }};
                                    skewedColumnValues = new String[]{{
                                        add("perferendis"),
                                        add("magni"),
                                        add("assumenda"),
                                    }};
                                }};
                                sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                    add(new Order() {{
                                        column = "alias";
                                        sortOrder = 146441;
                                    }}),
                                    add(new Order() {{
                                        column = "dolorum";
                                        sortOrder = 569618;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]{{
                                add("facilis"),
                                add("tempore"),
                            }};
                        }}),
                        add(new PartitionInput() {{
                            lastAccessTime = "2022-01-14T19:13:42.009Z";
                            lastAnalyzedTime = "2022-10-02T04:55:20.234Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("sint", "aliquid");
                                put("provident", "necessitatibus");
                                put("sint", "officia");
                                put("dolor", "debitis");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                additionalLocations = new String[]{{
                                    add("dolorum"),
                                    add("in"),
                                    add("in"),
                                    add("illum"),
                                }};
                                bucketColumns = new String[]{{
                                    add("rerum"),
                                    add("dicta"),
                                    add("magnam"),
                                    add("cumque"),
                                }};
                                columns = new org.openapis.openapi.models.shared.Column[]{{
                                    add(new Column() {{
                                        comment = "ea";
                                        name = "aliquid";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("accusamus", "non");
                                            put("occaecati", "enim");
                                            put("accusamus", "delectus");
                                        }};
                                        type = "quidem";
                                    }}),
                                    add(new Column() {{
                                        comment = "provident";
                                        name = "nam";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("blanditiis", "deleniti");
                                            put("sapiente", "amet");
                                            put("deserunt", "nisi");
                                        }};
                                        type = "vel";
                                    }}),
                                    add(new Column() {{
                                        comment = "natus";
                                        name = "omnis";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("perferendis", "nihil");
                                            put("magnam", "distinctio");
                                        }};
                                        type = "id";
                                    }}),
                                    add(new Column() {{
                                        comment = "labore";
                                        name = "labore";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("natus", "nobis");
                                            put("eum", "vero");
                                        }};
                                        type = "aspernatur";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "architecto";
                                location = "magnam";
                                numberOfBuckets = 92373;
                                outputFormat = "excepturi";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("provident", "quos");
                                    put("sint", "accusantium");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "mollitia";
                                        schemaArn = "reiciendis";
                                        schemaName = "mollitia";
                                    }};
                                    schemaVersionId = "ad";
                                    schemaVersionNumber = 431418;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "dolor";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("odit", "nemo");
                                        put("quasi", "iure");
                                        put("doloribus", "debitis");
                                        put("eius", "maxime");
                                    }};
                                    serializationLibrary = "deleniti";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]{{
                                        add("in"),
                                        add("architecto"),
                                        add("architecto"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("ullam", "expedita");
                                        put("nihil", "repellat");
                                        put("quibusdam", "sed");
                                        put("saepe", "pariatur");
                                    }};
                                    skewedColumnValues = new String[]{{
                                        add("consequuntur"),
                                    }};
                                }};
                                sortColumns = new org.openapis.openapi.models.shared.Order[]{{
                                    add(new Order() {{
                                        column = "natus";
                                        sortOrder = 166847;
                                    }}),
                                    add(new Order() {{
                                        column = "sunt";
                                        sortOrder = 779051;
                                    }}),
                                    add(new Order() {{
                                        column = "illum";
                                        sortOrder = 864934;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]{{
                                add("ea"),
                                add("excepturi"),
                                add("odit"),
                                add("ea"),
                            }};
                        }}),
                    }};
                    tableName = "accusantium";
                }};
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
                xAmzTarget = "AWSGlue.BatchCreatePartition";
            }}            

            BatchCreatePartitionResponse res = sdk.batchCreatePartition(req);

            if (res.batchCreatePartitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->