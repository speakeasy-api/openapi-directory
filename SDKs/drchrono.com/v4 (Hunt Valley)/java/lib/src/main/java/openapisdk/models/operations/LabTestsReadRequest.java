package openapisdk.models.operations;



public class LabTestsReadRequest {
    public LabTestsReadPathParams pathParams;
    public LabTestsReadRequest withPathParams(LabTestsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabTestsReadQueryParams queryParams;
    public LabTestsReadRequest withQueryParams(LabTestsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabTestsReadSecurity security;
    public LabTestsReadRequest withSecurity(LabTestsReadSecurity security) {
        this.security = security;
        return this;
    }
}