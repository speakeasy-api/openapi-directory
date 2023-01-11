package openapisdk.models.operations;



public class GetStartDbClusterRequest {
    public GetStartDbClusterQueryParams queryParams;
    public GetStartDbClusterRequest withQueryParams(GetStartDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStartDbClusterHeaders headers;
    public GetStartDbClusterRequest withHeaders(GetStartDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}