package openapisdk.models.operations;



public class PostStopMetricStreamsResponse {
    public byte[] body;
    public PostStopMetricStreamsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStopMetricStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStopMetricStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}