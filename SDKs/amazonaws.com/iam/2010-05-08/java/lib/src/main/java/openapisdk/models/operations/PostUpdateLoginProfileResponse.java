package openapisdk.models.operations;



public class PostUpdateLoginProfileResponse {
    public byte[] body;
    public PostUpdateLoginProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdateLoginProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdateLoginProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}