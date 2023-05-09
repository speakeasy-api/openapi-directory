# Import

### Available Operations

* [ImportExportedData](#importexporteddata) - Import exported data
* [ImportExternalAPISpecification](#importexternalapispecification) - Import external API specification

## ImportExportedData

This endpoint allows you to import your exported Postman data.
For more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>

On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.

**Note**: Refer to examples for different scenarios.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Import.ImportExportedData(ctx, []byte("dolor"))
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportExportedData200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ImportExternalAPISpecification

This endpoint allows you to import external API specifications into Postman.

Currently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.

On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.

Supported `type`s:

- string
- json
- file

The `input` parameter should be defined based on the `type`.

> To import a file, request body must be form-data with `type` param set to `file`.

**Note**: Refer to examples for different scenarios.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Import.ImportExternalAPISpecification(ctx, operations.ImportExternalAPISpecificationRequestBody{
        Input: &operations.ImportExternalAPISpecificationRequestBodyInput{
            Info: &operations.ImportExternalAPISpecificationRequestBodyInputInfo{
                License: &operations.ImportExternalAPISpecificationRequestBodyInputInfoLicense{
                    Name: sdk.String("MIT"),
                },
                Title: sdk.String("Swagger Petstore"),
                Version: sdk.String("1.0.0"),
            },
            Openapi: sdk.String("3.0.0"),
            Paths: &operations.ImportExternalAPISpecificationRequestBodyInputPaths{
                RootPets: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPets{
                    Get: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGet{
                        OperationID: sdk.String("listPets"),
                        Parameters: []ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters{
                            operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters{
                                Description: sdk.String("limit"),
                                In: sdk.String("query"),
                                Name: sdk.String("limit"),
                                Required: sdk.Bool(false),
                                Schema: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema{
                                    Format: sdk.String("int32"),
                                    Type: sdk.String("integer"),
                                },
                            },
                            operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters{
                                Description: sdk.String("limit"),
                                In: sdk.String("query"),
                                Name: sdk.String("limit"),
                                Required: sdk.Bool(false),
                                Schema: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema{
                                    Format: sdk.String("int32"),
                                    Type: sdk.String("integer"),
                                },
                            },
                            operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters{
                                Description: sdk.String("limit"),
                                In: sdk.String("query"),
                                Name: sdk.String("limit"),
                                Required: sdk.Bool(false),
                                Schema: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema{
                                    Format: sdk.String("int32"),
                                    Type: sdk.String("integer"),
                                },
                            },
                        },
                        Responses: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses{
                            Default: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault{
                                Content: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent{
                                    ApplicationJSON: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON{
                                        Schema: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema{
                                            Properties: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties{
                                                Code: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode{
                                                    Format: sdk.String("int32"),
                                                    Type: sdk.String("integer"),
                                                },
                                                Message: &operations.ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage{
                                                    Type: sdk.String("string"),
                                                },
                                            },
                                            Required: []string{
                                                "code",
                                                "code",
                                            },
                                        },
                                    },
                                },
                                Description: sdk.String("unexpected error"),
                            },
                        },
                        Summary: sdk.String("List all pets"),
                    },
                },
            },
            Servers: []ImportExternalAPISpecificationRequestBodyInputServers{
                operations.ImportExternalAPISpecificationRequestBodyInputServers{
                    URL: sdk.String("http://petstore.swagger.io/v1"),
                },
                operations.ImportExternalAPISpecificationRequestBodyInputServers{
                    URL: sdk.String("http://petstore.swagger.io/v1"),
                },
                operations.ImportExternalAPISpecificationRequestBodyInputServers{
                    URL: sdk.String("http://petstore.swagger.io/v1"),
                },
                operations.ImportExternalAPISpecificationRequestBodyInputServers{
                    URL: sdk.String("http://petstore.swagger.io/v1"),
                },
            },
        },
        Type: sdk.String("json"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportExternalAPISpecification200ApplicationJSONObject != nil {
        // handle response
    }
}
```
