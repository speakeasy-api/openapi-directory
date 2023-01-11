package openapisdk.models.operations;



public class GetRateLimitsResponse {
    public String contentType;
    public GetRateLimitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RateLimitsResponse rateLimitsResponse;
    public GetRateLimitsResponse withRateLimitsResponse(openapisdk.models.shared.RateLimitsResponse rateLimitsResponse) {
        this.rateLimitsResponse = rateLimitsResponse;
        return this;
    }
    public Long statusCode;
    public GetRateLimitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetRateLimits500ApplicationJson getRateLimits500ApplicationJSONObject;
    public GetRateLimitsResponse withGetRateLimits500ApplicationJsonObject(GetRateLimits500ApplicationJson getRateLimits500ApplicationJSONObject) {
        this.getRateLimits500ApplicationJSONObject = getRateLimits500ApplicationJSONObject;
        return this;
    }
}