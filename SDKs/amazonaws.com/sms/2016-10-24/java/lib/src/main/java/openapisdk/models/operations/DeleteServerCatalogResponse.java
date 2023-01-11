package openapisdk.models.operations;



public class DeleteServerCatalogResponse {
    public String contentType;
    public DeleteServerCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteServerCatalogResponse;
    public DeleteServerCatalogResponse withDeleteServerCatalogResponse(java.util.Map<String, Object> deleteServerCatalogResponse) {
        this.deleteServerCatalogResponse = deleteServerCatalogResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteServerCatalogResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingRequiredParameterException;
    public DeleteServerCatalogResponse withMissingRequiredParameterException(Object missingRequiredParameterException) {
        this.missingRequiredParameterException = missingRequiredParameterException;
        return this;
    }
    public Object operationNotPermittedException;
    public DeleteServerCatalogResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public DeleteServerCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedOperationException;
    public DeleteServerCatalogResponse withUnauthorizedOperationException(Object unauthorizedOperationException) {
        this.unauthorizedOperationException = unauthorizedOperationException;
        return this;
    }
}