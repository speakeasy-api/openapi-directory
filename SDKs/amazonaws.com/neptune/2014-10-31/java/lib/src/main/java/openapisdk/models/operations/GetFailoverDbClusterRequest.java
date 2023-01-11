package openapisdk.models.operations;



public class GetFailoverDbClusterRequest {
    public GetFailoverDbClusterQueryParams queryParams;
    public GetFailoverDbClusterRequest withQueryParams(GetFailoverDbClusterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFailoverDbClusterHeaders headers;
    public GetFailoverDbClusterRequest withHeaders(GetFailoverDbClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
}