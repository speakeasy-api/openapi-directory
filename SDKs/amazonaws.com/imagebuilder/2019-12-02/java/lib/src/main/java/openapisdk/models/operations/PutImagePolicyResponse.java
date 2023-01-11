package openapisdk.models.operations;



public class PutImagePolicyResponse {
    public Object callRateLimitExceededException;
    public PutImagePolicyResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public PutImagePolicyResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public PutImagePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public PutImagePolicyResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutImagePolicyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidRequestException;
    public PutImagePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.PutImagePolicyResponse putImagePolicyResponse;
    public PutImagePolicyResponse withPutImagePolicyResponse(openapisdk.models.shared.PutImagePolicyResponse putImagePolicyResponse) {
        this.putImagePolicyResponse = putImagePolicyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutImagePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PutImagePolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutImagePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutImagePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}