package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterTaskDefinitionRequest {
    public RegisterTaskDefinitionHeaders headers;
    public RegisterTaskDefinitionRequest withHeaders(RegisterTaskDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterTaskDefinitionRequest request;
    public RegisterTaskDefinitionRequest withRequest(openapisdk.models.shared.RegisterTaskDefinitionRequest request) {
        this.request = request;
        return this;
    }
}