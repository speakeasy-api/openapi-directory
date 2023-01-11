package openapisdk.models.operations;



public class GetAnalyzedResourceRequest {
    public GetAnalyzedResourceQueryParams queryParams;
    public GetAnalyzedResourceRequest withQueryParams(GetAnalyzedResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAnalyzedResourceHeaders headers;
    public GetAnalyzedResourceRequest withHeaders(GetAnalyzedResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}