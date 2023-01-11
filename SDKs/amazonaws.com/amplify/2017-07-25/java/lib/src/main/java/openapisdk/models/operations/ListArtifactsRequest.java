package openapisdk.models.operations;



public class ListArtifactsRequest {
    public ListArtifactsPathParams pathParams;
    public ListArtifactsRequest withPathParams(ListArtifactsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListArtifactsQueryParams queryParams;
    public ListArtifactsRequest withQueryParams(ListArtifactsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListArtifactsHeaders headers;
    public ListArtifactsRequest withHeaders(ListArtifactsHeaders headers) {
        this.headers = headers;
        return this;
    }
}