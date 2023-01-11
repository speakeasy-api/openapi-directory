package openapisdk.models.operations;



public class DescribeLimitsResponse {
    public String contentType;
    public DescribeLimitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLimitsOutput describeLimitsOutput;
    public DescribeLimitsResponse withDescribeLimitsOutput(openapisdk.models.shared.DescribeLimitsOutput describeLimitsOutput) {
        this.describeLimitsOutput = describeLimitsOutput;
        return this;
    }
    public Object limitExceededException;
    public DescribeLimitsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeLimitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}