package openapisdk.models.operations;



public class LabOrdersUpdateRequest {
    public LabOrdersUpdatePathParams pathParams;
    public LabOrdersUpdateRequest withPathParams(LabOrdersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabOrdersUpdateQueryParams queryParams;
    public LabOrdersUpdateRequest withQueryParams(LabOrdersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabOrdersUpdateSecurity security;
    public LabOrdersUpdateRequest withSecurity(LabOrdersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}