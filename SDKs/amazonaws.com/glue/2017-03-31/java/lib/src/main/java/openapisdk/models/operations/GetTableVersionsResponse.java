package openapisdk.models.operations;



public class GetTableVersionsResponse {
    public String contentType;
    public GetTableVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetTableVersionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetTableVersionsResponse getTableVersionsResponse;
    public GetTableVersionsResponse withGetTableVersionsResponse(openapisdk.models.shared.GetTableVersionsResponse getTableVersionsResponse) {
        this.getTableVersionsResponse = getTableVersionsResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetTableVersionsResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetTableVersionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetTableVersionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetTableVersionsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetTableVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}