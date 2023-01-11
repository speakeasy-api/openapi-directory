package openapisdk.models.operations;



public class PostCreateLaunchTemplateVersionResponse {
    public byte[] body;
    public PostCreateLaunchTemplateVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateLaunchTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateLaunchTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}