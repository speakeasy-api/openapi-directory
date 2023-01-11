package openapisdk.models.operations;



public class ReposListTeamsRequest {
    public ReposListTeamsPathParams pathParams;
    public ReposListTeamsRequest withPathParams(ReposListTeamsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListTeamsQueryParams queryParams;
    public ReposListTeamsRequest withQueryParams(ReposListTeamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}