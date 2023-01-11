package openapisdk.models.operations;



public class GetModifyLaunchTemplateResponse {
    public byte[] body;
    public GetModifyLaunchTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetModifyLaunchTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModifyLaunchTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}