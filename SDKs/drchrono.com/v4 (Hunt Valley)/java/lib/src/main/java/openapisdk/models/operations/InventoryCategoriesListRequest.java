package openapisdk.models.operations;



public class InventoryCategoriesListRequest {
    public InventoryCategoriesListQueryParams queryParams;
    public InventoryCategoriesListRequest withQueryParams(InventoryCategoriesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public InventoryCategoriesListSecurity security;
    public InventoryCategoriesListRequest withSecurity(InventoryCategoriesListSecurity security) {
        this.security = security;
        return this;
    }
}