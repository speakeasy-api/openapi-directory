package openapisdk.models.operations;



public class PostGetSshPublicKeyResponse {
    public byte[] body;
    public PostGetSshPublicKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}