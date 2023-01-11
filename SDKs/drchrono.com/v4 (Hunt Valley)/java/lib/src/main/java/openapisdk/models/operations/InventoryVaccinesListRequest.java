package openapisdk.models.operations;



public class InventoryVaccinesListRequest {
    public InventoryVaccinesListQueryParams queryParams;
    public InventoryVaccinesListRequest withQueryParams(InventoryVaccinesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public InventoryVaccinesListSecurity security;
    public InventoryVaccinesListRequest withSecurity(InventoryVaccinesListSecurity security) {
        this.security = security;
        return this;
    }
}