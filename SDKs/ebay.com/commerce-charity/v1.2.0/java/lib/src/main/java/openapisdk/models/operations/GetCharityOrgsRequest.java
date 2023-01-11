package openapisdk.models.operations;



public class GetCharityOrgsRequest {
    public GetCharityOrgsQueryParams queryParams;
    public GetCharityOrgsRequest withQueryParams(GetCharityOrgsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCharityOrgsHeaders headers;
    public GetCharityOrgsRequest withHeaders(GetCharityOrgsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetCharityOrgsSecurity security;
    public GetCharityOrgsRequest withSecurity(GetCharityOrgsSecurity security) {
        this.security = security;
        return this;
    }
}