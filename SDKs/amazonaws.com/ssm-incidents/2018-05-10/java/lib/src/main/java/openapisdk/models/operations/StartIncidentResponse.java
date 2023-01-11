package openapisdk.models.operations;



public class StartIncidentResponse {
    public Object accessDeniedException;
    public StartIncidentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public StartIncidentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartIncidentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartIncidentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartIncidentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartIncidentOutput startIncidentOutput;
    public StartIncidentResponse withStartIncidentOutput(openapisdk.models.shared.StartIncidentOutput startIncidentOutput) {
        this.startIncidentOutput = startIncidentOutput;
        return this;
    }
    public Long statusCode;
    public StartIncidentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartIncidentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartIncidentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}