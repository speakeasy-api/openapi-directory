package openapisdk.models.operations;



public class ListServerNeighborsResponse {
    public Object authorizationErrorException;
    public ListServerNeighborsResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public ListServerNeighborsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public ListServerNeighborsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public ListServerNeighborsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListServerNeighborsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListServerNeighborsResponse listServerNeighborsResponse;
    public ListServerNeighborsResponse withListServerNeighborsResponse(openapisdk.models.shared.ListServerNeighborsResponse listServerNeighborsResponse) {
        this.listServerNeighborsResponse = listServerNeighborsResponse;
        return this;
    }
    public Object serverInternalErrorException;
    public ListServerNeighborsResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public ListServerNeighborsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}