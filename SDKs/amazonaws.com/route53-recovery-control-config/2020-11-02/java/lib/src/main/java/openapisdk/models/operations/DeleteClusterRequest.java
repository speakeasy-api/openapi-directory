package openapisdk.models.operations;



public class DeleteClusterRequest {
    public DeleteClusterPathParams pathParams;
    public DeleteClusterRequest withPathParams(DeleteClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteClusterHeaders headers;
    public DeleteClusterRequest withHeaders(DeleteClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}