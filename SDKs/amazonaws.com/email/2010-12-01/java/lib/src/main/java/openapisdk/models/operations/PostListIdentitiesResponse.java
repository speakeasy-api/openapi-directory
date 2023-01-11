package openapisdk.models.operations;



public class PostListIdentitiesResponse {
    public byte[] body;
    public PostListIdentitiesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListIdentitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListIdentitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}