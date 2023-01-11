package openapisdk.models.operations;



public class PostUpdateConfigurationTemplateResponse {
    public byte[] body;
    public PostUpdateConfigurationTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdateConfigurationTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdateConfigurationTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}