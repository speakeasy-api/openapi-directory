package openapisdk.models.operations;



public class InterferenceRequest {
    public InterferenceQueryParams queryParams;
    public InterferenceRequest withQueryParams(InterferenceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public InterferenceSecurity security;
    public InterferenceRequest withSecurity(InterferenceSecurity security) {
        this.security = security;
        return this;
    }
}