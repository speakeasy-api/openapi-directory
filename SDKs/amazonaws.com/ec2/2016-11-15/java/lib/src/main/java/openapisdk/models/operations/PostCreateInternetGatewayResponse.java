package openapisdk.models.operations;



public class PostCreateInternetGatewayResponse {
    public byte[] body;
    public PostCreateInternetGatewayResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateInternetGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateInternetGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}