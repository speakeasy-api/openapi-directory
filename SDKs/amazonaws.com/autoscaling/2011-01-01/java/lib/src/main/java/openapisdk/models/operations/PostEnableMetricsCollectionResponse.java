package openapisdk.models.operations;



public class PostEnableMetricsCollectionResponse {
    public byte[] body;
    public PostEnableMetricsCollectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostEnableMetricsCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostEnableMetricsCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}