package openapisdk.models.operations;



public class GetLayerVersionByArnResponse {
    public String contentType;
    public GetLayerVersionByArnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLayerVersionResponse getLayerVersionResponse;
    public GetLayerVersionByArnResponse withGetLayerVersionResponse(openapisdk.models.shared.GetLayerVersionResponse getLayerVersionResponse) {
        this.getLayerVersionResponse = getLayerVersionResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLayerVersionByArnResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLayerVersionByArnResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetLayerVersionByArnResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetLayerVersionByArnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetLayerVersionByArnResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}