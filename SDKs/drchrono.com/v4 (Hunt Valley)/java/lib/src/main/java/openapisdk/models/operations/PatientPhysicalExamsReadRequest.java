package openapisdk.models.operations;



public class PatientPhysicalExamsReadRequest {
    public PatientPhysicalExamsReadPathParams pathParams;
    public PatientPhysicalExamsReadRequest withPathParams(PatientPhysicalExamsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientPhysicalExamsReadQueryParams queryParams;
    public PatientPhysicalExamsReadRequest withQueryParams(PatientPhysicalExamsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPhysicalExamsReadSecurity security;
    public PatientPhysicalExamsReadRequest withSecurity(PatientPhysicalExamsReadSecurity security) {
        this.security = security;
        return this;
    }
}