package openapisdk.models.operations;



public class EinVerificationBasicRequest {
    public EinVerificationBasicQueryParams queryParams;
    public EinVerificationBasicRequest withQueryParams(EinVerificationBasicQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EinVerificationBasicSecurity security;
    public EinVerificationBasicRequest withSecurity(EinVerificationBasicSecurity security) {
        this.security = security;
        return this;
    }
}