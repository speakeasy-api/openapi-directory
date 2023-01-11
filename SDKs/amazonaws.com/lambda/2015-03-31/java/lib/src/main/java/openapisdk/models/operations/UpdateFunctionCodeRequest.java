package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionCodeRequest {
    public UpdateFunctionCodePathParams pathParams;
    public UpdateFunctionCodeRequest withPathParams(UpdateFunctionCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFunctionCodeHeaders headers;
    public UpdateFunctionCodeRequest withHeaders(UpdateFunctionCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFunctionCodeRequestBody request;
    public UpdateFunctionCodeRequest withRequest(UpdateFunctionCodeRequestBody request) {
        this.request = request;
        return this;
    }
}