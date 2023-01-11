package openapisdk.models.operations;



public class GetListMetricStreamsResponse {
    public byte[] body;
    public GetListMetricStreamsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListMetricStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListMetricStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}