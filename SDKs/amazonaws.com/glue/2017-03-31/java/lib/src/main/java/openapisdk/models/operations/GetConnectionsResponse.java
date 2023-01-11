package openapisdk.models.operations;



public class GetConnectionsResponse {
    public String contentType;
    public GetConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetConnectionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetConnectionsResponse getConnectionsResponse;
    public GetConnectionsResponse withGetConnectionsResponse(openapisdk.models.shared.GetConnectionsResponse getConnectionsResponse) {
        this.getConnectionsResponse = getConnectionsResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetConnectionsResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object invalidInputException;
    public GetConnectionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetConnectionsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}