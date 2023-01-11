package openapisdk.models.operations;



public class PatientPaymentLogListRequest {
    public PatientPaymentLogListQueryParams queryParams;
    public PatientPaymentLogListRequest withQueryParams(PatientPaymentLogListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientPaymentLogListSecurity security;
    public PatientPaymentLogListRequest withSecurity(PatientPaymentLogListSecurity security) {
        this.security = security;
        return this;
    }
}