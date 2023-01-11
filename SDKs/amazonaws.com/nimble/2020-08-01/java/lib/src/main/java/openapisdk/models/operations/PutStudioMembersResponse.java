package openapisdk.models.operations;



public class PutStudioMembersResponse {
    public Object accessDeniedException;
    public PutStudioMembersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public PutStudioMembersResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutStudioMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public PutStudioMembersResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public java.util.Map<String, Object> putStudioMembersResponse;
    public PutStudioMembersResponse withPutStudioMembersResponse(java.util.Map<String, Object> putStudioMembersResponse) {
        this.putStudioMembersResponse = putStudioMembersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutStudioMembersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public PutStudioMembersResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public PutStudioMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutStudioMembersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutStudioMembersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}