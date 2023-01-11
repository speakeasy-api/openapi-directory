package openapisdk.models.operations;



public class CreateResourcePolicyResponse {
    public String contentType;
    public CreateResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResourcePolicyResponse createResourcePolicyResponse;
    public CreateResourcePolicyResponse withCreateResourcePolicyResponse(openapisdk.models.shared.CreateResourcePolicyResponse createResourcePolicyResponse) {
        this.createResourcePolicyResponse = createResourcePolicyResponse;
        return this;
    }
    public Object internalServerException;
    public CreateResourcePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public CreateResourcePolicyResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateResourcePolicyResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateResourcePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateResourcePolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}