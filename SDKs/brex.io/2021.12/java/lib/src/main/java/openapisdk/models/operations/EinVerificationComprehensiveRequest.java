package openapisdk.models.operations;



public class EinVerificationComprehensiveRequest {
    public EinVerificationComprehensiveQueryParams queryParams;
    public EinVerificationComprehensiveRequest withQueryParams(EinVerificationComprehensiveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EinVerificationComprehensiveSecurity security;
    public EinVerificationComprehensiveRequest withSecurity(EinVerificationComprehensiveSecurity security) {
        this.security = security;
        return this;
    }
}