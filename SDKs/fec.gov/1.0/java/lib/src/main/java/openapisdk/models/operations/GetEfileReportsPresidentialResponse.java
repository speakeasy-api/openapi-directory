package openapisdk.models.operations;



public class GetEfileReportsPresidentialResponse {
    public openapisdk.models.shared.BaseF3PFilingPage baseF3PFilingPage;
    public GetEfileReportsPresidentialResponse withBaseF3PFilingPage(openapisdk.models.shared.BaseF3PFilingPage baseF3PFilingPage) {
        this.baseF3PFilingPage = baseF3PFilingPage;
        return this;
    }
    public String contentType;
    public GetEfileReportsPresidentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEfileReportsPresidentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}