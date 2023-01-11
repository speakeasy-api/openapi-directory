package openapisdk.models.operations;



public class GetResourcePoliciesResponse {
    public String contentType;
    public GetResourcePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourcePoliciesResponse getResourcePoliciesResponse;
    public GetResourcePoliciesResponse withGetResourcePoliciesResponse(openapisdk.models.shared.GetResourcePoliciesResponse getResourcePoliciesResponse) {
        this.getResourcePoliciesResponse = getResourcePoliciesResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetResourcePoliciesResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetResourcePoliciesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetResourcePoliciesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetResourcePoliciesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetResourcePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}