package openapisdk.models.operations;



public class GetModifyUserRequest {
    public GetModifyUserQueryParams queryParams;
    public GetModifyUserRequest withQueryParams(GetModifyUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetModifyUserHeaders headers;
    public GetModifyUserRequest withHeaders(GetModifyUserHeaders headers) {
        this.headers = headers;
        return this;
    }
}