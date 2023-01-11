package openapisdk.models.operations;



public class PostDescribeUsersResponse {
    public byte[] body;
    public PostDescribeUsersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}