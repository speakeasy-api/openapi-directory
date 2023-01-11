package openapisdk.models.operations;



public class PutSchemaFromJsonResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public PutSchemaFromJsonResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutSchemaFromJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public PutSchemaFromJsonResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public PutSchemaFromJsonResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidRuleException invalidRuleException;
    public PutSchemaFromJsonResponse withInvalidRuleException(openapisdk.models.shared.InvalidRuleException invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public openapisdk.models.shared.InvalidSchemaDocException invalidSchemaDocException;
    public PutSchemaFromJsonResponse withInvalidSchemaDocException(openapisdk.models.shared.InvalidSchemaDocException invalidSchemaDocException) {
        this.invalidSchemaDocException = invalidSchemaDocException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public PutSchemaFromJsonResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutSchemaFromJsonResponse putSchemaFromJsonResponse;
    public PutSchemaFromJsonResponse withPutSchemaFromJsonResponse(openapisdk.models.shared.PutSchemaFromJsonResponse putSchemaFromJsonResponse) {
        this.putSchemaFromJsonResponse = putSchemaFromJsonResponse;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public PutSchemaFromJsonResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public PutSchemaFromJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public PutSchemaFromJsonResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}