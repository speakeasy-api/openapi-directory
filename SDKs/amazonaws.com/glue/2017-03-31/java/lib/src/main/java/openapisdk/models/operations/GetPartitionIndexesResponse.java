package openapisdk.models.operations;



public class GetPartitionIndexesResponse {
    public Object conflictException;
    public GetPartitionIndexesResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetPartitionIndexesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetPartitionIndexesResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetPartitionIndexesResponse getPartitionIndexesResponse;
    public GetPartitionIndexesResponse withGetPartitionIndexesResponse(openapisdk.models.shared.GetPartitionIndexesResponse getPartitionIndexesResponse) {
        this.getPartitionIndexesResponse = getPartitionIndexesResponse;
        return this;
    }
    public Object internalServiceException;
    public GetPartitionIndexesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetPartitionIndexesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetPartitionIndexesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetPartitionIndexesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}