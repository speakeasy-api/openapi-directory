package openapisdk.models.operations;



public class PostDescribeNatGatewaysResponse {
    public byte[] body;
    public PostDescribeNatGatewaysResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeNatGatewaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeNatGatewaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}