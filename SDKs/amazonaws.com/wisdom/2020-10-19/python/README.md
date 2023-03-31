# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/wisdom/2020-10-19/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAssistantRequest(
    request_body=operations.CreateAssistantRequestBody(
        client_token="corrupti",
        description="provident",
        name="distinctio",
        server_side_encryption_configuration=operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration(
            kms_key_id="quibusdam",
        ),
        tags={
            "nulla": "corrupti",
            "illum": "vel",
            "error": "deserunt",
        },
        type="AGENT",
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
)
    
res = s.create_assistant(req)

if res.create_assistant_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_assistant` - Creates an Amazon Connect Wisdom assistant.
* `create_assistant_association` - Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
* `create_content` - Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to upload an asset.
* `create_knowledge_base` - <p>Creates a knowledge base.</p> <note> <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an <code>InvalidRequestException</code> error. </p> <p>For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:</p> <ol> <li> <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p> </li> <li> <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different one.</p> </li> <li> <p>Call CreateKnowledgeBase.</p> </li> </ol> </note>
* `create_session` - Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is enabled.
* `delete_assistant` - Deletes an assistant.
* `delete_assistant_association` - Deletes an assistant association.
* `delete_content` - Deletes the content.
* `delete_knowledge_base` - <p>Deletes the knowledge base.</p> <note> <p>When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API Reference</i>.</p> </note>
* `get_assistant` - Retrieves information about an assistant.
* `get_assistant_association` - Retrieves information about an assistant association.
* `get_content` - Retrieves content, including a pre-signed URL to download the content.
* `get_content_summary` - Retrieves summary information about the content.
* `get_knowledge_base` - Retrieves information about the knowledge base.
* `get_recommendations` - Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
* `get_session` - Retrieves information for a specified session.
* `list_assistant_associations` - Lists information about assistant associations.
* `list_assistants` - Lists information about assistants.
* `list_contents` - Lists the content.
* `list_knowledge_bases` - Lists the knowledge bases.
* `list_tags_for_resource` - Lists the tags for the specified resource.
* `notify_recommendations_received` - Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling behavior and avoiding duplicate recommendations.
* `query_assistant` - Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. 
* `remove_knowledge_base_template_uri` - Removes a URI template from a knowledge base.
* `search_content` - Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
* `search_sessions` - Searches for sessions.
* `start_content_upload` - Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
* `tag_resource` - Adds the specified tags to the specified resource.
* `untag_resource` - Removes the specified tags from the specified resource.
* `update_content` - Updates information about the content.
* `update_knowledge_base_template_uri` - Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce article, it has an <code>Id</code> value, and you can set the template URI to <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*/view</code>. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
