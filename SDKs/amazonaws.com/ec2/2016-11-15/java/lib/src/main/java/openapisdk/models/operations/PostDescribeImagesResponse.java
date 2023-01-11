package openapisdk.models.operations;



public class PostDescribeImagesResponse {
    public byte[] body;
    public PostDescribeImagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeImagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeImagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}