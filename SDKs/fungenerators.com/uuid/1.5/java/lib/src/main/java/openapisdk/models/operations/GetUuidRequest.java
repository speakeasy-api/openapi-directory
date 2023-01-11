package openapisdk.models.operations;



public class GetUuidRequest {
    public GetUuidQueryParams queryParams;
    public GetUuidRequest withQueryParams(GetUuidQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUuidSecurity security;
    public GetUuidRequest withSecurity(GetUuidSecurity security) {
        this.security = security;
        return this;
    }
}