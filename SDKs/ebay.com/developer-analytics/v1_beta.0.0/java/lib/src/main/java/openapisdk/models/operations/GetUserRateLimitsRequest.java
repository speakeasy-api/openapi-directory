package openapisdk.models.operations;



public class GetUserRateLimitsRequest {
    public GetUserRateLimitsQueryParams queryParams;
    public GetUserRateLimitsRequest withQueryParams(GetUserRateLimitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserRateLimitsSecurity security;
    public GetUserRateLimitsRequest withSecurity(GetUserRateLimitsSecurity security) {
        this.security = security;
        return this;
    }
}