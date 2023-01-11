package openapisdk.models.operations;



public class DeletePipelineResponse {
    public Object accessDeniedException;
    public DeletePipelineResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeletePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePipelineResponse;
    public DeletePipelineResponse withDeletePipelineResponse(java.util.Map<String, Object> deletePipelineResponse) {
        this.deletePipelineResponse = deletePipelineResponse;
        return this;
    }
    public Object incompatibleVersionException;
    public DeletePipelineResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public DeletePipelineResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceInUseException;
    public DeletePipelineResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePipelineResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeletePipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}