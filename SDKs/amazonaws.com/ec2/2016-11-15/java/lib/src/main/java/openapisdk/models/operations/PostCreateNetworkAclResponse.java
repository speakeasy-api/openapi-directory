package openapisdk.models.operations;



public class PostCreateNetworkAclResponse {
    public byte[] body;
    public PostCreateNetworkAclResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateNetworkAclResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateNetworkAclResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}