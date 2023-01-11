package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserDefinedFunctionRequest {
    public GetUserDefinedFunctionHeaders headers;
    public GetUserDefinedFunctionRequest withHeaders(GetUserDefinedFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUserDefinedFunctionRequest request;
    public GetUserDefinedFunctionRequest withRequest(openapisdk.models.shared.GetUserDefinedFunctionRequest request) {
        this.request = request;
        return this;
    }
}