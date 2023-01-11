package openapisdk.models.operations;



public class AccountArticleReportGenerateResponse {
    public openapisdk.models.shared.AccountReport accountReport;
    public AccountArticleReportGenerateResponse withAccountReport(openapisdk.models.shared.AccountReport accountReport) {
        this.accountReport = accountReport;
        return this;
    }
    public String contentType;
    public AccountArticleReportGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountArticleReportGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}