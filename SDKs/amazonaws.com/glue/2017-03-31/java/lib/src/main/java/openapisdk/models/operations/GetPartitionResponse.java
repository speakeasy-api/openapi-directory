package openapisdk.models.operations;



public class GetPartitionResponse {
    public String contentType;
    public GetPartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetPartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetPartitionResponse getPartitionResponse;
    public GetPartitionResponse withGetPartitionResponse(openapisdk.models.shared.GetPartitionResponse getPartitionResponse) {
        this.getPartitionResponse = getPartitionResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetPartitionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetPartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetPartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetPartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetPartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}