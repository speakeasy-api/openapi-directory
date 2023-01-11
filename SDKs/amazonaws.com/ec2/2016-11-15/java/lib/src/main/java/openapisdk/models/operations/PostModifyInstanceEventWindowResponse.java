package openapisdk.models.operations;



public class PostModifyInstanceEventWindowResponse {
    public byte[] body;
    public PostModifyInstanceEventWindowResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyInstanceEventWindowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyInstanceEventWindowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}