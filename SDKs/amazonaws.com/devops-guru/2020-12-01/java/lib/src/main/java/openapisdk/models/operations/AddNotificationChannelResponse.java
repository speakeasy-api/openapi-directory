package openapisdk.models.operations;



public class AddNotificationChannelResponse {
    public Object accessDeniedException;
    public AddNotificationChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AddNotificationChannelResponse addNotificationChannelResponse;
    public AddNotificationChannelResponse withAddNotificationChannelResponse(openapisdk.models.shared.AddNotificationChannelResponse addNotificationChannelResponse) {
        this.addNotificationChannelResponse = addNotificationChannelResponse;
        return this;
    }
    public Object conflictException;
    public AddNotificationChannelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AddNotificationChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AddNotificationChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddNotificationChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AddNotificationChannelResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AddNotificationChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AddNotificationChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AddNotificationChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}