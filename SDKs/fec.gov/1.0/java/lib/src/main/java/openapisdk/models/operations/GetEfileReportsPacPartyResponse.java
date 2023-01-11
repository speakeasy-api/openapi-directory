package openapisdk.models.operations;



public class GetEfileReportsPacPartyResponse {
    public openapisdk.models.shared.BaseF3XFilingPage baseF3XFilingPage;
    public GetEfileReportsPacPartyResponse withBaseF3XFilingPage(openapisdk.models.shared.BaseF3XFilingPage baseF3XFilingPage) {
        this.baseF3XFilingPage = baseF3XFilingPage;
        return this;
    }
    public String contentType;
    public GetEfileReportsPacPartyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEfileReportsPacPartyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}