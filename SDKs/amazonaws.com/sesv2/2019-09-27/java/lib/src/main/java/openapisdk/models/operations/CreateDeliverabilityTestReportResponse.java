package openapisdk.models.operations;



public class CreateDeliverabilityTestReportResponse {
    public Object accountSuspendedException;
    public CreateDeliverabilityTestReportResponse withAccountSuspendedException(Object accountSuspendedException) {
        this.accountSuspendedException = accountSuspendedException;
        return this;
    }
    public Object badRequestException;
    public CreateDeliverabilityTestReportResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateDeliverabilityTestReportResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateDeliverabilityTestReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeliverabilityTestReportResponse createDeliverabilityTestReportResponse;
    public CreateDeliverabilityTestReportResponse withCreateDeliverabilityTestReportResponse(openapisdk.models.shared.CreateDeliverabilityTestReportResponse createDeliverabilityTestReportResponse) {
        this.createDeliverabilityTestReportResponse = createDeliverabilityTestReportResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateDeliverabilityTestReportResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object mailFromDomainNotVerifiedException;
    public CreateDeliverabilityTestReportResponse withMailFromDomainNotVerifiedException(Object mailFromDomainNotVerifiedException) {
        this.mailFromDomainNotVerifiedException = mailFromDomainNotVerifiedException;
        return this;
    }
    public Object messageRejected;
    public CreateDeliverabilityTestReportResponse withMessageRejected(Object messageRejected) {
        this.messageRejected = messageRejected;
        return this;
    }
    public Object notFoundException;
    public CreateDeliverabilityTestReportResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object sendingPausedException;
    public CreateDeliverabilityTestReportResponse withSendingPausedException(Object sendingPausedException) {
        this.sendingPausedException = sendingPausedException;
        return this;
    }
    public Long statusCode;
    public CreateDeliverabilityTestReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateDeliverabilityTestReportResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}