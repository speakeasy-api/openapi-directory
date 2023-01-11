package openapisdk.models.operations;



public class LabOrdersDeleteRequest {
    public LabOrdersDeletePathParams pathParams;
    public LabOrdersDeleteRequest withPathParams(LabOrdersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabOrdersDeleteQueryParams queryParams;
    public LabOrdersDeleteRequest withQueryParams(LabOrdersDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabOrdersDeleteSecurity security;
    public LabOrdersDeleteRequest withSecurity(LabOrdersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}