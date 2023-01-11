package openapisdk.models.operations;



public class PostDescribeKeyPairsResponse {
    public byte[] body;
    public PostDescribeKeyPairsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeKeyPairsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeKeyPairsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}