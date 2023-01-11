package openapisdk.models.operations;



public class DeleteCustomDataIdentifierResponse {
    public Object accessDeniedException;
    public DeleteCustomDataIdentifierResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteCustomDataIdentifierResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteCustomDataIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCustomDataIdentifierResponse;
    public DeleteCustomDataIdentifierResponse withDeleteCustomDataIdentifierResponse(java.util.Map<String, Object> deleteCustomDataIdentifierResponse) {
        this.deleteCustomDataIdentifierResponse = deleteCustomDataIdentifierResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteCustomDataIdentifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteCustomDataIdentifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteCustomDataIdentifierResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteCustomDataIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteCustomDataIdentifierResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteCustomDataIdentifierResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}