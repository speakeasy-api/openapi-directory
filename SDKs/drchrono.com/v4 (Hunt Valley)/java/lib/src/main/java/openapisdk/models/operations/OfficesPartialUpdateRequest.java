package openapisdk.models.operations;



public class OfficesPartialUpdateRequest {
    public OfficesPartialUpdatePathParams pathParams;
    public OfficesPartialUpdateRequest withPathParams(OfficesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OfficesPartialUpdateQueryParams queryParams;
    public OfficesPartialUpdateRequest withQueryParams(OfficesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OfficesPartialUpdateSecurity security;
    public OfficesPartialUpdateRequest withSecurity(OfficesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}