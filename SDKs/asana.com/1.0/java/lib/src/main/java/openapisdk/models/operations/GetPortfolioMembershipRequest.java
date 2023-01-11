package openapisdk.models.operations;



public class GetPortfolioMembershipRequest {
    public GetPortfolioMembershipPathParams pathParams;
    public GetPortfolioMembershipRequest withPathParams(GetPortfolioMembershipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPortfolioMembershipQueryParams queryParams;
    public GetPortfolioMembershipRequest withQueryParams(GetPortfolioMembershipQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}