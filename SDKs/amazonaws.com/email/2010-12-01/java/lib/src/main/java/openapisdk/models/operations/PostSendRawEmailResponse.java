package openapisdk.models.operations;



public class PostSendRawEmailResponse {
    public byte[] body;
    public PostSendRawEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSendRawEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSendRawEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}