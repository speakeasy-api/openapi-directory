package openapisdk.models.operations;



public class GetTraceSummariesResponse {
    public String contentType;
    public GetTraceSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTraceSummariesResult getTraceSummariesResult;
    public GetTraceSummariesResponse withGetTraceSummariesResult(openapisdk.models.shared.GetTraceSummariesResult getTraceSummariesResult) {
        this.getTraceSummariesResult = getTraceSummariesResult;
        return this;
    }
    public Object invalidRequestException;
    public GetTraceSummariesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetTraceSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetTraceSummariesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}