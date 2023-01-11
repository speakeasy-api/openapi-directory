package openapisdk.models.operations;



public class GetVaultsRequest {
    public GetVaultsQueryParams queryParams;
    public GetVaultsRequest withQueryParams(GetVaultsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVaultsSecurity security;
    public GetVaultsRequest withSecurity(GetVaultsSecurity security) {
        this.security = security;
        return this;
    }
}