package openapisdk.models.operations;



public class PostUploadSshPublicKeyResponse {
    public byte[] body;
    public PostUploadSshPublicKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUploadSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUploadSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}