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
import org.openapis.openapi.models.operations.BatchGetItemXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetItemRequest req = new BatchGetItemRequest() {{
                batchGetItemInput = new BatchGetItemInput() {{
                    requestItems = new java.util.HashMap<String, org.openapis.openapi.models.shared.KeysAndAttributes>() {{
                        put("provident", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("quibusdam"),
                                add("unde"),
                                add("nulla"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "illum";
                                        bs = new String[]{{
                                            add("error"),
                                            add("deserunt"),
                                        }};
                                        n = "suscipit";
                                        ns = new String[]{{
                                            add("magnam"),
                                            add("debitis"),
                                        }};
                                        s = "ipsa";
                                        ss = new String[]{{
                                            add("tempora"),
                                            add("suscipit"),
                                            add("molestiae"),
                                            add("minus"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "placeat";
                                        bs = new String[]{{
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                        n = "recusandae";
                                        ns = new String[]{{
                                            add("ab"),
                                            add("quis"),
                                            add("veritatis"),
                                            add("deserunt"),
                                        }};
                                        s = "perferendis";
                                        ss = new String[]{{
                                            add("repellendus"),
                                            add("sapiente"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "quo";
                                        bs = new String[]{{
                                            add("at"),
                                        }};
                                        n = "at";
                                        ns = new String[]{{
                                            add("molestiae"),
                                            add("quod"),
                                            add("quod"),
                                            add("esse"),
                                        }};
                                        s = "totam";
                                        ss = new String[]{{
                                            add("dolorum"),
                                            add("dicta"),
                                            add("nam"),
                                            add("officia"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "occaecati";
                                        bs = new String[]{{
                                            add("deleniti"),
                                        }};
                                        n = "hic";
                                        ns = new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }};
                                        s = "modi";
                                        ss = new String[]{{
                                            add("impedit"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "cum";
                                        bs = new String[]{{
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                        n = "aspernatur";
                                        ns = new String[]{{
                                            add("ad"),
                                        }};
                                        s = "natus";
                                        ss = new String[]{{
                                            add("iste"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "dolor";
                                        bs = new String[]{{
                                            add("laboriosam"),
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        n = "fuga";
                                        ns = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                        s = "iure";
                                        ss = new String[]{{
                                            add("quidem"),
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                        put("est", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("laborum"),
                                add("dolores"),
                                add("dolorem"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "explicabo";
                                        bs = new String[]{{
                                            add("enim"),
                                            add("omnis"),
                                            add("nemo"),
                                            add("minima"),
                                        }};
                                        n = "excepturi";
                                        ns = new String[]{{
                                            add("iure"),
                                        }};
                                        s = "culpa";
                                        ss = new String[]{{
                                            add("sapiente"),
                                            add("architecto"),
                                            add("mollitia"),
                                            add("dolorem"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "culpa";
                                        bs = new String[]{{
                                            add("repellat"),
                                        }};
                                        n = "mollitia";
                                        ns = new String[]{{
                                            add("numquam"),
                                            add("commodi"),
                                            add("quam"),
                                        }};
                                        s = "molestiae";
                                        ss = new String[]{{
                                            add("error"),
                                        }};
                                    }};
                                }}),
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "quia";
                                        bs = new String[]{{
                                            add("vitae"),
                                            add("laborum"),
                                        }};
                                        n = "animi";
                                        ns = new String[]{{
                                            add("odit"),
                                            add("quo"),
                                        }};
                                        s = "sequi";
                                        ss = new String[]{{
                                            add("ipsam"),
                                            add("id"),
                                            add("possimus"),
                                            add("aut"),
                                        }};
                                    }};
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "quasi";
                                        bs = new String[]{{
                                            add("temporibus"),
                                            add("laborum"),
                                            add("quasi"),
                                        }};
                                        n = "reiciendis";
                                        ns = new String[]{{
                                            add("vero"),
                                            add("nihil"),
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                        s = "ipsa";
                                        ss = new String[]{{
                                            add("voluptate"),
                                            add("cum"),
                                            add("perferendis"),
                                        }};
                                    }};
                                }}),
                            }};
                        }});
                        put("doloremque", new KeysAndAttributes() {{
                            attributesToGet = new String[]{{
                                add("ut"),
                                add("maiores"),
                            }};
                            consistentRead = false;
                            keys = new org.openapis.openapi.models.shared.Key[]{{
                                add(new Key() {{
                                    hashKeyElement = new AttributeValue() {{
                                        b = "corporis";
                                        bs = new String[]{{
                                            add("iusto"),
                                            add("dicta"),
                                        }};
                                        n = "harum";
                                        ns = new String[]{{
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
                            }};
                        }});
                    }};
                }};
                requestItems = "incidunt";
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
                xAmzTarget = "DynamoDB_20111205.BatchGetItem";
            }}            

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
## Available Resources and Operations

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
