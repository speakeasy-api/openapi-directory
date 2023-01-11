package openapisdk.models.operations;



public class PutSchemaFromJsonResponse {
    public Object accessDeniedException;
    public PutSchemaFromJsonResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutSchemaFromJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public PutSchemaFromJsonResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public PutSchemaFromJsonResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidRuleException;
    public PutSchemaFromJsonResponse withInvalidRuleException(Object invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public Object invalidSchemaDocException;
    public PutSchemaFromJsonResponse withInvalidSchemaDocException(Object invalidSchemaDocException) {
        this.invalidSchemaDocException = invalidSchemaDocException;
        return this;
    }
    public Object limitExceededException;
    public PutSchemaFromJsonResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutSchemaFromJsonResponse putSchemaFromJsonResponse;
    public PutSchemaFromJsonResponse withPutSchemaFromJsonResponse(openapisdk.models.shared.PutSchemaFromJsonResponse putSchemaFromJsonResponse) {
        this.putSchemaFromJsonResponse = putSchemaFromJsonResponse;
        return this;
    }
    public Object retryableConflictException;
    public PutSchemaFromJsonResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public PutSchemaFromJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutSchemaFromJsonResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}