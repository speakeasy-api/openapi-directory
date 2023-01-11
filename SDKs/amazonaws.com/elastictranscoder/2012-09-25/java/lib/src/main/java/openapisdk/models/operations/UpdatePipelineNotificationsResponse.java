package openapisdk.models.operations;



public class UpdatePipelineNotificationsResponse {
    public Object accessDeniedException;
    public UpdatePipelineNotificationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdatePipelineNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public UpdatePipelineNotificationsResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public UpdatePipelineNotificationsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceInUseException;
    public UpdatePipelineNotificationsResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePipelineNotificationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePipelineNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePipelineNotificationsResponse updatePipelineNotificationsResponse;
    public UpdatePipelineNotificationsResponse withUpdatePipelineNotificationsResponse(openapisdk.models.shared.UpdatePipelineNotificationsResponse updatePipelineNotificationsResponse) {
        this.updatePipelineNotificationsResponse = updatePipelineNotificationsResponse;
        return this;
    }
    public Object validationException;
    public UpdatePipelineNotificationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}