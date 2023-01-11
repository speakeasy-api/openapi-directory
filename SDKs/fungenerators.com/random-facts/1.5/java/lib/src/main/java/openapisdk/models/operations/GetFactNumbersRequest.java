package openapisdk.models.operations;



public class GetFactNumbersRequest {
    public GetFactNumbersQueryParams queryParams;
    public GetFactNumbersRequest withQueryParams(GetFactNumbersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFactNumbersSecurity security;
    public GetFactNumbersRequest withSecurity(GetFactNumbersSecurity security) {
        this.security = security;
        return this;
    }
}