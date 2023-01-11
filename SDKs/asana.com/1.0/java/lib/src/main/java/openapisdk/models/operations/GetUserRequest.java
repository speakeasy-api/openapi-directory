package openapisdk.models.operations;



public class GetUserRequest {
    public GetUserPathParams pathParams;
    public GetUserRequest withPathParams(GetUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserQueryParams queryParams;
    public GetUserRequest withQueryParams(GetUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}