package openapisdk.models.operations;



public class CompressFilesResponse {
    public String contentType;
    public CompressFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceResponse resourceResponse;
    public CompressFilesResponse withResourceResponse(openapisdk.models.shared.ResourceResponse resourceResponse) {
        this.resourceResponse = resourceResponse;
        return this;
    }
    public Long statusCode;
    public CompressFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}