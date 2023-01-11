package openapisdk.models.operations;



public class DeleteFindingsFilterResponse {
    public Object accessDeniedException;
    public DeleteFindingsFilterResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteFindingsFilterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteFindingsFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFindingsFilterResponse;
    public DeleteFindingsFilterResponse withDeleteFindingsFilterResponse(java.util.Map<String, Object> deleteFindingsFilterResponse) {
        this.deleteFindingsFilterResponse = deleteFindingsFilterResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteFindingsFilterResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFindingsFilterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteFindingsFilterResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteFindingsFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFindingsFilterResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteFindingsFilterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}