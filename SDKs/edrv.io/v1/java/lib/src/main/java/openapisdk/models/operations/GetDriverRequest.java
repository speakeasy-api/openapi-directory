package openapisdk.models.operations;



public class GetDriverRequest {
    public GetDriverPathParams pathParams;
    public GetDriverRequest withPathParams(GetDriverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDriverQueryParams queryParams;
    public GetDriverRequest withQueryParams(GetDriverQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}