package openapisdk.models.operations;



public class PostGetOpenIdConnectProviderResponse {
    public byte[] body;
    public PostGetOpenIdConnectProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetOpenIdConnectProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetOpenIdConnectProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}