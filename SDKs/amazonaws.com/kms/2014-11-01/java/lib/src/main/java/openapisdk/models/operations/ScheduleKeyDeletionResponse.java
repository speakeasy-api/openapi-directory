package openapisdk.models.operations;



public class ScheduleKeyDeletionResponse {
    public String contentType;
    public ScheduleKeyDeletionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ScheduleKeyDeletionResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public ScheduleKeyDeletionResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public ScheduleKeyDeletionResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public ScheduleKeyDeletionResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public ScheduleKeyDeletionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ScheduleKeyDeletionResponse scheduleKeyDeletionResponse;
    public ScheduleKeyDeletionResponse withScheduleKeyDeletionResponse(openapisdk.models.shared.ScheduleKeyDeletionResponse scheduleKeyDeletionResponse) {
        this.scheduleKeyDeletionResponse = scheduleKeyDeletionResponse;
        return this;
    }
    public Long statusCode;
    public ScheduleKeyDeletionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}