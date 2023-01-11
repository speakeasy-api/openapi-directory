package openapisdk.models.operations;



public class GetPaymentDisputeSummariesResponse {
    public String contentType;
    public GetPaymentDisputeSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisputeSummaryResponse disputeSummaryResponse;
    public GetPaymentDisputeSummariesResponse withDisputeSummaryResponse(openapisdk.models.shared.DisputeSummaryResponse disputeSummaryResponse) {
        this.disputeSummaryResponse = disputeSummaryResponse;
        return this;
    }
    public Long statusCode;
    public GetPaymentDisputeSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}