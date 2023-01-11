package openapisdk.models.operations;



public class PostExitStandbyResponse {
    public byte[] body;
    public PostExitStandbyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostExitStandbyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostExitStandbyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}