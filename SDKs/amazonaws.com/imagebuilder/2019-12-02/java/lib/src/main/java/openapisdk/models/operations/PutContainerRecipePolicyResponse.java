package openapisdk.models.operations;



public class PutContainerRecipePolicyResponse {
    public Object callRateLimitExceededException;
    public PutContainerRecipePolicyResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public PutContainerRecipePolicyResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public PutContainerRecipePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public PutContainerRecipePolicyResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutContainerRecipePolicyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidRequestException;
    public PutContainerRecipePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.PutContainerRecipePolicyResponse putContainerRecipePolicyResponse;
    public PutContainerRecipePolicyResponse withPutContainerRecipePolicyResponse(openapisdk.models.shared.PutContainerRecipePolicyResponse putContainerRecipePolicyResponse) {
        this.putContainerRecipePolicyResponse = putContainerRecipePolicyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutContainerRecipePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PutContainerRecipePolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutContainerRecipePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutContainerRecipePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}