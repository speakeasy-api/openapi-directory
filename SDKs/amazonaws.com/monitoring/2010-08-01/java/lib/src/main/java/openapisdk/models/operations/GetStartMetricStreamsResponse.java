package openapisdk.models.operations;



public class GetStartMetricStreamsResponse {
    public byte[] body;
    public GetStartMetricStreamsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStartMetricStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStartMetricStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}