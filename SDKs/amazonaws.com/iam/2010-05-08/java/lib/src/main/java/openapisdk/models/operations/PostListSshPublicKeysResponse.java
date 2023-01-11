package openapisdk.models.operations;



public class PostListSshPublicKeysResponse {
    public byte[] body;
    public PostListSshPublicKeysResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListSshPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListSshPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}