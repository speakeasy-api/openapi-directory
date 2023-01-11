package openapisdk.models.operations;



public class DeleteResourcePolicyResponse {
    public String contentType;
    public DeleteResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteResourcePolicyResponse deleteResourcePolicyResponse;
    public DeleteResourcePolicyResponse withDeleteResourcePolicyResponse(openapisdk.models.shared.DeleteResourcePolicyResponse deleteResourcePolicyResponse) {
        this.deleteResourcePolicyResponse = deleteResourcePolicyResponse;
        return this;
    }
    public Object internalServiceError;
    public DeleteResourcePolicyResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public DeleteResourcePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteResourcePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}