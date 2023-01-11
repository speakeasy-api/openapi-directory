package openapisdk.models.operations;



public class PostCreateLaunchTemplateResponse {
    public byte[] body;
    public PostCreateLaunchTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateLaunchTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateLaunchTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}