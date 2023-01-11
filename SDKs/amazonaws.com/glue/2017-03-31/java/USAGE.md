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

            BatchCreatePartitionRequest req = new BatchCreatePartitionRequest() {{
                headers = new BatchCreatePartitionHeaders() {{
                    xAmzAlgorithm = "molestias";
                    xAmzContentSha256 = "dicta";
                    xAmzCredential = "voluptatum";
                    xAmzDate = "numquam";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "ducimus";
                    xAmzSignedHeaders = "ducimus";
                    xAmzTarget = "AWSGlue.BatchCreatePartition";
                }};
                request = new BatchCreatePartitionRequest() {{
                    catalogId = "et";
                    databaseName = "nam";
                    partitionInputList = new openapisdk.models.shared.PartitionInput[]() {{
                        add(new PartitionInput() {{
                            lastAccessTime = "1996-05-31T18:29:35Z";
                            lastAnalyzedTime = "2014-05-31T19:07:57Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("deserunt", "illo");
                                put("tempore", "velit");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                bucketColumns = new String[]() {{
                                    add("quidem"),
                                }};
                                columns = new openapisdk.models.shared.Column[]() {{
                                    add(new Column() {{
                                        comment = "officiis";
                                        name = "veniam";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("eius", "nobis");
                                            put("aliquam", "qui");
                                        }};
                                        type = "debitis";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "consequatur";
                                location = "iusto";
                                numberOfBuckets = 8955101836556220093;
                                outputFormat = "iusto";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("ut", "ut");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "expedita";
                                        schemaArn = "repellendus";
                                        schemaName = "commodi";
                                    }};
                                    schemaVersionId = "exercitationem";
                                    schemaVersionNumber = 7459015832090057282;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "perferendis";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("autem", "dolore");
                                        put("aliquam", "soluta");
                                    }};
                                    serializationLibrary = "accusantium";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]() {{
                                        add("aut"),
                                        add("accusamus"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("quisquam", "nihil");
                                    }};
                                    skewedColumnValues = new String[]() {{
                                        add("deleniti"),
                                    }};
                                }};
                                sortColumns = new openapisdk.models.shared.Order[]() {{
                                    add(new Order() {{
                                        column = "rem";
                                        sortOrder = 6277689859743485219;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]() {{
                                add("magni"),
                            }};
                        }}),
                        add(new PartitionInput() {{
                            lastAccessTime = "2010-12-05T12:21:37Z";
                            lastAnalyzedTime = "2011-08-12T07:40:33Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("quod", "corporis");
                                put("modi", "soluta");
                                put("odio", "expedita");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                bucketColumns = new String[]() {{
                                    add("ipsum"),
                                    add("saepe"),
                                    add("ad"),
                                }};
                                columns = new openapisdk.models.shared.Column[]() {{
                                    add(new Column() {{
                                        comment = "delectus";
                                        name = "suscipit";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("dolor", "ipsa");
                                            put("quos", "voluptas");
                                        }};
                                        type = "laborum";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "iusto";
                                location = "et";
                                numberOfBuckets = 3667925934151297536;
                                outputFormat = "voluptas";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("quia", "voluptas");
                                    put("corporis", "omnis");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "dolores";
                                        schemaArn = "expedita";
                                        schemaName = "enim";
                                    }};
                                    schemaVersionId = "quo";
                                    schemaVersionNumber = 515727864347354415;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "sequi";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("illo", "enim");
                                        put("et", "praesentium");
                                        put("iste", "omnis");
                                    }};
                                    serializationLibrary = "odio";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]() {{
                                        add("adipisci"),
                                        add("quo"),
                                        add("rerum"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("suscipit", "fugit");
                                    }};
                                    skewedColumnValues = new String[]() {{
                                        add("ullam"),
                                        add("vero"),
                                    }};
                                }};
                                sortColumns = new openapisdk.models.shared.Order[]() {{
                                    add(new Order() {{
                                        column = "et";
                                        sortOrder = 4855648594445967323;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]() {{
                                add("nobis"),
                                add("sunt"),
                            }};
                        }}),
                        add(new PartitionInput() {{
                            lastAccessTime = "1971-09-16T06:53:03Z";
                            lastAnalyzedTime = "1981-11-28T17:23:51Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("repellendus", "error");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                bucketColumns = new String[]() {{
                                    add("fugit"),
                                }};
                                columns = new openapisdk.models.shared.Column[]() {{
                                    add(new Column() {{
                                        comment = "dolores";
                                        name = "aut";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("nam", "molestias");
                                            put("et", "cumque");
                                        }};
                                        type = "aut";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "voluptatem";
                                location = "provident";
                                numberOfBuckets = 1615352566432714451;
                                outputFormat = "ullam";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("reprehenderit", "aut");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "possimus";
                                        schemaArn = "voluptatibus";
                                        schemaName = "magni";
                                    }};
                                    schemaVersionId = "reiciendis";
                                    schemaVersionNumber = 2190221129833308991;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "laboriosam";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("laudantium", "nam");
                                        put("molestiae", "deserunt");
                                        put("voluptates", "possimus");
                                    }};
                                    serializationLibrary = "et";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]() {{
                                        add("placeat"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("vero", "tempore");
                                        put("rem", "cum");
                                        put("ut", "inventore");
                                    }};
                                    skewedColumnValues = new String[]() {{
                                        add("aliquam"),
                                        add("ratione"),
                                    }};
                                }};
                                sortColumns = new openapisdk.models.shared.Order[]() {{
                                    add(new Order() {{
                                        column = "hic";
                                        sortOrder = 8404441515746634618;
                                    }}),
                                    add(new Order() {{
                                        column = "qui";
                                        sortOrder = 4664529193248400784;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]() {{
                                add("officia"),
                                add("dolore"),
                            }};
                        }}),
                    }};
                    tableName = "hic";
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