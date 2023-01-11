package openapisdk.models.operations;



public class ImportAppCatalogResponse {
    public String contentType;
    public ImportAppCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> importAppCatalogResponse;
    public ImportAppCatalogResponse withImportAppCatalogResponse(java.util.Map<String, Object> importAppCatalogResponse) {
        this.importAppCatalogResponse = importAppCatalogResponse;
        return this;
    }
    public Object internalError;
    public ImportAppCatalogResponse withInternalError(Object internalError) {
        this.internalError = internalError;
        return this;
    }
    public Object invalidParameterException;
    public ImportAppCatalogResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public ImportAppCatalogResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public ImportAppCatalogResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public ImportAppCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public ImportAppCatalogResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}