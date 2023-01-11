package openapisdk.models.operations;



public class CustomersAddResponse {
    public openapisdk.models.shared.BadRequestResponse badRequestResponse;
    public CustomersAddResponse withBadRequestResponse(openapisdk.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    public String contentType;
    public CustomersAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomerSupportCustomerResponse createCustomerSupportCustomerResponse;
    public CustomersAddResponse withCreateCustomerSupportCustomerResponse(openapisdk.models.shared.CreateCustomerSupportCustomerResponse createCustomerSupportCustomerResponse) {
        this.createCustomerSupportCustomerResponse = createCustomerSupportCustomerResponse;
        return this;
    }
    public openapisdk.models.shared.NotFoundResponse notFoundResponse;
    public CustomersAddResponse withNotFoundResponse(openapisdk.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    public openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse;
    public CustomersAddResponse withPaymentRequiredResponse(openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    public Long statusCode;
    public CustomersAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse;
    public CustomersAddResponse withUnauthorizedResponse(openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;
    public CustomersAddResponse withUnexpectedErrorResponse(openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    public openapisdk.models.shared.UnprocessableResponse unprocessableResponse;
    public CustomersAddResponse withUnprocessableResponse(openapisdk.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
}