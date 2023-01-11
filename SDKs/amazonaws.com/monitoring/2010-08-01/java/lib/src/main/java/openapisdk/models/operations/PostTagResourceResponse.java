package openapisdk.models.operations;



public class PostTagResourceResponse {
    public byte[] body;
    public PostTagResourceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}