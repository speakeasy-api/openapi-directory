package openapisdk.models.operations;



public class DeleteResourcesResponse {
    public String contentType;
    public DeleteResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmptyResponse emptyResponse;
    public DeleteResourcesResponse withEmptyResponse(openapisdk.models.shared.EmptyResponse emptyResponse) {
        this.emptyResponse = emptyResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceMultiResponse resourceMultiResponse;
    public DeleteResourcesResponse withResourceMultiResponse(openapisdk.models.shared.ResourceMultiResponse resourceMultiResponse) {
        this.resourceMultiResponse = resourceMultiResponse;
        return this;
    }
    public Long statusCode;
    public DeleteResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}