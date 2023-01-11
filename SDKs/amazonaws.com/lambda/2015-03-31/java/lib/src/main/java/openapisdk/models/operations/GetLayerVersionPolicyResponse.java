package openapisdk.models.operations;



public class GetLayerVersionPolicyResponse {
    public String contentType;
    public GetLayerVersionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLayerVersionPolicyResponse getLayerVersionPolicyResponse;
    public GetLayerVersionPolicyResponse withGetLayerVersionPolicyResponse(openapisdk.models.shared.GetLayerVersionPolicyResponse getLayerVersionPolicyResponse) {
        this.getLayerVersionPolicyResponse = getLayerVersionPolicyResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLayerVersionPolicyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLayerVersionPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetLayerVersionPolicyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetLayerVersionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetLayerVersionPolicyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}