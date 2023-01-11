package openapisdk.models.operations;



public class GetFindingsFilterResponse {
    public Object accessDeniedException;
    public GetFindingsFilterResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetFindingsFilterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetFindingsFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFindingsFilterResponse getFindingsFilterResponse;
    public GetFindingsFilterResponse withGetFindingsFilterResponse(openapisdk.models.shared.GetFindingsFilterResponse getFindingsFilterResponse) {
        this.getFindingsFilterResponse = getFindingsFilterResponse;
        return this;
    }
    public Object internalServerException;
    public GetFindingsFilterResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFindingsFilterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetFindingsFilterResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetFindingsFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFindingsFilterResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetFindingsFilterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}