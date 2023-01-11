package openapisdk.models.operations;



public class UpdateUserDefinedFunctionResponse {
    public String contentType;
    public UpdateUserDefinedFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateUserDefinedFunctionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public UpdateUserDefinedFunctionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public UpdateUserDefinedFunctionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateUserDefinedFunctionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateUserDefinedFunctionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateUserDefinedFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateUserDefinedFunctionResponse;
    public UpdateUserDefinedFunctionResponse withUpdateUserDefinedFunctionResponse(java.util.Map<String, Object> updateUserDefinedFunctionResponse) {
        this.updateUserDefinedFunctionResponse = updateUserDefinedFunctionResponse;
        return this;
    }
}