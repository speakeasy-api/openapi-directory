package openapisdk.models.operations;



public class DeleteUserDefinedFunctionResponse {
    public String contentType;
    public DeleteUserDefinedFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteUserDefinedFunctionResponse;
    public DeleteUserDefinedFunctionResponse withDeleteUserDefinedFunctionResponse(java.util.Map<String, Object> deleteUserDefinedFunctionResponse) {
        this.deleteUserDefinedFunctionResponse = deleteUserDefinedFunctionResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteUserDefinedFunctionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteUserDefinedFunctionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteUserDefinedFunctionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteUserDefinedFunctionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteUserDefinedFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}