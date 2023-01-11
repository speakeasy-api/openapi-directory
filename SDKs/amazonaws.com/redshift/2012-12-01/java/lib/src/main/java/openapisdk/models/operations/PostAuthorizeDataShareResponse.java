package openapisdk.models.operations;



public class PostAuthorizeDataShareResponse {
    public byte[] body;
    public PostAuthorizeDataShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAuthorizeDataShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthorizeDataShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}