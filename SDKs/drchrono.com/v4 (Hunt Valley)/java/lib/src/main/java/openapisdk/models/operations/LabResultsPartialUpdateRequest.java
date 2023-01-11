package openapisdk.models.operations;



public class LabResultsPartialUpdateRequest {
    public LabResultsPartialUpdatePathParams pathParams;
    public LabResultsPartialUpdateRequest withPathParams(LabResultsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LabResultsPartialUpdateQueryParams queryParams;
    public LabResultsPartialUpdateRequest withQueryParams(LabResultsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LabResultsPartialUpdateSecurity security;
    public LabResultsPartialUpdateRequest withSecurity(LabResultsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}