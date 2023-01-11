package openapisdk.models.operations;



public class TinVerificationComprehensiveCheckRequest {
    public TinVerificationComprehensiveCheckQueryParams queryParams;
    public TinVerificationComprehensiveCheckRequest withQueryParams(TinVerificationComprehensiveCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TinVerificationComprehensiveCheckSecurity security;
    public TinVerificationComprehensiveCheckRequest withSecurity(TinVerificationComprehensiveCheckSecurity security) {
        this.security = security;
        return this;
    }
}