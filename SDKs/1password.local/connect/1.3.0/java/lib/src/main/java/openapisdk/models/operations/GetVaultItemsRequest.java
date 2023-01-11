package openapisdk.models.operations;



public class GetVaultItemsRequest {
    public GetVaultItemsPathParams pathParams;
    public GetVaultItemsRequest withPathParams(GetVaultItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVaultItemsQueryParams queryParams;
    public GetVaultItemsRequest withQueryParams(GetVaultItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVaultItemsSecurity security;
    public GetVaultItemsRequest withSecurity(GetVaultItemsSecurity security) {
        this.security = security;
        return this;
    }
}