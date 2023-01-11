package openapisdk.models.operations;



public class DeletePaymentResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public DeletePaymentResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public DeletePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeletePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PaymentHistory[] paymentHistories;
    public DeletePaymentResponse withPaymentHistories(openapisdk.models.shared.PaymentHistory[] paymentHistories) {
        this.paymentHistories = paymentHistories;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public DeletePaymentResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public DeletePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}