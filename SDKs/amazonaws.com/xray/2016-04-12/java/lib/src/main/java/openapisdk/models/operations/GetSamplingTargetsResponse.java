package openapisdk.models.operations;



public class GetSamplingTargetsResponse {
    public String contentType;
    public GetSamplingTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSamplingTargetsResult getSamplingTargetsResult;
    public GetSamplingTargetsResponse withGetSamplingTargetsResult(openapisdk.models.shared.GetSamplingTargetsResult getSamplingTargetsResult) {
        this.getSamplingTargetsResult = getSamplingTargetsResult;
        return this;
    }
    public Object invalidRequestException;
    public GetSamplingTargetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetSamplingTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetSamplingTargetsResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}