package openapisdk.models.operations;



public class PostCreateTrafficMirrorSessionResponse {
    public byte[] body;
    public PostCreateTrafficMirrorSessionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateTrafficMirrorSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateTrafficMirrorSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}