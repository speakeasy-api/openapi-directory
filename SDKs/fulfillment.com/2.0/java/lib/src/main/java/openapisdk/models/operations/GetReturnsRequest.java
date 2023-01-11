package openapisdk.models.operations;



public class GetReturnsRequest {
    public GetReturnsQueryParams queryParams;
    public GetReturnsRequest withQueryParams(GetReturnsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReturnsSecurity security;
    public GetReturnsRequest withSecurity(GetReturnsSecurity security) {
        this.security = security;
        return this;
    }
}