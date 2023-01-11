package openapisdk.models.operations;



public class UpdateWorkloadResponse {
    public Object accessDeniedException;
    public UpdateWorkloadResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateWorkloadResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateWorkloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateWorkloadResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateWorkloadResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateWorkloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateWorkloadResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateWorkloadOutput updateWorkloadOutput;
    public UpdateWorkloadResponse withUpdateWorkloadOutput(openapisdk.models.shared.UpdateWorkloadOutput updateWorkloadOutput) {
        this.updateWorkloadOutput = updateWorkloadOutput;
        return this;
    }
    public Object validationException;
    public UpdateWorkloadResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}