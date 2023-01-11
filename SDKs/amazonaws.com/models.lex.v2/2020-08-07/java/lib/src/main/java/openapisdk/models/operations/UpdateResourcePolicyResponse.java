package openapisdk.models.operations;



public class UpdateResourcePolicyResponse {
    public String contentType;
    public UpdateResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateResourcePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object preconditionFailedException;
    public UpdateResourcePolicyResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateResourcePolicyResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateResourcePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateResourcePolicyResponse updateResourcePolicyResponse;
    public UpdateResourcePolicyResponse withUpdateResourcePolicyResponse(openapisdk.models.shared.UpdateResourcePolicyResponse updateResourcePolicyResponse) {
        this.updateResourcePolicyResponse = updateResourcePolicyResponse;
        return this;
    }
    public Object validationException;
    public UpdateResourcePolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}