package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCoreDefinitionRequest {
    public CreateCoreDefinitionHeaders headers;
    public CreateCoreDefinitionRequest withHeaders(CreateCoreDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCoreDefinitionRequestBody request;
    public CreateCoreDefinitionRequest withRequest(CreateCoreDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}