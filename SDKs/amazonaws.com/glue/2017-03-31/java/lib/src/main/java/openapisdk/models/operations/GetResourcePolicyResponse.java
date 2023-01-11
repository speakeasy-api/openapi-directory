package openapisdk.models.operations;



public class GetResourcePolicyResponse {
    public String contentType;
    public GetResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetResourcePolicyResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetResourcePolicyResponse getResourcePolicyResponse;
    public GetResourcePolicyResponse withGetResourcePolicyResponse(openapisdk.models.shared.GetResourcePolicyResponse getResourcePolicyResponse) {
        this.getResourcePolicyResponse = getResourcePolicyResponse;
        return this;
    }
    public Object internalServiceException;
    public GetResourcePolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetResourcePolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetResourcePolicyResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}