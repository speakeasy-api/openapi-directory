package openapisdk.models.operations;



public class PostSetInstanceProtectionResponse {
    public byte[] body;
    public PostSetInstanceProtectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetInstanceProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetInstanceProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}