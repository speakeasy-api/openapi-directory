package openapisdk.models.operations;



public class PostDeleteSshPublicKeyResponse {
    public byte[] body;
    public PostDeleteSshPublicKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}