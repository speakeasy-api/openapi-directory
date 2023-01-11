package openapisdk.models.operations;



public class LabTestsListRequest {
    public LabTestsListQueryParams queryParams;
    public LabTestsListRequest withQueryParams(LabTestsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabTestsListSecurity security;
    public LabTestsListRequest withSecurity(LabTestsListSecurity security) {
        this.security = security;
        return this;
    }
}