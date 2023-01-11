package openapisdk.models.operations;



public class PostCopyOptionGroupResponse {
    public byte[] body;
    public PostCopyOptionGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCopyOptionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCopyOptionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}