package openapisdk.models.operations;



public class UpdatePaymentResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public UpdatePaymentResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public UpdatePaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdatePaymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PaymentHistory[] paymentHistories;
    public UpdatePaymentResponse withPaymentHistories(openapisdk.models.shared.PaymentHistory[] paymentHistories) {
        this.paymentHistories = paymentHistories;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public UpdatePaymentResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public UpdatePaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public UpdatePaymentResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}