package openapisdk.models.operations;



public class PatientPhysicalExamsUpdateRequest {
    public PatientPhysicalExamsUpdatePathParams pathParams;
    public PatientPhysicalExamsUpdateRequest withPathParams(PatientPhysicalExamsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientPhysicalExamsUpdateQueryParams queryParams;
    public PatientPhysicalExamsUpdateRequest withQueryParams(PatientPhysicalExamsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPhysicalExamsUpdateSecurity security;
    public PatientPhysicalExamsUpdateRequest withSecurity(PatientPhysicalExamsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}