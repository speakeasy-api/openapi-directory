package openapisdk.models.operations;



public class GetUserEndpointsRequest {
    public GetUserEndpointsPathParams pathParams;
    public GetUserEndpointsRequest withPathParams(GetUserEndpointsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserEndpointsHeaders headers;
    public GetUserEndpointsRequest withHeaders(GetUserEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
}