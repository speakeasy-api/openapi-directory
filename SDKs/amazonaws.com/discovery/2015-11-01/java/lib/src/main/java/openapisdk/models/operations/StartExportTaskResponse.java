package openapisdk.models.operations;



public class StartExportTaskResponse {
    public Object authorizationErrorException;
    public StartExportTaskResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public StartExportTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public StartExportTaskResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public StartExportTaskResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public StartExportTaskResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object operationNotPermittedException;
    public StartExportTaskResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalErrorException;
    public StartExportTaskResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public openapisdk.models.shared.StartExportTaskResponse startExportTaskResponse;
    public StartExportTaskResponse withStartExportTaskResponse(openapisdk.models.shared.StartExportTaskResponse startExportTaskResponse) {
        this.startExportTaskResponse = startExportTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartExportTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}