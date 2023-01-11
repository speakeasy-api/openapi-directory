package openapisdk.models.operations;



public class GetApiActivityRequest {
    public GetApiActivityQueryParams queryParams;
    public GetApiActivityRequest withQueryParams(GetApiActivityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiActivitySecurity security;
    public GetApiActivityRequest withSecurity(GetApiActivitySecurity security) {
        this.security = security;
        return this;
    }
}