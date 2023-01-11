package openapisdk.models.operations;



public class GetBlockedNumbersRequest {
    public GetBlockedNumbersQueryParams queryParams;
    public GetBlockedNumbersRequest withQueryParams(GetBlockedNumbersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBlockedNumbersSecurity security;
    public GetBlockedNumbersRequest withSecurity(GetBlockedNumbersSecurity security) {
        this.security = security;
        return this;
    }
}