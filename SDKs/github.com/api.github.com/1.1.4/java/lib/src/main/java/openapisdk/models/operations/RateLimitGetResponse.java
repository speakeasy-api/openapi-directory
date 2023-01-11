package openapisdk.models.operations;



public class RateLimitGetResponse {
    public String contentType;
    public RateLimitGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RateLimitGetResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RateLimitGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public RateLimitGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.RateLimitOverview rateLimitOverview;
    public RateLimitGetResponse withRateLimitOverview(openapisdk.models.shared.RateLimitOverview rateLimitOverview) {
        this.rateLimitOverview = rateLimitOverview;
        return this;
    }
}