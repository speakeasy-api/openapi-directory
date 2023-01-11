package openapisdk.models.operations;



public class BatchEnableAlarmResponse {
    public openapisdk.models.shared.BatchEnableAlarmResponse batchEnableAlarmResponse;
    public BatchEnableAlarmResponse withBatchEnableAlarmResponse(openapisdk.models.shared.BatchEnableAlarmResponse batchEnableAlarmResponse) {
        this.batchEnableAlarmResponse = batchEnableAlarmResponse;
        return this;
    }
    public String contentType;
    public BatchEnableAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchEnableAlarmResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchEnableAlarmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchEnableAlarmResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchEnableAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchEnableAlarmResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}