package openapisdk.models.operations;



public class GetUserRateLimitsResponse {
    public String contentType;
    public GetUserRateLimitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RateLimitsResponse rateLimitsResponse;
    public GetUserRateLimitsResponse withRateLimitsResponse(openapisdk.models.shared.RateLimitsResponse rateLimitsResponse) {
        this.rateLimitsResponse = rateLimitsResponse;
        return this;
    }
    public Long statusCode;
    public GetUserRateLimitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserRateLimits500ApplicationJson getUserRateLimits500ApplicationJSONObject;
    public GetUserRateLimitsResponse withGetUserRateLimits500ApplicationJsonObject(GetUserRateLimits500ApplicationJson getUserRateLimits500ApplicationJSONObject) {
        this.getUserRateLimits500ApplicationJSONObject = getUserRateLimits500ApplicationJSONObject;
        return this;
    }
}