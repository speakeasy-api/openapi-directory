package openapisdk.models.operations;



public class GetUpdateUserRequest {
    public GetUpdateUserQueryParams queryParams;
    public GetUpdateUserRequest withQueryParams(GetUpdateUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdateUserHeaders headers;
    public GetUpdateUserRequest withHeaders(GetUpdateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
}