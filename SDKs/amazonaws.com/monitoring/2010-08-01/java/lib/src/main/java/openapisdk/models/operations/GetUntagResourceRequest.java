package openapisdk.models.operations;



public class GetUntagResourceRequest {
    public GetUntagResourceQueryParams queryParams;
    public GetUntagResourceRequest withQueryParams(GetUntagResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUntagResourceHeaders headers;
    public GetUntagResourceRequest withHeaders(GetUntagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}