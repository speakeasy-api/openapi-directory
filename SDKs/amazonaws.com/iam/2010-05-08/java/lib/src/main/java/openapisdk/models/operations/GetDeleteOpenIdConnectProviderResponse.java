package openapisdk.models.operations;



public class GetDeleteOpenIdConnectProviderResponse {
    public byte[] body;
    public GetDeleteOpenIdConnectProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteOpenIdConnectProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteOpenIdConnectProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}