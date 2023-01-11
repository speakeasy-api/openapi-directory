package openapisdk.models.operations;



public class PostDescribeSpotInstanceRequestsResponse {
    public byte[] body;
    public PostDescribeSpotInstanceRequestsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSpotInstanceRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSpotInstanceRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}