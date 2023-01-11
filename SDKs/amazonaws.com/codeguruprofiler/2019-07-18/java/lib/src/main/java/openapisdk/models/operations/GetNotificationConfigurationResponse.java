package openapisdk.models.operations;



public class GetNotificationConfigurationResponse {
    public String contentType;
    public GetNotificationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetNotificationConfigurationResponse getNotificationConfigurationResponse;
    public GetNotificationConfigurationResponse withGetNotificationConfigurationResponse(openapisdk.models.shared.GetNotificationConfigurationResponse getNotificationConfigurationResponse) {
        this.getNotificationConfigurationResponse = getNotificationConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public GetNotificationConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetNotificationConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetNotificationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetNotificationConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetNotificationConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}