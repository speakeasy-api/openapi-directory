package openapisdk.models.operations;



public class GetAccountRequest {
    public GetAccountQueryParams queryParams;
    public GetAccountRequest withQueryParams(GetAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccountHeaders headers;
    public GetAccountRequest withHeaders(GetAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
}