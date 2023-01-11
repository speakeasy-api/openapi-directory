package openapisdk.models.operations;



public class ListArtifactVersionsRequest {
    public ListArtifactVersionsPathParams pathParams;
    public ListArtifactVersionsRequest withPathParams(ListArtifactVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListArtifactVersionsQueryParams queryParams;
    public ListArtifactVersionsRequest withQueryParams(ListArtifactVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}