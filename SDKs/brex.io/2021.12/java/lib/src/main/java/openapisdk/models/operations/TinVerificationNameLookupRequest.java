package openapisdk.models.operations;



public class TinVerificationNameLookupRequest {
    public TinVerificationNameLookupQueryParams queryParams;
    public TinVerificationNameLookupRequest withQueryParams(TinVerificationNameLookupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TinVerificationNameLookupSecurity security;
    public TinVerificationNameLookupRequest withSecurity(TinVerificationNameLookupSecurity security) {
        this.security = security;
        return this;
    }
}