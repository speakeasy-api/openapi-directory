package openapisdk.models.operations;



public class StartContinuousExportResponse {
    public Object authorizationErrorException;
    public StartContinuousExportResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public Object conflictErrorException;
    public StartContinuousExportResponse withConflictErrorException(Object conflictErrorException) {
        this.conflictErrorException = conflictErrorException;
        return this;
    }
    public String contentType;
    public StartContinuousExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public StartContinuousExportResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public StartContinuousExportResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public StartContinuousExportResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object operationNotPermittedException;
    public StartContinuousExportResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceInUseException;
    public StartContinuousExportResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serverInternalErrorException;
    public StartContinuousExportResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public openapisdk.models.shared.StartContinuousExportResponse startContinuousExportResponse;
    public StartContinuousExportResponse withStartContinuousExportResponse(openapisdk.models.shared.StartContinuousExportResponse startContinuousExportResponse) {
        this.startContinuousExportResponse = startContinuousExportResponse;
        return this;
    }
    public Long statusCode;
    public StartContinuousExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}