package openapisdk.models.operations;



public class CreateAuditSuppressionResponse {
    public String contentType;
    public CreateAuditSuppressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createAuditSuppressionResponse;
    public CreateAuditSuppressionResponse withCreateAuditSuppressionResponse(java.util.Map<String, Object> createAuditSuppressionResponse) {
        this.createAuditSuppressionResponse = createAuditSuppressionResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateAuditSuppressionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateAuditSuppressionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateAuditSuppressionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateAuditSuppressionResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateAuditSuppressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateAuditSuppressionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}