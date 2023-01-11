package openapisdk.models.operations;



public class PutTraceSegmentsResponse {
    public String contentType;
    public PutTraceSegmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public PutTraceSegmentsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.PutTraceSegmentsResult putTraceSegmentsResult;
    public PutTraceSegmentsResponse withPutTraceSegmentsResult(openapisdk.models.shared.PutTraceSegmentsResult putTraceSegmentsResult) {
        this.putTraceSegmentsResult = putTraceSegmentsResult;
        return this;
    }
    public Long statusCode;
    public PutTraceSegmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public PutTraceSegmentsResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}