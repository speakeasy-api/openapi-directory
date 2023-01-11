package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterJobDefinitionRequest {
    public RegisterJobDefinitionHeaders headers;
    public RegisterJobDefinitionRequest withHeaders(RegisterJobDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterJobDefinitionRequestBody request;
    public RegisterJobDefinitionRequest withRequest(RegisterJobDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}