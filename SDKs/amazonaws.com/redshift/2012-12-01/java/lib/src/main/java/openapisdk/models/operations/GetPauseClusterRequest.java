package openapisdk.models.operations;



public class GetPauseClusterRequest {
    public GetPauseClusterQueryParams queryParams;
    public GetPauseClusterRequest withQueryParams(GetPauseClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPauseClusterHeaders headers;
    public GetPauseClusterRequest withHeaders(GetPauseClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}