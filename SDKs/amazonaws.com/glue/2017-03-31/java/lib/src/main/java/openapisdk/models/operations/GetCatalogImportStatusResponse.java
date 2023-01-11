package openapisdk.models.operations;



public class GetCatalogImportStatusResponse {
    public String contentType;
    public GetCatalogImportStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCatalogImportStatusResponse getCatalogImportStatusResponse;
    public GetCatalogImportStatusResponse withGetCatalogImportStatusResponse(openapisdk.models.shared.GetCatalogImportStatusResponse getCatalogImportStatusResponse) {
        this.getCatalogImportStatusResponse = getCatalogImportStatusResponse;
        return this;
    }
    public Object internalServiceException;
    public GetCatalogImportStatusResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object operationTimeoutException;
    public GetCatalogImportStatusResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetCatalogImportStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}