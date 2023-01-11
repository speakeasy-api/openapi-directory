package openapisdk.models.operations;



public class GetMacieSessionResponse {
    public Object accessDeniedException;
    public GetMacieSessionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetMacieSessionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetMacieSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMacieSessionResponse getMacieSessionResponse;
    public GetMacieSessionResponse withGetMacieSessionResponse(openapisdk.models.shared.GetMacieSessionResponse getMacieSessionResponse) {
        this.getMacieSessionResponse = getMacieSessionResponse;
        return this;
    }
    public Object internalServerException;
    public GetMacieSessionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMacieSessionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetMacieSessionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetMacieSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetMacieSessionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetMacieSessionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}