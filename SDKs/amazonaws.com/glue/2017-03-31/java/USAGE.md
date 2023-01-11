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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSGlue.BatchCreatePartition";
                }};
                request = new BatchCreatePartitionRequest() {{
                    catalogId = "fugit";
                    databaseName = "et";
                    partitionInputList = new openapisdk.models.shared.PartitionInput[]() {{
                        add(new PartitionInput() {{
                            lastAccessTime = "2004-06-02T10:14:12Z";
                            lastAnalyzedTime = "1981-07-21T06:30:48Z";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("ut", "dolorem");
                            }};
                            storageDescriptor = new StorageDescriptor() {{
                                bucketColumns = new String[]() {{
                                    add("voluptate"),
                                    add("iste"),
                                }};
                                columns = new openapisdk.models.shared.Column[]() {{
                                    add(new Column() {{
                                        comment = "totam";
                                        name = "dolores";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("debitis", "vel");
                                            put("odio", "dolore");
                                            put("id", "aspernatur");
                                        }};
                                        type = "accusantium";
                                    }}),
                                }};
                                compressed = false;
                                inputFormat = "commodi";
                                location = "quis";
                                numberOfBuckets = 3398579248012586914;
                                outputFormat = "aut";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("non", "voluptas");
                                    put("omnis", "aut");
                                }};
                                schemaReference = new SchemaReference() {{
                                    schemaId = new SchemaId() {{
                                        registryName = "illo";
                                        schemaArn = "sed";
                                        schemaName = "officiis";
                                    }};
                                    schemaVersionId = "autem";
                                    schemaVersionNumber = 8514850266767180993;
                                }};
                                serdeInfo = new SerDeInfo() {{
                                    name = "nobis";
                                    parameters = new java.util.HashMap<String, String>() {{
                                        put("qui", "recusandae");
                                    }};
                                    serializationLibrary = "at";
                                }};
                                skewedInfo = new SkewedInfo() {{
                                    skewedColumnNames = new String[]() {{
                                        add("eveniet"),
                                    }};
                                    skewedColumnValueLocationMaps = new java.util.HashMap<String, String>() {{
                                        put("sint", "inventore");
                                        put("ut", "exercitationem");
                                    }};
                                    skewedColumnValues = new String[]() {{
                                        add("reprehenderit"),
                                        add("tempore"),
                                        add("maiores"),
                                    }};
                                }};
                                sortColumns = new openapisdk.models.shared.Order[]() {{
                                    add(new Order() {{
                                        column = "dolor";
                                        sortOrder = 7719717197379695442;
                                    }}),
                                    add(new Order() {{
                                        column = "veritatis";
                                        sortOrder = 2671030200101705776;
                                    }}),
                                    add(new Order() {{
                                        column = "et";
                                        sortOrder = 8565714761387219319;
                                    }}),
                                }};
                                storedAsSubDirectories = false;
                            }};
                            values = new String[]() {{
                                add("dolores"),
                            }};
                        }}),
                    }};
                    tableName = "placeat";
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