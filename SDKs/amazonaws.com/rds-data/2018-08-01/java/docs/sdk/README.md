# SDK

## Overview

<p><fullname>Amazon RDS Data Service</fullname> <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora Serverless v1 DB cluster. To run these statements, you work with the Data Service API.</p> <note> <p>The Data Service API isn't supported on Amazon Aurora Serverless v2 DB clusters.</p> </note> <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API</a> in the <i>Amazon Aurora User Guide</i>.</p></p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rds-data/>
### Available Operations

* [batchExecuteStatement](#batchexecutestatement) - <p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>
* [beginTransaction](#begintransaction) - <p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>
* [commitTransaction](#committransaction) - Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.
* [~~executeSql~~](#executesql) - <p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note> :warning: **Deprecated**
* [executeStatement](#executestatement) - <p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>
* [rollbackTransaction](#rollbacktransaction) - Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

## batchExecuteStatement

<p>Runs a batch SQL statement over an array of data.</p> <p>You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set.</p> <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequest;
import org.openapis.openapi.models.operations.BatchExecuteStatementRequestBody;
import org.openapis.openapi.models.operations.BatchExecuteStatementResponse;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqlParameter;
import org.openapis.openapi.models.shared.TypeHintEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchExecuteStatementRequest req = new BatchExecuteStatementRequest(                new BatchExecuteStatementRequestBody("autem", "nam", "eaque") {{
                                database = "pariatur";
                                parameterSets = new org.openapis.openapi.models.shared.SqlParameter[][]{{
                                    add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                                        add(new SqlParameter() {{
                                            name = "Miss Ginger Feeney";
                                            typeHint = TypeHintEnum.DECIMAL;
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
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(3394.04),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(489549L),
                                                        add(54338L),
                                                        add(338985L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("eos"),
                                                    }};
                                                }};
                                                blobValue = "perferendis";
                                                booleanValue = false;
                                                doubleValue = 1709.86;
                                                isNull = false;
                                                longValue = 793698L;
                                                stringValue = "quam";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Eula Hegmann";
                                            typeHint = TypeHintEnum.DATE;
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
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(7836.45),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(500026L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("eaque"),
                                                        add("occaecati"),
                                                        add("rerum"),
                                                    }};
                                                }};
                                                blobValue = "adipisci";
                                                booleanValue = false;
                                                doubleValue = 9923.97;
                                                isNull = false;
                                                longValue = 934214L;
                                                stringValue = "modi";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Omar Leuschke";
                                            typeHint = TypeHintEnum.TIME;
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
                                                        add(5542.42),
                                                        add(3982.21),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(209843L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("qui"),
                                                    }};
                                                }};
                                                blobValue = "ipsum";
                                                booleanValue = false;
                                                doubleValue = 9443.73;
                                                isNull = false;
                                                longValue = 569574L;
                                                stringValue = "cum";
                                            }};
                                        }}),
                                        add(new SqlParameter() {{
                                            name = "Marian Wisozk";
                                            typeHint = TypeHintEnum.UUID;
                                            value = new Field() {{
                                                arrayValue = new ArrayValue() {{
                                                    arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                                        add(new ArrayValue() {{}}),
                                                    }};
                                                    booleanValues = new Boolean[]{{
                                                        add(false),
                                                    }};
                                                    doubleValues = new Double[]{{
                                                        add(4344.17),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(311796L),
                                                        add(881005L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("voluptatibus"),
                                                        add("voluptas"),
                                                        add("natus"),
                                                    }};
                                                }};
                                                blobValue = "eos";
                                                booleanValue = false;
                                                doubleValue = 5424.99;
                                                isNull = false;
                                                longValue = 24678L;
                                                stringValue = "fugiat";
                                            }};
                                        }}),
                                    }}),
                                    add(new org.openapis.openapi.models.shared.SqlParameter[]{{
                                        add(new SqlParameter() {{
                                            name = "Omar Kris";
                                            typeHint = TypeHintEnum.DATE;
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
                                                        add(9903.39),
                                                        add(4694.97),
                                                        add(2168.97),
                                                    }};
                                                    longValues = new Long[]{{
                                                        add(663078L),
                                                        add(906418L),
                                                    }};
                                                    stringValues = new String[]{{
                                                        add("aspernatur"),
                                                        add("perferendis"),
                                                    }};
                                                }};
                                                blobValue = "amet";
                                                booleanValue = false;
                                                doubleValue = 7583.79;
                                                isNull = false;
                                                longValue = 881586L;
                                                stringValue = "ad";
                                            }};
                                        }}),
                                    }}),
                                }};
                                schema = "saepe";
                                transactionId = "suscipit";
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            BatchExecuteStatementResponse res = sdk.sdk.batchExecuteStatement(req);

            if (res.batchExecuteStatementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## beginTransaction

<p>Starts a SQL transaction.</p> <note> <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.</p> <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.</p> <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BeginTransactionRequest;
import org.openapis.openapi.models.operations.BeginTransactionRequestBody;
import org.openapis.openapi.models.operations.BeginTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BeginTransactionRequest req = new BeginTransactionRequest(                new BeginTransactionRequestBody("quaerat", "tempora") {{
                                database = "vel";
                                schema = "quod";
                            }};) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "qui";
                xAmzCredential = "dolorum";
                xAmzDate = "a";
                xAmzSecurityToken = "esse";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "iusto";
            }};            

            BeginTransactionResponse res = sdk.sdk.beginTransaction(req);

            if (res.beginTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commitTransaction

Ends a SQL transaction started with the <code>BeginTransaction</code> operation and commits the changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommitTransactionRequest;
import org.openapis.openapi.models.operations.CommitTransactionRequestBody;
import org.openapis.openapi.models.operations.CommitTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CommitTransactionRequest req = new CommitTransactionRequest(                new CommitTransactionRequestBody("quisquam", "tenetur", "amet");) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "numquam";
                xAmzDate = "enim";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "totam";
            }};            

            CommitTransactionResponse res = sdk.sdk.commitTransaction(req);

            if (res.commitTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~executeSql~~

<p>Runs one or more SQL statements.</p> <note> <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteSqlRequest;
import org.openapis.openapi.models.operations.ExecuteSqlRequestBody;
import org.openapis.openapi.models.operations.ExecuteSqlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExecuteSqlRequest req = new ExecuteSqlRequest(                new ExecuteSqlRequestBody("sit", "expedita", "neque") {{
                                database = "sed";
                                schema = "vel";
                            }};) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            ExecuteSqlResponse res = sdk.sdk.executeSql(req);

            if (res.executeSqlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## executeStatement

<p>Runs a SQL statement against a database.</p> <note> <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter, changes that result from the call are committed automatically.</p> <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExecuteStatementRequest;
import org.openapis.openapi.models.operations.ExecuteStatementRequestBody;
import org.openapis.openapi.models.operations.ExecuteStatementRequestBodyFormatRecordsAsEnum;
import org.openapis.openapi.models.operations.ExecuteStatementRequestBodyResultSetOptions;
import org.openapis.openapi.models.operations.ExecuteStatementResponse;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.DecimalReturnTypeEnum;
import org.openapis.openapi.models.shared.Field;
import org.openapis.openapi.models.shared.LongReturnTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SqlParameter;
import org.openapis.openapi.models.shared.TypeHintEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExecuteStatementRequest req = new ExecuteStatementRequest(                new ExecuteStatementRequestBody("maxime", "pariatur", "soluta") {{
                                continueAfterTimeout = false;
                                database = "dicta";
                                formatRecordsAs = ExecuteStatementRequestBodyFormatRecordsAsEnum.JSON;
                                includeResultMetadata = false;
                                parameters = new org.openapis.openapi.models.shared.SqlParameter[]{{
                                    add(new SqlParameter() {{
                                        name = "Kelly Daniel";
                                        typeHint = TypeHintEnum.TIMESTAMP;
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
                                                    add(1832.8),
                                                    add(2048.65),
                                                    add(1448.47),
                                                    add(1649.59),
                                                }};
                                                longValues = new Long[]{{
                                                    add(124833L),
                                                    add(355613L),
                                                }};
                                                stringValues = new String[]{{
                                                    add("hic"),
                                                    add("voluptatem"),
                                                    add("cumque"),
                                                }};
                                            }};
                                            blobValue = "soluta";
                                            booleanValue = false;
                                            doubleValue = 7486.64;
                                            isNull = false;
                                            longValue = 92596L;
                                            stringValue = "saepe";
                                        }};
                                    }}),
                                    add(new SqlParameter() {{
                                        name = "Carolyn Rohan";
                                        typeHint = TypeHintEnum.DATE;
                                        value = new Field() {{
                                            arrayValue = new ArrayValue() {{
                                                arrayValues = new org.openapis.openapi.models.shared.ArrayValue[]{{
                                                    add(new ArrayValue() {{}}),
                                                }};
                                                booleanValues = new Boolean[]{{
                                                    add(false),
                                                    add(false),
                                                    add(false),
                                                    add(false),
                                                }};
                                                doubleValues = new Double[]{{
                                                    add(2921.47),
                                                }};
                                                longValues = new Long[]{{
                                                    add(240829L),
                                                    add(677263L),
                                                }};
                                                stringValues = new String[]{{
                                                    add("quae"),
                                                }};
                                            }};
                                            blobValue = "aut";
                                            booleanValue = false;
                                            doubleValue = 5556.49;
                                            isNull = false;
                                            longValue = 929530L;
                                            stringValue = "consequatur";
                                        }};
                                    }}),
                                    add(new SqlParameter() {{
                                        name = "Marcos Schaden";
                                        typeHint = TypeHintEnum.TIME;
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
                                                    add(5123.93),
                                                }};
                                                longValues = new Long[]{{
                                                    add(580447L),
                                                    add(977496L),
                                                }};
                                                stringValues = new String[]{{
                                                    add("vero"),
                                                    add("omnis"),
                                                    add("quis"),
                                                    add("ipsum"),
                                                }};
                                            }};
                                            blobValue = "delectus";
                                            booleanValue = false;
                                            doubleValue = 4551.69;
                                            isNull = false;
                                            longValue = 231701L;
                                            stringValue = "vero";
                                        }};
                                    }}),
                                }};
                                resultSetOptions = new ExecuteStatementRequestBodyResultSetOptions() {{
                                    decimalReturnType = DecimalReturnTypeEnum.DOUBLE_OR_LONG;
                                    longReturnType = LongReturnTypeEnum.STRING;
                                }};;
                                schema = "hic";
                                transactionId = "distinctio";
                            }};) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "odio";
                xAmzCredential = "similique";
                xAmzDate = "facilis";
                xAmzSecurityToken = "vero";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "dolore";
            }};            

            ExecuteStatementResponse res = sdk.sdk.executeStatement(req);

            if (res.executeStatementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rollbackTransaction

Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RollbackTransactionRequest;
import org.openapis.openapi.models.operations.RollbackTransactionRequestBody;
import org.openapis.openapi.models.operations.RollbackTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RollbackTransactionRequest req = new RollbackTransactionRequest(                new RollbackTransactionRequestBody("illum", "sequi", "natus");) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatibus";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "porro";
            }};            

            RollbackTransactionResponse res = sdk.sdk.rollbackTransaction(req);

            if (res.rollbackTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
