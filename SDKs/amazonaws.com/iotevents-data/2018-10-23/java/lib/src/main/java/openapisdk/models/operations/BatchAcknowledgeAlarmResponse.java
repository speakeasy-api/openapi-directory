package openapisdk.models.operations;



public class BatchAcknowledgeAlarmResponse {
    public openapisdk.models.shared.BatchAcknowledgeAlarmResponse batchAcknowledgeAlarmResponse;
    public BatchAcknowledgeAlarmResponse withBatchAcknowledgeAlarmResponse(openapisdk.models.shared.BatchAcknowledgeAlarmResponse batchAcknowledgeAlarmResponse) {
        this.batchAcknowledgeAlarmResponse = batchAcknowledgeAlarmResponse;
        return this;
    }
    public String contentType;
    public BatchAcknowledgeAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchAcknowledgeAlarmResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchAcknowledgeAlarmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchAcknowledgeAlarmResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchAcknowledgeAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchAcknowledgeAlarmResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}