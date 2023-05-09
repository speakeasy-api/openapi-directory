# import_

### Available Operations

* [importExportedData](#importexporteddata) - Import exported data
* [importExternalApiSpecification](#importexternalapispecification) - Import external API specification

## importExportedData

This endpoint allows you to import your exported Postman data.
For more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>

On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.

**Note**: Refer to examples for different scenarios.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportExportedDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "iste".getBytes()            

            ImportExportedDataResponse res = sdk.import_.importExportedData(req);

            if (res.importExportedData200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importExternalApiSpecification

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBody;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInput;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputInfo;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputInfoLicense;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPaths;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPets;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGet;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputServers;
import org.openapis.openapi.models.operations.ImportExternalApiSpecificationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportExternalApiSpecificationRequestBody req = new ImportExternalApiSpecificationRequestBody() {{
                input = new ImportExternalApiSpecificationRequestBodyInput() {{
                    info = new ImportExternalApiSpecificationRequestBodyInputInfo() {{
                        license = new ImportExternalApiSpecificationRequestBodyInputInfoLicense() {{
                            name = "MIT";
                        }};;
                        title = "Swagger Petstore";
                        version = "1.0.0";
                    }};;
                    openapi = "3.0.0";
                    paths = new ImportExternalApiSpecificationRequestBodyInputPaths() {{
                        rootPets = new ImportExternalApiSpecificationRequestBodyInputPathsPets() {{
                            get = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGet() {{
                                operationId = "listPets";
                                parameters = new org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters[]{{
                                    add(new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParameters() {{
                                        description = "limit";
                                        in = "query";
                                        name = "limit";
                                        required = false;
                                        schema = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema() {{
                                            format = "int32";
                                            type = "integer";
                                        }};
                                    }}),
                                }};
                                responses = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponses() {{
                                    default_ = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefault() {{
                                        content = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent() {{
                                            applicationJson = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJson() {{
                                                schema = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchema() {{
                                                    properties = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaProperties() {{
                                                        code = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesCode() {{
                                                            format = "int32";
                                                            type = "integer";
                                                        }};;
                                                        message = new ImportExternalApiSpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJsonSchemaPropertiesMessage() {{
                                                            type = "string";
                                                        }};;
                                                    }};;
                                                    required = new String[]{{
                                                        add("code"),
                                                        add("code"),
                                                        add("code"),
                                                    }};
                                                }};;
                                            }};;
                                        }};;
                                        description = "unexpected error";
                                    }};;
                                }};;
                                summary = "List all pets";
                            }};;
                        }};;
                    }};;
                    servers = new org.openapis.openapi.models.operations.ImportExternalApiSpecificationRequestBodyInputServers[]{{
                        add(new ImportExternalApiSpecificationRequestBodyInputServers() {{
                            url = "http://petstore.swagger.io/v1";
                        }}),
                        add(new ImportExternalApiSpecificationRequestBodyInputServers() {{
                            url = "http://petstore.swagger.io/v1";
                        }}),
                    }};
                }};;
                type = "json";
            }};            

            ImportExternalApiSpecificationResponse res = sdk.import_.importExternalApiSpecification(req);

            if (res.importExternalApiSpecification200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
