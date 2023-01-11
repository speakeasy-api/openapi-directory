package openapisdk.models.operations;



public class CompaniesAddResponse {
    public openapisdk.models.shared.BadRequestResponse badRequestResponse;
    public CompaniesAddResponse withBadRequestResponse(openapisdk.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    public String contentType;
    public CompaniesAddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHrisCompanyResponse createHrisCompanyResponse;
    public CompaniesAddResponse withCreateHrisCompanyResponse(openapisdk.models.shared.CreateHrisCompanyResponse createHrisCompanyResponse) {
        this.createHrisCompanyResponse = createHrisCompanyResponse;
        return this;
    }
    public openapisdk.models.shared.NotFoundResponse notFoundResponse;
    public CompaniesAddResponse withNotFoundResponse(openapisdk.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    public openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse;
    public CompaniesAddResponse withPaymentRequiredResponse(openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    public Long statusCode;
    public CompaniesAddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse;
    public CompaniesAddResponse withUnauthorizedResponse(openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;
    public CompaniesAddResponse withUnexpectedErrorResponse(openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    public openapisdk.models.shared.UnprocessableResponse unprocessableResponse;
    public CompaniesAddResponse withUnprocessableResponse(openapisdk.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
}