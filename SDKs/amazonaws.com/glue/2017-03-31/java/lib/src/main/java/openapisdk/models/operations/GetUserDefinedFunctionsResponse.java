package openapisdk.models.operations;



public class GetUserDefinedFunctionsResponse {
    public String contentType;
    public GetUserDefinedFunctionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetUserDefinedFunctionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetUserDefinedFunctionsResponse getUserDefinedFunctionsResponse;
    public GetUserDefinedFunctionsResponse withGetUserDefinedFunctionsResponse(openapisdk.models.shared.GetUserDefinedFunctionsResponse getUserDefinedFunctionsResponse) {
        this.getUserDefinedFunctionsResponse = getUserDefinedFunctionsResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetUserDefinedFunctionsResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetUserDefinedFunctionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetUserDefinedFunctionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetUserDefinedFunctionsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetUserDefinedFunctionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}