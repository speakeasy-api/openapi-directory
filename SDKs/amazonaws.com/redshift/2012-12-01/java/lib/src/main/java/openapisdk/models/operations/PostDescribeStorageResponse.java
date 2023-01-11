package openapisdk.models.operations;



public class PostDescribeStorageResponse {
    public byte[] body;
    public PostDescribeStorageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}