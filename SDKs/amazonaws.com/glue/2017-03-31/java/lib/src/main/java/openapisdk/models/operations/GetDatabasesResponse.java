package openapisdk.models.operations;



public class GetDatabasesResponse {
    public String contentType;
    public GetDatabasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDatabasesResponse getDatabasesResponse;
    public GetDatabasesResponse withGetDatabasesResponse(openapisdk.models.shared.GetDatabasesResponse getDatabasesResponse) {
        this.getDatabasesResponse = getDatabasesResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetDatabasesResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetDatabasesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetDatabasesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetDatabasesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetDatabasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}