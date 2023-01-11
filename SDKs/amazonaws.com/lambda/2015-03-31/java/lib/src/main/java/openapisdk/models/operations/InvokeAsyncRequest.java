package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeAsyncRequest {
    public InvokeAsyncPathParams pathParams;
    public InvokeAsyncRequest withPathParams(InvokeAsyncPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InvokeAsyncHeaders headers;
    public InvokeAsyncRequest withHeaders(InvokeAsyncHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InvokeAsyncRequestBody request;
    public InvokeAsyncRequest withRequest(InvokeAsyncRequestBody request) {
        this.request = request;
        return this;
    }
}