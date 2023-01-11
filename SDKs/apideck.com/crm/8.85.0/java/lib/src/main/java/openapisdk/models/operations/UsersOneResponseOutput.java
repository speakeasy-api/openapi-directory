package openapisdk.models.operations;



public class UsersOneResponseOutput {
    public openapisdk.models.shared.BadRequestResponse badRequestResponse;
    public UsersOneResponseOutput withBadRequestResponse(openapisdk.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    public String contentType;
    public UsersOneResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUserResponseOutput getUserResponse;
    public UsersOneResponseOutput withGetUserResponse(openapisdk.models.shared.GetUserResponseOutput getUserResponse) {
        this.getUserResponse = getUserResponse;
        return this;
    }
    public openapisdk.models.shared.NotFoundResponse notFoundResponse;
    public UsersOneResponseOutput withNotFoundResponse(openapisdk.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    public openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse;
    public UsersOneResponseOutput withPaymentRequiredResponse(openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    public Long statusCode;
    public UsersOneResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse;
    public UsersOneResponseOutput withUnauthorizedResponse(openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;
    public UsersOneResponseOutput withUnexpectedErrorResponse(openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    public openapisdk.models.shared.UnprocessableResponse unprocessableResponse;
    public UsersOneResponseOutput withUnprocessableResponse(openapisdk.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
}