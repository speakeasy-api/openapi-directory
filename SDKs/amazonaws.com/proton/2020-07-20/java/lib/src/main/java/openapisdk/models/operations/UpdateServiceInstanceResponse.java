package openapisdk.models.operations;



public class UpdateServiceInstanceResponse {
    public Object accessDeniedException;
    public UpdateServiceInstanceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateServiceInstanceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateServiceInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateServiceInstanceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateServiceInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServiceInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateServiceInstanceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateServiceInstanceOutput updateServiceInstanceOutput;
    public UpdateServiceInstanceResponse withUpdateServiceInstanceOutput(openapisdk.models.shared.UpdateServiceInstanceOutput updateServiceInstanceOutput) {
        this.updateServiceInstanceOutput = updateServiceInstanceOutput;
        return this;
    }
    public Object validationException;
    public UpdateServiceInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}