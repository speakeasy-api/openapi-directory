package openapisdk.models.operations;



public class GetEndpointRequest {
    public GetEndpointPathParams pathParams;
    public GetEndpointRequest withPathParams(GetEndpointPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEndpointHeaders headers;
    public GetEndpointRequest withHeaders(GetEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
}