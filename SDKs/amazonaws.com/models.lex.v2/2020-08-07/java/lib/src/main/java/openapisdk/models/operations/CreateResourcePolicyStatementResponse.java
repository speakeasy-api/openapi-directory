package openapisdk.models.operations;



public class CreateResourcePolicyStatementResponse {
    public Object conflictException;
    public CreateResourcePolicyStatementResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateResourcePolicyStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResourcePolicyStatementResponse createResourcePolicyStatementResponse;
    public CreateResourcePolicyStatementResponse withCreateResourcePolicyStatementResponse(openapisdk.models.shared.CreateResourcePolicyStatementResponse createResourcePolicyStatementResponse) {
        this.createResourcePolicyStatementResponse = createResourcePolicyStatementResponse;
        return this;
    }
    public Object internalServerException;
    public CreateResourcePolicyStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateResourcePolicyStatementResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateResourcePolicyStatementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateResourcePolicyStatementResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateResourcePolicyStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateResourcePolicyStatementResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateResourcePolicyStatementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}