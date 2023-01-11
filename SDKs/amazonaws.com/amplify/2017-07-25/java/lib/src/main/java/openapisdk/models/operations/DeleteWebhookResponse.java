package openapisdk.models.operations;



public class DeleteWebhookResponse {
    public Object badRequestException;
    public DeleteWebhookResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteWebhookResult deleteWebhookResult;
    public DeleteWebhookResponse withDeleteWebhookResult(openapisdk.models.shared.DeleteWebhookResult deleteWebhookResult) {
        this.deleteWebhookResult = deleteWebhookResult;
        return this;
    }
    public Object internalFailureException;
    public DeleteWebhookResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DeleteWebhookResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DeleteWebhookResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteWebhookResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}