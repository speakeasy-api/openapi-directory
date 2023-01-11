package openapisdk.models.operations;



public class PutDataCatalogEncryptionSettingsResponse {
    public String contentType;
    public PutDataCatalogEncryptionSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public PutDataCatalogEncryptionSettingsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public PutDataCatalogEncryptionSettingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public PutDataCatalogEncryptionSettingsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public java.util.Map<String, Object> putDataCatalogEncryptionSettingsResponse;
    public PutDataCatalogEncryptionSettingsResponse withPutDataCatalogEncryptionSettingsResponse(java.util.Map<String, Object> putDataCatalogEncryptionSettingsResponse) {
        this.putDataCatalogEncryptionSettingsResponse = putDataCatalogEncryptionSettingsResponse;
        return this;
    }
    public Long statusCode;
    public PutDataCatalogEncryptionSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}