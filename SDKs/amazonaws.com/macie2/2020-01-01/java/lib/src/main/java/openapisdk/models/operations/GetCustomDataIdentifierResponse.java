package openapisdk.models.operations;



public class GetCustomDataIdentifierResponse {
    public Object accessDeniedException;
    public GetCustomDataIdentifierResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetCustomDataIdentifierResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetCustomDataIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCustomDataIdentifierResponse getCustomDataIdentifierResponse;
    public GetCustomDataIdentifierResponse withGetCustomDataIdentifierResponse(openapisdk.models.shared.GetCustomDataIdentifierResponse getCustomDataIdentifierResponse) {
        this.getCustomDataIdentifierResponse = getCustomDataIdentifierResponse;
        return this;
    }
    public Object internalServerException;
    public GetCustomDataIdentifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCustomDataIdentifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetCustomDataIdentifierResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetCustomDataIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetCustomDataIdentifierResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetCustomDataIdentifierResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}