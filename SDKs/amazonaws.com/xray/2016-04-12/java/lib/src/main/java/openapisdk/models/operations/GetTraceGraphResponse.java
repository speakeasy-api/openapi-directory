package openapisdk.models.operations;



public class GetTraceGraphResponse {
    public String contentType;
    public GetTraceGraphResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTraceGraphResult getTraceGraphResult;
    public GetTraceGraphResponse withGetTraceGraphResult(openapisdk.models.shared.GetTraceGraphResult getTraceGraphResult) {
        this.getTraceGraphResult = getTraceGraphResult;
        return this;
    }
    public Object invalidRequestException;
    public GetTraceGraphResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetTraceGraphResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetTraceGraphResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}