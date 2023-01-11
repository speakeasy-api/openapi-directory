package openapisdk.models.operations;



public class GetCachedImageResponse {
    public byte[] cacheImageResponse;
    public GetCachedImageResponse withCacheImageResponse(byte[] cacheImageResponse) {
        this.cacheImageResponse = cacheImageResponse;
        return this;
    }
    public String contentType;
    public GetCachedImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCachedImageResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCachedImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}