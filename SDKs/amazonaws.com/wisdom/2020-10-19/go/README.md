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

    req := operations.CreateAssistantRequest{
        Headers: operations.CreateAssistantHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateAssistantRequestBody{
            ClientToken: "nulla",
            Description: "nihil",
            Name: "fuga",
            ServerSideEncryptionConfiguration: &operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration{
                KmsKeyID: "facilis",
            },
            Tags: map[string]string{
                "iusto": "ullam",
                "saepe": "inventore",
            },
            Type: "AGENT",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `CreateAssistant` - Creates an Amazon Connect Wisdom assistant.
* `CreateAssistantAssociation` - Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
* `CreateContent` - Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
* `CreateKnowledgeBase` - <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <pre><code> &lt;p&gt;For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt;Call &lt;a href=&quot;https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html&quot;&gt;DeleteKnowledgeBase&lt;/a&gt;.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;Call &lt;a href=&quot;https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html&quot;&gt;DeleteDataIntegration&lt;/a&gt;.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;Call &lt;a href=&quot;https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html&quot;&gt;CreateDataIntegration&lt;/a&gt; to recreate the DataIntegration or a create different one.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;Call CreateKnowledgeBase.&lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; &lt;/note&gt; </code></pre>
* `CreateSession` - Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
* `DeleteAssistant` - Deletes an assistant.
* `DeleteAssistantAssociation` - Deletes an assistant association.
* `DeleteContent` - Deletes the content.
* `DeleteKnowledgeBase` - <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
* `GetAssistant` - Retrieves information about an assistant.
* `GetAssistantAssociation` - Retrieves information about an assistant association.
* `GetContent` - Retrieves content, including a pre-signed URL to download the content.
* `GetContentSummary` - Retrieves summary information about the content.
* `GetKnowledgeBase` - Retrieves information about the knowledge base.
* `GetRecommendations` - Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
* `GetSession` - Retrieves information for a specified session.
* `ListAssistantAssociations` - Lists information about assistant associations.
* `ListAssistants` - Lists information about assistants.
* `ListContents` - Lists the content.
* `ListKnowledgeBases` - Lists the knowledge bases.
* `ListTagsForResource` - Lists the tags for the specified resource.
* `NotifyRecommendationsReceived` - Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
* `QueryAssistant` - Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 
* `RemoveKnowledgeBaseTemplateURI` - Removes a URI template from a knowledge base.
* `SearchContent` - Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
* `SearchSessions` - Searches for sessions.
* `StartContentUpload` - Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
* `TagResource` - Adds the specified tags to the specified resource.
* `UntagResource` - Removes the specified tags from the specified resource.
* `UpdateContent` - Updates information about the content.
* `UpdateKnowledgeBaseTemplateURI` - Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
