package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDefaultProjectRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput request;
    public PatchDefaultProjectRequest withRequest(openapisdk.models.shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput request) {
        this.request = request;
        return this;
    }
}