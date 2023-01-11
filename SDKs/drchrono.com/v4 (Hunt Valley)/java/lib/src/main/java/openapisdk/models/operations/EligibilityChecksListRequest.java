package openapisdk.models.operations;



public class EligibilityChecksListRequest {
    public EligibilityChecksListQueryParams queryParams;
    public EligibilityChecksListRequest withQueryParams(EligibilityChecksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EligibilityChecksListSecurity security;
    public EligibilityChecksListRequest withSecurity(EligibilityChecksListSecurity security) {
        this.security = security;
        return this;
    }
}