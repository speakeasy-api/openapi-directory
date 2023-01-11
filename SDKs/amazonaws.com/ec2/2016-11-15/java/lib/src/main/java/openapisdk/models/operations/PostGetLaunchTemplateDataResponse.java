package openapisdk.models.operations;



public class PostGetLaunchTemplateDataResponse {
    public byte[] body;
    public PostGetLaunchTemplateDataResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetLaunchTemplateDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetLaunchTemplateDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}