package openapisdk.models.operations;



public class SearchQuantumTasksResponse {
    public Object accessDeniedException;
    public SearchQuantumTasksResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SearchQuantumTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public SearchQuantumTasksResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.SearchQuantumTasksResponse searchQuantumTasksResponse;
    public SearchQuantumTasksResponse withSearchQuantumTasksResponse(openapisdk.models.shared.SearchQuantumTasksResponse searchQuantumTasksResponse) {
        this.searchQuantumTasksResponse = searchQuantumTasksResponse;
        return this;
    }
    public Long statusCode;
    public SearchQuantumTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchQuantumTasksResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SearchQuantumTasksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}