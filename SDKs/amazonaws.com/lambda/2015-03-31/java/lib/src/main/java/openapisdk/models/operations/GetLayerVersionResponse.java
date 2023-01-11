package openapisdk.models.operations;



public class GetLayerVersionResponse {
    public String contentType;
    public GetLayerVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLayerVersionResponse getLayerVersionResponse;
    public GetLayerVersionResponse withGetLayerVersionResponse(openapisdk.models.shared.GetLayerVersionResponse getLayerVersionResponse) {
        this.getLayerVersionResponse = getLayerVersionResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLayerVersionResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLayerVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetLayerVersionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetLayerVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetLayerVersionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}