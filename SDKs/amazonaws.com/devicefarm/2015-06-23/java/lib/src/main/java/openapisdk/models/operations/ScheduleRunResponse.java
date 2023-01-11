package openapisdk.models.operations;



public class ScheduleRunResponse {
    public Object argumentException;
    public ScheduleRunResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ScheduleRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotencyException;
    public ScheduleRunResponse withIdempotencyException(Object idempotencyException) {
        this.idempotencyException = idempotencyException;
        return this;
    }
    public Object limitExceededException;
    public ScheduleRunResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public ScheduleRunResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ScheduleRunResult scheduleRunResult;
    public ScheduleRunResponse withScheduleRunResult(openapisdk.models.shared.ScheduleRunResult scheduleRunResult) {
        this.scheduleRunResult = scheduleRunResult;
        return this;
    }
    public Object serviceAccountException;
    public ScheduleRunResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ScheduleRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}