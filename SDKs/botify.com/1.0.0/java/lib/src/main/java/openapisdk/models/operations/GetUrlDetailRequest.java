package openapisdk.models.operations;



public class GetUrlDetailRequest {
    public GetUrlDetailPathParams pathParams;
    public GetUrlDetailRequest withPathParams(GetUrlDetailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUrlDetailQueryParams queryParams;
    public GetUrlDetailRequest withQueryParams(GetUrlDetailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}