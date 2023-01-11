package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectorDefinitionRequest {
    public UpdateConnectorDefinitionPathParams pathParams;
    public UpdateConnectorDefinitionRequest withPathParams(UpdateConnectorDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConnectorDefinitionHeaders headers;
    public UpdateConnectorDefinitionRequest withHeaders(UpdateConnectorDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateConnectorDefinitionRequestBody request;
    public UpdateConnectorDefinitionRequest withRequest(UpdateConnectorDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}