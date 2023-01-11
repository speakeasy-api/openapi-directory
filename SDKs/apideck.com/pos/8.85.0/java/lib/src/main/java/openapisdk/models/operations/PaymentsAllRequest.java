package openapisdk.models.operations;



public class PaymentsAllRequest {
    public PaymentsAllQueryParams queryParams;
    public PaymentsAllRequest withQueryParams(PaymentsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PaymentsAllHeaders headers;
    public PaymentsAllRequest withHeaders(PaymentsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PaymentsAllSecurity security;
    public PaymentsAllRequest withSecurity(PaymentsAllSecurity security) {
        this.security = security;
        return this;
    }
}