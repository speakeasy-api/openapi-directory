package openapisdk.models.operations;



public class GetGetOpenIdConnectProviderResponse {
    public byte[] body;
    public GetGetOpenIdConnectProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetOpenIdConnectProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetOpenIdConnectProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}