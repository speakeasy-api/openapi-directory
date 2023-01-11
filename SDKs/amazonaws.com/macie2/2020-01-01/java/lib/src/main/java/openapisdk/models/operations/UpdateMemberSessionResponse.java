package openapisdk.models.operations;



public class UpdateMemberSessionResponse {
    public Object accessDeniedException;
    public UpdateMemberSessionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateMemberSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateMemberSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateMemberSessionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateMemberSessionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateMemberSessionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateMemberSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateMemberSessionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateMemberSessionResponse;
    public UpdateMemberSessionResponse withUpdateMemberSessionResponse(java.util.Map<String, Object> updateMemberSessionResponse) {
        this.updateMemberSessionResponse = updateMemberSessionResponse;
        return this;
    }
    public Object validationException;
    public UpdateMemberSessionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}