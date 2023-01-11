package openapisdk.models.operations;



public class BatchDeleteImportDataResponse {
    public Object authorizationErrorException;
    public BatchDeleteImportDataResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public openapisdk.models.shared.BatchDeleteImportDataResponse batchDeleteImportDataResponse;
    public BatchDeleteImportDataResponse withBatchDeleteImportDataResponse(openapisdk.models.shared.BatchDeleteImportDataResponse batchDeleteImportDataResponse) {
        this.batchDeleteImportDataResponse = batchDeleteImportDataResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteImportDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public BatchDeleteImportDataResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public BatchDeleteImportDataResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public BatchDeleteImportDataResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public BatchDeleteImportDataResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteImportDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}