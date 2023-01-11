package openapisdk.models.operations;



public class GetPayoutsResponse {
    public String contentType;
    public GetPayoutsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Payouts payouts;
    public GetPayoutsResponse withPayouts(openapisdk.models.shared.Payouts payouts) {
        this.payouts = payouts;
        return this;
    }
    public Long statusCode;
    public GetPayoutsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}