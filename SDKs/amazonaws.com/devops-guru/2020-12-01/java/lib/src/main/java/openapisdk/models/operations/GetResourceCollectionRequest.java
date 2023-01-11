package openapisdk.models.operations;



public class GetResourceCollectionRequest {
    public GetResourceCollectionPathParams pathParams;
    public GetResourceCollectionRequest withPathParams(GetResourceCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetResourceCollectionQueryParams queryParams;
    public GetResourceCollectionRequest withQueryParams(GetResourceCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResourceCollectionHeaders headers;
    public GetResourceCollectionRequest withHeaders(GetResourceCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
}