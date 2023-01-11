package openapisdk.models.operations;



public class GetPortfolioRequest {
    public GetPortfolioPathParams pathParams;
    public GetPortfolioRequest withPathParams(GetPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPortfolioQueryParams queryParams;
    public GetPortfolioRequest withQueryParams(GetPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}