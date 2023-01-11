package openapisdk.models.operations;



public class LabResultsCreateRequest {
    public LabResultsCreateQueryParams queryParams;
    public LabResultsCreateRequest withQueryParams(LabResultsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabResultsCreateSecurity security;
    public LabResultsCreateRequest withSecurity(LabResultsCreateSecurity security) {
        this.security = security;
        return this;
    }
}