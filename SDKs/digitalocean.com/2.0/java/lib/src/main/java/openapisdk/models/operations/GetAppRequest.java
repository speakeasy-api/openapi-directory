package openapisdk.models.operations;



public class GetAppRequest {
    public GetAppPathParams pathParams;
    public GetAppRequest withPathParams(GetAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAppQueryParams queryParams;
    public GetAppRequest withQueryParams(GetAppQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}