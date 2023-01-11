package openapisdk.models.operations;



public class GetEfileReportsHouseSenateResponse {
    public openapisdk.models.shared.BaseF3FilingPage baseF3FilingPage;
    public GetEfileReportsHouseSenateResponse withBaseF3FilingPage(openapisdk.models.shared.BaseF3FilingPage baseF3FilingPage) {
        this.baseF3FilingPage = baseF3FilingPage;
        return this;
    }
    public String contentType;
    public GetEfileReportsHouseSenateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEfileReportsHouseSenateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}