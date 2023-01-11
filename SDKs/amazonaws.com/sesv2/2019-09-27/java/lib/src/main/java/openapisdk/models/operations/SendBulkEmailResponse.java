package openapisdk.models.operations;



public class SendBulkEmailResponse {
    public Object accountSuspendedException;
    public SendBulkEmailResponse withAccountSuspendedException(Object accountSuspendedException) {
        this.accountSuspendedException = accountSuspendedException;
        return this;
    }
    public Object badRequestException;
    public SendBulkEmailResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public SendBulkEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public SendBulkEmailResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object mailFromDomainNotVerifiedException;
    public SendBulkEmailResponse withMailFromDomainNotVerifiedException(Object mailFromDomainNotVerifiedException) {
        this.mailFromDomainNotVerifiedException = mailFromDomainNotVerifiedException;
        return this;
    }
    public Object messageRejected;
    public SendBulkEmailResponse withMessageRejected(Object messageRejected) {
        this.messageRejected = messageRejected;
        return this;
    }
    public Object notFoundException;
    public SendBulkEmailResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.SendBulkEmailResponse sendBulkEmailResponse;
    public SendBulkEmailResponse withSendBulkEmailResponse(openapisdk.models.shared.SendBulkEmailResponse sendBulkEmailResponse) {
        this.sendBulkEmailResponse = sendBulkEmailResponse;
        return this;
    }
    public Object sendingPausedException;
    public SendBulkEmailResponse withSendingPausedException(Object sendingPausedException) {
        this.sendingPausedException = sendingPausedException;
        return this;
    }
    public Long statusCode;
    public SendBulkEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SendBulkEmailResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}