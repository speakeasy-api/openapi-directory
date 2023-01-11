package openapisdk.models.operations;



public class CreateAccessPolicyResponse {
    public String contentType;
    public CreateAccessPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAccessPolicyResponse createAccessPolicyResponse;
    public CreateAccessPolicyResponse withCreateAccessPolicyResponse(openapisdk.models.shared.CreateAccessPolicyResponse createAccessPolicyResponse) {
        this.createAccessPolicyResponse = createAccessPolicyResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateAccessPolicyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateAccessPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateAccessPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAccessPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateAccessPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateAccessPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}