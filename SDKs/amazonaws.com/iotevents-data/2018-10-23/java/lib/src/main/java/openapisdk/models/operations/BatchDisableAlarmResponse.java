package openapisdk.models.operations;



public class BatchDisableAlarmResponse {
    public openapisdk.models.shared.BatchDisableAlarmResponse batchDisableAlarmResponse;
    public BatchDisableAlarmResponse withBatchDisableAlarmResponse(openapisdk.models.shared.BatchDisableAlarmResponse batchDisableAlarmResponse) {
        this.batchDisableAlarmResponse = batchDisableAlarmResponse;
        return this;
    }
    public String contentType;
    public BatchDisableAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchDisableAlarmResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchDisableAlarmResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchDisableAlarmResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchDisableAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDisableAlarmResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}