package openapisdk.models.operations;



public class ImportServerCatalogResponse {
    public String contentType;
    public ImportServerCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> importServerCatalogResponse;
    public ImportServerCatalogResponse withImportServerCatalogResponse(java.util.Map<String, Object> importServerCatalogResponse) {
        this.importServerCatalogResponse = importServerCatalogResponse;
        return this;
    }
    public Object invalidParameterException;
    public ImportServerCatalogResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public ImportServerCatalogResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object noConnectorsAvailableException;
    public ImportServerCatalogResponse withNoConnectorsAvailableException(Object noConnectorsAvailableException) {
        this.noConnectorsAvailableException = noConnectorsAvailableException;
        return this;
    }
    public Object operationNotPermittedException;
    public ImportServerCatalogResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public ImportServerCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public ImportServerCatalogResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}