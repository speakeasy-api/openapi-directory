package openapisdk.models.operations;



public class LabTestsUpdateRequest {
    public LabTestsUpdatePathParams pathParams;
    public LabTestsUpdateRequest withPathParams(LabTestsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabTestsUpdateQueryParams queryParams;
    public LabTestsUpdateRequest withQueryParams(LabTestsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabTestsUpdateSecurity security;
    public LabTestsUpdateRequest withSecurity(LabTestsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}