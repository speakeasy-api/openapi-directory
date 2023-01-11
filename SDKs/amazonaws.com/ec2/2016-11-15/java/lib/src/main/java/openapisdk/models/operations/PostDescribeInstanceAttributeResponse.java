package openapisdk.models.operations;



public class PostDescribeInstanceAttributeResponse {
    public byte[] body;
    public PostDescribeInstanceAttributeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeInstanceAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeInstanceAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}