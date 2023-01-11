package openapisdk.models.operations;



public class ListDatasetsRequest {
    public ListDatasetsQueryParams queryParams;
    public ListDatasetsRequest withQueryParams(ListDatasetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatasetsHeaders headers;
    public ListDatasetsRequest withHeaders(ListDatasetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}