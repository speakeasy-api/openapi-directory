package openapisdk.models.operations;



public class GetStopMetricStreamsResponse {
    public byte[] body;
    public GetStopMetricStreamsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStopMetricStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStopMetricStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}