package openapisdk.models.operations;



public class BatchUpdateDetectorResponse {
    public openapisdk.models.shared.BatchUpdateDetectorResponse batchUpdateDetectorResponse;
    public BatchUpdateDetectorResponse withBatchUpdateDetectorResponse(openapisdk.models.shared.BatchUpdateDetectorResponse batchUpdateDetectorResponse) {
        this.batchUpdateDetectorResponse = batchUpdateDetectorResponse;
        return this;
    }
    public String contentType;
    public BatchUpdateDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchUpdateDetectorResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchUpdateDetectorResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchUpdateDetectorResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchUpdateDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchUpdateDetectorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}