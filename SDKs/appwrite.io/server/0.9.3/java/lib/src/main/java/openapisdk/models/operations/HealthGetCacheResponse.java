package openapisdk.models.operations;



public class HealthGetCacheResponse {
    public String contentType;
    public HealthGetCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HealthGetCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}