package openapisdk.models.operations;



public class AddNotificationChannelsResponse {
    public openapisdk.models.shared.AddNotificationChannelsResponse addNotificationChannelsResponse;
    public AddNotificationChannelsResponse withAddNotificationChannelsResponse(openapisdk.models.shared.AddNotificationChannelsResponse addNotificationChannelsResponse) {
        this.addNotificationChannelsResponse = addNotificationChannelsResponse;
        return this;
    }
    public Object conflictException;
    public AddNotificationChannelsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AddNotificationChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AddNotificationChannelsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddNotificationChannelsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AddNotificationChannelsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AddNotificationChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AddNotificationChannelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AddNotificationChannelsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}