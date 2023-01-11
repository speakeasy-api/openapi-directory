package openapisdk.models.operations;



public class GetConnectionResponse {
    public String contentType;
    public GetConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetConnectionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetConnectionResponse getConnectionResponse;
    public GetConnectionResponse withGetConnectionResponse(openapisdk.models.shared.GetConnectionResponse getConnectionResponse) {
        this.getConnectionResponse = getConnectionResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetConnectionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object invalidInputException;
    public GetConnectionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetConnectionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}