# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssistantRequest;
import org.openapis.openapi.models.operations.CreateAssistantRequestBody;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration;
import org.openapis.openapi.models.operations.CreateAssistantRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreateAssistantResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssistantRequest req = new CreateAssistantRequest(                new CreateAssistantRequestBody("provident", CreateAssistantRequestBodyTypeEnum.AGENT) {{
                                clientToken = "distinctio";
                                description = "quibusdam";
                                serverSideEncryptionConfiguration = new CreateAssistantRequestBodyServerSideEncryptionConfiguration() {{
                                    kmsKeyId = "unde";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "illum");
                                    put("vel", "error");
                                    put("deserunt", "suscipit");
                                    put("iure", "magnam");
                                }};
                            }};) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "delectus";
                xAmzDate = "tempora";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "minus";
            }};            

            CreateAssistantResponse res = sdk.createAssistant(req);

            if (res.createAssistantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAssistant](docs/sdk/README.md#createassistant) - Creates an Amazon Connect Wisdom assistant.
* [createAssistantAssociation](docs/sdk/README.md#createassistantassociation) - Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
* [createContent](docs/sdk/README.md#createcontent) - Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
* [createKnowledgeBase](docs/sdk/README.md#createknowledgebase) - <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
* [createSession](docs/sdk/README.md#createsession) - Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
* [deleteAssistant](docs/sdk/README.md#deleteassistant) - Deletes an assistant.
* [deleteAssistantAssociation](docs/sdk/README.md#deleteassistantassociation) - Deletes an assistant association.
* [deleteContent](docs/sdk/README.md#deletecontent) - Deletes the content.
* [deleteKnowledgeBase](docs/sdk/README.md#deleteknowledgebase) - <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
* [getAssistant](docs/sdk/README.md#getassistant) - Retrieves information about an assistant.
* [getAssistantAssociation](docs/sdk/README.md#getassistantassociation) - Retrieves information about an assistant association.
* [getContent](docs/sdk/README.md#getcontent) - Retrieves content, including a pre-signed URL to download the content.
* [getContentSummary](docs/sdk/README.md#getcontentsummary) - Retrieves summary information about the content.
* [getKnowledgeBase](docs/sdk/README.md#getknowledgebase) - Retrieves information about the knowledge base.
* [getRecommendations](docs/sdk/README.md#getrecommendations) - Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
* [getSession](docs/sdk/README.md#getsession) - Retrieves information for a specified session.
* [listAssistantAssociations](docs/sdk/README.md#listassistantassociations) - Lists information about assistant associations.
* [listAssistants](docs/sdk/README.md#listassistants) - Lists information about assistants.
* [listContents](docs/sdk/README.md#listcontents) - Lists the content.
* [listKnowledgeBases](docs/sdk/README.md#listknowledgebases) - Lists the knowledge bases.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [notifyRecommendationsReceived](docs/sdk/README.md#notifyrecommendationsreceived) - Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
* [queryAssistant](docs/sdk/README.md#queryassistant) - Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 
* [removeKnowledgeBaseTemplateUri](docs/sdk/README.md#removeknowledgebasetemplateuri) - Removes a URI template from a knowledge base.
* [searchContent](docs/sdk/README.md#searchcontent) - Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
* [searchSessions](docs/sdk/README.md#searchsessions) - Searches for sessions.
* [startContentUpload](docs/sdk/README.md#startcontentupload) - Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
* [tagResource](docs/sdk/README.md#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the specified tags from the specified resource.
* [updateContent](docs/sdk/README.md#updatecontent) - Updates information about the content.
* [updateKnowledgeBaseTemplateUri](docs/sdk/README.md#updateknowledgebasetemplateuri) - Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
