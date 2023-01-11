package openapisdk.models.operations;



public class TinVerificationBasicCheckRequest {
    public TinVerificationBasicCheckQueryParams queryParams;
    public TinVerificationBasicCheckRequest withQueryParams(TinVerificationBasicCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TinVerificationBasicCheckSecurity security;
    public TinVerificationBasicCheckRequest withSecurity(TinVerificationBasicCheckSecurity security) {
        this.security = security;
        return this;
    }
}