package openapisdk.models.operations;



public class ListClustersRequest {
    public ListClustersQueryParams queryParams;
    public ListClustersRequest withQueryParams(ListClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListClustersHeaders headers;
    public ListClustersRequest withHeaders(ListClustersHeaders headers) {
        this.headers = headers;
        return this;
    }
}