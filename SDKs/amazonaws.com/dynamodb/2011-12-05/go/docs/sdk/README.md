# SDK

## Overview

<p>Amazon DynamoDB is a fast, highly scalable, highly available, cost-effective non-relational database service.</p> <p>Amazon DynamoDB removes traditional scalability limitations on data storage while maintaining low latency and predictable performance.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dynamodb/>
### Available Operations

* [BatchGetItem](#batchgetitem) - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* [BatchWriteItem](#batchwriteitem) - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* [CreateTable](#createtable) - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* [DeleteItem](#deleteitem) - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* [DeleteTable](#deletetable) - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [DescribeTable](#describetable) - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [GetItem](#getitem) - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* [ListTables](#listtables) - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* [PutItem](#putitem) - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* [Query](#query) - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* [Scan](#scan) - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* [UpdateItem](#updateitem) - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* [UpdateTable](#updatetable) - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

## BatchGetItem

<p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetItem(ctx, operations.BatchGetItemRequest{
        BatchGetItemInput: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "labore": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "qui",
                        "aliquid",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("quos"),
                                Bs: []string{
                                    "magni",
                                },
                                N: sdk.String("assumenda"),
                                Ns: []string{
                                    "alias",
                                    "fugit",
                                },
                                S: sdk.String("dolorum"),
                                Ss: []string{
                                    "tempora",
                                    "facilis",
                                    "tempore",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("labore"),
                                Bs: []string{
                                    "eum",
                                    "non",
                                    "eligendi",
                                    "sint",
                                },
                                N: sdk.String("aliquid"),
                                Ns: []string{
                                    "necessitatibus",
                                    "sint",
                                    "officia",
                                },
                                S: sdk.String("dolor"),
                                Ss: []string{
                                    "a",
                                    "dolorum",
                                    "in",
                                    "in",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("illum"),
                                Bs: []string{
                                    "rerum",
                                    "dicta",
                                    "magnam",
                                    "cumque",
                                },
                                N: sdk.String("facere"),
                                Ns: []string{
                                    "aliquid",
                                    "laborum",
                                },
                                S: sdk.String("accusamus"),
                                Ss: []string{
                                    "occaecati",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("enim"),
                                Bs: []string{
                                    "delectus",
                                    "quidem",
                                    "provident",
                                    "nam",
                                },
                                N: sdk.String("id"),
                                Ns: []string{
                                    "deleniti",
                                    "sapiente",
                                    "amet",
                                },
                                S: sdk.String("deserunt"),
                                Ss: []string{
                                    "vel",
                                    "natus",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("omnis"),
                                Bs: []string{
                                    "perferendis",
                                    "nihil",
                                },
                                N: sdk.String("magnam"),
                                Ns: []string{
                                    "id",
                                    "labore",
                                    "labore",
                                },
                                S: sdk.String("suscipit"),
                                Ss: []string{
                                    "nobis",
                                    "eum",
                                    "vero",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("aspernatur"),
                                Bs: []string{
                                    "magnam",
                                },
                                N: sdk.String("et"),
                                Ns: []string{
                                    "ullam",
                                    "provident",
                                    "quos",
                                },
                                S: sdk.String("sint"),
                                Ss: []string{
                                    "mollitia",
                                },
                            },
                        },
                    },
                },
                "reiciendis": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "ad",
                        "eum",
                        "dolor",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("odit"),
                                Bs: []string{
                                    "quasi",
                                    "iure",
                                },
                                N: sdk.String("doloribus"),
                                Ns: []string{
                                    "eius",
                                    "maxime",
                                    "deleniti",
                                    "facilis",
                                },
                                S: sdk.String("in"),
                                Ss: []string{
                                    "architecto",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("repudiandae"),
                                Bs: []string{
                                    "expedita",
                                    "nihil",
                                },
                                N: sdk.String("repellat"),
                                Ns: []string{
                                    "sed",
                                    "saepe",
                                    "pariatur",
                                    "accusantium",
                                },
                                S: sdk.String("consequuntur"),
                                Ss: []string{
                                    "natus",
                                    "magni",
                                    "sunt",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("quo"),
                                Bs: []string{
                                    "pariatur",
                                    "maxime",
                                    "ea",
                                    "excepturi",
                                },
                                N: sdk.String("odit"),
                                Ns: []string{
                                    "accusantium",
                                    "ab",
                                },
                                S: sdk.String("maiores"),
                                Ss: []string{
                                    "ipsam",
                                    "voluptate",
                                    "autem",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("nam"),
                                Bs: []string{
                                    "pariatur",
                                },
                                N: sdk.String("nemo"),
                                Ns: []string{
                                    "perferendis",
                                    "fugiat",
                                    "amet",
                                    "aut",
                                },
                                S: sdk.String("cumque"),
                                Ss: []string{
                                    "hic",
                                    "libero",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("nobis"),
                                Bs: []string{
                                    "quis",
                                },
                                N: sdk.String("totam"),
                                Ns: []string{
                                    "eaque",
                                    "quis",
                                },
                                S: sdk.String("nesciunt"),
                                Ss: []string{
                                    "perferendis",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("dolores"),
                                Bs: []string{
                                    "quam",
                                    "dolor",
                                    "vero",
                                    "nostrum",
                                },
                                N: sdk.String("hic"),
                                Ns: []string{
                                    "omnis",
                                    "facilis",
                                    "perspiciatis",
                                    "voluptatem",
                                },
                                S: sdk.String("porro"),
                                Ss: []string{
                                    "blanditiis",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("error"),
                                Bs: []string{
                                    "occaecati",
                                },
                                N: sdk.String("rerum"),
                                Ns: []string{
                                    "asperiores",
                                },
                                S: sdk.String("earum"),
                                Ss: []string{
                                    "iste",
                                    "dolorum",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("deleniti"),
                                Bs: []string{
                                    "provident",
                                    "nobis",
                                    "libero",
                                    "delectus",
                                },
                                N: sdk.String("quaerat"),
                                Ns: []string{
                                    "aliquid",
                                    "dolorem",
                                    "dolorem",
                                },
                                S: sdk.String("dolor"),
                                Ss: []string{
                                    "ipsum",
                                },
                            },
                        },
                    },
                },
                "hic": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "cum",
                        "voluptate",
                        "dignissimos",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("amet"),
                                Bs: []string{
                                    "numquam",
                                    "veritatis",
                                    "ipsa",
                                },
                                N: sdk.String("ipsa"),
                                Ns: []string{
                                    "odio",
                                    "quaerat",
                                },
                                S: sdk.String("accusamus"),
                                Ss: []string{
                                    "voluptatibus",
                                    "voluptas",
                                    "natus",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("eos"),
                                Bs: []string{
                                    "sit",
                                    "fugiat",
                                    "ab",
                                },
                                N: sdk.String("soluta"),
                                Ns: []string{
                                    "iusto",
                                    "voluptate",
                                    "dolorum",
                                },
                                S: sdk.String("deleniti"),
                                Ss: []string{
                                    "necessitatibus",
                                    "distinctio",
                                    "asperiores",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("nihil"),
                                Bs: []string{
                                    "voluptate",
                                },
                                N: sdk.String("id"),
                                Ns: []string{
                                    "eius",
                                    "aspernatur",
                                    "perferendis",
                                    "amet",
                                },
                                S: sdk.String("optio"),
                                Ss: []string{
                                    "ad",
                                    "saepe",
                                    "suscipit",
                                    "deserunt",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("provident"),
                                Bs: []string{
                                    "repellendus",
                                    "totam",
                                },
                                N: sdk.String("similique"),
                                Ns: []string{
                                    "at",
                                },
                                S: sdk.String("quaerat"),
                                Ss: []string{
                                    "vel",
                                    "quod",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("officiis"),
                                Bs: []string{
                                    "dolorum",
                                },
                                N: sdk.String("a"),
                                Ns: []string{
                                    "harum",
                                    "iusto",
                                },
                                S: sdk.String("ipsum"),
                                Ss: []string{
                                    "tenetur",
                                    "amet",
                                    "tempore",
                                    "accusamus",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("numquam"),
                                Bs: []string{
                                    "dolorem",
                                    "sapiente",
                                },
                                N: sdk.String("totam"),
                                Ns: []string{
                                    "sit",
                                    "expedita",
                                },
                                S: sdk.String("neque"),
                                Ss: []string{
                                    "vel",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("libero"),
                                Bs: []string{
                                    "deserunt",
                                    "quam",
                                },
                                N: sdk.String("ipsum"),
                                Ns: []string{
                                    "qui",
                                    "cupiditate",
                                },
                                S: sdk.String("maxime"),
                                Ss: []string{
                                    "soluta",
                                    "dicta",
                                    "laborum",
                                    "totam",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("incidunt"),
                                Bs: []string{
                                    "dolores",
                                },
                                N: sdk.String("distinctio"),
                                Ns: []string{
                                    "aliquid",
                                    "quam",
                                    "molestias",
                                },
                                S: sdk.String("temporibus"),
                                Ss: []string{
                                    "neque",
                                },
                            },
                        },
                    },
                },
                "fugit": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "odio",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("ullam"),
                                Bs: []string{
                                    "hic",
                                    "voluptatem",
                                    "cumque",
                                },
                                N: sdk.String("soluta"),
                                Ns: []string{
                                    "et",
                                    "saepe",
                                    "ipsum",
                                },
                                S: sdk.String("veritatis"),
                                Ss: []string{
                                    "quos",
                                    "tempore",
                                    "cupiditate",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("aperiam"),
                                Bs: []string{
                                    "dolorem",
                                    "dolore",
                                    "labore",
                                    "adipisci",
                                },
                                N: sdk.String("dolorum"),
                                Ns: []string{
                                    "quae",
                                },
                                S: sdk.String("aut"),
                                Ss: []string{
                                    "itaque",
                                    "consequatur",
                                    "est",
                                },
                            },
                        },
                    },
                },
            },
        },
        RequestItems: sdk.String("repellendus"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.BatchGetItemXAmzTargetEnumDynamoDb20111205BatchGetItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetItemOutput != nil {
        // handle response
    }
}
```

## BatchWriteItem

<p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchWriteItem(ctx, operations.BatchWriteItemRequest{
        BatchWriteItemInput: shared.BatchWriteItemInput{
            RequestItems: map[string][]shared.WriteRequest{
                "odio": []shared.WriteRequest{
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("voluptatibus"),
                                    Bs: []string{
                                        "vero",
                                        "omnis",
                                        "quis",
                                        "ipsum",
                                    },
                                    N: sdk.String("delectus"),
                                    Ns: []string{
                                        "consectetur",
                                        "vero",
                                    },
                                    S: sdk.String("tenetur"),
                                    Ss: []string{
                                        "hic",
                                        "distinctio",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("quod"),
                                    Bs: []string{
                                        "similique",
                                        "facilis",
                                    },
                                    N: sdk.String("vero"),
                                    Ns: []string{
                                        "dolore",
                                        "quibusdam",
                                    },
                                    S: sdk.String("illum"),
                                    Ss: []string{
                                        "natus",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "aut": shared.AttributeValue{
                                    B: sdk.String("voluptatibus"),
                                    Bs: []string{
                                        "nulla",
                                        "fugit",
                                    },
                                    N: sdk.String("porro"),
                                    Ns: []string{
                                        "doloribus",
                                        "iusto",
                                        "eligendi",
                                        "ducimus",
                                    },
                                    S: sdk.String("alias"),
                                    Ss: []string{
                                        "tempora",
                                        "ipsam",
                                        "ea",
                                    },
                                },
                                "aspernatur": shared.AttributeValue{
                                    B: sdk.String("vel"),
                                    Bs: []string{
                                        "magnam",
                                        "ratione",
                                        "ex",
                                        "laudantium",
                                    },
                                    N: sdk.String("dicta"),
                                    Ns: []string{
                                        "maiores",
                                    },
                                    S: sdk.String("quasi"),
                                    Ss: []string{
                                        "nulla",
                                        "excepturi",
                                    },
                                },
                                "voluptatibus": shared.AttributeValue{
                                    B: sdk.String("nostrum"),
                                    Bs: []string{
                                        "quisquam",
                                        "saepe",
                                        "ea",
                                        "impedit",
                                    },
                                    N: sdk.String("corporis"),
                                    Ns: []string{
                                        "aliquid",
                                        "inventore",
                                    },
                                    S: sdk.String("magnam"),
                                    Ss: []string{
                                        "quo",
                                        "consectetur",
                                    },
                                },
                                "recusandae": shared.AttributeValue{
                                    B: sdk.String("aspernatur"),
                                    Bs: []string{
                                        "eaque",
                                        "a",
                                    },
                                    N: sdk.String("libero"),
                                    Ns: []string{
                                        "aut",
                                    },
                                    S: sdk.String("deleniti"),
                                    Ss: []string{
                                        "aliquam",
                                        "fugit",
                                        "accusamus",
                                        "inventore",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("non"),
                                    Bs: []string{
                                        "dolorum",
                                    },
                                    N: sdk.String("laborum"),
                                    Ns: []string{
                                        "velit",
                                        "eum",
                                        "autem",
                                        "nobis",
                                    },
                                    S: sdk.String("quas"),
                                    Ss: []string{
                                        "nulla",
                                        "voluptas",
                                        "libero",
                                        "quasi",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("tempora"),
                                    Bs: []string{
                                        "explicabo",
                                        "provident",
                                    },
                                    N: sdk.String("ipsa"),
                                    Ns: []string{
                                        "magnam",
                                        "odio",
                                    },
                                    S: sdk.String("eius"),
                                    Ss: []string{
                                        "esse",
                                        "rem",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "reprehenderit": shared.AttributeValue{
                                    B: sdk.String("quidem"),
                                    Bs: []string{
                                        "ut",
                                        "eum",
                                        "suscipit",
                                        "assumenda",
                                    },
                                    N: sdk.String("eos"),
                                    Ns: []string{
                                        "quisquam",
                                        "veritatis",
                                        "ipsa",
                                    },
                                    S: sdk.String("id"),
                                    Ss: []string{
                                        "neque",
                                        "quo",
                                        "illum",
                                    },
                                },
                                "quo": shared.AttributeValue{
                                    B: sdk.String("fuga"),
                                    Bs: []string{
                                        "eos",
                                        "voluptas",
                                    },
                                    N: sdk.String("ab"),
                                    Ns: []string{
                                        "consequatur",
                                        "tempora",
                                        "debitis",
                                    },
                                    S: sdk.String("ipsam"),
                                    Ss: []string{
                                        "sequi",
                                    },
                                },
                                "quo": shared.AttributeValue{
                                    B: sdk.String("esse"),
                                    Bs: []string{
                                        "aperiam",
                                        "distinctio",
                                        "quod",
                                        "dignissimos",
                                    },
                                    N: sdk.String("inventore"),
                                    Ns: []string{
                                        "totam",
                                        "accusamus",
                                    },
                                    S: sdk.String("aliquam"),
                                    Ss: []string{
                                        "occaecati",
                                        "commodi",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("sapiente"),
                                    Bs: []string{
                                        "deserunt",
                                    },
                                    N: sdk.String("molestiae"),
                                    Ns: []string{
                                        "porro",
                                    },
                                    S: sdk.String("eum"),
                                    Ss: []string{
                                        "praesentium",
                                        "consequuntur",
                                        "deleniti",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("fugit"),
                                    Bs: []string{
                                        "mollitia",
                                        "incidunt",
                                        "atque",
                                    },
                                    N: sdk.String("explicabo"),
                                    Ns: []string{
                                        "nisi",
                                        "fugit",
                                    },
                                    S: sdk.String("sapiente"),
                                    Ss: []string{
                                        "ratione",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "saepe": shared.AttributeValue{
                                    B: sdk.String("occaecati"),
                                    Bs: []string{
                                        "et",
                                        "esse",
                                        "eveniet",
                                    },
                                    N: sdk.String("accusamus"),
                                    Ns: []string{
                                        "esse",
                                    },
                                    S: sdk.String("quod"),
                                    Ss: []string{
                                        "vero",
                                        "aliquid",
                                        "quasi",
                                    },
                                },
                            },
                        },
                    },
                },
                "saepe": []shared.WriteRequest{
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("harum"),
                                    Bs: []string{
                                        "rerum",
                                        "occaecati",
                                    },
                                    N: sdk.String("minima"),
                                    Ns: []string{
                                        "eligendi",
                                        "sit",
                                        "culpa",
                                    },
                                    S: sdk.String("tempore"),
                                    Ss: []string{
                                        "cumque",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("consequuntur"),
                                    Bs: []string{
                                        "minus",
                                    },
                                    N: sdk.String("quaerat"),
                                    Ns: []string{
                                        "consectetur",
                                        "esse",
                                        "blanditiis",
                                        "provident",
                                    },
                                    S: sdk.String("a"),
                                    Ss: []string{
                                        "quas",
                                        "esse",
                                        "quasi",
                                        "a",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "sint": shared.AttributeValue{
                                    B: sdk.String("pariatur"),
                                    Bs: []string{
                                        "quia",
                                        "eveniet",
                                        "asperiores",
                                        "facere",
                                    },
                                    N: sdk.String("veritatis"),
                                    Ns: []string{
                                        "quasi",
                                    },
                                    S: sdk.String("similique"),
                                    Ss: []string{
                                        "aliquid",
                                        "tenetur",
                                        "quae",
                                    },
                                },
                                "earum": shared.AttributeValue{
                                    B: sdk.String("vel"),
                                    Bs: []string{
                                        "eius",
                                        "libero",
                                    },
                                    N: sdk.String("illum"),
                                    Ns: []string{
                                        "accusantium",
                                        "aliquam",
                                        "sapiente",
                                    },
                                    S: sdk.String("dicta"),
                                    Ss: []string{
                                        "reprehenderit",
                                        "ullam",
                                    },
                                },
                                "nisi": shared.AttributeValue{
                                    B: sdk.String("aut"),
                                    Bs: []string{
                                        "qui",
                                        "quibusdam",
                                        "ex",
                                    },
                                    N: sdk.String("deleniti"),
                                    Ns: []string{
                                        "dolorum",
                                        "architecto",
                                        "omnis",
                                        "tenetur",
                                    },
                                    S: sdk.String("quasi"),
                                    Ss: []string{
                                        "et",
                                        "voluptate",
                                        "ipsa",
                                        "minima",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("veritatis"),
                                    Bs: []string{
                                        "adipisci",
                                    },
                                    N: sdk.String("iste"),
                                    Ns: []string{
                                        "accusantium",
                                        "rem",
                                        "aut",
                                        "laudantium",
                                    },
                                    S: sdk.String("eum"),
                                    Ss: []string{
                                        "ab",
                                        "corrupti",
                                        "non",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("voluptatem"),
                                    Bs: []string{
                                        "occaecati",
                                    },
                                    N: sdk.String("numquam"),
                                    Ns: []string{
                                        "explicabo",
                                        "voluptas",
                                        "aut",
                                        "dignissimos",
                                    },
                                    S: sdk.String("dicta"),
                                    Ss: []string{
                                        "natus",
                                        "velit",
                                        "voluptatibus",
                                        "voluptas",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "aperiam": shared.AttributeValue{
                                    B: sdk.String("ea"),
                                    Bs: []string{
                                        "consequuntur",
                                        "repellendus",
                                    },
                                    N: sdk.String("officia"),
                                    Ns: []string{
                                        "dignissimos",
                                        "officia",
                                        "asperiores",
                                        "nemo",
                                    },
                                    S: sdk.String("quae"),
                                    Ss: []string{
                                        "porro",
                                        "quod",
                                    },
                                },
                                "labore": shared.AttributeValue{
                                    B: sdk.String("ab"),
                                    Bs: []string{
                                        "fuga",
                                    },
                                    N: sdk.String("id"),
                                    Ns: []string{
                                        "velit",
                                        "culpa",
                                    },
                                    S: sdk.String("est"),
                                    Ss: []string{
                                        "totam",
                                        "fugiat",
                                        "vel",
                                        "ducimus",
                                    },
                                },
                                "quos": shared.AttributeValue{
                                    B: sdk.String("vel"),
                                    Bs: []string{
                                        "possimus",
                                        "facilis",
                                    },
                                    N: sdk.String("cum"),
                                    Ns: []string{
                                        "in",
                                        "corporis",
                                    },
                                    S: sdk.String("reiciendis"),
                                    Ss: []string{
                                        "nemo",
                                        "recusandae",
                                        "aliquid",
                                        "aperiam",
                                    },
                                },
                                "cum": shared.AttributeValue{
                                    B: sdk.String("consectetur"),
                                    Bs: []string{
                                        "exercitationem",
                                        "earum",
                                    },
                                    N: sdk.String("facere"),
                                    Ns: []string{
                                        "doloribus",
                                        "suscipit",
                                    },
                                    S: sdk.String("reiciendis"),
                                    Ss: []string{
                                        "saepe",
                                        "necessitatibus",
                                        "dolore",
                                    },
                                },
                            },
                        },
                    },
                },
                "sunt": []shared.WriteRequest{
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("adipisci"),
                                    Bs: []string{
                                        "amet",
                                    },
                                    N: sdk.String("beatae"),
                                    Ns: []string{
                                        "a",
                                        "debitis",
                                    },
                                    S: sdk.String("consectetur"),
                                    Ss: []string{
                                        "harum",
                                        "laboriosam",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("ipsa"),
                                    Bs: []string{
                                        "libero",
                                        "vitae",
                                        "accusamus",
                                        "similique",
                                    },
                                    N: sdk.String("tempora"),
                                    Ns: []string{
                                        "voluptas",
                                    },
                                    S: sdk.String("voluptas"),
                                    Ss: []string{
                                        "minima",
                                        "nobis",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "adipisci": shared.AttributeValue{
                                    B: sdk.String("minus"),
                                    Bs: []string{
                                        "blanditiis",
                                    },
                                    N: sdk.String("in"),
                                    Ns: []string{
                                        "aliquam",
                                        "officiis",
                                    },
                                    S: sdk.String("temporibus"),
                                    Ss: []string{
                                        "adipisci",
                                        "cum",
                                    },
                                },
                                "blanditiis": shared.AttributeValue{
                                    B: sdk.String("quas"),
                                    Bs: []string{
                                        "nesciunt",
                                        "culpa",
                                        "corrupti",
                                        "pariatur",
                                    },
                                    N: sdk.String("totam"),
                                    Ns: []string{
                                        "exercitationem",
                                        "nobis",
                                        "sit",
                                        "rerum",
                                    },
                                    S: sdk.String("sed"),
                                    Ss: []string{
                                        "explicabo",
                                        "asperiores",
                                        "facilis",
                                        "voluptate",
                                    },
                                },
                                "expedita": shared.AttributeValue{
                                    B: sdk.String("ab"),
                                    Bs: []string{
                                        "dolore",
                                        "laborum",
                                        "sed",
                                    },
                                    N: sdk.String("in"),
                                    Ns: []string{
                                        "quidem",
                                        "explicabo",
                                    },
                                    S: sdk.String("voluptas"),
                                    Ss: []string{
                                        "architecto",
                                        "suscipit",
                                        "sapiente",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("debitis"),
                                    Bs: []string{
                                        "reiciendis",
                                    },
                                    N: sdk.String("perferendis"),
                                    Ns: []string{
                                        "maiores",
                                        "incidunt",
                                        "sed",
                                    },
                                    S: sdk.String("provident"),
                                    Ss: []string{
                                        "necessitatibus",
                                        "ipsum",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("ea"),
                                    Bs: []string{
                                        "quos",
                                        "voluptatibus",
                                        "tempora",
                                    },
                                    N: sdk.String("tempora"),
                                    Ns: []string{
                                        "reiciendis",
                                        "ex",
                                    },
                                    S: sdk.String("sit"),
                                    Ss: []string{
                                        "officiis",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "facilis": shared.AttributeValue{
                                    B: sdk.String("quaerat"),
                                    Bs: []string{
                                        "ipsam",
                                        "debitis",
                                    },
                                    N: sdk.String("rem"),
                                    Ns: []string{
                                        "nobis",
                                    },
                                    S: sdk.String("error"),
                                    Ss: []string{
                                        "minima",
                                        "recusandae",
                                    },
                                },
                                "reiciendis": shared.AttributeValue{
                                    B: sdk.String("nulla"),
                                    Bs: []string{
                                        "aperiam",
                                    },
                                    N: sdk.String("saepe"),
                                    Ns: []string{
                                        "veniam",
                                        "in",
                                    },
                                    S: sdk.String("officiis"),
                                    Ss: []string{
                                        "laudantium",
                                    },
                                },
                                "exercitationem": shared.AttributeValue{
                                    B: sdk.String("praesentium"),
                                    Bs: []string{
                                        "laboriosam",
                                        "dolorum",
                                        "voluptatum",
                                    },
                                    N: sdk.String("error"),
                                    Ns: []string{
                                        "expedita",
                                        "debitis",
                                        "neque",
                                        "dolorum",
                                    },
                                    S: sdk.String("nostrum"),
                                    Ss: []string{
                                        "dolorum",
                                        "corrupti",
                                        "accusamus",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("tempora"),
                                    Bs: []string{
                                        "fugit",
                                        "ut",
                                        "fugiat",
                                    },
                                    N: sdk.String("voluptatem"),
                                    Ns: []string{
                                        "expedita",
                                        "magnam",
                                        "consequatur",
                                    },
                                    S: sdk.String("esse"),
                                    Ss: []string{
                                        "sit",
                                        "voluptatum",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("quas"),
                                    Bs: []string{
                                        "corporis",
                                        "et",
                                        "blanditiis",
                                        "ex",
                                    },
                                    N: sdk.String("sed"),
                                    Ns: []string{
                                        "vel",
                                    },
                                    S: sdk.String("nostrum"),
                                    Ss: []string{
                                        "error",
                                        "consequatur",
                                        "incidunt",
                                        "reiciendis",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "harum": shared.AttributeValue{
                                    B: sdk.String("dicta"),
                                    Bs: []string{
                                        "occaecati",
                                    },
                                    N: sdk.String("labore"),
                                    Ns: []string{
                                        "atque",
                                        "laborum",
                                        "nam",
                                    },
                                    S: sdk.String("tenetur"),
                                    Ss: []string{
                                        "alias",
                                        "amet",
                                    },
                                },
                            },
                        },
                    },
                    shared.WriteRequest{
                        DeleteRequest: &shared.DeleteRequest{
                            Key: shared.Key{
                                HashKeyElement: shared.AttributeValue{
                                    B: sdk.String("deserunt"),
                                    Bs: []string{
                                        "unde",
                                        "reiciendis",
                                    },
                                    N: sdk.String("provident"),
                                    Ns: []string{
                                        "delectus",
                                        "voluptates",
                                        "perferendis",
                                        "est",
                                    },
                                    S: sdk.String("quidem"),
                                    Ss: []string{
                                        "facere",
                                        "fuga",
                                    },
                                },
                                RangeKeyElement: &shared.AttributeValue{
                                    B: sdk.String("praesentium"),
                                    Bs: []string{
                                        "veniam",
                                        "voluptatem",
                                        "quisquam",
                                    },
                                    N: sdk.String("repudiandae"),
                                    Ns: []string{
                                        "atque",
                                    },
                                    S: sdk.String("reprehenderit"),
                                    Ss: []string{
                                        "totam",
                                        "suscipit",
                                        "quidem",
                                        "maxime",
                                    },
                                },
                            },
                        },
                        PutRequest: &shared.PutRequest{
                            Item: map[string]shared.AttributeValue{
                                "esse": shared.AttributeValue{
                                    B: sdk.String("amet"),
                                    Bs: []string{
                                        "ea",
                                        "atque",
                                        "error",
                                        "officiis",
                                    },
                                    N: sdk.String("officiis"),
                                    Ns: []string{
                                        "natus",
                                        "minima",
                                        "aspernatur",
                                        "ex",
                                    },
                                    S: sdk.String("maiores"),
                                    Ss: []string{
                                        "at",
                                        "error",
                                        "blanditiis",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.BatchWriteItemXAmzTargetEnumDynamoDb20111205BatchWriteItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchWriteItemOutput != nil {
        // handle response
    }
}
```

## CreateTable

<p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTable(ctx, operations.CreateTableRequest{
        CreateTableInput: shared.CreateTableInput{
            KeySchema: shared.KeySchema{
                HashKeyElement: shared.KeySchemaElement{
                    AttributeName: "repellendus",
                    AttributeType: shared.ScalarAttributeTypeEnumS,
                },
                RangeKeyElement: &shared.KeySchemaElement{
                    AttributeName: "reiciendis",
                    AttributeType: shared.ScalarAttributeTypeEnumS,
                },
            },
            ProvisionedThroughput: shared.ProvisionedThroughput{
                ReadCapacityUnits: 919783,
                WriteCapacityUnits: 116098,
            },
            TableName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("laboriosam"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.CreateTableXAmzTargetEnumDynamoDb20111205CreateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTableOutput != nil {
        // handle response
    }
}
```

## DeleteItem

<p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteItem(ctx, operations.DeleteItemRequest{
        DeleteItemInput: shared.DeleteItemInput{
            Expected: map[string]shared.ExpectedAttributeValue{
                "saepe": shared.ExpectedAttributeValue{
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("consequuntur"),
                        Bs: []string{
                            "officiis",
                            "perspiciatis",
                            "in",
                        },
                        N: sdk.String("adipisci"),
                        Ns: []string{
                            "occaecati",
                            "consequuntur",
                            "fugit",
                            "id",
                        },
                        S: sdk.String("quis"),
                        Ss: []string{
                            "error",
                            "illo",
                        },
                    },
                },
                "corporis": shared.ExpectedAttributeValue{
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("quidem"),
                        Bs: []string{
                            "non",
                            "vero",
                            "doloremque",
                            "iure",
                        },
                        N: sdk.String("ipsa"),
                        Ns: []string{
                            "quae",
                            "molestiae",
                            "eveniet",
                        },
                        S: sdk.String("qui"),
                        Ss: []string{
                            "iure",
                            "necessitatibus",
                            "ratione",
                        },
                    },
                },
            },
            Key: shared.Key{
                HashKeyElement: shared.AttributeValue{
                    B: sdk.String("laborum"),
                    Bs: []string{
                        "voluptatum",
                        "rem",
                        "aliquam",
                    },
                    N: sdk.String("ad"),
                    Ns: []string{
                        "alias",
                        "corporis",
                        "perspiciatis",
                        "nihil",
                    },
                    S: sdk.String("mollitia"),
                    Ss: []string{
                        "alias",
                        "maiores",
                    },
                },
                RangeKeyElement: &shared.AttributeValue{
                    B: sdk.String("reiciendis"),
                    Bs: []string{
                        "id",
                    },
                    N: sdk.String("minima"),
                    Ns: []string{
                        "dolorum",
                        "nesciunt",
                    },
                    S: sdk.String("quae"),
                    Ss: []string{
                        "omnis",
                        "quaerat",
                        "molestiae",
                        "ex",
                    },
                },
            },
            ReturnValues: shared.ReturnValueEnumAllOld.ToPointer(),
            TableName: "culpa",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.DeleteItemXAmzTargetEnumDynamoDb20111205DeleteItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteItemOutput != nil {
        // handle response
    }
}
```

## DeleteTable

<p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTable(ctx, operations.DeleteTableRequest{
        DeleteTableInput: shared.DeleteTableInput{
            TableName: "provident",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DeleteTableXAmzTargetEnumDynamoDb20111205DeleteTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTableOutput != nil {
        // handle response
    }
}
```

## DescribeTable

<p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTable(ctx, operations.DescribeTableRequest{
        DescribeTableInput: shared.DescribeTableInput{
            TableName: "animi",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DescribeTableXAmzTargetEnumDynamoDb20111205DescribeTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTableOutput != nil {
        // handle response
    }
}
```

## GetItem

<p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetItem(ctx, operations.GetItemRequest{
        GetItemInput: shared.GetItemInput{
            AttributesToGet: []string{
                "repellat",
            },
            ConsistentRead: sdk.Bool(false),
            Key: shared.Key{
                HashKeyElement: shared.AttributeValue{
                    B: sdk.String("doloribus"),
                    Bs: []string{
                        "in",
                        "nam",
                    },
                    N: sdk.String("earum"),
                    Ns: []string{
                        "laborum",
                        "placeat",
                        "modi",
                    },
                    S: sdk.String("voluptatibus"),
                    Ss: []string{
                        "officiis",
                        "sapiente",
                        "cumque",
                    },
                },
                RangeKeyElement: &shared.AttributeValue{
                    B: sdk.String("vitae"),
                    Bs: []string{
                        "tempora",
                        "quis",
                        "inventore",
                    },
                    N: sdk.String("fugit"),
                    Ns: []string{
                        "quae",
                        "perferendis",
                        "velit",
                        "aspernatur",
                    },
                    S: sdk.String("eum"),
                    Ss: []string{
                        "rem",
                        "at",
                    },
                },
            },
            TableName: "impedit",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.GetItemXAmzTargetEnumDynamoDb20111205GetItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetItemOutput != nil {
        // handle response
    }
}
```

## ListTables

Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTables(ctx, operations.ListTablesRequest{
        ExclusiveStartTableName: sdk.String("provident"),
        Limit: sdk.String("earum"),
        ListTablesInput: shared.ListTablesInput{
            ExclusiveStartTableName: sdk.String("soluta"),
            Limit: sdk.Int64(940782),
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.ListTablesXAmzTargetEnumDynamoDb20111205ListTables,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTablesOutput != nil {
        // handle response
    }
}
```

## PutItem

<p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutItem(ctx, operations.PutItemRequest{
        PutItemInput: shared.PutItemInput{
            Expected: map[string]shared.ExpectedAttributeValue{
                "suscipit": shared.ExpectedAttributeValue{
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("dolorem"),
                        Bs: []string{
                            "cumque",
                        },
                        N: sdk.String("fuga"),
                        Ns: []string{
                            "animi",
                        },
                        S: sdk.String("necessitatibus"),
                        Ss: []string{
                            "consequatur",
                            "quasi",
                            "et",
                            "ducimus",
                        },
                    },
                },
                "natus": shared.ExpectedAttributeValue{
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("occaecati"),
                        Bs: []string{
                            "adipisci",
                            "quasi",
                        },
                        N: sdk.String("magni"),
                        Ns: []string{
                            "nulla",
                            "necessitatibus",
                            "ipsa",
                            "tempora",
                        },
                        S: sdk.String("nihil"),
                        Ss: []string{
                            "dicta",
                            "iusto",
                        },
                    },
                },
                "esse": shared.ExpectedAttributeValue{
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("praesentium"),
                        Bs: []string{
                            "reiciendis",
                            "vel",
                            "architecto",
                            "fugiat",
                        },
                        N: sdk.String("doloremque"),
                        Ns: []string{
                            "odio",
                        },
                        S: sdk.String("tempora"),
                        Ss: []string{
                            "ex",
                            "consectetur",
                        },
                    },
                },
                "aliquid": shared.ExpectedAttributeValue{
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("ipsa"),
                        Bs: []string{
                            "sunt",
                            "nostrum",
                            "fugiat",
                        },
                        N: sdk.String("expedita"),
                        Ns: []string{
                            "officia",
                            "suscipit",
                        },
                        S: sdk.String("aliquid"),
                        Ss: []string{
                            "eum",
                        },
                    },
                },
            },
            Item: map[string]shared.AttributeValue{
                "iste": shared.AttributeValue{
                    B: sdk.String("id"),
                    Bs: []string{
                        "error",
                    },
                    N: sdk.String("possimus"),
                    Ns: []string{
                        "mollitia",
                        "laborum",
                        "libero",
                        "ad",
                    },
                    S: sdk.String("deleniti"),
                    Ss: []string{
                        "vitae",
                        "repellendus",
                    },
                },
                "ex": shared.AttributeValue{
                    B: sdk.String("quo"),
                    Bs: []string{
                        "ut",
                        "ad",
                    },
                    N: sdk.String("expedita"),
                    Ns: []string{
                        "molestias",
                    },
                    S: sdk.String("cum"),
                    Ss: []string{
                        "beatae",
                        "voluptatum",
                    },
                },
            },
            ReturnValues: shared.ReturnValueEnumAllNew.ToPointer(),
            TableName: "veritatis",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.PutItemXAmzTargetEnumDynamoDb20111205PutItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutItemOutput != nil {
        // handle response
    }
}
```

## Query

<p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Query(ctx, operations.QueryRequest{
        ExclusiveStartKey: sdk.String("fuga"),
        Limit: sdk.String("pariatur"),
        QueryInput: shared.QueryInput{
            AttributesToGet: []string{
                "voluptatem",
                "alias",
                "deleniti",
                "earum",
            },
            ConsistentRead: sdk.Bool(false),
            Count: sdk.Bool(false),
            ExclusiveStartKey: &shared.Key{
                HashKeyElement: shared.AttributeValue{
                    B: sdk.String("ex"),
                    Bs: []string{
                        "rem",
                        "minus",
                        "nemo",
                        "asperiores",
                    },
                    N: sdk.String("ratione"),
                    Ns: []string{
                        "perferendis",
                        "illum",
                    },
                    S: sdk.String("totam"),
                    Ss: []string{
                        "quibusdam",
                        "nam",
                        "ipsam",
                        "culpa",
                    },
                },
                RangeKeyElement: &shared.AttributeValue{
                    B: sdk.String("dolor"),
                    Bs: []string{
                        "inventore",
                        "deleniti",
                    },
                    N: sdk.String("veritatis"),
                    Ns: []string{
                        "dolor",
                        "consequatur",
                    },
                    S: sdk.String("architecto"),
                    Ss: []string{
                        "modi",
                    },
                },
            },
            HashKeyValue: shared.AttributeValue{
                B: sdk.String("fugit"),
                Bs: []string{
                    "laudantium",
                },
                N: sdk.String("quae"),
                Ns: []string{
                    "fugiat",
                },
                S: sdk.String("ipsam"),
                Ss: []string{
                    "ipsa",
                },
            },
            Limit: sdk.Int64(559682),
            RangeKeyCondition: &shared.Condition{
                AttributeValueList: []shared.AttributeValue{
                    shared.AttributeValue{
                        B: sdk.String("impedit"),
                        Bs: []string{
                            "esse",
                            "necessitatibus",
                            "sed",
                            "veniam",
                        },
                        N: sdk.String("nesciunt"),
                        Ns: []string{
                            "eum",
                            "vel",
                            "voluptatum",
                        },
                        S: sdk.String("magnam"),
                        Ss: []string{
                            "ab",
                            "porro",
                        },
                    },
                    shared.AttributeValue{
                        B: sdk.String("autem"),
                        Bs: []string{
                            "laboriosam",
                            "recusandae",
                            "consequuntur",
                            "voluptatem",
                        },
                        N: sdk.String("exercitationem"),
                        Ns: []string{
                            "quasi",
                            "nisi",
                            "at",
                            "vero",
                        },
                        S: sdk.String("est"),
                        Ss: []string{
                            "sequi",
                            "doloribus",
                            "repudiandae",
                        },
                    },
                    shared.AttributeValue{
                        B: sdk.String("optio"),
                        Bs: []string{
                            "nemo",
                            "voluptate",
                            "blanditiis",
                        },
                        N: sdk.String("officia"),
                        Ns: []string{
                            "numquam",
                            "nemo",
                        },
                        S: sdk.String("quos"),
                        Ss: []string{
                            "aspernatur",
                            "ducimus",
                        },
                    },
                    shared.AttributeValue{
                        B: sdk.String("nesciunt"),
                        Bs: []string{
                            "laudantium",
                            "incidunt",
                            "quasi",
                        },
                        N: sdk.String("rem"),
                        Ns: []string{
                            "dicta",
                            "nisi",
                            "consequuntur",
                            "consectetur",
                        },
                        S: sdk.String("aperiam"),
                        Ss: []string{
                            "reiciendis",
                            "soluta",
                            "alias",
                        },
                    },
                },
                ComparisonOperator: shared.ComparisonOperatorEnumBetween,
            },
            ScanIndexForward: sdk.Bool(false),
            TableName: "eos",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.QueryXAmzTargetEnumDynamoDb20111205Query,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryOutput != nil {
        // handle response
    }
}
```

## Scan

<p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Scan(ctx, operations.ScanRequest{
        ExclusiveStartKey: sdk.String("distinctio"),
        Limit: sdk.String("omnis"),
        ScanInput: shared.ScanInput{
            AttributesToGet: []string{
                "minima",
                "praesentium",
                "maxime",
                "magnam",
            },
            Count: sdk.Bool(false),
            ExclusiveStartKey: &shared.Key{
                HashKeyElement: shared.AttributeValue{
                    B: sdk.String("temporibus"),
                    Bs: []string{
                        "commodi",
                        "itaque",
                        "commodi",
                    },
                    N: sdk.String("totam"),
                    Ns: []string{
                        "modi",
                        "nam",
                        "vero",
                        "voluptatem",
                    },
                    S: sdk.String("ipsam"),
                    Ss: []string{
                        "alias",
                        "quasi",
                    },
                },
                RangeKeyElement: &shared.AttributeValue{
                    B: sdk.String("non"),
                    Bs: []string{
                        "enim",
                        "sint",
                        "nulla",
                        "deserunt",
                    },
                    N: sdk.String("esse"),
                    Ns: []string{
                        "reprehenderit",
                        "est",
                    },
                    S: sdk.String("quis"),
                    Ss: []string{
                        "accusamus",
                        "impedit",
                        "hic",
                    },
                },
            },
            Limit: sdk.Int64(900103),
            ScanFilter: map[string]shared.Condition{
                "ex": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("debitis"),
                            Bs: []string{
                                "quae",
                                "minus",
                                "fuga",
                                "laborum",
                            },
                            N: sdk.String("consectetur"),
                            Ns: []string{
                                "atque",
                            },
                            S: sdk.String("ipsum"),
                            Ss: []string{
                                "magni",
                                "soluta",
                                "repudiandae",
                                "nam",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("dolore"),
                            Bs: []string{
                                "voluptate",
                                "sequi",
                            },
                            N: sdk.String("dignissimos"),
                            Ns: []string{
                                "quo",
                            },
                            S: sdk.String("deleniti"),
                            Ss: []string{
                                "iure",
                                "odit",
                                "voluptatibus",
                                "vel",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumLe,
                },
                "quibusdam": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("facere"),
                            Bs: []string{
                                "architecto",
                                "voluptatibus",
                                "quia",
                            },
                            N: sdk.String("porro"),
                            Ns: []string{
                                "velit",
                                "illo",
                            },
                            S: sdk.String("accusantium"),
                            Ss: []string{
                                "ea",
                                "beatae",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumNotContains,
                },
                "excepturi": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("velit"),
                            Bs: []string{
                                "perspiciatis",
                                "earum",
                            },
                            N: sdk.String("dicta"),
                            Ns: []string{
                                "voluptatibus",
                                "iste",
                                "itaque",
                                "alias",
                            },
                            S: sdk.String("nisi"),
                            Ss: []string{
                                "velit",
                                "laborum",
                                "non",
                                "dolor",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("iusto"),
                            Bs: []string{
                                "doloremque",
                            },
                            N: sdk.String("consequatur"),
                            Ns: []string{
                                "recusandae",
                                "ea",
                                "quidem",
                            },
                            S: sdk.String("voluptas"),
                            Ss: []string{
                                "placeat",
                                "perspiciatis",
                                "expedita",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumGt,
                },
                "a": shared.Condition{
                    AttributeValueList: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("ullam"),
                            Bs: []string{
                                "necessitatibus",
                                "animi",
                                "impedit",
                            },
                            N: sdk.String("ipsam"),
                            Ns: []string{
                                "est",
                                "error",
                            },
                            S: sdk.String("esse"),
                            Ss: []string{
                                "veritatis",
                                "vero",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("consectetur"),
                            Bs: []string{
                                "inventore",
                            },
                            N: sdk.String("dolorem"),
                            Ns: []string{
                                "qui",
                                "iste",
                            },
                            S: sdk.String("ex"),
                            Ss: []string{
                                "soluta",
                                "libero",
                            },
                        },
                    },
                    ComparisonOperator: shared.ComparisonOperatorEnumGt,
                },
            },
            TableName: "dolorum",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.ScanXAmzTargetEnumDynamoDb20111205Scan,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanOutput != nil {
        // handle response
    }
}
```

## UpdateItem

<p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateItem(ctx, operations.UpdateItemRequest{
        UpdateItemInput: shared.UpdateItemInput{
            AttributeUpdates: map[string]shared.AttributeValueUpdate{
                "neque": shared.AttributeValueUpdate{
                    Action: shared.AttributeActionEnumPut.ToPointer(),
                    Value: &shared.AttributeValue{
                        B: sdk.String("itaque"),
                        Bs: []string{
                            "ipsum",
                        },
                        N: sdk.String("unde"),
                        Ns: []string{
                            "distinctio",
                            "maxime",
                            "quia",
                            "quia",
                        },
                        S: sdk.String("nostrum"),
                        Ss: []string{
                            "libero",
                            "dicta",
                            "id",
                        },
                    },
                },
                "libero": shared.AttributeValueUpdate{
                    Action: shared.AttributeActionEnumDelete.ToPointer(),
                    Value: &shared.AttributeValue{
                        B: sdk.String("officia"),
                        Bs: []string{
                            "placeat",
                            "sit",
                            "iusto",
                        },
                        N: sdk.String("ipsa"),
                        Ns: []string{
                            "inventore",
                            "aperiam",
                            "totam",
                            "dolore",
                        },
                        S: sdk.String("eligendi"),
                        Ss: []string{
                            "voluptatem",
                            "autem",
                            "esse",
                        },
                    },
                },
            },
            Expected: map[string]shared.ExpectedAttributeValue{
                "assumenda": shared.ExpectedAttributeValue{
                    Exists: sdk.Bool(false),
                    Value: &shared.AttributeValue{
                        B: sdk.String("beatae"),
                        Bs: []string{
                            "facere",
                            "corrupti",
                            "molestiae",
                        },
                        N: sdk.String("provident"),
                        Ns: []string{
                            "necessitatibus",
                            "tempore",
                            "sint",
                            "ea",
                        },
                        S: sdk.String("autem"),
                        Ss: []string{
                            "rerum",
                            "laudantium",
                        },
                    },
                },
            },
            Key: shared.Key{
                HashKeyElement: shared.AttributeValue{
                    B: sdk.String("corporis"),
                    Bs: []string{
                        "voluptatibus",
                        "cum",
                        "at",
                        "alias",
                    },
                    N: sdk.String("quia"),
                    Ns: []string{
                        "fuga",
                        "repudiandae",
                        "accusantium",
                    },
                    S: sdk.String("expedita"),
                    Ss: []string{
                        "eos",
                        "quibusdam",
                        "odio",
                        "praesentium",
                    },
                },
                RangeKeyElement: &shared.AttributeValue{
                    B: sdk.String("odit"),
                    Bs: []string{
                        "corporis",
                    },
                    N: sdk.String("error"),
                    Ns: []string{
                        "adipisci",
                        "recusandae",
                        "similique",
                        "ut",
                    },
                    S: sdk.String("quidem"),
                    Ss: []string{
                        "beatae",
                        "unde",
                    },
                },
            },
            ReturnValues: shared.ReturnValueEnumUpdatedOld.ToPointer(),
            TableName: "delectus",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.UpdateItemXAmzTargetEnumDynamoDb20111205UpdateItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateItemOutput != nil {
        // handle response
    }
}
```

## UpdateTable

<p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTable(ctx, operations.UpdateTableRequest{
        UpdateTableInput: shared.UpdateTableInput{
            ProvisionedThroughput: shared.ProvisionedThroughput{
                ReadCapacityUnits: 491892,
                WriteCapacityUnits: 760744,
            },
            TableName: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.UpdateTableXAmzTargetEnumDynamoDb20111205UpdateTable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTableOutput != nil {
        // handle response
    }
}
```
