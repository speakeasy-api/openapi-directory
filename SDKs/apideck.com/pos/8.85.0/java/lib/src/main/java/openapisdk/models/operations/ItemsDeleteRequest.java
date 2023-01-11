package openapisdk.models.operations;



public class ItemsDeleteRequest {
    public ItemsDeletePathParams pathParams;
    public ItemsDeleteRequest withPathParams(ItemsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ItemsDeleteQueryParams queryParams;
    public ItemsDeleteRequest withQueryParams(ItemsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ItemsDeleteHeaders headers;
    public ItemsDeleteRequest withHeaders(ItemsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ItemsDeleteSecurity security;
    public ItemsDeleteRequest withSecurity(ItemsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}