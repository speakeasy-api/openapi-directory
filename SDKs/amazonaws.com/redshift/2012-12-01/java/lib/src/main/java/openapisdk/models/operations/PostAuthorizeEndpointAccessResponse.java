package openapisdk.models.operations;



public class PostAuthorizeEndpointAccessResponse {
    public byte[] body;
    public PostAuthorizeEndpointAccessResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAuthorizeEndpointAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthorizeEndpointAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}