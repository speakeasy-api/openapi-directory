package openapisdk.models.operations;



public class GetDealerRequest {
    public GetDealerPathParams pathParams;
    public GetDealerRequest withPathParams(GetDealerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDealerQueryParams queryParams;
    public GetDealerRequest withQueryParams(GetDealerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}