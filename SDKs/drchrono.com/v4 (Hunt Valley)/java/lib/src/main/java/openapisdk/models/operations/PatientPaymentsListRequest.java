package openapisdk.models.operations;



public class PatientPaymentsListRequest {
    public PatientPaymentsListQueryParams queryParams;
    public PatientPaymentsListRequest withQueryParams(PatientPaymentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPaymentsListSecurity security;
    public PatientPaymentsListRequest withSecurity(PatientPaymentsListSecurity security) {
        this.security = security;
        return this;
    }
}