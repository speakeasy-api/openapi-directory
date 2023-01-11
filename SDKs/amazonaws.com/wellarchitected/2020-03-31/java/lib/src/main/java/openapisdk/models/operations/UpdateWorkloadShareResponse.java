package openapisdk.models.operations;



public class UpdateWorkloadShareResponse {
    public Object accessDeniedException;
    public UpdateWorkloadShareResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateWorkloadShareResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateWorkloadShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateWorkloadShareResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateWorkloadShareResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateWorkloadShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateWorkloadShareResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateWorkloadShareOutput updateWorkloadShareOutput;
    public UpdateWorkloadShareResponse withUpdateWorkloadShareOutput(openapisdk.models.shared.UpdateWorkloadShareOutput updateWorkloadShareOutput) {
        this.updateWorkloadShareOutput = updateWorkloadShareOutput;
        return this;
    }
    public Object validationException;
    public UpdateWorkloadShareResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}