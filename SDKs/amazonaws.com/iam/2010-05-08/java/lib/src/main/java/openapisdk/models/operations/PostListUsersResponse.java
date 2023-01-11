package openapisdk.models.operations;



public class PostListUsersResponse {
    public byte[] body;
    public PostListUsersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}