package openapisdk.models.operations;



public class PostDescribeImageAttributeResponse {
    public byte[] body;
    public PostDescribeImageAttributeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeImageAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeImageAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}