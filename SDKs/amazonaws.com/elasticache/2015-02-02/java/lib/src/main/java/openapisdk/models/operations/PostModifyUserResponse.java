package openapisdk.models.operations;



public class PostModifyUserResponse {
    public byte[] body;
    public PostModifyUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}