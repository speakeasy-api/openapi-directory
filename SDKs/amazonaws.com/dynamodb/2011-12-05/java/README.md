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
import org.openapis.openapi.models.operations.BatchGetItemQueryParams;
import org.openapis.openapi.models.operations.BatchGetItemXAmzTargetEnum;
import org.openapis.openapi.models.operations.BatchGetItemHeaders;
import org.openapis.openapi.models.operations.BatchGetItemRequest;
import org.openapis.openapi.models.operations.BatchGetItemResponse;
import org.openapis.openapi.models.shared.BatchGetItemInput;
import org.openapis.openapi.models.shared.KeysAndAttributes;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.AttributeValue;

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

            BatchGetItemRequest req = new BatchGetItemRequest() {{
                queryParams = new BatchGetItemQueryParams() {{
                    requestItems = "corrupti";
                }};
                headers = new BatchGetItemHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                    xAmzTarget = "DynamoDB_20111205.BatchGetItem";
                }};
                request = new BatchGetItemInput() {{
                    requestItems = new java.util.HashMap<String, org.openapis.openapi.models.shared.KeysAndAttributes>() {{
                        put("error", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("suscipit"),
                                add("iure"),
                                add("magnam"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "ipsa";
                                        bs = new String[]{{
                                            add("tempora"),
                                            add("suscipit"),
                                            add("molestiae"),
                                            add("minus"),
                                        }};
                                        n = "placeat";
                                        ns = new String[]{{
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                        s = "recusandae";
                                        ss = new String[]{{
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                            add("deserunt"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "perferendis";
                                        bs = new String[]{{
                                            add("repellendus"),
                                            add("sapiente"),
                                        }};
                                        n = "quo";
                                        ns = new String[]{{
                                            add("at"),
                                        }};
                                        s = "at";
                                        ss = new String[]{{
                                            add("molestiae"),
                                            add("quod"),
                                            add("quod"),
                                            add("esse"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "totam";
                                        bs = new String[]{{
                                            add("dolorum"),
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }};
                                        n = "occaecati";
                                        ns = new String[]{{
                                            add("deleniti"),
                                        }};
                                        s = "hic";
                                        ss = new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "modi";
                                        bs = new String[]{{
                                            add("impedit"),
                                        }};
                                        n = "cum";
                                        ns = new String[]{{
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                        s = "aspernatur";
                                        ss = new String[]{{
                                            add("ad"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "natus";
                                        bs = new String[]{{
                                            add("iste"),
                                        }};
                                        n = "dolor";
                                        ns = new String[]{{
                                            add("laboriosam"),
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        s = "fuga";
                                        ss = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "iure";
                                        bs = new String[]{{
                                            add("quidem"),
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                        n = "est";
                                        ns = new String[]{{
                                            add("laborum"),
                                            add("dolores"),
                                            add("dolorem"),
                                        }};
                                        s = "corporis";
                                        ss = new String[]{{
                                            add("nobis"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "enim";
                                        bs = new String[]{{
                                            add("nemo"),
                                            add("minima"),
                                            add("excepturi"),
                                        }};
                                        n = "accusantium";
                                        ns = new String[]{{
                                            add("culpa"),
                                            add("doloribus"),
                                        }};
                                        s = "sapiente";
                                        ss = new String[]{{
                                            add("mollitia"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "dolorem";
                                        bs = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                        n = "occaecati";
                                        ns = new String[]{{
                                            add("commodi"),
                                            add("quam"),
                                        }};
                                        s = "molestiae";
                                        ss = new String[]{{
                                            add("error"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                        put("quia", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("vitae"),
                                add("laborum"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "enim";
                                        bs = new String[]{{
                                            add("quo"),
                                        }};
                                        n = "sequi";
                                        ns = new String[]{{
                                            add("ipsam"),
                                            add("id"),
                                            add("possimus"),
                                            add("aut"),
                                        }};
                                        s = "quasi";
                                        ss = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "reiciendis";
                                        bs = new String[]{{
                                            add("vero"),
                                            add("nihil"),
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                        n = "ipsa";
                                        ns = new String[]{{
                                            add("voluptate"),
                                            add("cum"),
                                            add("perferendis"),
                                        }};
                                        s = "doloremque";
                                        ss = new String[]{{
                                            add("ut"),
                                            add("maiores"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "dicta";
                                        bs = new String[]{{
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                        n = "dicta";
                                        ns = new String[]{{
                                            add("enim"),
                                            add("accusamus"),
                                            add("commodi"),
                                        }};
                                        s = "repudiandae";
                                        ss = new String[]{{
                                            add("ipsum"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "quidem";
                                        bs = new String[]{{
                                            add("excepturi"),
                                            add("pariatur"),
                                            add("modi"),
                                        }};
                                        n = "praesentium";
                                        ns = new String[]{{
                                            add("voluptates"),
                                            add("quasi"),
                                            add("repudiandae"),
                                        }};
                                        s = "sint";
                                        ss = new String[]{{
                                            add("itaque"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "incidunt";
                                        bs = new String[]{{
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                        n = "quibusdam";
                                        ns = new String[]{{
                                            add("deserunt"),
                                        }};
                                        s = "distinctio";
                                        ss = new String[]{{
                                            add("labore"),
                                            add("modi"),
                                            add("qui"),
                                            add("aliquid"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "cupiditate";
                                        bs = new String[]{{
                                            add("perferendis"),
                                            add("magni"),
                                            add("assumenda"),
                                        }};
                                        n = "ipsam";
                                        ns = new String[]{{
                                            add("fugit"),
                                        }};
                                        s = "dolorum";
                                        ss = new String[]{{
                                            add("tempora"),
                                            add("facilis"),
                                            add("tempore"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                    }};
                }};
            }};            

            BatchGetItemResponse res = sdk.batchGetItem(req);

            if (res.batchGetItemOutput.isPresent()) {
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

* `batchGetItem` - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* `batchWriteItem` - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* `createTable` - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* `deleteItem` - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* `deleteTable` - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `describeTable` - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `getItem` - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* `listTables` - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* `putItem` - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* `query` - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* `scan` - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* `updateItem` - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* `updateTable` - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
