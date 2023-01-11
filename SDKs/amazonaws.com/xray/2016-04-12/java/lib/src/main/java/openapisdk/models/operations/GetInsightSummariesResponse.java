package openapisdk.models.operations;



public class GetInsightSummariesResponse {
    public String contentType;
    public GetInsightSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInsightSummariesResult getInsightSummariesResult;
    public GetInsightSummariesResponse withGetInsightSummariesResult(openapisdk.models.shared.GetInsightSummariesResult getInsightSummariesResult) {
        this.getInsightSummariesResult = getInsightSummariesResult;
        return this;
    }
    public Object invalidRequestException;
    public GetInsightSummariesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetInsightSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetInsightSummariesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}