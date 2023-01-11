package openapisdk.models.operations;



public class PostDeauthorizeDataShareResponse {
    public byte[] body;
    public PostDeauthorizeDataShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeauthorizeDataShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeauthorizeDataShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}