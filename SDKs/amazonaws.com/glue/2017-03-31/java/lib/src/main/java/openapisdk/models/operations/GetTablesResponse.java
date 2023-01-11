package openapisdk.models.operations;



public class GetTablesResponse {
    public String contentType;
    public GetTablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetTablesResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetTablesResponse getTablesResponse;
    public GetTablesResponse withGetTablesResponse(openapisdk.models.shared.GetTablesResponse getTablesResponse) {
        this.getTablesResponse = getTablesResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetTablesResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetTablesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetTablesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetTablesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetTablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}