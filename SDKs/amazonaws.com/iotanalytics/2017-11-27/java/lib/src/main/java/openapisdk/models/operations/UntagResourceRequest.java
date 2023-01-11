package openapisdk.models.operations;



public class UntagResourceRequest {
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