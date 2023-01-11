package openapisdk.models.operations;



public class GetPresidentialFinancialSummaryResponse {
    public String contentType;
    public GetPresidentialFinancialSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PresidentialSummaryPage presidentialSummaryPage;
    public GetPresidentialFinancialSummaryResponse withPresidentialSummaryPage(openapisdk.models.shared.PresidentialSummaryPage presidentialSummaryPage) {
        this.presidentialSummaryPage = presidentialSummaryPage;
        return this;
    }
    public Long statusCode;
    public GetPresidentialFinancialSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}