package openapisdk.models.operations;



public class PatientPhysicalExamsPartialUpdateRequest {
    public PatientPhysicalExamsPartialUpdatePathParams pathParams;
    public PatientPhysicalExamsPartialUpdateRequest withPathParams(PatientPhysicalExamsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientPhysicalExamsPartialUpdateQueryParams queryParams;
    public PatientPhysicalExamsPartialUpdateRequest withQueryParams(PatientPhysicalExamsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPhysicalExamsPartialUpdateSecurity security;
    public PatientPhysicalExamsPartialUpdateRequest withSecurity(PatientPhysicalExamsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}