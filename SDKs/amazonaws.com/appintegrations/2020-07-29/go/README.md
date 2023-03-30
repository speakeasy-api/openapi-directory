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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateDataIntegrationRequest{
        Headers: operations.CreateDataIntegrationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateDataIntegrationRequestBody{
            ClientToken: "illum",
            Description: "vel",
            FileConfiguration: &operations.CreateDataIntegrationRequestBodyFileConfiguration{
                Filters: map[string][]string{
                    "deserunt": []string{
                        "iure",
                        "magnam",
                    },
                    "debitis": []string{
                        "delectus",
                    },
                    "tempora": []string{
                        "molestiae",
                        "minus",
                    },
                },
                Folders: []string{
                    "voluptatum",
                    "iusto",
                    "excepturi",
                    "nisi",
                },
            },
            KmsKey: "recusandae",
            Name: "temporibus",
            ObjectConfiguration: map[string]map[string][]string{
                "quis": map[string][]string{
                    "deserunt": []string{
                        "ipsam",
                    },
                },
            },
            ScheduleConfig: operations.CreateDataIntegrationRequestBodyScheduleConfig{
                FirstExecutionFrom: "repellendus",
                Object: "sapiente",
                ScheduleExpression: "quo",
            },
            SourceURI: "odit",
            Tags: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
        },
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
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
