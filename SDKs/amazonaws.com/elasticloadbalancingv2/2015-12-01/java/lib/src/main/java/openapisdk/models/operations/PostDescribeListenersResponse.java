package openapisdk.models.operations;



public class PostDescribeListenersResponse {
    public byte[] body;
    public PostDescribeListenersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeListenersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeListenersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}