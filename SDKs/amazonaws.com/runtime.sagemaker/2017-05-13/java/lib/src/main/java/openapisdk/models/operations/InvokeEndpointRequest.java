package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeEndpointRequest {
    public InvokeEndpointPathParams pathParams;
    public InvokeEndpointRequest withPathParams(InvokeEndpointPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InvokeEndpointHeaders headers;
    public InvokeEndpointRequest withHeaders(InvokeEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InvokeEndpointRequestBody request;
    public InvokeEndpointRequest withRequest(InvokeEndpointRequestBody request) {
        this.request = request;
        return this;
    }
}