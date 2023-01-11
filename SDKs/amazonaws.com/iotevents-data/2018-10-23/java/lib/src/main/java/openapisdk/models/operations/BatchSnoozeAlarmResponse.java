package openapisdk.models.operations;



public class BatchSnoozeAlarmResponse {
    public openapisdk.models.shared.BatchSnoozeAlarmResponse batchSnoozeAlarmResponse;
    public BatchSnoozeAlarmResponse withBatchSnoozeAlarmResponse(openapisdk.models.shared.BatchSnoozeAlarmResponse batchSnoozeAlarmResponse) {
        this.batchSnoozeAlarmResponse = batchSnoozeAlarmResponse;
        return this;
    }
    public String contentType;
    public BatchSnoozeAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchSnoozeAlarmResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchSnoozeAlarmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchSnoozeAlarmResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchSnoozeAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchSnoozeAlarmResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}