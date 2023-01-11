package openapisdk.models.operations;



public class GetTableResponse {
    public String contentType;
    public GetTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetTableResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetTableResponse getTableResponse;
    public GetTableResponse withGetTableResponse(openapisdk.models.shared.GetTableResponse getTableResponse) {
        this.getTableResponse = getTableResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetTableResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetTableResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetTableResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetTableResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}