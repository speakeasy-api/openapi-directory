package openapisdk.models.operations;



public class ModifierGroupsOneResponse {
    public openapisdk.models.shared.BadRequestResponse badRequestResponse;
    public ModifierGroupsOneResponse withBadRequestResponse(openapisdk.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    public String contentType;
    public ModifierGroupsOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetModifierGroupResponse getModifierGroupResponse;
    public ModifierGroupsOneResponse withGetModifierGroupResponse(openapisdk.models.shared.GetModifierGroupResponse getModifierGroupResponse) {
        this.getModifierGroupResponse = getModifierGroupResponse;
        return this;
    }
    public openapisdk.models.shared.NotFoundResponse notFoundResponse;
    public ModifierGroupsOneResponse withNotFoundResponse(openapisdk.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    public openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse;
    public ModifierGroupsOneResponse withPaymentRequiredResponse(openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    public Long statusCode;
    public ModifierGroupsOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse;
    public ModifierGroupsOneResponse withUnauthorizedResponse(openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;
    public ModifierGroupsOneResponse withUnexpectedErrorResponse(openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    public openapisdk.models.shared.UnprocessableResponse unprocessableResponse;
    public ModifierGroupsOneResponse withUnprocessableResponse(openapisdk.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
}