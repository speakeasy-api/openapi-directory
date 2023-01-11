package openapisdk.models.operations;



public class PutResourcePolicyResponse {
    public String contentType;
    public PutResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutResourcePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public PutResourcePolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutResourcePolicyResponse putResourcePolicyResponse;
    public PutResourcePolicyResponse withPutResourcePolicyResponse(openapisdk.models.shared.PutResourcePolicyResponse putResourcePolicyResponse) {
        this.putResourcePolicyResponse = putResourcePolicyResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public PutResourcePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}