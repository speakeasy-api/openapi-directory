package openapisdk.models.operations;



public class InvokeEndpointAsyncRequest {
    public InvokeEndpointAsyncPathParams pathParams;
    public InvokeEndpointAsyncRequest withPathParams(InvokeEndpointAsyncPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InvokeEndpointAsyncHeaders headers;
    public InvokeEndpointAsyncRequest withHeaders(InvokeEndpointAsyncHeaders headers) {
        this.headers = headers;
        return this;
    }
}