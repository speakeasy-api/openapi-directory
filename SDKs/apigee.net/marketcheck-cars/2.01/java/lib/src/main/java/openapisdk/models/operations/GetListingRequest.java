package openapisdk.models.operations;



public class GetListingRequest {
    public GetListingPathParams pathParams;
    public GetListingRequest withPathParams(GetListingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListingQueryParams queryParams;
    public GetListingRequest withQueryParams(GetListingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}