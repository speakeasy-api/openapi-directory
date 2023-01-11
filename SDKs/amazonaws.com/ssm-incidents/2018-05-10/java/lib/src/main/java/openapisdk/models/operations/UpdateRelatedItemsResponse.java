package openapisdk.models.operations;



public class UpdateRelatedItemsResponse {
    public Object accessDeniedException;
    public UpdateRelatedItemsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateRelatedItemsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateRelatedItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateRelatedItemsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRelatedItemsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRelatedItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateRelatedItemsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateRelatedItemsOutput;
    public UpdateRelatedItemsResponse withUpdateRelatedItemsOutput(java.util.Map<String, Object> updateRelatedItemsOutput) {
        this.updateRelatedItemsOutput = updateRelatedItemsOutput;
        return this;
    }
    public Object validationException;
    public UpdateRelatedItemsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}