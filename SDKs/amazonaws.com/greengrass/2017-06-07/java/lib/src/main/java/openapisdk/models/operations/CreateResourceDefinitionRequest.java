package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourceDefinitionRequest {
    public CreateResourceDefinitionHeaders headers;
    public CreateResourceDefinitionRequest withHeaders(CreateResourceDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateResourceDefinitionRequestBody request;
    public CreateResourceDefinitionRequest withRequest(CreateResourceDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}