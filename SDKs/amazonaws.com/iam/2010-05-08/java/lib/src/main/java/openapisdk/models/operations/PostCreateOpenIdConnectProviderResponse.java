package openapisdk.models.operations;



public class PostCreateOpenIdConnectProviderResponse {
    public byte[] body;
    public PostCreateOpenIdConnectProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateOpenIdConnectProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateOpenIdConnectProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}