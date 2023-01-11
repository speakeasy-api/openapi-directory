package openapisdk.models.operations;



public class PostGetAccountSummaryRequest {
    public PostGetAccountSummaryQueryParams queryParams;
    public PostGetAccountSummaryRequest withQueryParams(PostGetAccountSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetAccountSummaryHeaders headers;
    public PostGetAccountSummaryRequest withHeaders(PostGetAccountSummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
}