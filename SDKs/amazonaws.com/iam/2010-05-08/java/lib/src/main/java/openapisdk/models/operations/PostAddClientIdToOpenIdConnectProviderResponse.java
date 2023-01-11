package openapisdk.models.operations;



public class PostAddClientIdToOpenIdConnectProviderResponse {
    public byte[] body;
    public PostAddClientIdToOpenIdConnectProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAddClientIdToOpenIdConnectProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAddClientIdToOpenIdConnectProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}