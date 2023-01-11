package openapisdk.models.operations;



public class GetConnectionRequest {
    public GetConnectionPathParams pathParams;
    public GetConnectionRequest withPathParams(GetConnectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConnectionHeaders headers;
    public GetConnectionRequest withHeaders(GetConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
}