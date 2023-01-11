package openapisdk.models.operations;



public class PostAssumeRoleResponse {
    public byte[] body;
    public PostAssumeRoleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAssumeRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssumeRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}