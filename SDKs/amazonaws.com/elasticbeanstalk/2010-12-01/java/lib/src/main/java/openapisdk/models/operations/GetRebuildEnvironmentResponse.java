package openapisdk.models.operations;



public class GetRebuildEnvironmentResponse {
    public byte[] body;
    public GetRebuildEnvironmentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRebuildEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRebuildEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}