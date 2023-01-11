package openapisdk.models.operations;



public class PostCopyDbParameterGroupResponse {
    public byte[] body;
    public PostCopyDbParameterGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCopyDbParameterGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCopyDbParameterGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}