package openapisdk.models.operations;



public class DeleteStudioMemberResponse {
    public Object accessDeniedException;
    public DeleteStudioMemberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteStudioMemberResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteStudioMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteStudioMemberResponse;
    public DeleteStudioMemberResponse withDeleteStudioMemberResponse(java.util.Map<String, Object> deleteStudioMemberResponse) {
        this.deleteStudioMemberResponse = deleteStudioMemberResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteStudioMemberResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStudioMemberResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DeleteStudioMemberResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteStudioMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteStudioMemberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteStudioMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}