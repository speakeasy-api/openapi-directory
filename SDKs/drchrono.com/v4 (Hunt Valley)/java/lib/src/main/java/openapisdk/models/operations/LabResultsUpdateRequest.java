package openapisdk.models.operations;



public class LabResultsUpdateRequest {
    public LabResultsUpdatePathParams pathParams;
    public LabResultsUpdateRequest withPathParams(LabResultsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabResultsUpdateQueryParams queryParams;
    public LabResultsUpdateRequest withQueryParams(LabResultsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabResultsUpdateSecurity security;
    public LabResultsUpdateRequest withSecurity(LabResultsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}