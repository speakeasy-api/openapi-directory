package openapisdk.models.operations;



public class GetActivitiesResponse {
    public String contentType;
    public GetActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentDisputeActivityHistory paymentDisputeActivityHistory;
    public GetActivitiesResponse withPaymentDisputeActivityHistory(openapisdk.models.shared.PaymentDisputeActivityHistory paymentDisputeActivityHistory) {
        this.paymentDisputeActivityHistory = paymentDisputeActivityHistory;
        return this;
    }
    public Long statusCode;
    public GetActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}