package openapisdk.models.operations;



public class PatientPhysicalExamsCreateRequest {
    public PatientPhysicalExamsCreateQueryParams queryParams;
    public PatientPhysicalExamsCreateRequest withQueryParams(PatientPhysicalExamsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPhysicalExamsCreateSecurity security;
    public PatientPhysicalExamsCreateRequest withSecurity(PatientPhysicalExamsCreateSecurity security) {
        this.security = security;
        return this;
    }
}