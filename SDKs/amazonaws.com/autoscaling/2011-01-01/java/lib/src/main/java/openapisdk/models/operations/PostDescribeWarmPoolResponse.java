package openapisdk.models.operations;



public class PostDescribeWarmPoolResponse {
    public byte[] body;
    public PostDescribeWarmPoolResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeWarmPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeWarmPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}