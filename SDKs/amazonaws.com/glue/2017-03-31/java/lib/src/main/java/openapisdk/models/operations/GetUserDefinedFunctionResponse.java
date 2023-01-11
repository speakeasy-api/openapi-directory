package openapisdk.models.operations;



public class GetUserDefinedFunctionResponse {
    public String contentType;
    public GetUserDefinedFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetUserDefinedFunctionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetUserDefinedFunctionResponse getUserDefinedFunctionResponse;
    public GetUserDefinedFunctionResponse withGetUserDefinedFunctionResponse(openapisdk.models.shared.GetUserDefinedFunctionResponse getUserDefinedFunctionResponse) {
        this.getUserDefinedFunctionResponse = getUserDefinedFunctionResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetUserDefinedFunctionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetUserDefinedFunctionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetUserDefinedFunctionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetUserDefinedFunctionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetUserDefinedFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}