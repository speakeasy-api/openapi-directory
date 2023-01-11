package openapisdk.models.operations;



public class GetSamplingStatisticSummariesResponse {
    public String contentType;
    public GetSamplingStatisticSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSamplingStatisticSummariesResult getSamplingStatisticSummariesResult;
    public GetSamplingStatisticSummariesResponse withGetSamplingStatisticSummariesResult(openapisdk.models.shared.GetSamplingStatisticSummariesResult getSamplingStatisticSummariesResult) {
        this.getSamplingStatisticSummariesResult = getSamplingStatisticSummariesResult;
        return this;
    }
    public Object invalidRequestException;
    public GetSamplingStatisticSummariesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetSamplingStatisticSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetSamplingStatisticSummariesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}