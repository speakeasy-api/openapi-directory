package openapisdk.models.operations;



public class PostGetAccessKeyInfoResponse {
    public byte[] body;
    public PostGetAccessKeyInfoResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetAccessKeyInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetAccessKeyInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}