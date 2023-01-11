package openapisdk.models.operations;



public class PostAssumeRoleWithSamlResponse {
    public byte[] body;
    public PostAssumeRoleWithSamlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAssumeRoleWithSamlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssumeRoleWithSamlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}