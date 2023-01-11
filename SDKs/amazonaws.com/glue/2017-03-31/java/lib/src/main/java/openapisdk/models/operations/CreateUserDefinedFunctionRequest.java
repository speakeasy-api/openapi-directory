package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserDefinedFunctionRequest {
    public CreateUserDefinedFunctionHeaders headers;
    public CreateUserDefinedFunctionRequest withHeaders(CreateUserDefinedFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserDefinedFunctionRequest request;
    public CreateUserDefinedFunctionRequest withRequest(openapisdk.models.shared.CreateUserDefinedFunctionRequest request) {
        this.request = request;
        return this;
    }
}