package openapisdk.models.operations;



public class PostStartMetricStreamsResponse {
    public byte[] body;
    public PostStartMetricStreamsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStartMetricStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStartMetricStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}