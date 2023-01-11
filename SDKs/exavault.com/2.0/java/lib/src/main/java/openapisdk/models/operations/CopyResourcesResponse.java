package openapisdk.models.operations;



public class CopyResourcesResponse {
    public String contentType;
    public CopyResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceCopyMove resourceCopyMove;
    public CopyResourcesResponse withResourceCopyMove(openapisdk.models.shared.ResourceCopyMove resourceCopyMove) {
        this.resourceCopyMove = resourceCopyMove;
        return this;
    }
    public openapisdk.models.shared.ResourceMultiResponse resourceMultiResponse;
    public CopyResourcesResponse withResourceMultiResponse(openapisdk.models.shared.ResourceMultiResponse resourceMultiResponse) {
        this.resourceMultiResponse = resourceMultiResponse;
        return this;
    }
    public Long statusCode;
    public CopyResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}