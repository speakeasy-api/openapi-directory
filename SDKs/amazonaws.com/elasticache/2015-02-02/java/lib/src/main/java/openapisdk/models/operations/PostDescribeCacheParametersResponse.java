package openapisdk.models.operations;



public class PostDescribeCacheParametersResponse {
    public byte[] body;
    public PostDescribeCacheParametersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeCacheParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeCacheParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}