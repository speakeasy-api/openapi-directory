package openapisdk.models.operations;



public class GetCharityOrgRequest {
    public GetCharityOrgPathParams pathParams;
    public GetCharityOrgRequest withPathParams(GetCharityOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCharityOrgHeaders headers;
    public GetCharityOrgRequest withHeaders(GetCharityOrgHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetCharityOrgSecurity security;
    public GetCharityOrgRequest withSecurity(GetCharityOrgSecurity security) {
        this.security = security;
        return this;
    }
}