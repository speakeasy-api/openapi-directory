# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequestBody;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.shared.SqlParameter;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.TypeHintEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest() {{
                requestBody = new BatchExecuteStatementRequestBody() {{
                    database = "corrupti";
                    parameterSets = new org.openapis.openapi.models.shared.SqlParameter[][]{{
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "quibusdam";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(4236.55),
                                            add(6235.64),
                                            add(6458.94),
                                            add(3843.82),
                                        }};
                                        longValues = new Long[]{{
                                            add(297534),
                                            add(891773),
                                        }};
                                        stringValues = new String[]{{
                                            add("delectus"),
                                        }};
                                    }};
                                    blobValue = "tempora";
                                    booleanValue = false;
                                    doubleValue = 3834.41;
                                    isNull = false;
                                    longValue = 477665;
                                    stringValue = "minus";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "placeat";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9255.97),
                                            add(8360.79),
                                        }};
                                        longValues = new Long[]{{
                                            add(337396),
                                        }};
                                        stringValues = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }};
                                    blobValue = "perferendis";
                                    booleanValue = false;
                                    doubleValue = 3682.41;
                                    isNull = false;
                                    longValue = 832620;
                                    stringValue = "sapiente";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "quo";
                                typeHint = "JSON";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(4736.08),
                                            add(7991.59),
                                            add(8009.11),
                                            add(4614.79),
                                        }};
                                        longValues = new Long[]{{
                                            add(780529),
                                            add(678880),
                                            add(118274),
                                        }};
                                        stringValues = new String[]{{
                                            add("officia"),
                                            add("occaecati"),
                                            add("fugit"),
                                        }};
                                    }};
                                    blobValue = "deleniti";
                                    booleanValue = false;
                                    doubleValue = 9446.69;
                                    isNull = false;
                                    longValue = 758616;
                                    stringValue = "totam";
                                }};
                            }}),
                        }}),
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "commodi";
                                typeHint = "TIMESTAMP";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(7369.18),
                                            add(4561.5),
                                            add(2165.5),
                                            add(5684.34),
                                        }};
                                        longValues = new Long[]{{
                                            add(18789),
                                        }};
                                        stringValues = new String[]{{
                                            add("natus"),
                                            add("sed"),
                                        }};
                                    }};
                                    blobValue = "iste";
                                    booleanValue = false;
                                    doubleValue = 2223.21;
                                    isNull = false;
                                    longValue = 616934;
                                    stringValue = "laboriosam";
                                }};
                            }}),
                        }}),
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "saepe";
                                typeHint = "TIME";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(4370.32),
                                            add(9023.49),
                                            add(6976.31),
                                        }};
                                        longValues = new Long[]{{
                                            add(60225),
                                        }};
                                        stringValues = new String[]{{
                                            add("est"),
                                            add("mollitia"),
                                            add("laborum"),
                                            add("dolores"),
                                        }};
                                    }};
                                    blobValue = "dolorem";
                                    booleanValue = false;
                                    doubleValue = 3581.52;
                                    isNull = false;
                                    longValue = 128926;
                                    stringValue = "nobis";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "enim";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(384.25),
                                            add(4386.01),
                                            add(6342.74),
                                        }};
                                        longValues = new Long[]{{
                                            add(958950),
                                            add(102044),
                                            add(652790),
                                            add(208876),
                                        }};
                                        stringValues = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                    }};
                                    blobValue = "occaecati";
                                    booleanValue = false;
                                    doubleValue = 2532.91;
                                    isNull = false;
                                    longValue = 414369;
                                    stringValue = "quam";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "molestiae";
                                typeHint = "UUID";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(1103.75),
                                            add(6747.52),
                                        }};
                                        longValues = new Long[]{{
                                            add(317202),
                                            add(138183),
                                            add(778346),
                                        }};
                                        stringValues = new String[]{{
                                            add("tenetur"),
                                        }};
                                    }};
                                    blobValue = "ipsam";
                                    booleanValue = false;
                                    doubleValue = 6625.27;
                                    isNull = false;
                                    longValue = 820994;
                                    stringValue = "aut";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "quasi";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9719.45),
                                        }};
                                        longValues = new Long[]{{
                                            add(878194),
                                            add(468651),
                                            add(509624),
                                            add(976762),
                                        }};
                                        stringValues = new String[]{{
                                            add("omnis"),
                                        }};
                                    }};
                                    blobValue = "voluptate";
                                    booleanValue = false;
                                    doubleValue = 7392.64;
                                    isNull = false;
                                    longValue = 19987;
                                    stringValue = "doloremque";
                                }};
                            }}),
                        }}),
                    }};
                    resourceArn = "reprehenderit";
                    schema = "ut";
                    secretArn = "maiores";
                    sql = "dicta";
                    transactionId = "corporis";
                }};
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }}            

            BatchExecuteStatementResponse res = sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batchExecuteStatement` - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* `beginTransaction` - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* `commitTransaction` - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* `executeSql` - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>
* `executeStatement` - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* `rollbackTransaction` - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
