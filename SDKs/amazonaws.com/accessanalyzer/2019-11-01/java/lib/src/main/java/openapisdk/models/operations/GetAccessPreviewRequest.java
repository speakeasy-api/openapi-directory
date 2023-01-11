package openapisdk.models.operations;



public class GetAccessPreviewRequest {
    public GetAccessPreviewPathParams pathParams;
    public GetAccessPreviewRequest withPathParams(GetAccessPreviewPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAccessPreviewQueryParams queryParams;
    public GetAccessPreviewRequest withQueryParams(GetAccessPreviewQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAccessPreviewHeaders headers;
    public GetAccessPreviewRequest withHeaders(GetAccessPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
}