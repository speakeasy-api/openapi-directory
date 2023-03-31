<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchCreatePartitionXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchCreatePartitionHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchCreatePartitionRequest req = new BatchCreatePartitionRequest() {{
                headers = new BatchCreatePartitionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSGlue.BatchCreatePartition";
                }};
                request = new BatchCreatePartitionRequest() {{
                    catalogId = "illum";
                    databaseName = "vel";
                    partitionInputList = new org.openapis.openapi.models.shared.PartitionInput[]{{
                        add(new PartitionInput() {{
                            lastAccessTime = "2022-03-26T09:37:56.283Z";
                            lastAnalyzedTime = "2022-09-14T09:35:47.986Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                additionalLocations = new String[]{{
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                                bucketColumns = new String[]{{
                                    add("temporibus"),
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                }};
                                columns = new org.openapis.openapi.models.shared.Column[]{{
                                    add(new Column() {{
                                        comment = "perferendis";
                                        name = "ipsam";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("sapiente", "quo");
                                            put("odit", "at");
                                            put("at", "maiores");
                                            put("molestiae", "quod");
                                        }};
                                        type = "quod";
                                    }}),
                                    add(new Column() {{
                                        comment = "esse";
                                        name = "totam";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("dolorum", "dicta");
                                            put("nam", "officia");
                                            put("occaecati", "fugit");
                                            put("deleniti", "hic");
                                        }};
                                        type = "optio";
                                    }}),
                                    add(new Column() {{
                                        comment = "totam";
                                        name = "beatae";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("molestiae", "modi");
                                            put("qui", "impedit");
                                        }};
                                        type = "cum";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "esse";
                                location = "ipsum";
                                numberOfBuckets = 568434;
                                outputFormat = "aspernatur";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("ad", "natus");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "sed";
                                        schemaArn = "iste";
                                        schemaName = "dolor";
                                    }};
                                    schemaVersionId = "natus";
                                    schemaVersionNumber = 386489;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "hic";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("fuga", "in");
                                        put("corporis", "iste");
                                        put("iure", "saepe");
                                        put("quidem", "architecto");
                                    }};
                                    serializationLibrary = "ipsa";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]{{
                                        add("est"),
                                        add("mollitia"),
                                        add("laborum"),
                                        add("dolores"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
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
            }};            

            BatchCreatePartitionResponse res = sdk.batchCreatePartition(req);

            if (res.batchCreatePartitionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->