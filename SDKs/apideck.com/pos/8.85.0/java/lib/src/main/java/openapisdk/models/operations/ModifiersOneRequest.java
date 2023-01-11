package openapisdk.models.operations;



public class ModifiersOneRequest {
    public ModifiersOnePathParams pathParams;
    public ModifiersOneRequest withPathParams(ModifiersOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ModifiersOneQueryParams queryParams;
    public ModifiersOneRequest withQueryParams(ModifiersOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ModifiersOneHeaders headers;
    public ModifiersOneRequest withHeaders(ModifiersOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ModifiersOneSecurity security;
    public ModifiersOneRequest withSecurity(ModifiersOneSecurity security) {
        this.security = security;
        return this;
    }
}