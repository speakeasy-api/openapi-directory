package openapisdk.models.operations;



public class LabResultsDeleteRequest {
    public LabResultsDeletePathParams pathParams;
    public LabResultsDeleteRequest withPathParams(LabResultsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabResultsDeleteQueryParams queryParams;
    public LabResultsDeleteRequest withQueryParams(LabResultsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabResultsDeleteSecurity security;
    public LabResultsDeleteRequest withSecurity(LabResultsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}