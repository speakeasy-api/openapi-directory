package openapisdk.models.operations;



public class PostRevokeEndpointAccessResponse {
    public byte[] body;
    public PostRevokeEndpointAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRevokeEndpointAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRevokeEndpointAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}