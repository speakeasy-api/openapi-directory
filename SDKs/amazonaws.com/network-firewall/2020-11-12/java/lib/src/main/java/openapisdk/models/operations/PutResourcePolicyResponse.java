package openapisdk.models.operations;



public class PutResourcePolicyResponse {
    public String contentType;
    public PutResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutResourcePolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public PutResourcePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidResourcePolicyException;
    public PutResourcePolicyResponse withInvalidResourcePolicyException(Object invalidResourcePolicyException) {
        this.invalidResourcePolicyException = invalidResourcePolicyException;
        return this;
    }
    public java.util.Map<String, Object> putResourcePolicyResponse;
    public PutResourcePolicyResponse withPutResourcePolicyResponse(java.util.Map<String, Object> putResourcePolicyResponse) {
        this.putResourcePolicyResponse = putResourcePolicyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutResourcePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}