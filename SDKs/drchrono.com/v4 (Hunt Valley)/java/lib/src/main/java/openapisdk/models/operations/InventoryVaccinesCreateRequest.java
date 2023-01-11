package openapisdk.models.operations;



public class InventoryVaccinesCreateRequest {
    public InventoryVaccinesCreateQueryParams queryParams;
    public InventoryVaccinesCreateRequest withQueryParams(InventoryVaccinesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public InventoryVaccinesCreateSecurity security;
    public InventoryVaccinesCreateRequest withSecurity(InventoryVaccinesCreateSecurity security) {
        this.security = security;
        return this;
    }
}