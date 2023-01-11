package openapisdk.models.operations;



public class EinVerificationLookupRequest {
    public EinVerificationLookupQueryParams queryParams;
    public EinVerificationLookupRequest withQueryParams(EinVerificationLookupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EinVerificationLookupSecurity security;
    public EinVerificationLookupRequest withSecurity(EinVerificationLookupSecurity security) {
        this.security = security;
        return this;
    }
}