package openapisdk.models.operations;



public class GetDatasetContentRequest {
    public GetDatasetContentPathParams pathParams;
    public GetDatasetContentRequest withPathParams(GetDatasetContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDatasetContentQueryParams queryParams;
    public GetDatasetContentRequest withQueryParams(GetDatasetContentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDatasetContentHeaders headers;
    public GetDatasetContentRequest withHeaders(GetDatasetContentHeaders headers) {
        this.headers = headers;
        return this;
    }
}