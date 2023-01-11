package openapisdk.models.operations;



public class DeletePortfolioRequest {
    public DeletePortfolioPathParams pathParams;
    public DeletePortfolioRequest withPathParams(DeletePortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePortfolioQueryParams queryParams;
    public DeletePortfolioRequest withQueryParams(DeletePortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}