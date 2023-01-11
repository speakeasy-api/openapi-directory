package openapisdk.models.operations;



public class SendCustomVerificationEmailResponse {
    public Object badRequestException;
    public SendCustomVerificationEmailResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public SendCustomVerificationEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public SendCustomVerificationEmailResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object mailFromDomainNotVerifiedException;
    public SendCustomVerificationEmailResponse withMailFromDomainNotVerifiedException(Object mailFromDomainNotVerifiedException) {
        this.mailFromDomainNotVerifiedException = mailFromDomainNotVerifiedException;
        return this;
    }
    public Object messageRejected;
    public SendCustomVerificationEmailResponse withMessageRejected(Object messageRejected) {
        this.messageRejected = messageRejected;
        return this;
    }
    public Object notFoundException;
    public SendCustomVerificationEmailResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.SendCustomVerificationEmailResponse sendCustomVerificationEmailResponse;
    public SendCustomVerificationEmailResponse withSendCustomVerificationEmailResponse(openapisdk.models.shared.SendCustomVerificationEmailResponse sendCustomVerificationEmailResponse) {
        this.sendCustomVerificationEmailResponse = sendCustomVerificationEmailResponse;
        return this;
    }
    public Object sendingPausedException;
    public SendCustomVerificationEmailResponse withSendingPausedException(Object sendingPausedException) {
        this.sendingPausedException = sendingPausedException;
        return this;
    }
    public Long statusCode;
    public SendCustomVerificationEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SendCustomVerificationEmailResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}