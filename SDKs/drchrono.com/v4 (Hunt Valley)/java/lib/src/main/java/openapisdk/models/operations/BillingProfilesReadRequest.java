package openapisdk.models.operations;



public class BillingProfilesReadRequest {
    public BillingProfilesReadPathParams pathParams;
    public BillingProfilesReadRequest withPathParams(BillingProfilesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BillingProfilesReadQueryParams queryParams;
    public BillingProfilesReadRequest withQueryParams(BillingProfilesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BillingProfilesReadSecurity security;
    public BillingProfilesReadRequest withSecurity(BillingProfilesReadSecurity security) {
        this.security = security;
        return this;
    }
}