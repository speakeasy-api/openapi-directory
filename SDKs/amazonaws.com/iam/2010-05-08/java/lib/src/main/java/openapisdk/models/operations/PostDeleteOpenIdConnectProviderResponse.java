package openapisdk.models.operations;



public class PostDeleteOpenIdConnectProviderResponse {
    public byte[] body;
    public PostDeleteOpenIdConnectProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteOpenIdConnectProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteOpenIdConnectProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}