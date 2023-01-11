package openapisdk.models.operations;



public class GetTeamsForUserRequest {
    public GetTeamsForUserPathParams pathParams;
    public GetTeamsForUserRequest withPathParams(GetTeamsForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsForUserQueryParams queryParams;
    public GetTeamsForUserRequest withQueryParams(GetTeamsForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}