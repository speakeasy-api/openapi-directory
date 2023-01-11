package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchProjectRequest {
    public PatchProjectPathParams pathParams;
    public PatchProjectRequest withPathParams(PatchProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput request;
    public PatchProjectRequest withRequest(openapisdk.models.shared.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput request) {
        this.request = request;
        return this;
    }
}