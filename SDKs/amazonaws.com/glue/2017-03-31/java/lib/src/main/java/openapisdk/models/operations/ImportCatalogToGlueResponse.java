package openapisdk.models.operations;



public class ImportCatalogToGlueResponse {
    public String contentType;
    public ImportCatalogToGlueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> importCatalogToGlueResponse;
    public ImportCatalogToGlueResponse withImportCatalogToGlueResponse(java.util.Map<String, Object> importCatalogToGlueResponse) {
        this.importCatalogToGlueResponse = importCatalogToGlueResponse;
        return this;
    }
    public Object internalServiceException;
    public ImportCatalogToGlueResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object operationTimeoutException;
    public ImportCatalogToGlueResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ImportCatalogToGlueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}