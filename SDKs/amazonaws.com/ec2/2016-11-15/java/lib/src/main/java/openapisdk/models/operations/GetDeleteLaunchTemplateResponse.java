package openapisdk.models.operations;



public class GetDeleteLaunchTemplateResponse {
    public byte[] body;
    public GetDeleteLaunchTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteLaunchTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteLaunchTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}