package openapisdk.models.operations;



public class PutImageRecipePolicyResponse {
    public Object callRateLimitExceededException;
    public PutImageRecipePolicyResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public PutImageRecipePolicyResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public PutImageRecipePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public PutImageRecipePolicyResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutImageRecipePolicyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidRequestException;
    public PutImageRecipePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.PutImageRecipePolicyResponse putImageRecipePolicyResponse;
    public PutImageRecipePolicyResponse withPutImageRecipePolicyResponse(openapisdk.models.shared.PutImageRecipePolicyResponse putImageRecipePolicyResponse) {
        this.putImageRecipePolicyResponse = putImageRecipePolicyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutImageRecipePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PutImageRecipePolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutImageRecipePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutImageRecipePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}