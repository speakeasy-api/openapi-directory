package openapisdk.models.operations;



public class CancelQuantumTaskResponse {
    public Object accessDeniedException;
    public CancelQuantumTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CancelQuantumTaskResponse cancelQuantumTaskResponse;
    public CancelQuantumTaskResponse withCancelQuantumTaskResponse(openapisdk.models.shared.CancelQuantumTaskResponse cancelQuantumTaskResponse) {
        this.cancelQuantumTaskResponse = cancelQuantumTaskResponse;
        return this;
    }
    public Object conflictException;
    public CancelQuantumTaskResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CancelQuantumTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public CancelQuantumTaskResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelQuantumTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelQuantumTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelQuantumTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelQuantumTaskResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}