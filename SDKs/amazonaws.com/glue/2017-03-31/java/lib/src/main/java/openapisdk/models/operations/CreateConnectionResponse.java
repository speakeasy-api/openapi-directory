package openapisdk.models.operations;



public class CreateConnectionResponse {
    public Object alreadyExistsException;
    public CreateConnectionResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createConnectionResponse;
    public CreateConnectionResponse withCreateConnectionResponse(java.util.Map<String, Object> createConnectionResponse) {
        this.createConnectionResponse = createConnectionResponse;
        return this;
    }
    public Object glueEncryptionException;
    public CreateConnectionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object invalidInputException;
    public CreateConnectionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateConnectionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateConnectionResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}