# SDK

## Overview

<p>Amazon DynamoDB is a fast, highly scalable, highly available, cost-effective non-relational database service.</p> <p>Amazon DynamoDB removes traditional scalability limitations on data storage while maintaining low latency and predictable performance.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dynamodb/>
### Available Operations

* [batchGetItem](#batchgetitem) - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* [batchWriteItem](#batchwriteitem) - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* [createTable](#createtable) - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* [deleteItem](#deleteitem) - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* [deleteTable](#deletetable) - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [describeTable](#describetable) - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [getItem](#getitem) - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* [listTables](#listtables) - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* [putItem](#putitem) - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* [query](#query) - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* [scan](#scan) - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* [updateItem](#updateitem) - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* [updateTable](#updatetable) - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

## batchGetItem

<p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetItemRequest;
import org.openapis.openapi.models.operations.BatchGetItemResponse;
import org.openapis.openapi.models.operations.BatchGetItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.BatchGetItemInput;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.KeysAndAttributes;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetItemRequest req = new BatchGetItemRequest(                new BatchGetItemInput(                new java.util.HashMap<String, org.openapis.openapi.models.shared.KeysAndAttributes>() {{
                                                put("distinctio", new KeysAndAttributes(                new org.openapis.openapi.models.shared.Key[]{{
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "ipsam";
                                                                                        bs = new String[]{{
                                                                                            add("sequi"),
                                                                                        }};
                                                                                        n = "quo";
                                                                                        ns = new String[]{{
                                                                                            add("recusandae"),
                                                                                            add("aperiam"),
                                                                                        }};
                                                                                        s = "distinctio";
                                                                                        ss = new String[]{{
                                                                                            add("dignissimos"),
                                                                                            add("inventore"),
                                                                                            add("nihil"),
                                                                                            add("totam"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "esse";
                                                                            bs = new String[]{{
                                                                                add("rem"),
                                                                                add("fuga"),
                                                                            }};
                                                                            n = "reprehenderit";
                                                                            ns = new String[]{{
                                                                                add("fugiat"),
                                                                                add("ut"),
                                                                                add("eum"),
                                                                            }};
                                                                            s = "suscipit";
                                                                            ss = new String[]{{
                                                                                add("eos"),
                                                                                add("praesentium"),
                                                                                add("quisquam"),
                                                                                add("veritatis"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "ipsa";
                                                                            bs = new String[]{{
                                                                                add("quidem"),
                                                                                add("neque"),
                                                                                add("quo"),
                                                                            }};
                                                                            n = "illum";
                                                                            ns = new String[]{{
                                                                                add("fuga"),
                                                                                add("eius"),
                                                                                add("eos"),
                                                                                add("voluptas"),
                                                                            }};
                                                                            s = "ab";
                                                                            ss = new String[]{{
                                                                                add("consequatur"),
                                                                                add("tempora"),
                                                                                add("debitis"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "occaecati";
                                                                                        bs = new String[]{{
                                                                                            add("et"),
                                                                                            add("esse"),
                                                                                            add("eveniet"),
                                                                                        }};
                                                                                        n = "accusamus";
                                                                                        ns = new String[]{{
                                                                                            add("esse"),
                                                                                        }};
                                                                                        s = "quod";
                                                                                        ss = new String[]{{
                                                                                            add("vero"),
                                                                                            add("aliquid"),
                                                                                            add("quasi"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "accusamus";
                                                                            bs = new String[]{{
                                                                                add("odio"),
                                                                                add("occaecati"),
                                                                            }};
                                                                            n = "commodi";
                                                                            ns = new String[]{{
                                                                                add("dolores"),
                                                                                add("deserunt"),
                                                                                add("molestiae"),
                                                                                add("accusantium"),
                                                                            }};
                                                                            s = "porro";
                                                                            ss = new String[]{{
                                                                                add("quas"),
                                                                                add("praesentium"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "consequuntur";
                                                                            bs = new String[]{{
                                                                                add("fugit"),
                                                                                add("fuga"),
                                                                                add("mollitia"),
                                                                            }};
                                                                            n = "incidunt";
                                                                            ns = new String[]{{
                                                                                add("explicabo"),
                                                                                add("minima"),
                                                                                add("nisi"),
                                                                            }};
                                                                            s = "fugit";
                                                                            ss = new String[]{{
                                                                                add("consequuntur"),
                                                                                add("ratione"),
                                                                                add("explicabo"),
                                                                                add("saepe"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    attributesToGet = new String[]{{
                                                        add("odio"),
                                                        add("similique"),
                                                        add("facilis"),
                                                        add("vero"),
                                                    }};
                                                    consistentRead = false;
                                                    keys = new org.openapis.openapi.models.shared.Key[]{{
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "dolor";
                                                                            bs = new String[]{{
                                                                                add("quasi"),
                                                                                add("ex"),
                                                                                add("nulla"),
                                                                                add("excepturi"),
                                                                            }};
                                                                            n = "voluptatibus";
                                                                            ns = new String[]{{
                                                                                add("sapiente"),
                                                                                add("quisquam"),
                                                                            }};
                                                                            s = "saepe";
                                                                            ss = new String[]{{
                                                                                add("impedit"),
                                                                                add("corporis"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "dolore";
                                                                bs = new String[]{{
                                                                    add("illum"),
                                                                    add("sequi"),
                                                                    add("natus"),
                                                                    add("impedit"),
                                                                }};
                                                                n = "aut";
                                                                ns = new String[]{{
                                                                    add("exercitationem"),
                                                                    add("nulla"),
                                                                    add("fugit"),
                                                                    add("porro"),
                                                                }};
                                                                s = "maiores";
                                                                ss = new String[]{{
                                                                    add("iusto"),
                                                                    add("eligendi"),
                                                                    add("ducimus"),
                                                                    add("alias"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "officia";
                                                                bs = new String[]{{
                                                                    add("ipsam"),
                                                                    add("ea"),
                                                                }};
                                                                n = "aspernatur";
                                                                ns = new String[]{{
                                                                    add("possimus"),
                                                                    add("magnam"),
                                                                }};
                                                                s = "ratione";
                                                                ss = new String[]{{
                                                                    add("laudantium"),
                                                                    add("dicta"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "quas";
                                                                            bs = new String[]{{
                                                                                add("nulla"),
                                                                                add("voluptas"),
                                                                                add("libero"),
                                                                                add("quasi"),
                                                                            }};
                                                                            n = "tempora";
                                                                            ns = new String[]{{
                                                                                add("explicabo"),
                                                                                add("provident"),
                                                                            }};
                                                                            s = "ipsa";
                                                                            ss = new String[]{{
                                                                                add("magnam"),
                                                                                add("odio"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "veniam";
                                                                bs = new String[]{{
                                                                    add("inventore"),
                                                                    add("magnam"),
                                                                }};
                                                                n = "ea";
                                                                ns = new String[]{{
                                                                    add("consectetur"),
                                                                    add("recusandae"),
                                                                    add("aspernatur"),
                                                                    add("minima"),
                                                                }};
                                                                s = "eaque";
                                                                ss = new String[]{{
                                                                    add("libero"),
                                                                    add("aut"),
                                                                    add("aut"),
                                                                    add("deleniti"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "impedit";
                                                                bs = new String[]{{
                                                                    add("fugit"),
                                                                    add("accusamus"),
                                                                }};
                                                                n = "inventore";
                                                                ns = new String[]{{
                                                                    add("et"),
                                                                    add("dolorum"),
                                                                }};
                                                                s = "laborum";
                                                                ss = new String[]{{
                                                                    add("velit"),
                                                                    add("eum"),
                                                                    add("autem"),
                                                                    add("nobis"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }});
                                                put("saepe", new KeysAndAttributes(                new org.openapis.openapi.models.shared.Key[]{{
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "reiciendis";
                                                                                        bs = new String[]{{
                                                                                            add("saepe"),
                                                                                            add("necessitatibus"),
                                                                                            add("dolore"),
                                                                                        }};
                                                                                        n = "sunt";
                                                                                        ns = new String[]{{
                                                                                            add("adipisci"),
                                                                                            add("non"),
                                                                                            add("amet"),
                                                                                            add("beatae"),
                                                                                        }};
                                                                                        s = "dignissimos";
                                                                                        ss = new String[]{{
                                                                                            add("debitis"),
                                                                                            add("consectetur"),
                                                                                            add("corporis"),
                                                                                            add("harum"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "recusandae";
                                                                            bs = new String[]{{
                                                                                add("fugiat"),
                                                                                add("vel"),
                                                                                add("ducimus"),
                                                                            }};
                                                                            n = "quos";
                                                                            ns = new String[]{{
                                                                                add("labore"),
                                                                                add("possimus"),
                                                                            }};
                                                                            s = "facilis";
                                                                            ss = new String[]{{
                                                                                add("commodi"),
                                                                                add("in"),
                                                                                add("corporis"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "reiciendis";
                                                                            bs = new String[]{{
                                                                                add("nemo"),
                                                                                add("recusandae"),
                                                                                add("aliquid"),
                                                                                add("aperiam"),
                                                                            }};
                                                                            n = "cum";
                                                                            ns = new String[]{{
                                                                                add("in"),
                                                                            }};
                                                                            s = "exercitationem";
                                                                            ss = new String[]{{
                                                                                add("facere"),
                                                                                add("numquam"),
                                                                                add("doloribus"),
                                                                                add("suscipit"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "officiis";
                                                                                        bs = new String[]{{
                                                                                            add("ullam"),
                                                                                            add("adipisci"),
                                                                                            add("cum"),
                                                                                            add("blanditiis"),
                                                                                        }};
                                                                                        n = "quas";
                                                                                        ns = new String[]{{
                                                                                            add("nesciunt"),
                                                                                            add("culpa"),
                                                                                            add("corrupti"),
                                                                                            add("pariatur"),
                                                                                        }};
                                                                                        s = "totam";
                                                                                        ss = new String[]{{
                                                                                            add("exercitationem"),
                                                                                            add("nobis"),
                                                                                            add("sit"),
                                                                                            add("rerum"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "laboriosam";
                                                                            bs = new String[]{{
                                                                                add("voluptates"),
                                                                            }};
                                                                            n = "libero";
                                                                            ns = new String[]{{
                                                                                add("accusamus"),
                                                                            }};
                                                                            s = "similique";
                                                                            ss = new String[]{{
                                                                                add("aspernatur"),
                                                                                add("voluptas"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "voluptas";
                                                                            bs = new String[]{{
                                                                                add("minima"),
                                                                                add("nobis"),
                                                                            }};
                                                                            n = "dolorum";
                                                                            ns = new String[]{{
                                                                                add("minus"),
                                                                            }};
                                                                            s = "dolores";
                                                                            ss = new String[]{{
                                                                                add("in"),
                                                                                add("dolore"),
                                                                                add("aliquam"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "maiores";
                                                                                        bs = new String[]{{
                                                                                            add("sed"),
                                                                                            add("provident"),
                                                                                        }};
                                                                                        n = "eius";
                                                                                        ns = new String[]{{
                                                                                            add("ipsum"),
                                                                                            add("ea"),
                                                                                            add("occaecati"),
                                                                                            add("quos"),
                                                                                        }};
                                                                                        s = "voluptatibus";
                                                                                        ss = new String[]{{
                                                                                            add("tempora"),
                                                                                            add("voluptate"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "sed";
                                                                            bs = new String[]{{
                                                                                add("explicabo"),
                                                                                add("asperiores"),
                                                                                add("facilis"),
                                                                                add("voluptate"),
                                                                            }};
                                                                            n = "expedita";
                                                                            ns = new String[]{{
                                                                                add("iste"),
                                                                            }};
                                                                            s = "dolore";
                                                                            ss = new String[]{{
                                                                                add("sed"),
                                                                                add("in"),
                                                                                add("commodi"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "quidem";
                                                                            bs = new String[]{{
                                                                                add("voluptas"),
                                                                            }};
                                                                            n = "unde";
                                                                            ns = new String[]{{
                                                                                add("suscipit"),
                                                                            }};
                                                                            s = "sapiente";
                                                                            ss = new String[]{{
                                                                                add("illo"),
                                                                                add("reiciendis"),
                                                                                add("perferendis"),
                                                                                add("corrupti"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    attributesToGet = new String[]{{
                                                        add("harum"),
                                                        add("molestiae"),
                                                    }};
                                                    consistentRead = false;
                                                    keys = new org.openapis.openapi.models.shared.Key[]{{
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "eveniet";
                                                                            bs = new String[]{{
                                                                                add("facere"),
                                                                                add("veritatis"),
                                                                                add("consequuntur"),
                                                                                add("quasi"),
                                                                            }};
                                                                            n = "similique";
                                                                            ns = new String[]{{
                                                                                add("aliquid"),
                                                                                add("tenetur"),
                                                                                add("quae"),
                                                                            }};
                                                                            s = "earum";
                                                                            ss = new String[]{{
                                                                                add("in"),
                                                                                add("eius"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "occaecati";
                                                                bs = new String[]{{
                                                                    add("distinctio"),
                                                                    add("eligendi"),
                                                                }};
                                                                n = "sit";
                                                                ns = new String[]{{
                                                                    add("tempore"),
                                                                    add("adipisci"),
                                                                    add("cumque"),
                                                                }};
                                                                s = "consequuntur";
                                                                ss = new String[]{{
                                                                    add("minus"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "quaerat";
                                                                bs = new String[]{{
                                                                    add("consectetur"),
                                                                    add("esse"),
                                                                    add("blanditiis"),
                                                                    add("provident"),
                                                                }};
                                                                n = "a";
                                                                ns = new String[]{{
                                                                    add("quas"),
                                                                    add("esse"),
                                                                    add("quasi"),
                                                                    add("a"),
                                                                }};
                                                                s = "error";
                                                                ss = new String[]{{
                                                                    add("pariatur"),
                                                                    add("possimus"),
                                                                    add("quia"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "veritatis";
                                                                            bs = new String[]{{
                                                                                add("adipisci"),
                                                                            }};
                                                                            n = "iste";
                                                                            ns = new String[]{{
                                                                                add("accusantium"),
                                                                                add("rem"),
                                                                                add("aut"),
                                                                                add("laudantium"),
                                                                            }};
                                                                            s = "eum";
                                                                            ss = new String[]{{
                                                                                add("ab"),
                                                                                add("corrupti"),
                                                                                add("non"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "libero";
                                                                bs = new String[]{{
                                                                    add("soluta"),
                                                                    add("accusantium"),
                                                                    add("aliquam"),
                                                                    add("sapiente"),
                                                                }};
                                                                n = "dicta";
                                                                ns = new String[]{{
                                                                    add("reprehenderit"),
                                                                    add("ullam"),
                                                                }};
                                                                s = "nisi";
                                                                ss = new String[]{{
                                                                    add("voluptatum"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "qui";
                                                                bs = new String[]{{
                                                                    add("ex"),
                                                                    add("deleniti"),
                                                                    add("itaque"),
                                                                    add("dolorum"),
                                                                }};
                                                                n = "architecto";
                                                                ns = new String[]{{
                                                                    add("tenetur"),
                                                                    add("quasi"),
                                                                    add("at"),
                                                                }};
                                                                s = "et";
                                                                ss = new String[]{{
                                                                    add("ipsa"),
                                                                    add("minima"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "quae";
                                                                            bs = new String[]{{
                                                                                add("porro"),
                                                                                add("quod"),
                                                                            }};
                                                                            n = "labore";
                                                                            ns = new String[]{{
                                                                                add("adipisci"),
                                                                            }};
                                                                            s = "fuga";
                                                                            ss = new String[]{{
                                                                                add("suscipit"),
                                                                                add("velit"),
                                                                                add("culpa"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "voluptatem";
                                                                bs = new String[]{{
                                                                    add("occaecati"),
                                                                }};
                                                                n = "numquam";
                                                                ns = new String[]{{
                                                                    add("explicabo"),
                                                                    add("voluptas"),
                                                                    add("aut"),
                                                                    add("dignissimos"),
                                                                }};
                                                                s = "dicta";
                                                                ss = new String[]{{
                                                                    add("natus"),
                                                                    add("velit"),
                                                                    add("voluptatibus"),
                                                                    add("voluptas"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "asperiores";
                                                                bs = new String[]{{
                                                                    add("ea"),
                                                                }};
                                                                n = "quaerat";
                                                                ns = new String[]{{
                                                                    add("repellendus"),
                                                                }};
                                                                s = "officia";
                                                                ss = new String[]{{
                                                                    add("dignissimos"),
                                                                    add("officia"),
                                                                    add("asperiores"),
                                                                    add("nemo"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }});
                                                put("reiciendis", new KeysAndAttributes(                new org.openapis.openapi.models.shared.Key[]{{
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "ad";
                                                                                        bs = new String[]{{
                                                                                            add("alias"),
                                                                                            add("corporis"),
                                                                                            add("perspiciatis"),
                                                                                            add("nihil"),
                                                                                        }};
                                                                                        n = "mollitia";
                                                                                        ns = new String[]{{
                                                                                            add("alias"),
                                                                                            add("maiores"),
                                                                                        }};
                                                                                        s = "reiciendis";
                                                                                        ss = new String[]{{
                                                                                            add("id"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "quis";
                                                                            bs = new String[]{{
                                                                                add("error"),
                                                                                add("illo"),
                                                                            }};
                                                                            n = "corporis";
                                                                            ns = new String[]{{
                                                                                add("eveniet"),
                                                                                add("non"),
                                                                                add("vero"),
                                                                            }};
                                                                            s = "doloremque";
                                                                            ss = new String[]{{
                                                                                add("ipsa"),
                                                                                add("totam"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "quae";
                                                                            bs = new String[]{{
                                                                                add("eveniet"),
                                                                                add("qui"),
                                                                            }};
                                                                            n = "cum";
                                                                            ns = new String[]{{
                                                                                add("necessitatibus"),
                                                                                add("ratione"),
                                                                            }};
                                                                            s = "laborum";
                                                                            ss = new String[]{{
                                                                                add("voluptatum"),
                                                                                add("rem"),
                                                                                add("aliquam"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "quasi";
                                                                                        bs = new String[]{{
                                                                                            add("nostrum"),
                                                                                            add("mollitia"),
                                                                                            add("provident"),
                                                                                        }};
                                                                                        n = "possimus";
                                                                                        ns = new String[]{{
                                                                                            add("ex"),
                                                                                            add("aliquid"),
                                                                                            add("accusantium"),
                                                                                        }};
                                                                                        s = "repellat";
                                                                                        ss = new String[]{{
                                                                                            add("ullam"),
                                                                                            add("in"),
                                                                                            add("nam"),
                                                                                            add("earum"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "minima";
                                                                            bs = new String[]{{
                                                                                add("dolorum"),
                                                                                add("nesciunt"),
                                                                            }};
                                                                            n = "quae";
                                                                            ns = new String[]{{
                                                                                add("omnis"),
                                                                                add("quaerat"),
                                                                                add("molestiae"),
                                                                                add("ex"),
                                                                            }};
                                                                            s = "ut";
                                                                            ss = new String[]{{
                                                                                add("adipisci"),
                                                                                add("debitis"),
                                                                                add("laudantium"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "eum";
                                                                            bs = new String[]{{
                                                                                add("recusandae"),
                                                                                add("esse"),
                                                                            }};
                                                                            n = "provident";
                                                                            ns = new String[]{{
                                                                                add("eum"),
                                                                                add("reiciendis"),
                                                                            }};
                                                                            s = "provident";
                                                                            ss = new String[]{{
                                                                                add("ullam"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "sapiente";
                                                                                        bs = new String[]{{
                                                                                            add("dicta"),
                                                                                            add("minima"),
                                                                                        }};
                                                                                        n = "beatae";
                                                                                        ns = new String[]{{
                                                                                            add("provident"),
                                                                                            add("earum"),
                                                                                            add("soluta"),
                                                                                        }};
                                                                                        s = "hic";
                                                                                        ss = new String[]{{
                                                                                            add("eaque"),
                                                                                            add("earum"),
                                                                                            add("perspiciatis"),
                                                                                            add("maiores"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "officia";
                                                                            bs = new String[]{{
                                                                                add("placeat"),
                                                                                add("modi"),
                                                                                add("voluptatibus"),
                                                                            }};
                                                                            n = "molestias";
                                                                            ns = new String[]{{
                                                                                add("sapiente"),
                                                                                add("cumque"),
                                                                                add("vitae"),
                                                                                add("rerum"),
                                                                            }};
                                                                            s = "tempora";
                                                                            ss = new String[]{{
                                                                                add("inventore"),
                                                                                add("fugit"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "cumque";
                                                                            bs = new String[]{{
                                                                                add("perferendis"),
                                                                            }};
                                                                            n = "velit";
                                                                            ns = new String[]{{
                                                                                add("eum"),
                                                                            }};
                                                                            s = "eius";
                                                                            ss = new String[]{{
                                                                                add("at"),
                                                                                add("impedit"),
                                                                                add("eos"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    attributesToGet = new String[]{{
                                                        add("sit"),
                                                        add("non"),
                                                    }};
                                                    consistentRead = false;
                                                    keys = new org.openapis.openapi.models.shared.Key[]{{
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "exercitationem";
                                                                            bs = new String[]{{
                                                                                add("cum"),
                                                                                add("laboriosam"),
                                                                                add("dolorum"),
                                                                            }};
                                                                            n = "voluptatum";
                                                                            ns = new String[]{{
                                                                                add("hic"),
                                                                                add("expedita"),
                                                                                add("debitis"),
                                                                            }};
                                                                            s = "neque";
                                                                            ss = new String[]{{
                                                                                add("nostrum"),
                                                                                add("officia"),
                                                                                add("dolorum"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "praesentium";
                                                                bs = new String[]{{
                                                                    add("quaerat"),
                                                                    add("incidunt"),
                                                                    add("ipsam"),
                                                                }};
                                                                n = "debitis";
                                                                ns = new String[]{{
                                                                    add("sit"),
                                                                    add("nobis"),
                                                                    add("error"),
                                                                }};
                                                                s = "veniam";
                                                                ss = new String[]{{
                                                                    add("recusandae"),
                                                                    add("reiciendis"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "nulla";
                                                                bs = new String[]{{
                                                                    add("aperiam"),
                                                                }};
                                                                n = "saepe";
                                                                ns = new String[]{{
                                                                    add("veniam"),
                                                                    add("in"),
                                                                }};
                                                                s = "officiis";
                                                                ss = new String[]{{
                                                                    add("laudantium"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "nostrum";
                                                                            bs = new String[]{{
                                                                                add("error"),
                                                                                add("consequatur"),
                                                                                add("incidunt"),
                                                                                add("reiciendis"),
                                                                            }};
                                                                            n = "dolorem";
                                                                            ns = new String[]{{
                                                                                add("dicta"),
                                                                                add("architecto"),
                                                                                add("occaecati"),
                                                                            }};
                                                                            s = "labore";
                                                                            ss = new String[]{{
                                                                                add("atque"),
                                                                                add("laborum"),
                                                                                add("nam"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "corrupti";
                                                                bs = new String[]{{
                                                                    add("tempora"),
                                                                    add("atque"),
                                                                    add("fugit"),
                                                                    add("ut"),
                                                                }};
                                                                n = "fugiat";
                                                                ns = new String[]{{
                                                                    add("culpa"),
                                                                }};
                                                                s = "expedita";
                                                                ss = new String[]{{
                                                                    add("consequatur"),
                                                                    add("esse"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "ipsam";
                                                                bs = new String[]{{
                                                                    add("voluptatum"),
                                                                }};
                                                                n = "quas";
                                                                ns = new String[]{{
                                                                    add("corporis"),
                                                                    add("et"),
                                                                    add("blanditiis"),
                                                                    add("ex"),
                                                                }};
                                                                s = "sed";
                                                                ss = new String[]{{
                                                                    add("vel"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "reprehenderit";
                                                                            bs = new String[]{{
                                                                                add("totam"),
                                                                                add("suscipit"),
                                                                                add("quidem"),
                                                                                add("maxime"),
                                                                            }};
                                                                            n = "et";
                                                                            ns = new String[]{{
                                                                                add("amet"),
                                                                                add("assumenda"),
                                                                            }};
                                                                            s = "ea";
                                                                            ss = new String[]{{
                                                                                add("error"),
                                                                                add("officiis"),
                                                                                add("officiis"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "tenetur";
                                                                bs = new String[]{{
                                                                    add("alias"),
                                                                    add("amet"),
                                                                }};
                                                                n = "deserunt";
                                                                ns = new String[]{{
                                                                    add("unde"),
                                                                    add("reiciendis"),
                                                                }};
                                                                s = "provident";
                                                                ss = new String[]{{
                                                                    add("delectus"),
                                                                    add("voluptates"),
                                                                    add("perferendis"),
                                                                    add("est"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "quidem";
                                                                bs = new String[]{{
                                                                    add("facere"),
                                                                    add("fuga"),
                                                                }};
                                                                n = "praesentium";
                                                                ns = new String[]{{
                                                                    add("veniam"),
                                                                    add("voluptatem"),
                                                                    add("quisquam"),
                                                                }};
                                                                s = "repudiandae";
                                                                ss = new String[]{{
                                                                    add("atque"),
                                                                }};
                                                            }};
                                                        }}),
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "a";
                                                                            bs = new String[]{{
                                                                                add("magnam"),
                                                                                add("saepe"),
                                                                                add("consequuntur"),
                                                                            }};
                                                                            n = "occaecati";
                                                                            ns = new String[]{{
                                                                                add("perspiciatis"),
                                                                                add("in"),
                                                                                add("adipisci"),
                                                                                add("eveniet"),
                                                                            }};
                                                                            s = "occaecati";
                                                                            ss = new String[]{{
                                                                                add("fugit"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "accusamus";
                                                                bs = new String[]{{
                                                                    add("minima"),
                                                                    add("aspernatur"),
                                                                    add("ex"),
                                                                }};
                                                                n = "maiores";
                                                                ns = new String[]{{
                                                                    add("at"),
                                                                    add("error"),
                                                                    add("blanditiis"),
                                                                }};
                                                                s = "suscipit";
                                                                ss = new String[]{{
                                                                    add("atque"),
                                                                    add("atque"),
                                                                    add("sunt"),
                                                                    add("recusandae"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "dolorum";
                                                                bs = new String[]{{
                                                                    add("labore"),
                                                                    add("reiciendis"),
                                                                    add("doloremque"),
                                                                    add("repudiandae"),
                                                                }};
                                                                n = "dicta";
                                                                ns = new String[]{{
                                                                    add("beatae"),
                                                                }};
                                                                s = "dolores";
                                                                ss = new String[]{{
                                                                    add("laboriosam"),
                                                                    add("velit"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }});
                                                put("debitis", new KeysAndAttributes(                new org.openapis.openapi.models.shared.Key[]{{
                                                                    add(new Key(                new AttributeValue() {{
                                                                                        b = "ex";
                                                                                        bs = new String[]{{
                                                                                            add("ex"),
                                                                                            add("ut"),
                                                                                            add("ad"),
                                                                                            add("expedita"),
                                                                                        }};
                                                                                        n = "voluptatem";
                                                                                        ns = new String[]{{
                                                                                            add("cum"),
                                                                                            add("aliquid"),
                                                                                            add("beatae"),
                                                                                        }};
                                                                                        s = "voluptatum";
                                                                                        ss = new String[]{{
                                                                                            add("veritatis"),
                                                                                            add("rerum"),
                                                                                            add("est"),
                                                                                        }};
                                                                                    }};) {{
                                                                        hashKeyElement = new AttributeValue() {{
                                                                            b = "laborum";
                                                                            bs = new String[]{{
                                                                                add("nostrum"),
                                                                            }};
                                                                            n = "fugiat";
                                                                            ns = new String[]{{
                                                                                add("aliquid"),
                                                                                add("officia"),
                                                                                add("suscipit"),
                                                                            }};
                                                                            s = "aliquid";
                                                                            ss = new String[]{{
                                                                                add("eum"),
                                                                            }};
                                                                        }};
                                                                        rangeKeyElement = new AttributeValue() {{
                                                                            b = "voluptas";
                                                                            bs = new String[]{{
                                                                                add("id"),
                                                                                add("ab"),
                                                                                add("error"),
                                                                            }};
                                                                            n = "possimus";
                                                                            ns = new String[]{{
                                                                                add("mollitia"),
                                                                                add("laborum"),
                                                                                add("libero"),
                                                                                add("ad"),
                                                                            }};
                                                                            s = "deleniti";
                                                                            ss = new String[]{{
                                                                                add("vitae"),
                                                                                add("repellendus"),
                                                                            }};
                                                                        }};
                                                                    }}),
                                                                }}) {{
                                                    attributesToGet = new String[]{{
                                                        add("porro"),
                                                        add("suscipit"),
                                                    }};
                                                    consistentRead = false;
                                                    keys = new org.openapis.openapi.models.shared.Key[]{{
                                                        add(new Key(                new AttributeValue() {{
                                                                            b = "esse";
                                                                            bs = new String[]{{
                                                                                add("maiores"),
                                                                                add("reiciendis"),
                                                                                add("vel"),
                                                                            }};
                                                                            n = "architecto";
                                                                            ns = new String[]{{
                                                                                add("doloremque"),
                                                                                add("dicta"),
                                                                                add("odio"),
                                                                                add("tempora"),
                                                                            }};
                                                                            s = "esse";
                                                                            ss = new String[]{{
                                                                                add("consectetur"),
                                                                                add("aliquid"),
                                                                            }};
                                                                        }};) {{
                                                            hashKeyElement = new AttributeValue() {{
                                                                b = "fugit";
                                                                bs = new String[]{{
                                                                    add("fuga"),
                                                                    add("ratione"),
                                                                    add("animi"),
                                                                    add("necessitatibus"),
                                                                }};
                                                                n = "nulla";
                                                                ns = new String[]{{
                                                                    add("quasi"),
                                                                }};
                                                                s = "et";
                                                                ss = new String[]{{
                                                                    add("natus"),
                                                                    add("occaecati"),
                                                                }};
                                                            }};
                                                            rangeKeyElement = new AttributeValue() {{
                                                                b = "suscipit";
                                                                bs = new String[]{{
                                                                    add("quasi"),
                                                                }};
                                                                n = "magni";
                                                                ns = new String[]{{
                                                                    add("nulla"),
                                                                    add("necessitatibus"),
                                                                    add("ipsa"),
                                                                    add("tempora"),
                                                                }};
                                                                s = "nihil";
                                                                ss = new String[]{{
                                                                    add("dicta"),
                                                                    add("iusto"),
                                                                }};
                                                            }};
                                                        }}),
                                                    }};
                                                }});
                                            }});, BatchGetItemXAmzTargetEnum.DYNAMO_DB20111205_BATCH_GET_ITEM) {{
                requestItems = "culpa";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "officiis";
                xAmzDate = "architecto";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "debitis";
            }};            

            BatchGetItemResponse res = sdk.sdk.batchGetItem(req);

            if (res.batchGetItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchWriteItem

<p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchWriteItemRequest;
import org.openapis.openapi.models.operations.BatchWriteItemResponse;
import org.openapis.openapi.models.operations.BatchWriteItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.BatchWriteItemInput;
import org.openapis.openapi.models.shared.DeleteRequest;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PutRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WriteRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchWriteItemRequest req = new BatchWriteItemRequest(                new BatchWriteItemInput(                new java.util.HashMap<String, org.openapis.openapi.models.shared.WriteRequest[]>() {{
                                                put("deleniti", new org.openapis.openapi.models.shared.WriteRequest[]{{
                                                    add(new WriteRequest() {{
                                                        deleteRequest = new DeleteRequest(                new Key(                new AttributeValue() {{
                                                                                            b = "quas";
                                                                                            bs = new String[]{{
                                                                                                add("impedit"),
                                                                                                add("officiis"),
                                                                                                add("esse"),
                                                                                                add("necessitatibus"),
                                                                                            }};
                                                                                            n = "sed";
                                                                                            ns = new String[]{{
                                                                                                add("nesciunt"),
                                                                                                add("expedita"),
                                                                                            }};
                                                                                            s = "eum";
                                                                                            ss = new String[]{{
                                                                                                add("voluptatum"),
                                                                                                add("magnam"),
                                                                                            }};
                                                                                        }};) {{
                                                                            rangeKeyElement = new AttributeValue() {{
                                                                                b = "exercitationem";
                                                                                bs = new String[]{{
                                                                                    add("porro"),
                                                                                }};
                                                                                n = "autem";
                                                                                ns = new String[]{{
                                                                                    add("laboriosam"),
                                                                                    add("recusandae"),
                                                                                    add("consequuntur"),
                                                                                    add("voluptatem"),
                                                                                }};
                                                                                s = "exercitationem";
                                                                                ss = new String[]{{
                                                                                    add("quasi"),
                                                                                    add("nisi"),
                                                                                    add("at"),
                                                                                    add("vero"),
                                                                                }};
                                                                            }};;
                                                                        }};) {{
                                                            key = new Key(                new AttributeValue() {{
                                                                                b = "fugit";
                                                                                bs = new String[]{{
                                                                                    add("laudantium"),
                                                                                }};
                                                                                n = "quae";
                                                                                ns = new String[]{{
                                                                                    add("fugiat"),
                                                                                }};
                                                                                s = "ipsam";
                                                                                ss = new String[]{{
                                                                                    add("ipsa"),
                                                                                }};
                                                                            }};) {{
                                                                hashKeyElement = new AttributeValue() {{
                                                                    b = "ex";
                                                                    bs = new String[]{{
                                                                        add("rem"),
                                                                        add("minus"),
                                                                        add("nemo"),
                                                                        add("asperiores"),
                                                                    }};
                                                                    n = "ratione";
                                                                    ns = new String[]{{
                                                                        add("perferendis"),
                                                                        add("illum"),
                                                                    }};
                                                                    s = "totam";
                                                                    ss = new String[]{{
                                                                        add("quibusdam"),
                                                                        add("nam"),
                                                                        add("ipsam"),
                                                                        add("culpa"),
                                                                    }};
                                                                }};
                                                                rangeKeyElement = new AttributeValue() {{
                                                                    b = "dolor";
                                                                    bs = new String[]{{
                                                                        add("inventore"),
                                                                        add("deleniti"),
                                                                    }};
                                                                    n = "veritatis";
                                                                    ns = new String[]{{
                                                                        add("dolor"),
                                                                        add("consequatur"),
                                                                    }};
                                                                    s = "architecto";
                                                                    ss = new String[]{{
                                                                        add("modi"),
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                        putRequest = new PutRequest(                new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                            put("maxime", new AttributeValue() {{
                                                                                b = "magnam";
                                                                                bs = new String[]{{
                                                                                    add("quos"),
                                                                                    add("commodi"),
                                                                                    add("itaque"),
                                                                                    add("commodi"),
                                                                                }};
                                                                                n = "totam";
                                                                                ns = new String[]{{
                                                                                    add("modi"),
                                                                                    add("nam"),
                                                                                    add("vero"),
                                                                                    add("voluptatem"),
                                                                                }};
                                                                                s = "ipsam";
                                                                                ss = new String[]{{
                                                                                    add("alias"),
                                                                                    add("quasi"),
                                                                                }};
                                                                            }});
                                                                            put("non", new AttributeValue() {{
                                                                                b = "maiores";
                                                                                bs = new String[]{{
                                                                                    add("sint"),
                                                                                    add("nulla"),
                                                                                }};
                                                                                n = "deserunt";
                                                                                ns = new String[]{{
                                                                                    add("nemo"),
                                                                                    add("reprehenderit"),
                                                                                }};
                                                                                s = "est";
                                                                                ss = new String[]{{
                                                                                    add("sint"),
                                                                                    add("accusamus"),
                                                                                }};
                                                                            }});
                                                                            put("impedit", new AttributeValue() {{
                                                                                b = "hic";
                                                                                bs = new String[]{{
                                                                                    add("asperiores"),
                                                                                    add("ex"),
                                                                                    add("voluptas"),
                                                                                    add("debitis"),
                                                                                }};
                                                                                n = "delectus";
                                                                                ns = new String[]{{
                                                                                    add("minus"),
                                                                                }};
                                                                                s = "fuga";
                                                                                ss = new String[]{{
                                                                                    add("consectetur"),
                                                                                    add("velit"),
                                                                                    add("atque"),
                                                                                }};
                                                                            }});
                                                                        }}) {{
                                                            item = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                put("harum", new AttributeValue() {{
                                                                    b = "sequi";
                                                                    bs = new String[]{{
                                                                        add("repudiandae"),
                                                                        add("optio"),
                                                                        add("occaecati"),
                                                                        add("nemo"),
                                                                    }};
                                                                    n = "voluptate";
                                                                    ns = new String[]{{
                                                                        add("officia"),
                                                                        add("voluptas"),
                                                                        add("numquam"),
                                                                    }};
                                                                    s = "nemo";
                                                                    ss = new String[]{{
                                                                        add("eius"),
                                                                        add("aspernatur"),
                                                                        add("ducimus"),
                                                                    }};
                                                                }});
                                                                put("nesciunt", new AttributeValue() {{
                                                                    b = "fuga";
                                                                    bs = new String[]{{
                                                                        add("incidunt"),
                                                                        add("quasi"),
                                                                        add("rem"),
                                                                    }};
                                                                    n = "fugiat";
                                                                    ns = new String[]{{
                                                                        add("nisi"),
                                                                    }};
                                                                    s = "consequuntur";
                                                                    ss = new String[]{{
                                                                        add("aperiam"),
                                                                    }};
                                                                }});
                                                                put("cupiditate", new AttributeValue() {{
                                                                    b = "reiciendis";
                                                                    bs = new String[]{{
                                                                        add("alias"),
                                                                        add("omnis"),
                                                                        add("eos"),
                                                                    }};
                                                                    n = "occaecati";
                                                                    ns = new String[]{{
                                                                        add("magni"),
                                                                        add("inventore"),
                                                                        add("fuga"),
                                                                    }};
                                                                    s = "accusamus";
                                                                    ss = new String[]{{
                                                                        add("distinctio"),
                                                                        add("omnis"),
                                                                        add("delectus"),
                                                                        add("minima"),
                                                                    }};
                                                                }});
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new WriteRequest() {{
                                                        deleteRequest = new DeleteRequest(                new Key(                new AttributeValue() {{
                                                                                            b = "perspiciatis";
                                                                                            bs = new String[]{{
                                                                                                add("dicta"),
                                                                                                add("impedit"),
                                                                                                add("voluptatibus"),
                                                                                                add("iste"),
                                                                                            }};
                                                                                            n = "itaque";
                                                                                            ns = new String[]{{
                                                                                                add("nisi"),
                                                                                            }};
                                                                                            s = "itaque";
                                                                                            ss = new String[]{{
                                                                                                add("laborum"),
                                                                                            }};
                                                                                        }};) {{
                                                                            rangeKeyElement = new AttributeValue() {{
                                                                                b = "non";
                                                                                bs = new String[]{{
                                                                                    add("iusto"),
                                                                                }};
                                                                                n = "sit";
                                                                                ns = new String[]{{
                                                                                    add("consequatur"),
                                                                                }};
                                                                                s = "officia";
                                                                                ss = new String[]{{
                                                                                    add("ea"),
                                                                                    add("quidem"),
                                                                                    add("voluptas"),
                                                                                    add("facilis"),
                                                                                }};
                                                                            }};;
                                                                        }};) {{
                                                            key = new Key(                new AttributeValue() {{
                                                                                b = "aliquam";
                                                                                bs = new String[]{{
                                                                                    add("illo"),
                                                                                }};
                                                                                n = "accusantium";
                                                                                ns = new String[]{{
                                                                                    add("ea"),
                                                                                    add("beatae"),
                                                                                }};
                                                                                s = "vero";
                                                                                ss = new String[]{{
                                                                                    add("eum"),
                                                                                    add("velit"),
                                                                                    add("ut"),
                                                                                }};
                                                                            }};) {{
                                                                hashKeyElement = new AttributeValue() {{
                                                                    b = "ipsum";
                                                                    bs = new String[]{{
                                                                        add("magni"),
                                                                        add("soluta"),
                                                                        add("repudiandae"),
                                                                        add("nam"),
                                                                    }};
                                                                    n = "dolore";
                                                                    ns = new String[]{{
                                                                        add("voluptate"),
                                                                        add("sequi"),
                                                                    }};
                                                                    s = "dignissimos";
                                                                    ss = new String[]{{
                                                                        add("quo"),
                                                                    }};
                                                                }};
                                                                rangeKeyElement = new AttributeValue() {{
                                                                    b = "deleniti";
                                                                    bs = new String[]{{
                                                                        add("iure"),
                                                                        add("odit"),
                                                                        add("voluptatibus"),
                                                                        add("vel"),
                                                                    }};
                                                                    n = "magnam";
                                                                    ns = new String[]{{
                                                                        add("inventore"),
                                                                        add("facere"),
                                                                        add("libero"),
                                                                        add("architecto"),
                                                                    }};
                                                                    s = "voluptatibus";
                                                                    ss = new String[]{{
                                                                        add("porro"),
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                        putRequest = new PutRequest(                new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                            put("fugiat", new AttributeValue() {{
                                                                                b = "officia";
                                                                                bs = new String[]{{
                                                                                    add("placeat"),
                                                                                    add("sit"),
                                                                                    add("iusto"),
                                                                                }};
                                                                                n = "ipsa";
                                                                                ns = new String[]{{
                                                                                    add("inventore"),
                                                                                    add("aperiam"),
                                                                                    add("totam"),
                                                                                    add("dolore"),
                                                                                }};
                                                                                s = "eligendi";
                                                                                ss = new String[]{{
                                                                                    add("voluptatem"),
                                                                                    add("autem"),
                                                                                    add("esse"),
                                                                                }};
                                                                            }});
                                                                            put("dolores", new AttributeValue() {{
                                                                                b = "assumenda";
                                                                                bs = new String[]{{
                                                                                    add("est"),
                                                                                }};
                                                                                n = "facere";
                                                                                ns = new String[]{{
                                                                                    add("molestiae"),
                                                                                    add("provident"),
                                                                                    add("accusamus"),
                                                                                }};
                                                                                s = "necessitatibus";
                                                                                ss = new String[]{{
                                                                                    add("sint"),
                                                                                    add("ea"),
                                                                                    add("autem"),
                                                                                }};
                                                                            }});
                                                                            put("ipsam", new AttributeValue() {{
                                                                                b = "rerum";
                                                                                bs = new String[]{{
                                                                                    add("corporis"),
                                                                                    add("officiis"),
                                                                                    add("voluptatibus"),
                                                                                }};
                                                                                n = "cum";
                                                                                ns = new String[]{{
                                                                                    add("alias"),
                                                                                    add("quia"),
                                                                                    add("quidem"),
                                                                                    add("fuga"),
                                                                                }};
                                                                                s = "repudiandae";
                                                                                ss = new String[]{{
                                                                                    add("expedita"),
                                                                                }};
                                                                            }});
                                                                        }}) {{
                                                            item = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                put("perspiciatis", new AttributeValue() {{
                                                                    b = "expedita";
                                                                    bs = new String[]{{
                                                                        add("a"),
                                                                        add("voluptate"),
                                                                        add("ullam"),
                                                                    }};
                                                                    n = "unde";
                                                                    ns = new String[]{{
                                                                        add("animi"),
                                                                        add("impedit"),
                                                                        add("ipsam"),
                                                                        add("corporis"),
                                                                    }};
                                                                    s = "est";
                                                                    ss = new String[]{{
                                                                        add("esse"),
                                                                        add("labore"),
                                                                        add("veritatis"),
                                                                    }};
                                                                }});
                                                                put("vero", new AttributeValue() {{
                                                                    b = "consectetur";
                                                                    bs = new String[]{{
                                                                        add("inventore"),
                                                                    }};
                                                                    n = "dolorem";
                                                                    ns = new String[]{{
                                                                        add("qui"),
                                                                        add("iste"),
                                                                    }};
                                                                    s = "ex";
                                                                    ss = new String[]{{
                                                                        add("soluta"),
                                                                        add("libero"),
                                                                    }};
                                                                }});
                                                                put("rem", new AttributeValue() {{
                                                                    b = "dolorum";
                                                                    bs = new String[]{{
                                                                        add("fugit"),
                                                                        add("alias"),
                                                                    }};
                                                                    n = "magni";
                                                                    ns = new String[]{{
                                                                        add("quae"),
                                                                        add("quae"),
                                                                    }};
                                                                    s = "modi";
                                                                    ss = new String[]{{
                                                                        add("exercitationem"),
                                                                    }};
                                                                }});
                                                                put("itaque", new AttributeValue() {{
                                                                    b = "et";
                                                                    bs = new String[]{{
                                                                        add("unde"),
                                                                    }};
                                                                    n = "nulla";
                                                                    ns = new String[]{{
                                                                        add("maxime"),
                                                                        add("quia"),
                                                                        add("quia"),
                                                                    }};
                                                                    s = "nostrum";
                                                                    ss = new String[]{{
                                                                        add("libero"),
                                                                        add("dicta"),
                                                                        add("id"),
                                                                    }};
                                                                }});
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new WriteRequest() {{
                                                        deleteRequest = new DeleteRequest(                new Key(                new AttributeValue() {{
                                                                                            b = "modi";
                                                                                            bs = new String[]{{
                                                                                                add("magnam"),
                                                                                                add("voluptates"),
                                                                                            }};
                                                                                            n = "maiores";
                                                                                            ns = new String[]{{
                                                                                                add("aperiam"),
                                                                                                add("libero"),
                                                                                                add("ratione"),
                                                                                            }};
                                                                                            s = "labore";
                                                                                            ss = new String[]{{
                                                                                                add("occaecati"),
                                                                                                add("voluptas"),
                                                                                                add("quo"),
                                                                                            }};
                                                                                        }};) {{
                                                                            rangeKeyElement = new AttributeValue() {{
                                                                                b = "velit";
                                                                                bs = new String[]{{
                                                                                    add("fuga"),
                                                                                    add("nostrum"),
                                                                                    add("est"),
                                                                                    add("impedit"),
                                                                                }};
                                                                                n = "delectus";
                                                                                ns = new String[]{{
                                                                                    add("vero"),
                                                                                    add("odit"),
                                                                                    add("repellat"),
                                                                                }};
                                                                                s = "pariatur";
                                                                                ss = new String[]{{
                                                                                    add("reprehenderit"),
                                                                                    add("aperiam"),
                                                                                }};
                                                                            }};;
                                                                        }};) {{
                                                            key = new Key(                new AttributeValue() {{
                                                                                b = "corporis";
                                                                                bs = new String[]{{
                                                                                    add("expedita"),
                                                                                }};
                                                                                n = "voluptatum";
                                                                                ns = new String[]{{
                                                                                    add("minima"),
                                                                                    add("placeat"),
                                                                                    add("enim"),
                                                                                }};
                                                                                s = "neque";
                                                                                ss = new String[]{{
                                                                                    add("minus"),
                                                                                    add("eum"),
                                                                                }};
                                                                            }};) {{
                                                                hashKeyElement = new AttributeValue() {{
                                                                    b = "officiis";
                                                                    bs = new String[]{{
                                                                        add("quibusdam"),
                                                                    }};
                                                                    n = "odio";
                                                                    ns = new String[]{{
                                                                        add("odit"),
                                                                        add("explicabo"),
                                                                        add("corporis"),
                                                                    }};
                                                                    s = "error";
                                                                    ss = new String[]{{
                                                                        add("adipisci"),
                                                                        add("recusandae"),
                                                                        add("similique"),
                                                                        add("ut"),
                                                                    }};
                                                                }};
                                                                rangeKeyElement = new AttributeValue() {{
                                                                    b = "quidem";
                                                                    bs = new String[]{{
                                                                        add("beatae"),
                                                                        add("unde"),
                                                                    }};
                                                                    n = "molestiae";
                                                                    ns = new String[]{{
                                                                        add("cupiditate"),
                                                                        add("fugit"),
                                                                        add("numquam"),
                                                                        add("numquam"),
                                                                    }};
                                                                    s = "nesciunt";
                                                                    ss = new String[]{{
                                                                        add("officia"),
                                                                        add("dignissimos"),
                                                                        add("optio"),
                                                                        add("necessitatibus"),
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                        putRequest = new PutRequest(                new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                            put("dicta", new AttributeValue() {{
                                                                                b = "earum";
                                                                                bs = new String[]{{
                                                                                    add("animi"),
                                                                                    add("dolores"),
                                                                                }};
                                                                                n = "nam";
                                                                                ns = new String[]{{
                                                                                    add("consequuntur"),
                                                                                }};
                                                                                s = "necessitatibus";
                                                                                ss = new String[]{{
                                                                                    add("ipsa"),
                                                                                    add("ducimus"),
                                                                                    add("maiores"),
                                                                                }};
                                                                            }});
                                                                            put("veritatis", new AttributeValue() {{
                                                                                b = "quasi";
                                                                                bs = new String[]{{
                                                                                    add("pariatur"),
                                                                                    add("libero"),
                                                                                }};
                                                                                n = "excepturi";
                                                                                ns = new String[]{{
                                                                                    add("nemo"),
                                                                                    add("aliquam"),
                                                                                    add("nostrum"),
                                                                                }};
                                                                                s = "doloribus";
                                                                                ss = new String[]{{
                                                                                    add("sint"),
                                                                                    add("enim"),
                                                                                    add("hic"),
                                                                                    add("animi"),
                                                                                }};
                                                                            }});
                                                                            put("quas", new AttributeValue() {{
                                                                                b = "totam";
                                                                                bs = new String[]{{
                                                                                    add("odio"),
                                                                                    add("eaque"),
                                                                                    add("saepe"),
                                                                                }};
                                                                                n = "architecto";
                                                                                ns = new String[]{{
                                                                                    add("iste"),
                                                                                    add("assumenda"),
                                                                                    add("tempore"),
                                                                                }};
                                                                                s = "libero";
                                                                                ss = new String[]{{
                                                                                    add("doloremque"),
                                                                                }};
                                                                            }});
                                                                        }}) {{
                                                            item = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                put("minima", new AttributeValue() {{
                                                                    b = "in";
                                                                    bs = new String[]{{
                                                                        add("excepturi"),
                                                                        add("dolores"),
                                                                    }};
                                                                    n = "error";
                                                                    ns = new String[]{{
                                                                        add("ducimus"),
                                                                    }};
                                                                    s = "voluptate";
                                                                    ss = new String[]{{
                                                                        add("itaque"),
                                                                        add("similique"),
                                                                        add("optio"),
                                                                        add("ex"),
                                                                    }};
                                                                }});
                                                                put("quaerat", new AttributeValue() {{
                                                                    b = "commodi";
                                                                    bs = new String[]{{
                                                                        add("placeat"),
                                                                        add("quidem"),
                                                                        add("exercitationem"),
                                                                        add("quam"),
                                                                    }};
                                                                    n = "dolorem";
                                                                    ns = new String[]{{
                                                                        add("ipsa"),
                                                                        add("sint"),
                                                                    }};
                                                                    s = "vero";
                                                                    ss = new String[]{{
                                                                        add("repudiandae"),
                                                                    }};
                                                                }});
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new WriteRequest() {{
                                                        deleteRequest = new DeleteRequest(                new Key(                new AttributeValue() {{
                                                                                            b = "libero";
                                                                                            bs = new String[]{{
                                                                                                add("facere"),
                                                                                                add("facilis"),
                                                                                                add("ipsum"),
                                                                                                add("ad"),
                                                                                            }};
                                                                                            n = "voluptatibus";
                                                                                            ns = new String[]{{
                                                                                                add("consequuntur"),
                                                                                                add("debitis"),
                                                                                                add("labore"),
                                                                                                add("rerum"),
                                                                                            }};
                                                                                            s = "eos";
                                                                                            ss = new String[]{{
                                                                                                add("nostrum"),
                                                                                                add("neque"),
                                                                                            }};
                                                                                        }};) {{
                                                                            rangeKeyElement = new AttributeValue() {{
                                                                                b = "iusto";
                                                                                bs = new String[]{{
                                                                                    add("rem"),
                                                                                    add("eligendi"),
                                                                                    add("fugiat"),
                                                                                }};
                                                                                n = "unde";
                                                                                ns = new String[]{{
                                                                                    add("ducimus"),
                                                                                    add("dolor"),
                                                                                    add("dicta"),
                                                                                    add("error"),
                                                                                }};
                                                                                s = "porro";
                                                                                ss = new String[]{{
                                                                                    add("dignissimos"),
                                                                                }};
                                                                            }};;
                                                                        }};) {{
                                                            key = new Key(                new AttributeValue() {{
                                                                                b = "amet";
                                                                                bs = new String[]{{
                                                                                    add("ab"),
                                                                                    add("velit"),
                                                                                }};
                                                                                n = "facilis";
                                                                                ns = new String[]{{
                                                                                    add("nisi"),
                                                                                    add("voluptatibus"),
                                                                                    add("quaerat"),
                                                                                }};
                                                                                s = "blanditiis";
                                                                                ss = new String[]{{
                                                                                    add("nisi"),
                                                                                    add("quis"),
                                                                                    add("nisi"),
                                                                                }};
                                                                            }};) {{
                                                                hashKeyElement = new AttributeValue() {{
                                                                    b = "delectus";
                                                                    bs = new String[]{{
                                                                        add("cum"),
                                                                        add("ipsum"),
                                                                        add("adipisci"),
                                                                        add("saepe"),
                                                                    }};
                                                                    n = "deserunt";
                                                                    ns = new String[]{{
                                                                        add("quis"),
                                                                    }};
                                                                    s = "veniam";
                                                                    ss = new String[]{{
                                                                        add("architecto"),
                                                                        add("cupiditate"),
                                                                        add("molestiae"),
                                                                    }};
                                                                }};
                                                                rangeKeyElement = new AttributeValue() {{
                                                                    b = "eligendi";
                                                                    bs = new String[]{{
                                                                        add("non"),
                                                                        add("magnam"),
                                                                        add("itaque"),
                                                                        add("sed"),
                                                                    }};
                                                                    n = "asperiores";
                                                                    ns = new String[]{{
                                                                        add("consequuntur"),
                                                                        add("facere"),
                                                                    }};
                                                                    s = "laudantium";
                                                                    ss = new String[]{{
                                                                        add("pariatur"),
                                                                    }};
                                                                }};
                                                            }};
                                                        }};
                                                        putRequest = new PutRequest(                new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                            put("assumenda", new AttributeValue() {{
                                                                                b = "aliquam";
                                                                                bs = new String[]{{
                                                                                    add("provident"),
                                                                                    add("laudantium"),
                                                                                    add("repudiandae"),
                                                                                    add("consequatur"),
                                                                                }};
                                                                                n = "maxime";
                                                                                ns = new String[]{{
                                                                                    add("nam"),
                                                                                }};
                                                                                s = "expedita";
                                                                                ss = new String[]{{
                                                                                    add("provident"),
                                                                                    add("repudiandae"),
                                                                                    add("rerum"),
                                                                                }};
                                                                            }});
                                                                            put("dignissimos", new AttributeValue() {{
                                                                                b = "corporis";
                                                                                bs = new String[]{{
                                                                                    add("similique"),
                                                                                    add("repellendus"),
                                                                                    add("iure"),
                                                                                    add("dolorem"),
                                                                                }};
                                                                                n = "commodi";
                                                                                ns = new String[]{{
                                                                                    add("commodi"),
                                                                                    add("aut"),
                                                                                    add("voluptatem"),
                                                                                    add("ad"),
                                                                                }};
                                                                                s = "quae";
                                                                                ss = new String[]{{
                                                                                    add("illum"),
                                                                                }};
                                                                            }});
                                                                        }}) {{
                                                            item = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                                put("fugiat", new AttributeValue() {{
                                                                    b = "ad";
                                                                    bs = new String[]{{
                                                                        add("enim"),
                                                                    }};
                                                                    n = "delectus";
                                                                    ns = new String[]{{
                                                                        add("dignissimos"),
                                                                        add("libero"),
                                                                    }};
                                                                    s = "illo";
                                                                    ss = new String[]{{
                                                                        add("incidunt"),
                                                                    }};
                                                                }});
                                                                put("accusamus", new AttributeValue() {{
                                                                    b = "saepe";
                                                                    bs = new String[]{{
                                                                        add("veniam"),
                                                                        add("eos"),
                                                                        add("reiciendis"),
                                                                    }};
                                                                    n = "earum";
                                                                    ns = new String[]{{
                                                                        add("praesentium"),
                                                                        add("nemo"),
                                                                    }};
                                                                    s = "repellat";
                                                                    ss = new String[]{{
                                                                        add("sequi"),
                                                                        add("nihil"),
                                                                        add("deleniti"),
                                                                        add("illo"),
                                                                    }};
                                                                }});
                                                            }};
                                                        }};
                                                    }}),
                                                }});
                                            }});, BatchWriteItemXAmzTargetEnum.DYNAMO_DB20111205_BATCH_WRITE_ITEM) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "cum";
                xAmzDate = "amet";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laudantium";
            }};            

            BatchWriteItemResponse res = sdk.sdk.batchWriteItem(req);

            if (res.batchWriteItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTable

<p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTableRequest;
import org.openapis.openapi.models.operations.CreateTableResponse;
import org.openapis.openapi.models.operations.CreateTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTableInput;
import org.openapis.openapi.models.shared.KeySchema;
import org.openapis.openapi.models.shared.KeySchemaElement;
import org.openapis.openapi.models.shared.ProvisionedThroughput;
import org.openapis.openapi.models.shared.ScalarAttributeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTableRequest req = new CreateTableRequest(                new CreateTableInput(                new KeySchema(                new KeySchemaElement("earum", ScalarAttributeTypeEnum.N);) {{
                                                rangeKeyElement = new KeySchemaElement("amet", ScalarAttributeTypeEnum.N);;
                                            }};,                 new ProvisionedThroughput(677141L, 897956L);, "provident");, CreateTableXAmzTargetEnum.DYNAMO_DB20111205_CREATE_TABLE) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "nemo";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "corrupti";
            }};            

            CreateTableResponse res = sdk.sdk.createTable(req);

            if (res.createTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItem

<p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemRequest;
import org.openapis.openapi.models.operations.DeleteItemResponse;
import org.openapis.openapi.models.operations.DeleteItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.DeleteItemInput;
import org.openapis.openapi.models.shared.ExpectedAttributeValue;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.ReturnValueEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteItemRequest req = new DeleteItemRequest(                new DeleteItemInput(                new Key(                new AttributeValue() {{
                                                                b = "sint";
                                                                bs = new String[]{{
                                                                    add("eos"),
                                                                    add("totam"),
                                                                    add("dicta"),
                                                                    add("voluptatem"),
                                                                }};
                                                                n = "velit";
                                                                ns = new String[]{{
                                                                    add("sunt"),
                                                                }};
                                                                s = "a";
                                                                ss = new String[]{{
                                                                    add("occaecati"),
                                                                }};
                                                            }};) {{
                                                rangeKeyElement = new AttributeValue() {{
                                                    b = "atque";
                                                    bs = new String[]{{
                                                        add("at"),
                                                    }};
                                                    n = "labore";
                                                    ns = new String[]{{
                                                        add("esse"),
                                                        add("voluptatem"),
                                                        add("perferendis"),
                                                        add("rerum"),
                                                    }};
                                                    s = "ea";
                                                    ss = new String[]{{
                                                        add("dignissimos"),
                                                    }};
                                                }};;
                                            }};, "repellat") {{
                                expected = new java.util.HashMap<String, org.openapis.openapi.models.shared.ExpectedAttributeValue>() {{
                                    put("porro", new ExpectedAttributeValue() {{
                                        exists = false;
                                        value = new AttributeValue() {{
                                            b = "provident";
                                            bs = new String[]{{
                                                add("eligendi"),
                                            }};
                                            n = "dignissimos";
                                            ns = new String[]{{
                                                add("soluta"),
                                            }};
                                            s = "natus";
                                            ss = new String[]{{
                                                add("officia"),
                                                add("amet"),
                                                add("tenetur"),
                                                add("aspernatur"),
                                            }};
                                        }};
                                    }});
                                }};
                                returnValues = ReturnValueEnum.ALL_NEW;
                            }};, DeleteItemXAmzTargetEnum.DYNAMO_DB20111205_DELETE_ITEM) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "illum";
                xAmzCredential = "laborum";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "vero";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "consectetur";
            }};            

            DeleteItemResponse res = sdk.sdk.deleteItem(req);

            if (res.deleteItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTable

<p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTableRequest;
import org.openapis.openapi.models.operations.DeleteTableResponse;
import org.openapis.openapi.models.operations.DeleteTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTableInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTableRequest req = new DeleteTableRequest(                new DeleteTableInput("explicabo");, DeleteTableXAmzTargetEnum.DYNAMO_DB20111205_DELETE_TABLE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nihil";
                xAmzDate = "non";
                xAmzSecurityToken = "ab";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteTableResponse res = sdk.sdk.deleteTable(req);

            if (res.deleteTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTable

<p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTableRequest;
import org.openapis.openapi.models.operations.DescribeTableResponse;
import org.openapis.openapi.models.operations.DescribeTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTableInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTableRequest req = new DescribeTableRequest(                new DescribeTableInput("delectus");, DescribeTableXAmzTargetEnum.DYNAMO_DB20111205_DESCRIBE_TABLE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "in";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "labore";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "repudiandae";
            }};            

            DescribeTableResponse res = sdk.sdk.describeTable(req);

            if (res.describeTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItem

<p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemRequest;
import org.openapis.openapi.models.operations.GetItemResponse;
import org.openapis.openapi.models.operations.GetItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.GetItemInput;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetItemRequest req = new GetItemRequest(                new GetItemInput(                new Key(                new AttributeValue() {{
                                                                b = "in";
                                                                bs = new String[]{{
                                                                    add("accusamus"),
                                                                }};
                                                                n = "rem";
                                                                ns = new String[]{{
                                                                    add("odit"),
                                                                }};
                                                                s = "deleniti";
                                                                ss = new String[]{{
                                                                    add("voluptate"),
                                                                    add("similique"),
                                                                }};
                                                            }};) {{
                                                rangeKeyElement = new AttributeValue() {{
                                                    b = "minima";
                                                    bs = new String[]{{
                                                        add("magnam"),
                                                        add("sit"),
                                                        add("modi"),
                                                    }};
                                                    n = "eum";
                                                    ns = new String[]{{
                                                        add("mollitia"),
                                                    }};
                                                    s = "dignissimos";
                                                    ss = new String[]{{
                                                        add("nostrum"),
                                                        add("molestiae"),
                                                        add("veniam"),
                                                        add("reiciendis"),
                                                    }};
                                                }};;
                                            }};, "ab") {{
                                attributesToGet = new String[]{{
                                    add("aut"),
                                    add("aut"),
                                }};
                                consistentRead = false;
                            }};, GetItemXAmzTargetEnum.DYNAMO_DB20111205_GET_ITEM) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "odio";
                xAmzCredential = "commodi";
                xAmzDate = "numquam";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "voluptate";
            }};            

            GetItemResponse res = sdk.sdk.getItem(req);

            if (res.getItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTables

Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTablesRequest;
import org.openapis.openapi.models.operations.ListTablesResponse;
import org.openapis.openapi.models.operations.ListTablesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTablesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTablesRequest req = new ListTablesRequest(                new ListTablesInput() {{
                                exclusiveStartTableName = "nesciunt";
                                limit = 310629L;
                            }};, ListTablesXAmzTargetEnum.DYNAMO_DB20111205_LIST_TABLES) {{
                exclusiveStartTableName = "itaque";
                limit = "minus";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "iusto";
                xAmzDate = "quas";
                xAmzSecurityToken = "et";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "amet";
            }};            

            ListTablesResponse res = sdk.sdk.listTables(req);

            if (res.listTablesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putItem

<p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutItemRequest;
import org.openapis.openapi.models.operations.PutItemResponse;
import org.openapis.openapi.models.operations.PutItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.ExpectedAttributeValue;
import org.openapis.openapi.models.shared.PutItemInput;
import org.openapis.openapi.models.shared.ReturnValueEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutItemRequest req = new PutItemRequest(                new PutItemInput(                new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValue>() {{
                                                put("alias", new AttributeValue() {{
                                                    b = "rem";
                                                    bs = new String[]{{
                                                        add("quos"),
                                                    }};
                                                    n = "laudantium";
                                                    ns = new String[]{{
                                                        add("veritatis"),
                                                        add("quae"),
                                                        add("eaque"),
                                                        add("saepe"),
                                                    }};
                                                    s = "delectus";
                                                    ss = new String[]{{
                                                        add("nulla"),
                                                        add("officia"),
                                                        add("sed"),
                                                    }};
                                                }});
                                                put("voluptatem", new AttributeValue() {{
                                                    b = "alias";
                                                    bs = new String[]{{
                                                        add("hic"),
                                                        add("voluptatem"),
                                                        add("incidunt"),
                                                        add("qui"),
                                                    }};
                                                    n = "qui";
                                                    ns = new String[]{{
                                                        add("harum"),
                                                        add("explicabo"),
                                                        add("beatae"),
                                                        add("aliquid"),
                                                    }};
                                                    s = "modi";
                                                    ss = new String[]{{
                                                        add("voluptatibus"),
                                                        add("molestias"),
                                                        add("officia"),
                                                        add("libero"),
                                                    }};
                                                }});
                                                put("totam", new AttributeValue() {{
                                                    b = "sequi";
                                                    bs = new String[]{{
                                                        add("ea"),
                                                        add("impedit"),
                                                    }};
                                                    n = "ducimus";
                                                    ns = new String[]{{
                                                        add("velit"),
                                                    }};
                                                    s = "reiciendis";
                                                    ss = new String[]{{
                                                        add("nulla"),
                                                        add("laborum"),
                                                        add("natus"),
                                                        add("accusamus"),
                                                    }};
                                                }});
                                            }}, "doloremque") {{
                                expected = new java.util.HashMap<String, org.openapis.openapi.models.shared.ExpectedAttributeValue>() {{
                                    put("rerum", new ExpectedAttributeValue() {{
                                        exists = false;
                                        value = new AttributeValue() {{
                                            b = "recusandae";
                                            bs = new String[]{{
                                                add("non"),
                                                add("rem"),
                                                add("quia"),
                                                add("ullam"),
                                            }};
                                            n = "quisquam";
                                            ns = new String[]{{
                                                add("voluptatibus"),
                                            }};
                                            s = "eligendi";
                                            ss = new String[]{{
                                                add("officiis"),
                                            }};
                                        }};
                                    }});
                                    put("architecto", new ExpectedAttributeValue() {{
                                        exists = false;
                                        value = new AttributeValue() {{
                                            b = "architecto";
                                            bs = new String[]{{
                                                add("optio"),
                                                add("rem"),
                                            }};
                                            n = "perferendis";
                                            ns = new String[]{{
                                                add("reiciendis"),
                                                add("a"),
                                                add("iste"),
                                            }};
                                            s = "dicta";
                                            ss = new String[]{{
                                                add("ullam"),
                                                add("dolore"),
                                                add("modi"),
                                            }};
                                        }};
                                    }});
                                }};
                                returnValues = ReturnValueEnum.UPDATED_NEW;
                            }};, PutItemXAmzTargetEnum.DYNAMO_DB20111205_PUT_ITEM) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "modi";
                xAmzCredential = "consequuntur";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "vero";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "impedit";
            }};            

            PutItemResponse res = sdk.sdk.putItem(req);

            if (res.putItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## query

<p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryRequest;
import org.openapis.openapi.models.operations.QueryResponse;
import org.openapis.openapi.models.operations.QueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.QueryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryRequest req = new QueryRequest(                new QueryInput(                new AttributeValue() {{
                                                b = "accusamus";
                                                bs = new String[]{{
                                                    add("reiciendis"),
                                                    add("ab"),
                                                    add("sint"),
                                                }};
                                                n = "nihil";
                                                ns = new String[]{{
                                                    add("iure"),
                                                    add("odio"),
                                                }};
                                                s = "nesciunt";
                                                ss = new String[]{{
                                                    add("vel"),
                                                    add("neque"),
                                                    add("corporis"),
                                                    add("voluptas"),
                                                }};
                                            }};, "consequuntur") {{
                                attributesToGet = new String[]{{
                                    add("reprehenderit"),
                                    add("distinctio"),
                                    add("eius"),
                                }};
                                consistentRead = false;
                                count = false;
                                exclusiveStartKey = new Key(                new AttributeValue() {{
                                                    b = "ipsa";
                                                    bs = new String[]{{
                                                        add("maiores"),
                                                        add("accusantium"),
                                                        add("veniam"),
                                                    }};
                                                    n = "saepe";
                                                    ns = new String[]{{
                                                        add("facere"),
                                                    }};
                                                    s = "aliquam";
                                                    ss = new String[]{{
                                                        add("doloribus"),
                                                        add("fugiat"),
                                                        add("est"),
                                                    }};
                                                }};) {{
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "delectus";
                                        bs = new String[]{{
                                            add("vitae"),
                                        }};
                                        n = "nesciunt";
                                        ns = new String[]{{
                                            add("illo"),
                                            add("repellat"),
                                            add("nemo"),
                                        }};
                                        s = "doloribus";
                                        ss = new String[]{{
                                            add("unde"),
                                            add("incidunt"),
                                            add("explicabo"),
                                            add("ipsam"),
                                        }};
                                    }};;
                                }};;
                                limit = 583193L;
                                rangeKeyCondition = new Condition(ComparisonOperatorEnum.NULL_) {{
                                    attributeValueList = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                        add(new AttributeValue() {{
                                            b = "quidem";
                                            bs = new String[]{{
                                                add("commodi"),
                                            }};
                                            n = "sapiente";
                                            ns = new String[]{{
                                                add("veniam"),
                                            }};
                                            s = "debitis";
                                            ss = new String[]{{
                                                add("sint"),
                                                add("ut"),
                                                add("numquam"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                scanIndexForward = false;
                            }};, QueryXAmzTargetEnum.DYNAMO_DB20111205_QUERY) {{
                exclusiveStartKey = "tenetur";
                limit = "adipisci";
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "in";
                xAmzCredential = "minima";
                xAmzDate = "ex";
                xAmzSecurityToken = "minus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "beatae";
            }};            

            QueryResponse res = sdk.sdk.query(req);

            if (res.queryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scan

<p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScanRequest;
import org.openapis.openapi.models.operations.ScanResponse;
import org.openapis.openapi.models.operations.ScanXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.ScanInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ScanRequest req = new ScanRequest(                new ScanInput("nisi") {{
                                attributesToGet = new String[]{{
                                    add("dolor"),
                                    add("ducimus"),
                                    add("fuga"),
                                    add("minima"),
                                }};
                                count = false;
                                exclusiveStartKey = new Key(                new AttributeValue() {{
                                                    b = "architecto";
                                                    bs = new String[]{{
                                                        add("aliquid"),
                                                    }};
                                                    n = "magni";
                                                    ns = new String[]{{
                                                        add("adipisci"),
                                                        add("praesentium"),
                                                    }};
                                                    s = "dolor";
                                                    ss = new String[]{{
                                                        add("expedita"),
                                                        add("facilis"),
                                                    }};
                                                }};) {{
                                    rangeKeyElement = new AttributeValue() {{
                                        b = "impedit";
                                        bs = new String[]{{
                                            add("nemo"),
                                        }};
                                        n = "culpa";
                                        ns = new String[]{{
                                            add("amet"),
                                        }};
                                        s = "deserunt";
                                        ss = new String[]{{
                                            add("veniam"),
                                            add("quod"),
                                        }};
                                    }};;
                                }};;
                                limit = 932250L;
                                scanFilter = new java.util.HashMap<String, org.openapis.openapi.models.shared.Condition>() {{
                                    put("quisquam", new Condition(ComparisonOperatorEnum.NOT_NULL) {{
                                        attributeValueList = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                            add(new AttributeValue() {{
                                                b = "doloribus";
                                                bs = new String[]{{
                                                    add("officiis"),
                                                    add("architecto"),
                                                    add("alias"),
                                                    add("culpa"),
                                                }};
                                                n = "ipsa";
                                                ns = new String[]{{
                                                    add("necessitatibus"),
                                                    add("quia"),
                                                    add("dicta"),
                                                    add("vel"),
                                                }};
                                                s = "perspiciatis";
                                                ss = new String[]{{
                                                    add("ullam"),
                                                    add("architecto"),
                                                    add("accusantium"),
                                                    add("perferendis"),
                                                }};
                                            }}),
                                            add(new AttributeValue() {{
                                                b = "veritatis";
                                                bs = new String[]{{
                                                    add("cumque"),
                                                    add("iure"),
                                                    add("quibusdam"),
                                                }};
                                                n = "quod";
                                                ns = new String[]{{
                                                    add("recusandae"),
                                                    add("velit"),
                                                }};
                                                s = "magnam";
                                                ss = new String[]{{
                                                    add("laboriosam"),
                                                    add("sed"),
                                                }};
                                            }}),
                                        }};
                                        comparisonOperator = ComparisonOperatorEnum.GT;
                                    }});
                                    put("provident", new Condition(ComparisonOperatorEnum.NOT_NULL) {{
                                        attributeValueList = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                            add(new AttributeValue() {{
                                                b = "doloribus";
                                                bs = new String[]{{
                                                    add("quidem"),
                                                    add("itaque"),
                                                    add("laboriosam"),
                                                }};
                                                n = "unde";
                                                ns = new String[]{{
                                                    add("perspiciatis"),
                                                    add("hic"),
                                                }};
                                                s = "cum";
                                                ss = new String[]{{
                                                    add("libero"),
                                                }};
                                            }}),
                                            add(new AttributeValue() {{
                                                b = "nam";
                                                bs = new String[]{{
                                                    add("recusandae"),
                                                    add("quod"),
                                                }};
                                                n = "id";
                                                ns = new String[]{{
                                                    add("autem"),
                                                    add("quo"),
                                                    add("nesciunt"),
                                                    add("illum"),
                                                }};
                                                s = "nemo";
                                                ss = new String[]{{
                                                    add("facilis"),
                                                    add("non"),
                                                    add("mollitia"),
                                                    add("assumenda"),
                                                }};
                                            }}),
                                            add(new AttributeValue() {{
                                                b = "recusandae";
                                                bs = new String[]{{
                                                    add("pariatur"),
                                                    add("ad"),
                                                    add("facere"),
                                                }};
                                                n = "laborum";
                                                ns = new String[]{{
                                                    add("laborum"),
                                                    add("incidunt"),
                                                    add("maxime"),
                                                    add("ipsam"),
                                                }};
                                                s = "alias";
                                                ss = new String[]{{
                                                    add("deserunt"),
                                                    add("molestias"),
                                                }};
                                            }}),
                                        }};
                                        comparisonOperator = ComparisonOperatorEnum.NOT_NULL;
                                    }});
                                    put("occaecati", new Condition(ComparisonOperatorEnum.CONTAINS) {{
                                        attributeValueList = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                            add(new AttributeValue() {{
                                                b = "quo";
                                                bs = new String[]{{
                                                    add("fugit"),
                                                }};
                                                n = "aliquid";
                                                ns = new String[]{{
                                                    add("quaerat"),
                                                    add("eligendi"),
                                                }};
                                                s = "hic";
                                                ss = new String[]{{
                                                    add("officiis"),
                                                    add("unde"),
                                                }};
                                            }}),
                                            add(new AttributeValue() {{
                                                b = "nulla";
                                                bs = new String[]{{
                                                    add("mollitia"),
                                                    add("magnam"),
                                                    add("nostrum"),
                                                }};
                                                n = "esse";
                                                ns = new String[]{{
                                                    add("fuga"),
                                                    add("facere"),
                                                    add("impedit"),
                                                }};
                                                s = "quasi";
                                                ss = new String[]{{
                                                    add("quod"),
                                                    add("laboriosam"),
                                                    add("doloremque"),
                                                }};
                                            }}),
                                        }};
                                        comparisonOperator = ComparisonOperatorEnum.EQ;
                                    }});
                                    put("necessitatibus", new Condition(ComparisonOperatorEnum.GT) {{
                                        attributeValueList = new org.openapis.openapi.models.shared.AttributeValue[]{{
                                            add(new AttributeValue() {{
                                                b = "consequatur";
                                                bs = new String[]{{
                                                    add("architecto"),
                                                }};
                                                n = "similique";
                                                ns = new String[]{{
                                                    add("blanditiis"),
                                                    add("quae"),
                                                    add("magni"),
                                                    add("officiis"),
                                                }};
                                                s = "sed";
                                                ss = new String[]{{
                                                    add("impedit"),
                                                    add("ipsa"),
                                                    add("excepturi"),
                                                    add("a"),
                                                }};
                                            }}),
                                            add(new AttributeValue() {{
                                                b = "maiores";
                                                bs = new String[]{{
                                                    add("maiores"),
                                                    add("alias"),
                                                    add("asperiores"),
                                                }};
                                                n = "rem";
                                                ns = new String[]{{
                                                    add("suscipit"),
                                                }};
                                                s = "earum";
                                                ss = new String[]{{
                                                    add("velit"),
                                                    add("eius"),
                                                    add("esse"),
                                                    add("in"),
                                                }};
                                            }}),
                                            add(new AttributeValue() {{
                                                b = "eligendi";
                                                bs = new String[]{{
                                                    add("neque"),
                                                }};
                                                n = "vero";
                                                ns = new String[]{{
                                                    add("accusantium"),
                                                    add("qui"),
                                                    add("impedit"),
                                                }};
                                                s = "beatae";
                                                ss = new String[]{{
                                                    add("dicta"),
                                                    add("odit"),
                                                }};
                                            }}),
                                            add(new AttributeValue() {{
                                                b = "corporis";
                                                bs = new String[]{{
                                                    add("alias"),
                                                    add("error"),
                                                    add("vel"),
                                                }};
                                                n = "accusantium";
                                                ns = new String[]{{
                                                    add("laboriosam"),
                                                    add("ex"),
                                                    add("quas"),
                                                }};
                                                s = "veritatis";
                                                ss = new String[]{{
                                                    add("quae"),
                                                    add("similique"),
                                                }};
                                            }}),
                                        }};
                                        comparisonOperator = ComparisonOperatorEnum.LE;
                                    }});
                                }};
                            }};, ScanXAmzTargetEnum.DYNAMO_DB20111205_SCAN) {{
                exclusiveStartKey = "magni";
                limit = "deserunt";
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "sed";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "cupiditate";
            }};            

            ScanResponse res = sdk.sdk.scan(req);

            if (res.scanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateItem

<p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateItemRequest;
import org.openapis.openapi.models.operations.UpdateItemResponse;
import org.openapis.openapi.models.operations.UpdateItemXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeActionEnum;
import org.openapis.openapi.models.shared.AttributeValue;
import org.openapis.openapi.models.shared.AttributeValueUpdate;
import org.openapis.openapi.models.shared.ExpectedAttributeValue;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.ReturnValueEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateItemInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateItemRequest req = new UpdateItemRequest(                new UpdateItemInput(                new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeValueUpdate>() {{
                                                put("maiores", new AttributeValueUpdate() {{
                                                    action = AttributeActionEnum.PUT;
                                                    value = new AttributeValue() {{
                                                        b = "velit";
                                                        bs = new String[]{{
                                                            add("amet"),
                                                            add("nemo"),
                                                            add("ipsa"),
                                                            add("quisquam"),
                                                        }};
                                                        n = "tenetur";
                                                        ns = new String[]{{
                                                            add("molestiae"),
                                                            add("aliquid"),
                                                            add("asperiores"),
                                                        }};
                                                        s = "a";
                                                        ss = new String[]{{
                                                            add("perspiciatis"),
                                                            add("accusantium"),
                                                            add("dicta"),
                                                        }};
                                                    }};
                                                }});
                                                put("minus", new AttributeValueUpdate() {{
                                                    action = AttributeActionEnum.PUT;
                                                    value = new AttributeValue() {{
                                                        b = "eveniet";
                                                        bs = new String[]{{
                                                            add("tempore"),
                                                            add("quidem"),
                                                            add("modi"),
                                                            add("voluptates"),
                                                        }};
                                                        n = "fugit";
                                                        ns = new String[]{{
                                                            add("sequi"),
                                                            add("eligendi"),
                                                        }};
                                                        s = "asperiores";
                                                        ss = new String[]{{
                                                            add("blanditiis"),
                                                            add("sint"),
                                                        }};
                                                    }};
                                                }});
                                                put("repellat", new AttributeValueUpdate() {{
                                                    action = AttributeActionEnum.DELETE;
                                                    value = new AttributeValue() {{
                                                        b = "animi";
                                                        bs = new String[]{{
                                                            add("itaque"),
                                                            add("nulla"),
                                                            add("deserunt"),
                                                            add("corporis"),
                                                        }};
                                                        n = "velit";
                                                        ns = new String[]{{
                                                            add("enim"),
                                                            add("officia"),
                                                            add("saepe"),
                                                            add("eum"),
                                                        }};
                                                        s = "repudiandae";
                                                        ss = new String[]{{
                                                            add("officia"),
                                                        }};
                                                    }};
                                                }});
                                            }},                 new Key(                new AttributeValue() {{
                                                                b = "impedit";
                                                                bs = new String[]{{
                                                                    add("blanditiis"),
                                                                }};
                                                                n = "eius";
                                                                ns = new String[]{{
                                                                    add("eos"),
                                                                    add("nobis"),
                                                                    add("natus"),
                                                                    add("minus"),
                                                                }};
                                                                s = "quia";
                                                                ss = new String[]{{
                                                                    add("reprehenderit"),
                                                                    add("quod"),
                                                                }};
                                                            }};) {{
                                                rangeKeyElement = new AttributeValue() {{
                                                    b = "quos";
                                                    bs = new String[]{{
                                                        add("amet"),
                                                        add("molestiae"),
                                                        add("amet"),
                                                    }};
                                                    n = "laborum";
                                                    ns = new String[]{{
                                                        add("perferendis"),
                                                        add("necessitatibus"),
                                                    }};
                                                    s = "architecto";
                                                    ss = new String[]{{
                                                        add("dolore"),
                                                        add("sunt"),
                                                        add("maiores"),
                                                    }};
                                                }};;
                                            }};, "neque") {{
                                expected = new java.util.HashMap<String, org.openapis.openapi.models.shared.ExpectedAttributeValue>() {{
                                    put("earum", new ExpectedAttributeValue() {{
                                        exists = false;
                                        value = new AttributeValue() {{
                                            b = "veniam";
                                            bs = new String[]{{
                                                add("eaque"),
                                                add("exercitationem"),
                                            }};
                                            n = "veniam";
                                            ns = new String[]{{
                                                add("ad"),
                                                add("nisi"),
                                            }};
                                            s = "tenetur";
                                            ss = new String[]{{
                                                add("quibusdam"),
                                                add("nemo"),
                                            }};
                                        }};
                                    }});
                                }};
                                returnValues = ReturnValueEnum.ALL_OLD;
                            }};, UpdateItemXAmzTargetEnum.DYNAMO_DB20111205_UPDATE_ITEM) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "sit";
                xAmzCredential = "quidem";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "id";
                xAmzSignedHeaders = "sapiente";
            }};            

            UpdateItemResponse res = sdk.sdk.updateItem(req);

            if (res.updateItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTable

<p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTableRequest;
import org.openapis.openapi.models.operations.UpdateTableResponse;
import org.openapis.openapi.models.operations.UpdateTableXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProvisionedThroughput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTableInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTableRequest req = new UpdateTableRequest(                new UpdateTableInput(                new ProvisionedThroughput(823572L, 996072L);, "repudiandae");, UpdateTableXAmzTargetEnum.DYNAMO_DB20111205_UPDATE_TABLE) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "pariatur";
                xAmzDate = "harum";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "iure";
            }};            

            UpdateTableResponse res = sdk.sdk.updateTable(req);

            if (res.updateTableOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
