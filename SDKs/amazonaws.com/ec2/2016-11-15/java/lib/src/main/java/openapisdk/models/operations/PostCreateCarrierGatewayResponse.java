package openapisdk.models.operations;



public class PostCreateCarrierGatewayResponse {
    public byte[] body;
    public PostCreateCarrierGatewayResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateCarrierGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateCarrierGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}