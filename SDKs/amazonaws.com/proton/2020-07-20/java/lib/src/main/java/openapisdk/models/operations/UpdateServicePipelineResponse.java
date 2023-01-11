package openapisdk.models.operations;



public class UpdateServicePipelineResponse {
    public Object accessDeniedException;
    public UpdateServicePipelineResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateServicePipelineResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateServicePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateServicePipelineResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateServicePipelineResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServicePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateServicePipelineResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateServicePipelineOutput updateServicePipelineOutput;
    public UpdateServicePipelineResponse withUpdateServicePipelineOutput(openapisdk.models.shared.UpdateServicePipelineOutput updateServicePipelineOutput) {
        this.updateServicePipelineOutput = updateServicePipelineOutput;
        return this;
    }
    public Object validationException;
    public UpdateServicePipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}