package openapisdk.models.operations;



public class LabTestsCreateRequest {
    public LabTestsCreateQueryParams queryParams;
    public LabTestsCreateRequest withQueryParams(LabTestsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabTestsCreateSecurity security;
    public LabTestsCreateRequest withSecurity(LabTestsCreateSecurity security) {
        this.security = security;
        return this;
    }
}