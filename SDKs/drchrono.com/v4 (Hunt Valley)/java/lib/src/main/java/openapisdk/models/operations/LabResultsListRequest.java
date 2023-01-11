package openapisdk.models.operations;



public class LabResultsListRequest {
    public LabResultsListQueryParams queryParams;
    public LabResultsListRequest withQueryParams(LabResultsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabResultsListSecurity security;
    public LabResultsListRequest withSecurity(LabResultsListSecurity security) {
        this.security = security;
        return this;
    }
}