package openapisdk.models.operations;



public class PostRotateEncryptionKeyResponse {
    public byte[] body;
    public PostRotateEncryptionKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRotateEncryptionKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRotateEncryptionKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}