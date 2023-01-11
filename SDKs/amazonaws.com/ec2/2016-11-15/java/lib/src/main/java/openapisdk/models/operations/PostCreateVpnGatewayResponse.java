package openapisdk.models.operations;



public class PostCreateVpnGatewayResponse {
    public byte[] body;
    public PostCreateVpnGatewayResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateVpnGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateVpnGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}