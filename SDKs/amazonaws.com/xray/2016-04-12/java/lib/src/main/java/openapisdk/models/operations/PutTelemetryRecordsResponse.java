package openapisdk.models.operations;



public class PutTelemetryRecordsResponse {
    public String contentType;
    public PutTelemetryRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public PutTelemetryRecordsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public java.util.Map<String, Object> putTelemetryRecordsResult;
    public PutTelemetryRecordsResponse withPutTelemetryRecordsResult(java.util.Map<String, Object> putTelemetryRecordsResult) {
        this.putTelemetryRecordsResult = putTelemetryRecordsResult;
        return this;
    }
    public Long statusCode;
    public PutTelemetryRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public PutTelemetryRecordsResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}