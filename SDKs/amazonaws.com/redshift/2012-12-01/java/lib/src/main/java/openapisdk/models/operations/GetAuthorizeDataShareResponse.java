package openapisdk.models.operations;



public class GetAuthorizeDataShareResponse {
    public byte[] body;
    public GetAuthorizeDataShareResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAuthorizeDataShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAuthorizeDataShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}