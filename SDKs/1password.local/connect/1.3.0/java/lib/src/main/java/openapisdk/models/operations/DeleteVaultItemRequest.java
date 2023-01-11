package openapisdk.models.operations;



public class DeleteVaultItemRequest {
    public DeleteVaultItemPathParams pathParams;
    public DeleteVaultItemRequest withPathParams(DeleteVaultItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVaultItemSecurity security;
    public DeleteVaultItemRequest withSecurity(DeleteVaultItemSecurity security) {
        this.security = security;
        return this;
    }
}