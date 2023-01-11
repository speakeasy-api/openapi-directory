package openapisdk.models.operations;



public class BillingProfilesListRequest {
    public BillingProfilesListQueryParams queryParams;
    public BillingProfilesListRequest withQueryParams(BillingProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BillingProfilesListSecurity security;
    public BillingProfilesListRequest withSecurity(BillingProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}