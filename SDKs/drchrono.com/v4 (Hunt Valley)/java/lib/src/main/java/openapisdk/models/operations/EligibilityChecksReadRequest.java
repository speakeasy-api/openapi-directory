package openapisdk.models.operations;



public class EligibilityChecksReadRequest {
    public EligibilityChecksReadPathParams pathParams;
    public EligibilityChecksReadRequest withPathParams(EligibilityChecksReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EligibilityChecksReadQueryParams queryParams;
    public EligibilityChecksReadRequest withQueryParams(EligibilityChecksReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EligibilityChecksReadSecurity security;
    public EligibilityChecksReadRequest withSecurity(EligibilityChecksReadSecurity security) {
        this.security = security;
        return this;
    }
}