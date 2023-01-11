package openapisdk.models.operations;



public class MoveResourcesResponse {
    public String contentType;
    public MoveResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceCopyMove resourceCopyMove;
    public MoveResourcesResponse withResourceCopyMove(openapisdk.models.shared.ResourceCopyMove resourceCopyMove) {
        this.resourceCopyMove = resourceCopyMove;
        return this;
    }
    public openapisdk.models.shared.ResourceMultiResponse resourceMultiResponse;
    public MoveResourcesResponse withResourceMultiResponse(openapisdk.models.shared.ResourceMultiResponse resourceMultiResponse) {
        this.resourceMultiResponse = resourceMultiResponse;
        return this;
    }
    public Long statusCode;
    public MoveResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}