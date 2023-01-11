package openapisdk.models.operations;



public class PatientPaymentsReadRequest {
    public PatientPaymentsReadPathParams pathParams;
    public PatientPaymentsReadRequest withPathParams(PatientPaymentsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientPaymentsReadQueryParams queryParams;
    public PatientPaymentsReadRequest withQueryParams(PatientPaymentsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPaymentsReadSecurity security;
    public PatientPaymentsReadRequest withSecurity(PatientPaymentsReadSecurity security) {
        this.security = security;
        return this;
    }
}