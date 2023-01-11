package openapisdk.models.operations;



public class GetDataCatalogEncryptionSettingsResponse {
    public String contentType;
    public GetDataCatalogEncryptionSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDataCatalogEncryptionSettingsResponse getDataCatalogEncryptionSettingsResponse;
    public GetDataCatalogEncryptionSettingsResponse withGetDataCatalogEncryptionSettingsResponse(openapisdk.models.shared.GetDataCatalogEncryptionSettingsResponse getDataCatalogEncryptionSettingsResponse) {
        this.getDataCatalogEncryptionSettingsResponse = getDataCatalogEncryptionSettingsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetDataCatalogEncryptionSettingsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetDataCatalogEncryptionSettingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetDataCatalogEncryptionSettingsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetDataCatalogEncryptionSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}