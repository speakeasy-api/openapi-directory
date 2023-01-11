package openapisdk.models.operations;



public class PostDeleteRoleResponse {
    public byte[] body;
    public PostDeleteRoleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}