package openapisdk.models.operations;



public class PostCreateCustomerGatewayResponse {
    public byte[] body;
    public PostCreateCustomerGatewayResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateCustomerGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateCustomerGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}