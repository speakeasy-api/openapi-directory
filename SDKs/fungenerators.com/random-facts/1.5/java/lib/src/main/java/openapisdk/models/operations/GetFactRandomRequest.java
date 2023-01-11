package openapisdk.models.operations;



public class GetFactRandomRequest {
    public GetFactRandomQueryParams queryParams;
    public GetFactRandomRequest withQueryParams(GetFactRandomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFactRandomSecurity security;
    public GetFactRandomRequest withSecurity(GetFactRandomSecurity security) {
        this.security = security;
        return this;
    }
}