package openapisdk.models.operations;



public class DeleteTrackerResponse {
    public Object accessDeniedException;
    public DeleteTrackerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteTrackerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTrackerResponse;
    public DeleteTrackerResponse withDeleteTrackerResponse(java.util.Map<String, Object> deleteTrackerResponse) {
        this.deleteTrackerResponse = deleteTrackerResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteTrackerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTrackerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTrackerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteTrackerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteTrackerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}