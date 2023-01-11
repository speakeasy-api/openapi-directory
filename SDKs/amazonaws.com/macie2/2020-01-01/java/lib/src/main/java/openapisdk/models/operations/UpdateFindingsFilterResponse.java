package openapisdk.models.operations;



public class UpdateFindingsFilterResponse {
    public Object accessDeniedException;
    public UpdateFindingsFilterResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateFindingsFilterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateFindingsFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateFindingsFilterResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFindingsFilterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateFindingsFilterResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateFindingsFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFindingsFilterResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFindingsFilterResponse updateFindingsFilterResponse;
    public UpdateFindingsFilterResponse withUpdateFindingsFilterResponse(openapisdk.models.shared.UpdateFindingsFilterResponse updateFindingsFilterResponse) {
        this.updateFindingsFilterResponse = updateFindingsFilterResponse;
        return this;
    }
    public Object validationException;
    public UpdateFindingsFilterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}