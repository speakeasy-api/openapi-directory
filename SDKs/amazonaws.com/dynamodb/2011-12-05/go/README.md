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
    res, err := s.BatchGetItem(ctx, operations.BatchGetItemRequest{
        BatchGetItemInput: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "provident": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "quibusdam",
                        "unde",
                        "nulla",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("illum"),
                                Bs: []string{
                                    "error",
                                    "deserunt",
                                },
                                N: sdk.String("suscipit"),
                                Ns: []string{
                                    "magnam",
                                    "debitis",
                                },
                                S: sdk.String("ipsa"),
                                Ss: []string{
                                    "tempora",
                                    "suscipit",
                                    "molestiae",
                                    "minus",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("placeat"),
                                Bs: []string{
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                                N: sdk.String("recusandae"),
                                Ns: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                                S: sdk.String("perferendis"),
                                Ss: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("quo"),
                                Bs: []string{
                                    "at",
                                },
                                N: sdk.String("at"),
                                Ns: []string{
                                    "molestiae",
                                    "quod",
                                    "quod",
                                    "esse",
                                },
                                S: sdk.String("totam"),
                                Ss: []string{
                                    "dolorum",
                                    "dicta",
                                    "nam",
                                    "officia",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("occaecati"),
                                Bs: []string{
                                    "deleniti",
                                },
                                N: sdk.String("hic"),
                                Ns: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                                S: sdk.String("modi"),
                                Ss: []string{
                                    "impedit",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("cum"),
                                Bs: []string{
                                    "ipsum",
                                    "excepturi",
                                },
                                N: sdk.String("aspernatur"),
                                Ns: []string{
                                    "ad",
                                },
                                S: sdk.String("natus"),
                                Ss: []string{
                                    "iste",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("dolor"),
                                Bs: []string{
                                    "laboriosam",
                                    "hic",
                                    "saepe",
                                },
                                N: sdk.String("fuga"),
                                Ns: []string{
                                    "corporis",
                                    "iste",
                                },
                                S: sdk.String("iure"),
                                Ss: []string{
                                    "quidem",
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                            },
                        },
                    },
                },
                "est": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "laborum",
                        "dolores",
                        "dolorem",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("explicabo"),
                                Bs: []string{
                                    "enim",
                                    "omnis",
                                    "nemo",
                                    "minima",
                                },
                                N: sdk.String("excepturi"),
                                Ns: []string{
                                    "iure",
                                },
                                S: sdk.String("culpa"),
                                Ss: []string{
                                    "sapiente",
                                    "architecto",
                                    "mollitia",
                                    "dolorem",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("culpa"),
                                Bs: []string{
                                    "repellat",
                                },
                                N: sdk.String("mollitia"),
                                Ns: []string{
                                    "numquam",
                                    "commodi",
                                    "quam",
                                },
                                S: sdk.String("molestiae"),
                                Ss: []string{
                                    "error",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("quia"),
                                Bs: []string{
                                    "vitae",
                                    "laborum",
                                },
                                N: sdk.String("animi"),
                                Ns: []string{
                                    "odit",
                                    "quo",
                                },
                                S: sdk.String("sequi"),
                                Ss: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("quasi"),
                                Bs: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                                N: sdk.String("reiciendis"),
                                Ns: []string{
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                    "voluptatibus",
                                },
                                S: sdk.String("ipsa"),
                                Ss: []string{
                                    "voluptate",
                                    "cum",
                                    "perferendis",
                                },
                            },
                        },
                    },
                },
                "doloremque": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "ut",
                        "maiores",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("corporis"),
                                Bs: []string{
                                    "iusto",
                                    "dicta",
                                },
                                N: sdk.String("harum"),
                                Ns: []string{
                                    "accusamus",
                                    "commodi",
                                },
                                S: sdk.String("repudiandae"),
                                Ss: []string{
                                    "ipsum",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("quidem"),
                                Bs: []string{
                                    "excepturi",
                                    "pariatur",
                                    "modi",
                                },
                                N: sdk.String("praesentium"),
                                Ns: []string{
                                    "voluptates",
                                    "quasi",
                                    "repudiandae",
                                },
                                S: sdk.String("sint"),
                                Ss: []string{
                                    "itaque",
                                },
                            },
                        },
                    },
                },
            },
        },
        RequestItems: sdk.String("incidunt"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchGetItem](docs/sdk/README.md#batchgetitem) - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
* [BatchWriteItem](docs/sdk/README.md#batchwriteitem) - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
* [CreateTable](docs/sdk/README.md#createtable) - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
* [DeleteItem](docs/sdk/README.md#deleteitem) - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
* [DeleteTable](docs/sdk/README.md#deletetable) - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [DescribeTable](docs/sdk/README.md#describetable) - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
* [GetItem](docs/sdk/README.md#getitem) - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
* [ListTables](docs/sdk/README.md#listtables) - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
* [PutItem](docs/sdk/README.md#putitem) - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
* [Query](docs/sdk/README.md#query) - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
* [Scan](docs/sdk/README.md#scan) - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
* [UpdateItem](docs/sdk/README.md#updateitem) - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
* [UpdateTable](docs/sdk/README.md#updatetable) - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
