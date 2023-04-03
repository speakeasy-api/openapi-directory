# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/appintegrations/2020-07-29/go
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateDataIntegrationRequest{
        RequestBody: operations.CreateDataIntegrationRequestBody{
            ClientToken: "corrupti",
            Description: "provident",
            FileConfiguration: &operations.CreateDataIntegrationRequestBodyFileConfiguration{
                Filters: map[string][]string{
                    "quibusdam": []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    "vel": []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    "magnam": []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                Folders: []string{
                    "minus",
                    "placeat",
                },
            },
            KmsKey: "voluptatum",
            Name: "iusto",
            ObjectConfiguration: map[string]map[string][]string{
                "nisi": map[string][]string{
                    "temporibus": []string{
                        "quis",
                    },
                    "veritatis": []string{
                        "perferendis",
                        "ipsam",
                        "repellendus",
                    },
                    "sapiente": []string{
                        "odit",
                        "at",
                        "at",
                        "maiores",
                    },
                    "molestiae": []string{
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    },
                },
                "dolorum": map[string][]string{
                    "nam": []string{
                        "occaecati",
                        "fugit",
                        "deleniti",
                    },
                },
                "hic": map[string][]string{
                    "totam": []string{
                        "commodi",
                    },
                    "molestiae": []string{
                        "qui",
                        "impedit",
                    },
                    "cum": []string{
                        "ipsum",
                        "excepturi",
                    },
                    "aspernatur": []string{
                        "ad",
                    },
                },
            },
            ScheduleConfig: operations.CreateDataIntegrationRequestBodyScheduleConfig{
                FirstExecutionFrom: "natus",
                Object: "sed",
                ScheduleExpression: "iste",
            },
            SourceURI: "dolor",
            Tags: map[string]string{
                "laboriosam": "hic",
                "saepe": "fuga",
                "in": "corporis",
            },
        },
        XAmzAlgorithm: "iste",
        XAmzContentSha256: "iure",
        XAmzCredential: "saepe",
        XAmzDate: "quidem",
        XAmzSecurityToken: "architecto",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "reiciendis",
    }

    ctx := context.Background()
    res, err := s.CreateDataIntegration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataIntegrationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateDataIntegration` - <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
* `CreateEventIntegration` - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
* `DeleteDataIntegration` - <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `DeleteEventIntegration` - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
* `GetDataIntegration` - <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `GetEventIntegration` - Returns information about the event integration.
* `ListDataIntegrationAssociations` - <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `ListDataIntegrations` - <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `ListEventIntegrationAssociations` - Returns a paginated list of event integration associations in the account. 
* `ListEventIntegrations` - Returns a paginated list of event integrations in the account.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `TagResource` - Adds the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateDataIntegration` - <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* `UpdateEventIntegration` - Updates the description of an event integration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
