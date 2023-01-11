package openapisdk.models.operations;



public class PostGenerateCredentialReportRequest {
    public PostGenerateCredentialReportQueryParams queryParams;
    public PostGenerateCredentialReportRequest withQueryParams(PostGenerateCredentialReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGenerateCredentialReportHeaders headers;
    public PostGenerateCredentialReportRequest withHeaders(PostGenerateCredentialReportHeaders headers) {
        this.headers = headers;
        return this;
    }
}