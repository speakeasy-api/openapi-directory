package openapisdk.models.operations;



public class UntagResourceRequest {
    public UntagResourcePathParams pathParams;
    public UntagResourceRequest withPathParams(UntagResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UntagResourceQueryParams queryParams;
    public UntagResourceRequest withQueryParams(UntagResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UntagResourceHeaders headers;
    public UntagResourceRequest withHeaders(UntagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}