package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCoreDefinitionRequest {
    public UpdateCoreDefinitionPathParams pathParams;
    public UpdateCoreDefinitionRequest withPathParams(UpdateCoreDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCoreDefinitionHeaders headers;
    public UpdateCoreDefinitionRequest withHeaders(UpdateCoreDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCoreDefinitionRequestBody request;
    public UpdateCoreDefinitionRequest withRequest(UpdateCoreDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}