package openapisdk.models.operations;



public class InventoryCategoriesReadRequest {
    public InventoryCategoriesReadPathParams pathParams;
    public InventoryCategoriesReadRequest withPathParams(InventoryCategoriesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InventoryCategoriesReadQueryParams queryParams;
    public InventoryCategoriesReadRequest withQueryParams(InventoryCategoriesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public InventoryCategoriesReadSecurity security;
    public InventoryCategoriesReadRequest withSecurity(InventoryCategoriesReadSecurity security) {
        this.security = security;
        return this;
    }
}