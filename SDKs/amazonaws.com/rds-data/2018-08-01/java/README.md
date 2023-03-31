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
import org.openapis.openapi.models.operations.BatchExecuteStatementHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest() {{
                headers = new BatchExecuteStatementHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new BatchExecuteStatementRequestBody() {{
                    database = "illum";
                    parameterSets = new org.openapis.openapi.models.shared.SqlParameter[][]{{
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "deserunt";
                                typeHint = "TIMESTAMP";
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
                                            add(567.13),
                                            add(9636.63),
                                            add(2726.56),
                                            add(3834.41),
                                        }};
                                        longValues = new Long[]{{
                                            add(791725),
                                            add(812169),
                                        }};
                                        stringValues = new String[]{{
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                    }};
                                    blobValue = "recusandae";
                                    booleanValue = false;
                                    doubleValue = 8360.79;
                                    isNull = false;
                                    longValue = 71036;
                                    stringValue = "quis";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "veritatis";
                                typeHint = "DATE";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                            add(new ArrayValue() {{}}),
                                        }};
                                        booleanValues = new Boolean[]{{
                                            add(false),
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9571.56),
                                            add(7781.57),
                                            add(1403.5),
                                            add(8700.13),
                                        }};
                                        longValues = new Long[]{{
                                            add(978619),
                                            add(473608),
                                            add(799159),
                                            add(800911),
                                        }};
                                        stringValues = new String[]{{
                                            add("totam"),
                                            add("porro"),
                                        }};
                                    }};
                                    blobValue = "dolorum";
                                    booleanValue = false;
                                    doubleValue = 1182.74;
                                    isNull = false;
                                    longValue = 720633;
                                    stringValue = "officia";
                                }};
                            }}),
                            add(new SqlParameter() {{
                                name = "occaecati";
                                typeHint = "JSON";
                                value = new Field() {{
                                    arrayValue = new ArrayValue() {{
                                        arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
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
                                            add(5218.48),
                                            add(1059.07),
                                            add(4146.62),
                                            add(4736),
                                        }};
                                        longValues = new Long[]{{
                                            add(186332),
                                            add(774234),
                                        }};
                                        stringValues = new String[]{{
                                            add("esse"),
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                    }};
                                    blobValue = "aspernatur";
                                    booleanValue = false;
                                    doubleValue = 187.89;
                                    isNull = false;
                                    longValue = 324141;
                                    stringValue = "natus";
                                }};
                            }}),
                        }}),
                        add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                            add(new SqlParameter() {{
                                name = "iste";
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
                                            add(false),
                                        }};
                                        doubleValues = new Double[]{{
                                            add(9025.99),
                                            add(6818.2),
                                            add(4499.5),
                                            add(3595.08),
                                        }};
                                        longValues = new Long[]{{
                                            add(437032),
                                            add(902349),
                                            add(697631),
                                        }};
                                        stringValues = new String[]{{
                                            add("ipsa"),
                                        }};
                                    }};
                                    blobValue = "reiciendis";
                                    booleanValue = false;
                                    doubleValue = 6667.67;
                                    isNull = false;
                                    longValue = 653140;
                                    stringValue = "laborum";
                                }};
                            }}),
                        }}),
                    }};
                    resourceArn = "dolores";
                    schema = "dolorem";
                    secretArn = "corporis";
                    sql = "explicabo";
                    transactionId = "nobis";
                }};
            }};            

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
## SDK Available Operations

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
