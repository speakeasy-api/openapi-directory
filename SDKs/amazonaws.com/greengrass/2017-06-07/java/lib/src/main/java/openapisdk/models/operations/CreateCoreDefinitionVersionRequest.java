package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCoreDefinitionVersionRequest {
    public CreateCoreDefinitionVersionPathParams pathParams;
    public CreateCoreDefinitionVersionRequest withPathParams(CreateCoreDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateCoreDefinitionVersionHeaders headers;
    public CreateCoreDefinitionVersionRequest withHeaders(CreateCoreDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCoreDefinitionVersionRequestBody request;
    public CreateCoreDefinitionVersionRequest withRequest(CreateCoreDefinitionVersionRequestBody request) {
        this.request = request;
        return this;
    }
}