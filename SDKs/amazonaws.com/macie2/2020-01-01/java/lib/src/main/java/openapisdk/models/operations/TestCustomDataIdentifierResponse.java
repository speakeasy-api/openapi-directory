package openapisdk.models.operations;



public class TestCustomDataIdentifierResponse {
    public Object accessDeniedException;
    public TestCustomDataIdentifierResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public TestCustomDataIdentifierResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public TestCustomDataIdentifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public TestCustomDataIdentifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public TestCustomDataIdentifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public TestCustomDataIdentifierResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public TestCustomDataIdentifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestCustomDataIdentifierResponse testCustomDataIdentifierResponse;
    public TestCustomDataIdentifierResponse withTestCustomDataIdentifierResponse(openapisdk.models.shared.TestCustomDataIdentifierResponse testCustomDataIdentifierResponse) {
        this.testCustomDataIdentifierResponse = testCustomDataIdentifierResponse;
        return this;
    }
    public Object throttlingException;
    public TestCustomDataIdentifierResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public TestCustomDataIdentifierResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}