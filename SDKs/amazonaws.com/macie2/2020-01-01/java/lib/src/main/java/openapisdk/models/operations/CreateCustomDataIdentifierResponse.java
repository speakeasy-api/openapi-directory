package openapisdk.models.operations;



public class CreateCustomDataIdentifierResponse {
    public Object accessDeniedException;
    public CreateCustomDataIdentifierResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateCustomDataIdentifierResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateCustomDataIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomDataIdentifierResponse createCustomDataIdentifierResponse;
    public CreateCustomDataIdentifierResponse withCreateCustomDataIdentifierResponse(openapisdk.models.shared.CreateCustomDataIdentifierResponse createCustomDataIdentifierResponse) {
        this.createCustomDataIdentifierResponse = createCustomDataIdentifierResponse;
        return this;
    }
    public Object internalServerException;
    public CreateCustomDataIdentifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateCustomDataIdentifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateCustomDataIdentifierResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateCustomDataIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateCustomDataIdentifierResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateCustomDataIdentifierResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}