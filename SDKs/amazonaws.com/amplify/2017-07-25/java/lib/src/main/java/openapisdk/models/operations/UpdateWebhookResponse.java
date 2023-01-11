package openapisdk.models.operations;



public class UpdateWebhookResponse {
    public Object badRequestException;
    public UpdateWebhookResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependentServiceFailureException;
    public UpdateWebhookResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public UpdateWebhookResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public UpdateWebhookResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateWebhookResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateWebhookResult updateWebhookResult;
    public UpdateWebhookResponse withUpdateWebhookResult(openapisdk.models.shared.UpdateWebhookResult updateWebhookResult) {
        this.updateWebhookResult = updateWebhookResult;
        return this;
    }
}