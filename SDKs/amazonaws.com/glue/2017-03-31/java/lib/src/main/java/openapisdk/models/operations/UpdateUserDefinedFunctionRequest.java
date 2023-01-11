package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserDefinedFunctionRequest {
    public UpdateUserDefinedFunctionHeaders headers;
    public UpdateUserDefinedFunctionRequest withHeaders(UpdateUserDefinedFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserDefinedFunctionRequest request;
    public UpdateUserDefinedFunctionRequest withRequest(openapisdk.models.shared.UpdateUserDefinedFunctionRequest request) {
        this.request = request;
        return this;
    }
}