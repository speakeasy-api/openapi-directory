package openapisdk.models.operations;



public class ListLayerVersionsResponse {
    public String contentType;
    public ListLayerVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListLayerVersionsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListLayerVersionsResponse listLayerVersionsResponse;
    public ListLayerVersionsResponse withListLayerVersionsResponse(openapisdk.models.shared.ListLayerVersionsResponse listLayerVersionsResponse) {
        this.listLayerVersionsResponse = listLayerVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLayerVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListLayerVersionsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListLayerVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListLayerVersionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}