package openapisdk.models.operations;



public class DeleteClusterResponse {
    public Object accessDeniedException;
    public DeleteClusterResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteClusterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteClusterResponse;
    public DeleteClusterResponse withDeleteClusterResponse(java.util.Map<String, Object> deleteClusterResponse) {
        this.deleteClusterResponse = deleteClusterResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteClusterResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteClusterResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteClusterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}