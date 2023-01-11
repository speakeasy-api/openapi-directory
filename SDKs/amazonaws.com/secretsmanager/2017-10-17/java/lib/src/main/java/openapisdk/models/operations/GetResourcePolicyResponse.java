package openapisdk.models.operations;



public class GetResourcePolicyResponse {
    public String contentType;
    public GetResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourcePolicyResponse getResourcePolicyResponse;
    public GetResourcePolicyResponse withGetResourcePolicyResponse(openapisdk.models.shared.GetResourcePolicyResponse getResourcePolicyResponse) {
        this.getResourcePolicyResponse = getResourcePolicyResponse;
        return this;
    }
    public Object internalServiceError;
    public GetResourcePolicyResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public GetResourcePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public GetResourcePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}