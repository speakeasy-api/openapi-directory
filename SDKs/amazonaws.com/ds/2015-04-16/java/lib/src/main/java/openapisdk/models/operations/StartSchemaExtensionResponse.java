package openapisdk.models.operations;



public class StartSchemaExtensionResponse {
    public Object clientException;
    public StartSchemaExtensionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public StartSchemaExtensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryUnavailableException;
    public StartSchemaExtensionResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityDoesNotExistException;
    public StartSchemaExtensionResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public StartSchemaExtensionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public StartSchemaExtensionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object snapshotLimitExceededException;
    public StartSchemaExtensionResponse withSnapshotLimitExceededException(Object snapshotLimitExceededException) {
        this.snapshotLimitExceededException = snapshotLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartSchemaExtensionResult startSchemaExtensionResult;
    public StartSchemaExtensionResponse withStartSchemaExtensionResult(openapisdk.models.shared.StartSchemaExtensionResult startSchemaExtensionResult) {
        this.startSchemaExtensionResult = startSchemaExtensionResult;
        return this;
    }
    public Long statusCode;
    public StartSchemaExtensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}