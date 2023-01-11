package openapisdk.models.operations;



public class DriveGroupsAllResponse {
    public openapisdk.models.shared.BadRequestResponse badRequestResponse;
    public DriveGroupsAllResponse withBadRequestResponse(openapisdk.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    public String contentType;
    public DriveGroupsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDriveGroupsResponse getDriveGroupsResponse;
    public DriveGroupsAllResponse withGetDriveGroupsResponse(openapisdk.models.shared.GetDriveGroupsResponse getDriveGroupsResponse) {
        this.getDriveGroupsResponse = getDriveGroupsResponse;
        return this;
    }
    public openapisdk.models.shared.NotFoundResponse notFoundResponse;
    public DriveGroupsAllResponse withNotFoundResponse(openapisdk.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    public openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse;
    public DriveGroupsAllResponse withPaymentRequiredResponse(openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    public Long statusCode;
    public DriveGroupsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse;
    public DriveGroupsAllResponse withUnauthorizedResponse(openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;
    public DriveGroupsAllResponse withUnexpectedErrorResponse(openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    public openapisdk.models.shared.UnprocessableResponse unprocessableResponse;
    public DriveGroupsAllResponse withUnprocessableResponse(openapisdk.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
}