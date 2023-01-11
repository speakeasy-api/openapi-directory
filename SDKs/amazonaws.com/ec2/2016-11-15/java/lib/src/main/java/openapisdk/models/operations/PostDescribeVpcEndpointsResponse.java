package openapisdk.models.operations;



public class PostDescribeVpcEndpointsResponse {
    public byte[] body;
    public PostDescribeVpcEndpointsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeVpcEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeVpcEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}