# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/dynamodb/2011-12-05/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchGetItemRequest{
        QueryParams: operations.BatchGetItemQueryParams{
            RequestItems: "corrupti",
        },
        Headers: operations.BatchGetItemHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
            XAmzTarget: "DynamoDB_20111205.BatchGetItem",
        },
        Request: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "error": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "ipsa",
                                Bs: []string{
                                    "tempora",
                                    "suscipit",
                                    "molestiae",
                                    "minus",
                                },
                                N: "placeat",
                                Ns: []string{
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                                S: "recusandae",
                                Ss: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "perferendis",
                                Bs: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                                N: "quo",
                                Ns: []string{
                                    "at",
                                },
                                S: "at",
                                Ss: []string{
                                    "molestiae",
                                    "quod",
                                    "quod",
                                    "esse",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "totam",
                                Bs: []string{
                                    "dolorum",
                                    "dicta",
                                    "nam",
                                    "officia",
                                },
                                N: "occaecati",
                                Ns: []string{
                                    "deleniti",
                                },
                                S: "hic",
                                Ss: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "modi",
                                Bs: []string{
                                    "impedit",
                                },
                                N: "cum",
                                Ns: []string{
                                    "ipsum",
                                    "excepturi",
                                },
                                S: "aspernatur",
                                Ss: []string{
                                    "ad",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "natus",
                                Bs: []string{
                                    "iste",
                                },
                                N: "dolor",
                                Ns: []string{
                                    "laboriosam",
                                    "hic",
                                    "saepe",
                                },
                                S: "fuga",
                                Ss: []string{
                                    "corporis",
                                    "iste",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "iure",
                                Bs: []string{
                                    "quidem",
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                                N: "est",
                                Ns: []string{
                                    "laborum",
                                    "dolores",
                                    "dolorem",
                                },
                                S: "corporis",
                                Ss: []string{
                                    "nobis",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "enim",
                                Bs: []string{
                                    "nemo",
                                    "minima",
                                    "excepturi",
                                },
                                N: "accusantium",
                                Ns: []string{
                                    "culpa",
                                    "doloribus",
                                },
                                S: "sapiente",
                                Ss: []string{
                                    "mollitia",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "dolorem",
                                Bs: []string{
                                    "consequuntur",
                                    "repellat",
                                    "mollitia",
                                },
                                N: "occaecati",
                                Ns: []string{
                                    "commodi",
                                    "quam",
                                },
                                S: "molestiae",
                                Ss: []string{
                                    "error",
                                },
                            },
                        },
                    },
                },
                "quia": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "vitae",
                        "laborum",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "enim",
                                Bs: []string{
                                    "quo",
                                },
                                N: "sequi",
                                Ns: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                                S: "quasi",
                                Ss: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "reiciendis",
                                Bs: []string{
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                    "voluptatibus",
                                },
                                N: "ipsa",
                                Ns: []string{
                                    "voluptate",
                                    "cum",
                                    "perferendis",
                                },
                                S: "doloremque",
                                Ss: []string{
                                    "ut",
                                    "maiores",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "dicta",
                                Bs: []string{
                                    "dolore",
                                    "iusto",
                                },
                                N: "dicta",
                                Ns: []string{
                                    "enim",
                                    "accusamus",
                                    "commodi",
                                },
                                S: "repudiandae",
                                Ss: []string{
                                    "ipsum",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "quidem",
                                Bs: []string{
                                    "excepturi",
                                    "pariatur",
                                    "modi",
                                },
                                N: "praesentium",
                                Ns: []string{
                                    "voluptates",
                                    "quasi",
                                    "repudiandae",
                                },
                                S: "sint",
                                Ss: []string{
                                    "itaque",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "incidunt",
                                Bs: []string{
                                    "consequatur",
                                    "est",
                                },
                                N: "quibusdam",
                                Ns: []string{
                                    "deserunt",
                                },
                                S: "distinctio",
                                Ss: []string{
                                    "labore",
                                    "modi",
                                    "qui",
                                    "aliquid",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "cupiditate",
                                Bs: []string{
                                    "perferendis",
                                    "magni",
                                    "assumenda",
                                },
                                N: "ipsam",
                                Ns: []string{
                                    "fugit",
                                },
                                S: "dolorum",
                                Ss: []string{
                                    "tempora",
                                    "facilis",
                                    "tempore",
                                },
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchGetItem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetItemOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchGetItem` - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* `BatchWriteItem` - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* `CreateTable` - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* `DeleteItem` - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* `DeleteTable` - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `DescribeTable` - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* `GetItem` - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* `ListTables` - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* `PutItem` - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* `Query` - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* `Scan` - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* `UpdateItem` - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* `UpdateTable` - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
