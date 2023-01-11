package openapisdk.models.operations;



public class CreateFindingsFilterResponse {
    public Object accessDeniedException;
    public CreateFindingsFilterResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateFindingsFilterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateFindingsFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFindingsFilterResponse createFindingsFilterResponse;
    public CreateFindingsFilterResponse withCreateFindingsFilterResponse(openapisdk.models.shared.CreateFindingsFilterResponse createFindingsFilterResponse) {
        this.createFindingsFilterResponse = createFindingsFilterResponse;
        return this;
    }
    public Object internalServerException;
    public CreateFindingsFilterResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFindingsFilterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateFindingsFilterResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateFindingsFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFindingsFilterResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateFindingsFilterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}