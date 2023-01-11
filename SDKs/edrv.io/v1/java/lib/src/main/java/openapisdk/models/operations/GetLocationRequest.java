package openapisdk.models.operations;



public class GetLocationRequest {
    public GetLocationPathParams pathParams;
    public GetLocationRequest withPathParams(GetLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLocationQueryParams queryParams;
    public GetLocationRequest withQueryParams(GetLocationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}