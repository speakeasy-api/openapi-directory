package openapisdk.models.operations;



public class PostPutMetricStreamResponse {
    public byte[] body;
    public PostPutMetricStreamResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutMetricStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutMetricStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}