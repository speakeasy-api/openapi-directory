package openapisdk.models.operations;



public class UpdatePipelineStatusResponse {
    public Object accessDeniedException;
    public UpdatePipelineStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdatePipelineStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public UpdatePipelineStatusResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public UpdatePipelineStatusResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceInUseException;
    public UpdatePipelineStatusResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePipelineStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePipelineStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePipelineStatusResponse updatePipelineStatusResponse;
    public UpdatePipelineStatusResponse withUpdatePipelineStatusResponse(openapisdk.models.shared.UpdatePipelineStatusResponse updatePipelineStatusResponse) {
        this.updatePipelineStatusResponse = updatePipelineStatusResponse;
        return this;
    }
    public Object validationException;
    public UpdatePipelineStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}