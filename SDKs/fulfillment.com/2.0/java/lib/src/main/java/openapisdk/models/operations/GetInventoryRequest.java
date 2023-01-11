package openapisdk.models.operations;



public class GetInventoryRequest {
    public GetInventoryQueryParams queryParams;
    public GetInventoryRequest withQueryParams(GetInventoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInventorySecurity security;
    public GetInventoryRequest withSecurity(GetInventorySecurity security) {
        this.security = security;
        return this;
    }
}