package openapisdk.models.operations;



public class PostDescribeApplicationsResponse {
    public byte[] body;
    public PostDescribeApplicationsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}