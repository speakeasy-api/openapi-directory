package openapisdk.models.operations;



public class SuggestRequest {
    public SuggestQueryParams queryParams;
    public SuggestRequest withQueryParams(SuggestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SuggestHeaders headers;
    public SuggestRequest withHeaders(SuggestHeaders headers) {
        this.headers = headers;
        return this;
    }
}