package openapisdk.models.operations;



public class PostDescribeLaunchTemplatesResponse {
    public byte[] body;
    public PostDescribeLaunchTemplatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeLaunchTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeLaunchTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}