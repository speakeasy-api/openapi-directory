package openapisdk.models.operations;



public class PatientPaymentsCreateRequest {
    public PatientPaymentsCreateQueryParams queryParams;
    public PatientPaymentsCreateRequest withQueryParams(PatientPaymentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPaymentsCreateSecurity security;
    public PatientPaymentsCreateRequest withSecurity(PatientPaymentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}