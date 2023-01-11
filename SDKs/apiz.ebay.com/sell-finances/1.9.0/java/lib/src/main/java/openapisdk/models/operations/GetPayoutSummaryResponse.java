package openapisdk.models.operations;



public class GetPayoutSummaryResponse {
    public String contentType;
    public GetPayoutSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayoutSummaryResponse payoutSummaryResponse;
    public GetPayoutSummaryResponse withPayoutSummaryResponse(openapisdk.models.shared.PayoutSummaryResponse payoutSummaryResponse) {
        this.payoutSummaryResponse = payoutSummaryResponse;
        return this;
    }
    public Long statusCode;
    public GetPayoutSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}