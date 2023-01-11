package openapisdk.models.operations;



public class GetChangePasswordRequest {
    public GetChangePasswordQueryParams queryParams;
    public GetChangePasswordRequest withQueryParams(GetChangePasswordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChangePasswordHeaders headers;
    public GetChangePasswordRequest withHeaders(GetChangePasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
}