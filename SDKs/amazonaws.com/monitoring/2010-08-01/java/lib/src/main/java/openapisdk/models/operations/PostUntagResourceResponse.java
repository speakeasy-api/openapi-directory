package openapisdk.models.operations;



public class PostUntagResourceResponse {
    public byte[] body;
    public PostUntagResourceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}