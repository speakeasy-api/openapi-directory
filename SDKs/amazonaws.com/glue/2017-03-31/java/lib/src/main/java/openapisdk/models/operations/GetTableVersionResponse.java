package openapisdk.models.operations;



public class GetTableVersionResponse {
    public String contentType;
    public GetTableVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetTableVersionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetTableVersionResponse getTableVersionResponse;
    public GetTableVersionResponse withGetTableVersionResponse(openapisdk.models.shared.GetTableVersionResponse getTableVersionResponse) {
        this.getTableVersionResponse = getTableVersionResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetTableVersionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetTableVersionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetTableVersionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetTableVersionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetTableVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}