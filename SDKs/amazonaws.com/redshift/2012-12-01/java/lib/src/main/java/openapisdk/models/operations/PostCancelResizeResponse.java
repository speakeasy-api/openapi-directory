package openapisdk.models.operations;



public class PostCancelResizeResponse {
    public byte[] body;
    public PostCancelResizeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCancelResizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCancelResizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}