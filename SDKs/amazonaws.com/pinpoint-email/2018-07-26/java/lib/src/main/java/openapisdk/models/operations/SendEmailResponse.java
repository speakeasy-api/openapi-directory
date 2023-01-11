package openapisdk.models.operations;



public class SendEmailResponse {
    public Object accountSuspendedException;
    public SendEmailResponse withAccountSuspendedException(Object accountSuspendedException) {
        this.accountSuspendedException = accountSuspendedException;
        return this;
    }
    public Object badRequestException;
    public SendEmailResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public SendEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public SendEmailResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object mailFromDomainNotVerifiedException;
    public SendEmailResponse withMailFromDomainNotVerifiedException(Object mailFromDomainNotVerifiedException) {
        this.mailFromDomainNotVerifiedException = mailFromDomainNotVerifiedException;
        return this;
    }
    public Object messageRejected;
    public SendEmailResponse withMessageRejected(Object messageRejected) {
        this.messageRejected = messageRejected;
        return this;
    }
    public Object notFoundException;
    public SendEmailResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.SendEmailResponse sendEmailResponse;
    public SendEmailResponse withSendEmailResponse(openapisdk.models.shared.SendEmailResponse sendEmailResponse) {
        this.sendEmailResponse = sendEmailResponse;
        return this;
    }
    public Object sendingPausedException;
    public SendEmailResponse withSendingPausedException(Object sendingPausedException) {
        this.sendingPausedException = sendingPausedException;
        return this;
    }
    public Long statusCode;
    public SendEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SendEmailResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}