package openapisdk.models.operations;



public class AppDgetRequest {
    public AppDgetPathParams pathParams;
    public AppDgetRequest withPathParams(AppDgetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppDgetQueryParams queryParams;
    public AppDgetRequest withQueryParams(AppDgetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}