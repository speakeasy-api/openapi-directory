package openapisdk.models.operations;



public class BatchResetAlarmResponse {
    public openapisdk.models.shared.BatchResetAlarmResponse batchResetAlarmResponse;
    public BatchResetAlarmResponse withBatchResetAlarmResponse(openapisdk.models.shared.BatchResetAlarmResponse batchResetAlarmResponse) {
        this.batchResetAlarmResponse = batchResetAlarmResponse;
        return this;
    }
    public String contentType;
    public BatchResetAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchResetAlarmResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchResetAlarmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchResetAlarmResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchResetAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchResetAlarmResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}