package openapisdk.models.operations;



public class LabTestsDeleteRequest {
    public LabTestsDeletePathParams pathParams;
    public LabTestsDeleteRequest withPathParams(LabTestsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabTestsDeleteQueryParams queryParams;
    public LabTestsDeleteRequest withQueryParams(LabTestsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabTestsDeleteSecurity security;
    public LabTestsDeleteRequest withSecurity(LabTestsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}