package openapisdk.models.operations;



public class PostCreateVpnConnectionResponse {
    public byte[] body;
    public PostCreateVpnConnectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateVpnConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateVpnConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}