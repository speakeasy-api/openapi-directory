package openapisdk.models.operations;



public class GetPullrequestsSelectedUserRequest {
    public GetPullrequestsSelectedUserPathParams pathParams;
    public GetPullrequestsSelectedUserRequest withPathParams(GetPullrequestsSelectedUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPullrequestsSelectedUserQueryParams queryParams;
    public GetPullrequestsSelectedUserRequest withQueryParams(GetPullrequestsSelectedUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPullrequestsSelectedUserSecurity security;
    public GetPullrequestsSelectedUserRequest withSecurity(GetPullrequestsSelectedUserSecurity security) {
        this.security = security;
        return this;
    }
}