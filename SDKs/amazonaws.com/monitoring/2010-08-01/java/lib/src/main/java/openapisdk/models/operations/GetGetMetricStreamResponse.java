package openapisdk.models.operations;



public class GetGetMetricStreamResponse {
    public byte[] body;
    public GetGetMetricStreamResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetMetricStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetMetricStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}