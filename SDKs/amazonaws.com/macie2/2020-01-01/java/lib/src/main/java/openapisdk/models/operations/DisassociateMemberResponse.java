package openapisdk.models.operations;



public class DisassociateMemberResponse {
    public Object accessDeniedException;
    public DisassociateMemberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DisassociateMemberResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DisassociateMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateMemberResponse;
    public DisassociateMemberResponse withDisassociateMemberResponse(java.util.Map<String, Object> disassociateMemberResponse) {
        this.disassociateMemberResponse = disassociateMemberResponse;
        return this;
    }
    public Object internalServerException;
    public DisassociateMemberResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateMemberResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DisassociateMemberResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DisassociateMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateMemberResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisassociateMemberResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}