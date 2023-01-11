package openapisdk.models.operations;



public class GetInsightResponse {
    public String contentType;
    public GetInsightResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInsightResult getInsightResult;
    public GetInsightResponse withGetInsightResult(openapisdk.models.shared.GetInsightResult getInsightResult) {
        this.getInsightResult = getInsightResult;
        return this;
    }
    public Object invalidRequestException;
    public GetInsightResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetInsightResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetInsightResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}