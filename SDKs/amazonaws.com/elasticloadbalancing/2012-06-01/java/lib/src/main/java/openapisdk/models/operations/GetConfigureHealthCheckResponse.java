package openapisdk.models.operations;



public class GetConfigureHealthCheckResponse {
    public byte[] body;
    public GetConfigureHealthCheckResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetConfigureHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConfigureHealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}