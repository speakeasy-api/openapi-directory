package openapisdk.models.operations;



public class PostDeleteNatGatewayResponse {
    public byte[] body;
    public PostDeleteNatGatewayResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteNatGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteNatGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}