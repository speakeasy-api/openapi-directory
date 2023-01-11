package openapisdk.models.operations;



public class UpdateResourceByIdResponse {
    public String contentType;
    public UpdateResourceByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceResponse resourceResponse;
    public UpdateResourceByIdResponse withResourceResponse(openapisdk.models.shared.ResourceResponse resourceResponse) {
        this.resourceResponse = resourceResponse;
        return this;
    }
    public Long statusCode;
    public UpdateResourceByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}