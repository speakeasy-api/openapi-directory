package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourceDefinitionRequest {
    public UpdateResourceDefinitionPathParams pathParams;
    public UpdateResourceDefinitionRequest withPathParams(UpdateResourceDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateResourceDefinitionHeaders headers;
    public UpdateResourceDefinitionRequest withHeaders(UpdateResourceDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateResourceDefinitionRequestBody request;
    public UpdateResourceDefinitionRequest withRequest(UpdateResourceDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}