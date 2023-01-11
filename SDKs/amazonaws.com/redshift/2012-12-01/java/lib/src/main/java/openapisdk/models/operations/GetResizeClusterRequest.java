package openapisdk.models.operations;



public class GetResizeClusterRequest {
    public GetResizeClusterQueryParams queryParams;
    public GetResizeClusterRequest withQueryParams(GetResizeClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResizeClusterHeaders headers;
    public GetResizeClusterRequest withHeaders(GetResizeClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}