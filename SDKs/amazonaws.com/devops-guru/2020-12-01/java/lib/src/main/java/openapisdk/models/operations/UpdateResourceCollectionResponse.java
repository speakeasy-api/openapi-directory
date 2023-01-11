package openapisdk.models.operations;



public class UpdateResourceCollectionResponse {
    public Object accessDeniedException;
    public UpdateResourceCollectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateResourceCollectionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateResourceCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateResourceCollectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public UpdateResourceCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateResourceCollectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateResourceCollectionResponse;
    public UpdateResourceCollectionResponse withUpdateResourceCollectionResponse(java.util.Map<String, Object> updateResourceCollectionResponse) {
        this.updateResourceCollectionResponse = updateResourceCollectionResponse;
        return this;
    }
    public Object validationException;
    public UpdateResourceCollectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}