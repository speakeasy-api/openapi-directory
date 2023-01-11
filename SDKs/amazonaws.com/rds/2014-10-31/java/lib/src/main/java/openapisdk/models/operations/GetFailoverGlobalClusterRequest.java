package openapisdk.models.operations;



public class GetFailoverGlobalClusterRequest {
    public GetFailoverGlobalClusterQueryParams queryParams;
    public GetFailoverGlobalClusterRequest withQueryParams(GetFailoverGlobalClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFailoverGlobalClusterHeaders headers;
    public GetFailoverGlobalClusterRequest withHeaders(GetFailoverGlobalClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}