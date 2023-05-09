# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/wisdom/2020-10-19/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, operations.CreateAssistantRequest{
        RequestBody: operations.CreateAssistantRequestBody{
            ClientToken: sdk.String("corrupti"),
            Description: sdk.String("provident"),
            Name: "Ellis Mitchell",
            ServerSideEncryptionConfiguration: &operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration{
                KmsKeyID: sdk.String("illum"),
            },
            Tags: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
            Type: operations.CreateAssistantRequestBodyTypeEnumAgent,
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssistantResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAssistant](docs/sdk/README.md#createassistant) - Creates an Amazon Connect Wisdom assistant.
* [CreateAssistantAssociation](docs/sdk/README.md#createassistantassociation) - Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
* [CreateContent](docs/sdk/README.md#createcontent) - Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
* [CreateKnowledgeBase](docs/sdk/README.md#createknowledgebase) - <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
* [CreateSession](docs/sdk/README.md#createsession) - Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
* [DeleteAssistant](docs/sdk/README.md#deleteassistant) - Deletes an assistant.
* [DeleteAssistantAssociation](docs/sdk/README.md#deleteassistantassociation) - Deletes an assistant association.
* [DeleteContent](docs/sdk/README.md#deletecontent) - Deletes the content.
* [DeleteKnowledgeBase](docs/sdk/README.md#deleteknowledgebase) - <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
* [GetAssistant](docs/sdk/README.md#getassistant) - Retrieves information about an assistant.
* [GetAssistantAssociation](docs/sdk/README.md#getassistantassociation) - Retrieves information about an assistant association.
* [GetContent](docs/sdk/README.md#getcontent) - Retrieves content, including a pre-signed URL to download the content.
* [GetContentSummary](docs/sdk/README.md#getcontentsummary) - Retrieves summary information about the content.
* [GetKnowledgeBase](docs/sdk/README.md#getknowledgebase) - Retrieves information about the knowledge base.
* [GetRecommendations](docs/sdk/README.md#getrecommendations) - Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
* [GetSession](docs/sdk/README.md#getsession) - Retrieves information for a specified session.
* [ListAssistantAssociations](docs/sdk/README.md#listassistantassociations) - Lists information about assistant associations.
* [ListAssistants](docs/sdk/README.md#listassistants) - Lists information about assistants.
* [ListContents](docs/sdk/README.md#listcontents) - Lists the content.
* [ListKnowledgeBases](docs/sdk/README.md#listknowledgebases) - Lists the knowledge bases.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [NotifyRecommendationsReceived](docs/sdk/README.md#notifyrecommendationsreceived) - Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
* [QueryAssistant](docs/sdk/README.md#queryassistant) - Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 
* [RemoveKnowledgeBaseTemplateURI](docs/sdk/README.md#removeknowledgebasetemplateuri) - Removes a URI template from a knowledge base.
* [SearchContent](docs/sdk/README.md#searchcontent) - Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
* [SearchSessions](docs/sdk/README.md#searchsessions) - Searches for sessions.
* [StartContentUpload](docs/sdk/README.md#startcontentupload) - Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
* [TagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [UpdateContent](docs/sdk/README.md#updatecontent) - Updates information about the content.
* [UpdateKnowledgeBaseTemplateURI](docs/sdk/README.md#updateknowledgebasetemplateuri) - Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
