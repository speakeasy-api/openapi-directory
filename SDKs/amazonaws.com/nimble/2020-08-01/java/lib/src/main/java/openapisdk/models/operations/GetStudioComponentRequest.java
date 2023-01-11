package openapisdk.models.operations;



public class GetStudioComponentRequest {
    public GetStudioComponentPathParams pathParams;
    public GetStudioComponentRequest withPathParams(GetStudioComponentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStudioComponentHeaders headers;
    public GetStudioComponentRequest withHeaders(GetStudioComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
}