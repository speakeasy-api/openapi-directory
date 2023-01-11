package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionEventInvokeConfigRequest {
    public UpdateFunctionEventInvokeConfigPathParams pathParams;
    public UpdateFunctionEventInvokeConfigRequest withPathParams(UpdateFunctionEventInvokeConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFunctionEventInvokeConfigQueryParams queryParams;
    public UpdateFunctionEventInvokeConfigRequest withQueryParams(UpdateFunctionEventInvokeConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateFunctionEventInvokeConfigHeaders headers;
    public UpdateFunctionEventInvokeConfigRequest withHeaders(UpdateFunctionEventInvokeConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFunctionEventInvokeConfigRequestBody request;
    public UpdateFunctionEventInvokeConfigRequest withRequest(UpdateFunctionEventInvokeConfigRequestBody request) {
        this.request = request;
        return this;
    }
}