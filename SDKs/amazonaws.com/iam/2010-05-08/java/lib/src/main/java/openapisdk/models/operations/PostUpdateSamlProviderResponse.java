package openapisdk.models.operations;



public class PostUpdateSamlProviderResponse {
    public byte[] body;
    public PostUpdateSamlProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdateSamlProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdateSamlProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}