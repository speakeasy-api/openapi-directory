package openapisdk.models.operations;



public class PostCreateConfigurationTemplateResponse {
    public byte[] body;
    public PostCreateConfigurationTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateConfigurationTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateConfigurationTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}