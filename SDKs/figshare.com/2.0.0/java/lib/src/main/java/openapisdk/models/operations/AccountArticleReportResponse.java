package openapisdk.models.operations;



public class AccountArticleReportResponse {
    public openapisdk.models.shared.AccountReport[] accountReports;
    public AccountArticleReportResponse withAccountReports(openapisdk.models.shared.AccountReport[] accountReports) {
        this.accountReports = accountReports;
        return this;
    }
    public String contentType;
    public AccountArticleReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountArticleReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}