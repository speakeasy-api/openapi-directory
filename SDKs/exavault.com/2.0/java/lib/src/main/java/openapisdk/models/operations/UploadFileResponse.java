package openapisdk.models.operations;



public class UploadFileResponse {
    public String contentType;
    public UploadFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceResponse resourceResponse;
    public UploadFileResponse withResourceResponse(openapisdk.models.shared.ResourceResponse resourceResponse) {
        this.resourceResponse = resourceResponse;
        return this;
    }
    public Long statusCode;
    public UploadFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}