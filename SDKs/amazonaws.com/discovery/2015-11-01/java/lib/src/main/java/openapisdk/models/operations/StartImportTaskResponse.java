package openapisdk.models.operations;



public class StartImportTaskResponse {
    public Object authorizationErrorException;
    public StartImportTaskResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public StartImportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public StartImportTaskResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public StartImportTaskResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public StartImportTaskResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceInUseException;
    public StartImportTaskResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serverInternalErrorException;
    public StartImportTaskResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public openapisdk.models.shared.StartImportTaskResponse startImportTaskResponse;
    public StartImportTaskResponse withStartImportTaskResponse(openapisdk.models.shared.StartImportTaskResponse startImportTaskResponse) {
        this.startImportTaskResponse = startImportTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartImportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}