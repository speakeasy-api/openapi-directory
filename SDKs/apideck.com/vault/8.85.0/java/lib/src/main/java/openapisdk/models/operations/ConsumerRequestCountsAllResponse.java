package openapisdk.models.operations;



public class ConsumerRequestCountsAllResponse {
    public openapisdk.models.shared.BadRequestResponse badRequestResponse;
    public ConsumerRequestCountsAllResponse withBadRequestResponse(openapisdk.models.shared.BadRequestResponse badRequestResponse) {
        this.badRequestResponse = badRequestResponse;
        return this;
    }
    public openapisdk.models.shared.ConsumerRequestCountsInDateRangeResponse consumerRequestCountsInDateRangeResponse;
    public ConsumerRequestCountsAllResponse withConsumerRequestCountsInDateRangeResponse(openapisdk.models.shared.ConsumerRequestCountsInDateRangeResponse consumerRequestCountsInDateRangeResponse) {
        this.consumerRequestCountsInDateRangeResponse = consumerRequestCountsInDateRangeResponse;
        return this;
    }
    public String contentType;
    public ConsumerRequestCountsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFoundResponse notFoundResponse;
    public ConsumerRequestCountsAllResponse withNotFoundResponse(openapisdk.models.shared.NotFoundResponse notFoundResponse) {
        this.notFoundResponse = notFoundResponse;
        return this;
    }
    public openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse;
    public ConsumerRequestCountsAllResponse withPaymentRequiredResponse(openapisdk.models.shared.PaymentRequiredResponse paymentRequiredResponse) {
        this.paymentRequiredResponse = paymentRequiredResponse;
        return this;
    }
    public Long statusCode;
    public ConsumerRequestCountsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse;
    public ConsumerRequestCountsAllResponse withUnauthorizedResponse(openapisdk.models.shared.UnauthorizedResponse unauthorizedResponse) {
        this.unauthorizedResponse = unauthorizedResponse;
        return this;
    }
    public openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse;
    public ConsumerRequestCountsAllResponse withUnexpectedErrorResponse(openapisdk.models.shared.UnexpectedErrorResponse unexpectedErrorResponse) {
        this.unexpectedErrorResponse = unexpectedErrorResponse;
        return this;
    }
    public openapisdk.models.shared.UnprocessableResponse unprocessableResponse;
    public ConsumerRequestCountsAllResponse withUnprocessableResponse(openapisdk.models.shared.UnprocessableResponse unprocessableResponse) {
        this.unprocessableResponse = unprocessableResponse;
        return this;
    }
}