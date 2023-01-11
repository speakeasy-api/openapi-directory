package openapisdk.models.operations;



public class GetAppRequest {
    public GetAppPathParams pathParams;
    public GetAppRequest withPathParams(GetAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAppHeaders headers;
    public GetAppRequest withHeaders(GetAppHeaders headers) {
        this.headers = headers;
        return this;
    }
}