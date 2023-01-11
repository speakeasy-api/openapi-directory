package openapisdk.models.operations;



public class LabResultsReadRequest {
    public LabResultsReadPathParams pathParams;
    public LabResultsReadRequest withPathParams(LabResultsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabResultsReadQueryParams queryParams;
    public LabResultsReadRequest withQueryParams(LabResultsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabResultsReadSecurity security;
    public LabResultsReadRequest withSecurity(LabResultsReadSecurity security) {
        this.security = security;
        return this;
    }
}