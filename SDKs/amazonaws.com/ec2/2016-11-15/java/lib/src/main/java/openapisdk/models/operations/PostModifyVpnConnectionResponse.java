package openapisdk.models.operations;



public class PostModifyVpnConnectionResponse {
    public byte[] body;
    public PostModifyVpnConnectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyVpnConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyVpnConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}