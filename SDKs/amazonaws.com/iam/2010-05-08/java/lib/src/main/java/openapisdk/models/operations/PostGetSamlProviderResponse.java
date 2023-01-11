package openapisdk.models.operations;



public class PostGetSamlProviderResponse {
    public byte[] body;
    public PostGetSamlProviderResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetSamlProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetSamlProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}