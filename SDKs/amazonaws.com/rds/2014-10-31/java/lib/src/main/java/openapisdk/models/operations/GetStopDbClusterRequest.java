package openapisdk.models.operations;



public class GetStopDbClusterRequest {
    public GetStopDbClusterQueryParams queryParams;
    public GetStopDbClusterRequest withQueryParams(GetStopDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStopDbClusterHeaders headers;
    public GetStopDbClusterRequest withHeaders(GetStopDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}