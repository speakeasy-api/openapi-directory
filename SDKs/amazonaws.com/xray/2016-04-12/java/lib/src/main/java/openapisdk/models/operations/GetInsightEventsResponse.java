package openapisdk.models.operations;



public class GetInsightEventsResponse {
    public String contentType;
    public GetInsightEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInsightEventsResult getInsightEventsResult;
    public GetInsightEventsResponse withGetInsightEventsResult(openapisdk.models.shared.GetInsightEventsResult getInsightEventsResult) {
        this.getInsightEventsResult = getInsightEventsResult;
        return this;
    }
    public Object invalidRequestException;
    public GetInsightEventsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetInsightEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetInsightEventsResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}