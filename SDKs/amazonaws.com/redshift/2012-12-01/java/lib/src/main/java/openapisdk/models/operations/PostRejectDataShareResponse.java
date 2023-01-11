package openapisdk.models.operations;



public class PostRejectDataShareResponse {
    public byte[] body;
    public PostRejectDataShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRejectDataShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRejectDataShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}