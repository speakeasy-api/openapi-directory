package openapisdk.models.operations;



public class ListLayersResponse {
    public String contentType;
    public ListLayersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListLayersResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListLayersResponse listLayersResponse;
    public ListLayersResponse withListLayersResponse(openapisdk.models.shared.ListLayersResponse listLayersResponse) {
        this.listLayersResponse = listLayersResponse;
        return this;
    }
    public Object serviceException;
    public ListLayersResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListLayersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListLayersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}