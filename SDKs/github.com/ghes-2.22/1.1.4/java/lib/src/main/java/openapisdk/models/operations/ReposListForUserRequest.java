package openapisdk.models.operations;



public class ReposListForUserRequest {
    public ReposListForUserPathParams pathParams;
    public ReposListForUserRequest withPathParams(ReposListForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListForUserQueryParams queryParams;
    public ReposListForUserRequest withQueryParams(ReposListForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}