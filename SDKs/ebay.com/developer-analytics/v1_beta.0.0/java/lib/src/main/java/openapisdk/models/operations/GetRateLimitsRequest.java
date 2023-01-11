package openapisdk.models.operations;



public class GetRateLimitsRequest {
    public GetRateLimitsQueryParams queryParams;
    public GetRateLimitsRequest withQueryParams(GetRateLimitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRateLimitsSecurity security;
    public GetRateLimitsRequest withSecurity(GetRateLimitsSecurity security) {
        this.security = security;
        return this;
    }
}