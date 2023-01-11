package openapisdk.models.operations;



public class GetVaultItemByIdRequest {
    public GetVaultItemByIdPathParams pathParams;
    public GetVaultItemByIdRequest withPathParams(GetVaultItemByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVaultItemByIdSecurity security;
    public GetVaultItemByIdRequest withSecurity(GetVaultItemByIdSecurity security) {
        this.security = security;
        return this;
    }
}