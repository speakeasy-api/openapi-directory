package openapisdk.models.operations;



public class DeleteAccessPolicyResponse {
    public String contentType;
    public DeleteAccessPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAccessPolicyResponse;
    public DeleteAccessPolicyResponse withDeleteAccessPolicyResponse(java.util.Map<String, Object> deleteAccessPolicyResponse) {
        this.deleteAccessPolicyResponse = deleteAccessPolicyResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteAccessPolicyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAccessPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAccessPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAccessPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteAccessPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}