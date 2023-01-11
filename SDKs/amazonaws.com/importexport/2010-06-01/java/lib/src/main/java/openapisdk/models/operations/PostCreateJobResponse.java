package openapisdk.models.operations;



public class PostCreateJobResponse {
    public byte[] body;
    public PostCreateJobResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}