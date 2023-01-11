package openapisdk.models.operations;



public class ModifierGroupsOneRequest {
    public ModifierGroupsOnePathParams pathParams;
    public ModifierGroupsOneRequest withPathParams(ModifierGroupsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ModifierGroupsOneQueryParams queryParams;
    public ModifierGroupsOneRequest withQueryParams(ModifierGroupsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ModifierGroupsOneHeaders headers;
    public ModifierGroupsOneRequest withHeaders(ModifierGroupsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ModifierGroupsOneSecurity security;
    public ModifierGroupsOneRequest withSecurity(ModifierGroupsOneSecurity security) {
        this.security = security;
        return this;
    }
}