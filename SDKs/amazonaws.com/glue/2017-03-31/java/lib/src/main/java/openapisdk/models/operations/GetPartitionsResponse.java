package openapisdk.models.operations;



public class GetPartitionsResponse {
    public String contentType;
    public GetPartitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetPartitionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetPartitionsResponse getPartitionsResponse;
    public GetPartitionsResponse withGetPartitionsResponse(openapisdk.models.shared.GetPartitionsResponse getPartitionsResponse) {
        this.getPartitionsResponse = getPartitionsResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetPartitionsResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetPartitionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetPartitionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetPartitionsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetPartitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}