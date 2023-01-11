package openapisdk.models.operations;



public class GetUntagUserRequest {
    public GetUntagUserQueryParams queryParams;
    public GetUntagUserRequest withQueryParams(GetUntagUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUntagUserHeaders headers;
    public GetUntagUserRequest withHeaders(GetUntagUserHeaders headers) {
        this.headers = headers;
        return this;
    }
}