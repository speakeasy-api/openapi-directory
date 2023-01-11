package openapisdk.models.operations;



public class LabOrdersPartialUpdateRequest {
    public LabOrdersPartialUpdatePathParams pathParams;
    public LabOrdersPartialUpdateRequest withPathParams(LabOrdersPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabOrdersPartialUpdateQueryParams queryParams;
    public LabOrdersPartialUpdateRequest withQueryParams(LabOrdersPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabOrdersPartialUpdateSecurity security;
    public LabOrdersPartialUpdateRequest withSecurity(LabOrdersPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}