package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewTagRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput request;
    public CreateNewTagRequest withRequest(openapisdk.models.shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput request) {
        this.request = request;
        return this;
    }
}