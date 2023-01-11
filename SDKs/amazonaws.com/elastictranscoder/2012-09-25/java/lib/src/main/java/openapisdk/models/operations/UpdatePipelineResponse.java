package openapisdk.models.operations;



public class UpdatePipelineResponse {
    public Object accessDeniedException;
    public UpdatePipelineResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdatePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public UpdatePipelineResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public UpdatePipelineResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceInUseException;
    public UpdatePipelineResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePipelineResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePipelineResponse updatePipelineResponse;
    public UpdatePipelineResponse withUpdatePipelineResponse(openapisdk.models.shared.UpdatePipelineResponse updatePipelineResponse) {
        this.updatePipelineResponse = updatePipelineResponse;
        return this;
    }
    public Object validationException;
    public UpdatePipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}