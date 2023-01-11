package openapisdk.models.operations;



public class GetPayoutsRequest {
    public GetPayoutsQueryParams queryParams;
    public GetPayoutsRequest withQueryParams(GetPayoutsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPayoutsSecurity security;
    public GetPayoutsRequest withSecurity(GetPayoutsSecurity security) {
        this.security = security;
        return this;
    }
}