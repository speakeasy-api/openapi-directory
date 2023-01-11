package openapisdk.models.operations;



public class OfficesUpdateRequest {
    public OfficesUpdatePathParams pathParams;
    public OfficesUpdateRequest withPathParams(OfficesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OfficesUpdateQueryParams queryParams;
    public OfficesUpdateRequest withQueryParams(OfficesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OfficesUpdateSecurity security;
    public OfficesUpdateRequest withSecurity(OfficesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}