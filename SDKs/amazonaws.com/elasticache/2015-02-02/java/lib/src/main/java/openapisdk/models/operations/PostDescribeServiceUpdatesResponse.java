package openapisdk.models.operations;



public class PostDescribeServiceUpdatesResponse {
    public byte[] body;
    public PostDescribeServiceUpdatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeServiceUpdatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeServiceUpdatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}