package openapisdk.models.operations;



public class PostDescribeEndpointAuthorizationResponse {
    public byte[] body;
    public PostDescribeEndpointAuthorizationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeEndpointAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeEndpointAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}