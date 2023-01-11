package openapisdk.models.operations;



public class GetPayoutResponse {
    public String contentType;
    public GetPayoutResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Payout payout;
    public GetPayoutResponse withPayout(openapisdk.models.shared.Payout payout) {
        this.payout = payout;
        return this;
    }
    public Long statusCode;
    public GetPayoutResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}