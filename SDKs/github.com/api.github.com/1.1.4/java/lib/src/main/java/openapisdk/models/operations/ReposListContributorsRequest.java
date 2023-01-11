package openapisdk.models.operations;



public class ReposListContributorsRequest {
    public ReposListContributorsPathParams pathParams;
    public ReposListContributorsRequest withPathParams(ReposListContributorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListContributorsQueryParams queryParams;
    public ReposListContributorsRequest withQueryParams(ReposListContributorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}