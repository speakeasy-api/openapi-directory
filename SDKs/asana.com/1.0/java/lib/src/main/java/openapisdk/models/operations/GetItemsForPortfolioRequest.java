package openapisdk.models.operations;



public class GetItemsForPortfolioRequest {
    public GetItemsForPortfolioPathParams pathParams;
    public GetItemsForPortfolioRequest withPathParams(GetItemsForPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetItemsForPortfolioQueryParams queryParams;
    public GetItemsForPortfolioRequest withQueryParams(GetItemsForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}