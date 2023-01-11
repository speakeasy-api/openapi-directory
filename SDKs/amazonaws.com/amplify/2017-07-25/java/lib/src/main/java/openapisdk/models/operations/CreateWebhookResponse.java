package openapisdk.models.operations;



public class CreateWebhookResponse {
    public Object badRequestException;
    public CreateWebhookResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWebhookResult createWebhookResult;
    public CreateWebhookResponse withCreateWebhookResult(openapisdk.models.shared.CreateWebhookResult createWebhookResult) {
        this.createWebhookResult = createWebhookResult;
        return this;
    }
    public Object dependentServiceFailureException;
    public CreateWebhookResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public CreateWebhookResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateWebhookResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateWebhookResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateWebhookResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}