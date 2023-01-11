package openapisdk.models.operations;



public class GetQuantumTaskResponse {
    public Object accessDeniedException;
    public GetQuantumTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetQuantumTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetQuantumTaskResponse getQuantumTaskResponse;
    public GetQuantumTaskResponse withGetQuantumTaskResponse(openapisdk.models.shared.GetQuantumTaskResponse getQuantumTaskResponse) {
        this.getQuantumTaskResponse = getQuantumTaskResponse;
        return this;
    }
    public Object internalServiceException;
    public GetQuantumTaskResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetQuantumTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetQuantumTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetQuantumTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetQuantumTaskResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}