package openapisdk.models.operations;



public class PostGetCredentialReportRequest {
    public PostGetCredentialReportQueryParams queryParams;
    public PostGetCredentialReportRequest withQueryParams(PostGetCredentialReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetCredentialReportHeaders headers;
    public PostGetCredentialReportRequest withHeaders(PostGetCredentialReportHeaders headers) {
        this.headers = headers;
        return this;
    }
}