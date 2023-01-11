package openapisdk.models.operations;



public class GetAdsByInventoryReferenceRequest {
    public GetAdsByInventoryReferencePathParams pathParams;
    public GetAdsByInventoryReferenceRequest withPathParams(GetAdsByInventoryReferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAdsByInventoryReferenceQueryParams queryParams;
    public GetAdsByInventoryReferenceRequest withQueryParams(GetAdsByInventoryReferenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAdsByInventoryReferenceSecurity security;
    public GetAdsByInventoryReferenceRequest withSecurity(GetAdsByInventoryReferenceSecurity security) {
        this.security = security;
        return this;
    }
}