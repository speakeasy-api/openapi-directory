package openapisdk.models.operations;



public class GetRebootClusterRequest {
    public GetRebootClusterQueryParams queryParams;
    public GetRebootClusterRequest withQueryParams(GetRebootClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRebootClusterHeaders headers;
    public GetRebootClusterRequest withHeaders(GetRebootClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}