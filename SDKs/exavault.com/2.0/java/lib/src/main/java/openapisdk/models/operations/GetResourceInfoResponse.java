package openapisdk.models.operations;



public class GetResourceInfoResponse {
    public String contentType;
    public GetResourceInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceResponse resourceResponse;
    public GetResourceInfoResponse withResourceResponse(openapisdk.models.shared.ResourceResponse resourceResponse) {
        this.resourceResponse = resourceResponse;
        return this;
    }
    public Long statusCode;
    public GetResourceInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}