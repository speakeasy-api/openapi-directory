package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserDefinedFunctionRequest {
    public DeleteUserDefinedFunctionHeaders headers;
    public DeleteUserDefinedFunctionRequest withHeaders(DeleteUserDefinedFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUserDefinedFunctionRequest request;
    public DeleteUserDefinedFunctionRequest withRequest(openapisdk.models.shared.DeleteUserDefinedFunctionRequest request) {
        this.request = request;
        return this;
    }
}