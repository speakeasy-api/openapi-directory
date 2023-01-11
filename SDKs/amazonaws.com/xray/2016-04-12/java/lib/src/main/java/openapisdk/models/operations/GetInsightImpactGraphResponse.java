package openapisdk.models.operations;



public class GetInsightImpactGraphResponse {
    public String contentType;
    public GetInsightImpactGraphResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInsightImpactGraphResult getInsightImpactGraphResult;
    public GetInsightImpactGraphResponse withGetInsightImpactGraphResult(openapisdk.models.shared.GetInsightImpactGraphResult getInsightImpactGraphResult) {
        this.getInsightImpactGraphResult = getInsightImpactGraphResult;
        return this;
    }
    public Object invalidRequestException;
    public GetInsightImpactGraphResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetInsightImpactGraphResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetInsightImpactGraphResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}