package openapisdk.models.operations;



public class PostModifyTrafficMirrorSessionResponse {
    public byte[] body;
    public PostModifyTrafficMirrorSessionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyTrafficMirrorSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyTrafficMirrorSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}