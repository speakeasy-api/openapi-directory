package openapisdk.models.operations;



public class ModifierGroupsDeleteRequest {
    public ModifierGroupsDeletePathParams pathParams;
    public ModifierGroupsDeleteRequest withPathParams(ModifierGroupsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ModifierGroupsDeleteQueryParams queryParams;
    public ModifierGroupsDeleteRequest withQueryParams(ModifierGroupsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ModifierGroupsDeleteHeaders headers;
    public ModifierGroupsDeleteRequest withHeaders(ModifierGroupsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ModifierGroupsDeleteSecurity security;
    public ModifierGroupsDeleteRequest withSecurity(ModifierGroupsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}